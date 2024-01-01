import { CODE_TABLE, CODE_TAGS_TABLE, FILE_TABLE, LANGUAGE_TABLE, PUBLIC_USER_TABLE, TAG_TABLE } from "@/src/libs/constants/tables";
import { CodeDetail, CodeFormType, SearchResultCode, User } from "@/src/types";
import { SupabaseClient } from "@supabase/supabase-js";
import { QueryOptions, applyOrderBy, applyQueryOptions } from "../options";


export const fetchCodeById = async (id: number, client: SupabaseClient) => {
    const { data: code, error } = await client
        .from(CODE_TABLE)
        .select(`
            *, 
            ${PUBLIC_USER_TABLE}!user_id (*),
            ${FILE_TABLE}: files(*),
            ${LANGUAGE_TABLE}!language_id(*),
            ${TAG_TABLE}: tags(*)
        `)
        .eq("id", id)
        .single();

    if (error) return null;

    return {
        ...code,
        user: code.public_users,
        language: code.languages,
        tags: code.tags,
    };
};

export const fetchCodeList = async (client: SupabaseClient, options?: QueryOptions) => {
    let query = client
        .from(CODE_TABLE)
        .select(`
            *,
            ${PUBLIC_USER_TABLE}!user_id (
                *
            ),
            ${LANGUAGE_TABLE}!language_id(
                *
            ),
            ${CODE_TAGS_TABLE}:tags(*),
            favorites_count: favorites (count),
            comments_count: comments (count)
        `);

    query = applyQueryOptions(query, options);
    query = applyOrderBy(query, options);

    const { data, error } = await query;

    if (error) throw error;

    return data.map((code) => {
        return {
            ...code,
            user: code.public_users,
            favorites_count: code.favorites_count[0]?.count || 0,
            comments_count: code.comments_count[0]?.count || 0,
            language: code.languages,
            tags: code.code_tags,
        }
    }) as CodeDetail[];
}

export const fetchCodeListBeforeDate = async (date: string, client: SupabaseClient, options?: QueryOptions) => {
    let query = client
        .from(CODE_TABLE)
        .select(`
            *,
            ${PUBLIC_USER_TABLE}!user_id (
                *
            ),
            ${LANGUAGE_TABLE}!language_id(
                *
            ),
            favorites_count: favorites (count),
            comments_count: comments (count)
        `)
        .lt("created_at", date);

    query = applyQueryOptions(query, options);
    query = applyOrderBy(query, options);

    const { data, error } = await query;
    console.log(data);

    if (error) throw error;

    return data.map((code) => {
        return {
            ...code,
            user: code.public_users,
            favorites_count: code.favorites_count[0]?.count || 0,
            comments_count: code.comments_count[0]?.count || 0,
            language: code.languages,
        }
    }) as CodeDetail[];
}

export const fetchCodeListByFileCode = async (fileCode: string, client: SupabaseClient, page = 1, options?: QueryOptions) => {
    const pageLimit = 1;
    const start = (page - 1) * pageLimit;
    const end = page * pageLimit;
    let query = client
        .from(FILE_TABLE)
        .select(`
            *,
            codes (
                *
            )
        `)
        .like("content", `%${fileCode}%`)
        .range(start, end)

    query = applyQueryOptions(query, options);
    query = applyOrderBy(query, options);

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
    // TODO 最低限のフィールドにする
    let query = client
        .from('favorites')
        .select(`
            codes!code_id (
                id,
                title,
                created_at,
                updated_at,
                ${PUBLIC_USER_TABLE}!user_id (*),
                favorites_count: favorites (count),
                ${LANGUAGE_TABLE}!language_id(
                    *
                ),
                comments_count: comments (count)
            )
        `);

    query = applyQueryOptions(query, options);

    const { data, error } = await query;

    if (error) throw error;

    // TODO fix Types
    return data.map((favorite) => {
        return {
            ...favorite.codes,
            user: (favorite.codes as any).public_users as User,
            favorites_count: (favorite.codes as any).favorites_count[0]?.count || 0,
            comments_count: (favorite.codes as any).comments_count[0]?.count || 0,
            language: (favorite.codes as any).languages,
        } as unknown as CodeDetail
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
export const fetchCreateCode = async (newBadCodes: CodeFormType, client: SupabaseClient) => {
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
            language_id: newBadCodes.language?.id,
            language: undefined,
            languages: undefined,
            files: undefined,
            users: undefined,
            user: undefined,
            public_users: undefined,
            tags: undefined,
        })
        .eq("id", newBadCodes.id)
        .select("*")
        .maybeSingle();

    if (error) throw error;

    return data;
}