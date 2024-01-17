import { CODE_TABLE, FILE_TABLE, LANGUAGE_TABLE, PUBLIC_USER_TABLE, RANDOM_CODE_VIEW, TAG_TABLE } from "@/src/libs/constants/tables";
import { CodeDetail, CodeFormType, SearchResultCode, User } from "@/src/types";
import { SupabaseClient } from "@supabase/supabase-js";
import { QueryOptions, applyQueryOptions } from "../options";
import { convertPostgretErrorToAppErrorMessage } from "../errors";
import { SEARCH_LIMIT } from "@/src/libs/constants/limits";


/** 単発 */
export const fetchCodeById = async (id: number, client: SupabaseClient) => {
    const { data: code, error } = await client
        .from(CODE_TABLE)
        .select(`
            *, 
            ${PUBLIC_USER_TABLE}!user_id (*),
            ${FILE_TABLE}: files(*),
            ${LANGUAGE_TABLE}!language_id(*),
            ${TAG_TABLE}: tags(*),
            favorites_count: favorites (count),
            comments_count: comments (count)
        `)
        .eq("id", id)
        .single();

    if (error) throw new Error(convertPostgretErrorToAppErrorMessage(error));

    return {
        ...code,
        user: code?.public_users,
        language: code?.languages,
        tags: code?.tags,
        favorites_count: code.favorites_count[0]?.count || 0,
        comments_count: code.comments_count[0]?.count || 0,
    };
};

/** 通常検索 */
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
            ${TAG_TABLE}: tags(*),
            favorites_count: favorites (count),
            comments_count: comments (count)
        `);

    query = applyQueryOptions(query, options);

    const { data, error } = await query;

    if (error) throw new Error(convertPostgretErrorToAppErrorMessage(error));

    return data.map((code) => {
        return {
            ...code,
            user: code.public_users,
            favorites_count: code.favorites_count[0]?.count || 0,
            comments_count: code.comments_count[0]?.count || 0,
            language: code.languages,
            tags: code.tags,
        }
    }) as CodeDetail[];
}

/** ランダム検索 */
export const fetchRandomCodeList = async (client: SupabaseClient, options?: QueryOptions) => {
    let query = client
        .from(RANDOM_CODE_VIEW)
        .select(`
            *,
            ${PUBLIC_USER_TABLE}!user_id (
                *
            ),
            ${LANGUAGE_TABLE}!language_id(
                *
            ),
            ${TAG_TABLE}: tags(*),
            favorites_count: favorites (count),
            comments_count: comments (count)
        `)

    query = applyQueryOptions(query, options);

    const { data, error } = await query;

    if (error) throw new Error(convertPostgretErrorToAppErrorMessage(error));

    return data.map((code) => {
        return {
            ...code,
            user: code.public_users,
            favorites_count: code.favorites_count[0]?.count || 0,
            comments_count: code.comments_count[0]?.count || 0,
            language: code.languages,
            tags: code.tags,
        }
    }) as CodeDetail[];

}


/** 言語検索。 */
export const fetchCodeListByLanguage = async (language: string, client: SupabaseClient, options?: QueryOptions) => {
    let query = client
        .from(LANGUAGE_TABLE)
        .select(`
          name,
          ${CODE_TABLE} (
            *,
            ${PUBLIC_USER_TABLE}!user_id (
                *
            ),
            ${LANGUAGE_TABLE}!language_id(
                *
            ),
            favorites_count: favorites (count),
            comments_count: comments (count)
          )
        `)
        .eq("name", language);

    query = applyQueryOptions(query, options);

    const { data, error } = await query;

    if (error) throw new Error(convertPostgretErrorToAppErrorMessage(error));

    if (!data?.length) return [];

    return data.map((d) => d?.codes)[0].map(
        (code) => {
            return {
                ...code,
                user: code.public_users,
                favorites_count: code.favorites_count[0]?.count || 0,
                comments_count: code.comments_count[0]?.count || 0,
                language: code.languages,
            }
        }
    ) as CodeDetail[];
}



export const fetchCodeListByFileCode = async (fileCode: string, client: SupabaseClient, page = 1, options?: QueryOptions) => {
    const pageLimit = SEARCH_LIMIT;
    const start = (page - 1) * pageLimit;
    const end = page * pageLimit;
    console.log("start", start, "end", end);
    let query = client
        .from(FILE_TABLE)
        .select(`
            *,
            codes!inner (
                *
            )
        `)
        .like("content", `%${fileCode}%`)
        .range(start, end)

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

    if (error) throw new Error(convertPostgretErrorToAppErrorMessage(error));

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


    if (error) throw new Error(convertPostgretErrorToAppErrorMessage(error));

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
            favorites_count: undefined,
            comments_count: undefined,
        })
        .eq("id", newBadCodes.id)
        .select("*")
        .maybeSingle();

    if (error) throw error;

    return data;
}