import { BadCode, File } from "@/libs/types";
import { SupabaseClient } from "@supabase/supabase-js";

export const fetchMyself = async (client: SupabaseClient) => {
    const { data: { user }, error } = await client.auth.getUser();

    if (error) throw new Error("認証中にエラーが発生しました。");

    console.log(user)

    return user;
}

// BadCodes
export const fetchBadCodesBySelf = async (client: SupabaseClient) => {
    const {
        data: { user },
    } = await client.auth.getUser();

    const { data: codes, error } = await client
        .from("bad_codes")
        .select("*")
        .eq("user_id", user?.id);


    if (error) return [];

    return codes;
}


export const fetchBadCodeWithFilesById = async (id: number, client: SupabaseClient) => {
    const { data: codeWithFiles, error } = await client
        .from("bad_codes")
        .select("*")
        .eq("id", id)
        .select(
            `
            *,
            files: files(*)
            `
        )
        .maybeSingle();

    if (error) return null;

    return codeWithFiles;
}


export const fetchBadCodeById = async (id: number, client: SupabaseClient) => {
    console.log(id)
    const { data: code, error } = await client
        .from("bad_codes")
        .select()
        .eq("id", id)
        .single();

    if (error) return null;

    return code;
}

export const fetchCreateBadCode = async (newBadCodes: BadCode, client: SupabaseClient) => {
    const {
        data: { user },
    } = await client.auth.getUser();

    const { data, error } = await client
        .from("bad_codes")
        .insert({
            ...newBadCodes,
            user_id: user?.id,
        })
        .select()
        .maybeSingle();

    if (error) throw new Error("BadCodeの作成中にエラーが発生しました。")

    return data;
}

// File
export const fetchCreateFile = async (file: File, client: SupabaseClient) => {
    const { data, error } = await client
        .from("files")
        .insert(file)
        .select("*")
        .maybeSingle();

    console.log(data, error)

    if (error) throw new Error("Fileの作成中にエラーが発生しました。")

    return data;
}