import { CODE_TABLE, FILE_TABLE, PUBLIC_USER_TABLE } from "@/src/libs/constants/tables";
import { Code, CodeDetail, SearchResultCode } from "@/src/types";
import { SupabaseClient } from "@supabase/supabase-js";
import { QueryOptions, applyQueryOptions } from ".";


export const fetchCodeById = async (id: number, client: SupabaseClient) => {
    const { data: code, error } = await client
        .from(CODE_TABLE)
        .select(`
            *, 
            ${PUBLIC_USER_TABLE}!user_id (*),
            ${FILE_TABLE}: files(*)
        `)
        .eq("id", id)
        .single();

    if (error) return null;

    return {
        ...code,
        user: code.public_users
    };
};

export const fetchCodeList = async (client: SupabaseClient, options?: QueryOptions) => {
    let query = client
        .from(CODE_TABLE)
        .select("*");

    query = applyQueryOptions(query, options);

    const { data, error } = await query;

    if (error) throw error;

    return data as Code[];
}

export const fetchCodeListWithUser = async (client: SupabaseClient, options?: QueryOptions) => {
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

    if (error) throw error;

    return data.map((code) => {
        return {
            ...code,
            user: code.public_users,
            favorites_count: code.favorites_count[0]?.count || 0
        }
    }) as CodeDetail[];
}

export const fetchCodeListByFileCode = async (fileCode: string, client: SupabaseClient, options?: QueryOptions) => {
    let query = client
        .from(FILE_TABLE)
        .select(`
          *,
          codes (*)
        `)
        .like("content", `%${fileCode}%`)

    query = applyQueryOptions(query, options);

    const { data, error } = await query;

    if (error) throw error;

    return data.map(file => {
        return {
            ...file.codes,
            file
        } as SearchResultCode
    })
}


export const fetchFavoriteCodeList = async (client: SupabaseClient, options?: QueryOptions) => {
    let query = client
        .from('favorites')
        .select(`
            code_id,
            codes (
                *
            )
        `);

    query = applyQueryOptions(query, options);

    const { data, error } = await query;

    if (error) throw error;

    return data.map((favoriteCode) => {
        // TODO fix types
        const code = favoriteCode.codes as unknown as Code
        return code
    });
}


// TODO 下記を削除する
export const fetchCodesBySelf = async (client: SupabaseClient) => {
    const {
        data: { user },
    } = await client.auth.getUser();

    const { data: codes, error } = await client
        .from(CODE_TABLE)
        .select("*")
        .eq("user_id", user?.id);


    if (error) throw error;

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

    if (error) throw error;

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

    if (error) throw error;

    return data;
};


export const fetchDeleteBadCode = async (id: number, client: SupabaseClient) => {
    const { error } = await client
        .from(CODE_TABLE)
        .delete()
        .eq("id", id);

    if (error) throw error;
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

    if (error) throw error;

    return data;
}