import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { JSDOM } from 'jsdom'
import { NextRequest, NextResponse } from 'next/server'
import { getAdminClient } from '@/src/libs/externals/supabase/admin-client'
import { cookies } from 'next/headers'
import { fetchAuthUser } from '@/src/libs/externals/supabase/queries/users'

import { v4 as uuidv4 } from 'uuid';
import { UPLOAD_IMAGE_HISTORY } from '@/src/libs/constants/tables'
import { getServerClient } from '@/src/libs/externals/supabase/server-client'

export type OgData = {
    url: string
    siteName?: string
    title?: string
    description?: string
    image?: string
    type?: string
}

// TODO any型を無くす
export async function POST(request: NextRequest, response: NextResponse) {
    const formData = await request.formData();

    const file = formData.get("file") as any;
    if (!file) {
        return NextResponse.json({ error: "ファイルがありません。" }, { status: 400 });
    }

    const serverClient = getServerClient();
    const authUser = await fetchAuthUser(serverClient);
    const userId = authUser?.id;

    const adminClient = getAdminClient();

    // TODO 画像制限をかける

    // 作成処理
    const randomId = uuidv4();
    const fileName = `${userId}/${randomId}-${file?.name}`;
    const { error } = await adminClient.storage.from("images").upload(fileName, file);

    if (error) {
        // TODO fix type
        const { statusCode } = error as any;
        if (statusCode == 403) {
            throw new Error("アップロードする権限がありません。");
        }
        throw error
    }

    const { data: {
        publicUrl
    } } = adminClient.storage
        .from('images')
        .getPublicUrl(fileName);

    // TODO ヒストリーの作成
    const { error: errorHistory } = await adminClient.from(UPLOAD_IMAGE_HISTORY).insert({
        user_id: userId,
        file_size: file.size,
        image_url: publicUrl,
    });
    console.log(errorHistory);

    return NextResponse.json({
        message: "success",
        url: publicUrl
    })
}
