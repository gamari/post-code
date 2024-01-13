import { v4 as uuidv4 } from 'uuid';
import { UPLOAD_IMAGE_HISTORY } from '@/src/libs/constants/tables'
import { getServerClient } from '@/src/libs/externals/supabase/server-client'
import { fetchCreateUploadImageHistory, fetchTotalUploadSizeInMonth } from '@/src/libs/externals/supabase/queries/upload_image_histories';
import { SupabaseClient } from '@supabase/supabase-js';

// ストレージ処理のまとめ
// 分ける必要があれば今後分ける

export const fetchUploadImageToStorage = async (file: File, userId: string, client: SupabaseClient) => {
    // アップロード処理
    const randomId = uuidv4();
    const fileName = `${userId}/${randomId}-${file?.name}`;
    const { error } = await client.storage.from("images").upload(fileName, file);

    if (error) {
        const { statusCode } = error as any;
        if (statusCode == 403) {
            throw new Error("アップロードする権限がありません。")
        }
        throw new Error("画像アップロードに失敗しました。");
    }

    const { data: {
        publicUrl
    } } = client.storage
        .from('images')
        .getPublicUrl(fileName);

    return {
        url: publicUrl,
        fileName,
    };
}