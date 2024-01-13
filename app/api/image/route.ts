import { NextRequest, NextResponse } from 'next/server'
import { getAdminClient } from '@/src/libs/externals/supabase/admin-client'
import { fetchAuthUser } from '@/src/libs/externals/supabase/queries/users'

import { getServerClient } from '@/src/libs/externals/supabase/server-client'
import { fetchCreateUploadImageHistory, fetchTotalUploadSizeInMonth } from '@/src/libs/externals/supabase/queries/upload_image_histories';
import { fetchUploadImageToStorage } from '@/src/libs/externals/supabase/storages';

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
    if (!file) return NextResponse.json({ error: "ファイルがありません。" }, { status: 400 });

    const serverClient = getServerClient();
    const authUser = await fetchAuthUser(serverClient);
    const userId = authUser?.id;

    if (!userId) return NextResponse.json({ message: "ログインしてください。" }, { status: 400 });

    try {
        const adminClient = getAdminClient();

        const totalUploadSize = await fetchTotalUploadSizeInMonth(userId, adminClient);
        const MAX_UPLOAD_LIMIT = 50 * 1024 * 1024;
        if (totalUploadSize > MAX_UPLOAD_LIMIT) {
            throw new Error("月のアップロード制限(50MB)を超えています。来月に制限は解除されます。");
        }

        const {
            fileName,
            url
        } = await fetchUploadImageToStorage(file, userId, adminClient);

        await fetchCreateUploadImageHistory(userId, url, file.size, adminClient);

        return NextResponse.json({
            url
        })
    } catch (e) {
        const { message } = e as any;
        if (message) {
            return NextResponse.json({ message }, { status: 400 });
        } else {
            return NextResponse.json({ message: "画像アップロードに失敗しました。" }, { status: 400 });
        }
    }
}
