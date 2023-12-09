import { File } from "@/libs/types"
import { SupabaseClient } from "@supabase/supabase-js"

export const fetchUpsertFiles = async (newFiles: File[], client: SupabaseClient) => {
    console.log(newFiles)
    const { error } = await client
        .from("files")
        .upsert(newFiles);

    if (error) throw new Error("Fileの作成中にエラーが発生しました。");
};
// File

export const fetchCreateFile = async (file: File, client: SupabaseClient) => {
    const { data, error } = await client
        .from("files")
        .insert(file)
        .select("*")
        .maybeSingle();

    console.log(data, error);

    if (error) throw new Error("Fileの作成中にエラーが発生しました。");

    return data;
};
