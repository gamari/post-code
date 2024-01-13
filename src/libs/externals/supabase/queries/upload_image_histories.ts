// 画像履歴テーブルのクエリ処理

import { SupabaseClient } from "@supabase/supabase-js";
import { QueryOptions, applyQueryOptions } from "../options";
import { UPLOAD_IMAGE_HISTORY } from "@/src/libs/constants/tables";
import { convertPostgretErrorToAppErrorMessage } from "../errors";
import dayjs from 'dayjs';


/** 当月のアップロード総量の取得。 */
export const fetchTotalUploadSizeInMonth = async (userId: string, client: SupabaseClient, options?: QueryOptions) => {
    const startOfCurrentMonth = dayjs().startOf('month').toISOString();
    const endOfCurrentMonth = dayjs().endOf('month').toISOString();

    let query = client
        .from(UPLOAD_IMAGE_HISTORY)
        .select('file_size')
        .eq('user_id', userId)
        .gte('upload_timestamp', startOfCurrentMonth)
        .lte('upload_timestamp', endOfCurrentMonth);

    query = applyQueryOptions(query, options);

    const { data, error } = await query;

    if (error) throw new Error(convertPostgretErrorToAppErrorMessage(error));

    let total_size = 0;
    for (const item of data) {
        total_size += item.file_size;
    }

    return total_size;
}

/** アップロード処理。 */
export const fetchCreateUploadImageHistory = async (userId: string, imageUrl: string, fileSize: number, client: SupabaseClient) => {
    const { data, error } = await client
        .from(UPLOAD_IMAGE_HISTORY)
        .insert([
            {
                user_id: userId,
                file_size: fileSize,
                image_url: imageUrl
            }
        ])

    if (error) throw new Error(convertPostgretErrorToAppErrorMessage(error));

    return data;
}