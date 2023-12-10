import { File } from "@/libs/types"
import { SupabaseClient } from "@supabase/supabase-js"

export const fetchUpsertFiles = async (newFiles: File[], client: SupabaseClient) => {
    console.log(newFiles)
    const { error } = await client
        .from("files")
        .upsert(newFiles);

    if (error) throw new Error("Fileの作成中にエラーが発生しました。");
};

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


export const fetchFilesByCodeId = async (codeId: number, client: SupabaseClient) => {
    const { data: files, error } = await client
        .from("files")
        .select("*")
        .eq("bad_code_id", codeId);

    if (error) throw new Error("Fileの取得中にエラーが発生しました。");

    console.log(files)

    return files as File[];
}