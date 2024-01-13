import { File } from "@/src/types"
import { SupabaseClient } from "@supabase/supabase-js"
import { convertPostgretErrorToAppErrorMessage } from "../errors";


export const fetchFilesByCodeId = async (codeId: number, client: SupabaseClient) => {
    const { data: files, error } = await client
        .from("files")
        .select("*")
        .eq("code_id", codeId);

    if (error) throw new Error(convertPostgretErrorToAppErrorMessage(error));

    return files as File[];
}

// update
export const fetchUpsertFiles = async (newFiles: File[], client: SupabaseClient) => {
    const { error } = await client
        .from("files")
        .upsert(newFiles);

    if (error) throw new Error(convertPostgretErrorToAppErrorMessage(error));
};

export const fetchCreateFile = async (file: File, client: SupabaseClient) => {
    const { data, error } = await client
        .from("files")
        .insert(file)
        .select("*")
        .maybeSingle();

    if (error) throw new Error(convertPostgretErrorToAppErrorMessage(error));

    return data;
};


export const fetchDeleteFile = async (fileId: number, client: SupabaseClient) => {
    const { error } = await client
        .from("files")
        .delete()
        .eq("id", fileId);

    if (error) throw new Error("Fileの削除中にエラーが発生しました。");
}