import { CODE_TABLE, FILE_TABLE, PUBLIC_USER_TABLE } from "@/src/libs/constants/tables";
import { Code, CodeDetail, SearchResultCode } from "@/src/types";
import { SupabaseClient } from "@supabase/supabase-js";
import { applyQueryOptions } from ".";

interface FetchOptions {
    eq?: { field: string; value: any }[];
    order?: { field: string; ascending?: boolean }[];
    limit?: number;
}

export const fetchCodeList = async (client: SupabaseClient, options?: FetchOptions) => {
    let query = client
        .from(CODE_TABLE)
        .select("*");

    query = applyQueryOptions(query, options);

    const { data, error } = await query;

    if (error) throw error;

    return data as Code[];
}

export const fetchCodeListWithUser = async (client: SupabaseClient, options?: FetchOptions) => {
    let query = client
        .from(CODE_TABLE)
        .select(`
            *,
            ${PUBLIC_USER_TABLE}!user_id (
                *
            ),
            favorites_count: favorites (count)
        `);

    query = applyQueryOptions(query, options);

    const { data, error } = await query;
    console.log(data);
    console.log(error);

    if (error) throw error;

    return data.map((code) => {
        return {
            ...code,
            user: code.public_users,
            favorites_count: code.favorites_count[0]?.count || 0
        }
    }) as CodeDetail[];
}

export const fetchCodeListByFileCode = async (fileCode: string, client: SupabaseClient, options?: FetchOptions) => {
    let query = client
        .from(FILE_TABLE)
        .select(`
          *,
          codes (*)
        `)
        .like("content", `%${fileCode}%`)

    query = applyQueryOptions(query, options);

    const { data, error } = await query;
    console.log(data);

    if (error) throw error;

    return data.map(file => {
        return {
            ...file.codes,
            file
        } as SearchResultCode
    })
}


export const fetchFavoriteCodes = async (client: SupabaseClient) => {
    const {
        data: { user },
    } = await client.auth.getUser();

    if (!user?.id) throw new Error("ログインしていません。");

    // TODO fix types
    const { data, error } = await client
        .from('favorites')
        .select(`
            code_id,
            codes (
                *
            )
        `)
        .eq('user_id', user.id)

    if (error) throw error;

    return data.map((favoriteCode) => {
        // TODO fix types
        const code = favoriteCode.codes as unknown as Code
        return code
    });
}


// TODO 下記を削除する
// Select-One
export const fetchCodeById = async (id: number, client: SupabaseClient) => {
    const { data: code, error } = await client
        .from(CODE_TABLE)
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

// Select-Many
export const fetchCodesByUserId = async (userId: string, client: SupabaseClient) => {
    const { data: codes, error } = await client
        .from(CODE_TABLE)
        .select("*")
        .eq("user_id", userId)
        .order("updated_at", { ascending: false });

    if (error) throw error;

    return codes;
}
export const fetchCodesBySelf = async (client: SupabaseClient) => {
    const {
        data: { user },
    } = await client.auth.getUser();

    const { data: codes, error } = await client
        .from(CODE_TABLE)
        .select("*")
        .eq("user_id", user?.id);


    if (error) return [];

    return codes;
};

export const fetchCodeWithFilesById = async (id: number, client: SupabaseClient) => {
    const { data: codeWithFiles, error } = await client
        .from(CODE_TABLE)
        .select("*")
        .eq("id", id)
        .select(`
            *,
            files: files(*)
        `)
        .maybeSingle();

    if (error) return null;

    return codeWithFiles;
};


// Create-Update-Delete
export const fetchCreateCode = async (newBadCodes: Code, client: SupabaseClient) => {
    const {
        data: { user },
    } = await client.auth.getUser();

    const { data, error } = await client
        .from(CODE_TABLE)
        .insert({
            ...newBadCodes,
            user_id: user?.id,
        })
        .select()
        .maybeSingle();

    if (error) throw new Error("BadCodeの作成中にエラーが発生しました。");

    return data;
};


export const fetchDeleteBadCode = async (id: number, client: SupabaseClient) => {
    const { error } = await client
        .from(CODE_TABLE)
        .delete()
        .eq("id", id);

    if (error) throw new Error("BadCodeの削除中にエラーが発生しました。");
}

export const fetchUpdateCode = async (newBadCodes: CodeDetail, client: SupabaseClient) => {
    // TODO 一括でfilesを更新したい
    const { data, error } = await client
        .from(CODE_TABLE)
        .upsert({
            ...newBadCodes,
            files: undefined,
            users: undefined,
            user: undefined
        })
        .eq("id", newBadCodes.id);

    console.log(data);

    if (error) throw new Error("BadCodeの更新中にエラーが発生しました。");

    return data;
}