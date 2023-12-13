import { BadCode } from "@/libs/types";
import { SupabaseClient } from "@supabase/supabase-js";

export const fetchUpdateBadCode = async (newBadCodes: BadCode, client: SupabaseClient) => {
    const { error } = await client
        .from("bad_codes")
        .upsert(newBadCodes)
        .eq("id", newBadCodes.id);

    if (error) throw new Error("BadCodeの更新中にエラーが発生しました。");

    return;
}

export const fetchLatestBadCodes = async (client: SupabaseClient) => {
    // TODO usersが気持ち悪いので直したい
    const { data: codes, error } = await client
        .from("bad_codes")
        .select(`
            *,
            users: user_id (*)
        `)
        .order("created_at", { ascending: false })
        .limit(10);

    if (error) throw new Error("BadCodeの取得中にエラーが発生しました。");

    return codes.map((code) => {
        return {
            ...code,
            user: code.users
        }
    });
};

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

    if (error) throw new Error("BadCodeの作成中にエラーが発生しました。");

    return data;
};

export const fetchBadCodeById = async (id: number, client: SupabaseClient) => {
    console.log(id);
    const { data: code, error } = await client
        .from("bad_codes")
        .select(`
          *, 
          users (*),
          files: files(*)
        `)
        .eq("id", id)
        .single();

    if (error) return null;

    return {
        ...code,
        user: code.users
    };
};

export const fetchBadCodesByUserId = async (userId: string, client: SupabaseClient) => {
    const { data: codes, error } = await client
        .from("bad_codes")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

    if (error) throw error;

    return codes;
}

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
};

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
};


export const fetchDeleteBadCode = async (id: number, client: SupabaseClient) => {
    const { error } = await client
        .from("bad_codes")
        .delete()
        .eq("id", id);

    if (error) throw new Error("BadCodeの削除中にエラーが発生しました。");
}