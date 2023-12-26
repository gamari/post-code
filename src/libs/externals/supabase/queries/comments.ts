import { Comment, CommentDetail } from "@/src/types";
import { SupabaseClient } from "@supabase/supabase-js";
import { applyQueryOptions } from ".";
import { LANGUAGE_TABLE, PUBLIC_USER_TABLE } from "@/src/libs/constants/tables";

export interface FetchCommentsOptions {
    eq?: { field: string; value: any }[];
    order?: { field: string; ascending?: boolean }[];
    limit?: number;
}

/** Comment取得Fetcher */
export const fetchCommentList = async (client: SupabaseClient, options?: FetchCommentsOptions) => {
    let query = client
        .from("comments")
        .select("*");

    query = applyQueryOptions(query, options);

    const { data, error } = await query;

    if (error) throw error;

    return data as Comment[];
}

export const fetchCommentListWithUser = async (client: SupabaseClient, options?: FetchCommentsOptions) => {
    let query = client
        .from("comments")
        .select(`
          *,
          user: users (
            username
          )
        `);
    query = applyQueryOptions(query, options);

    const { data, error } = await query;

    if (error) throw error;

    return data as CommentDetail[];
}

export const fetchCommentListWithCode = async (client: SupabaseClient, options?: FetchCommentsOptions) => {
    let query = client
        .from("comments")
        .select(`
          *,
          code: codes (
            *
          ),
          ${PUBLIC_USER_TABLE}!user_id(
            username
          )
        `);
    query = applyQueryOptions(query, options);

    const { data, error } = await query;

    if (error) throw error;

    return data.map(item => ({
        ...item,
        user: item?.public_users,
    })) as CommentDetail[];
}

// Create-Update-Delete
export const fetchCreateComment = async (codeId: number, comment: string, client: SupabaseClient) => {
    const { data: { user }, error: userError } = await client.auth.getUser();

    if (userError) throw userError;
    if (!user?.id) throw new Error("user not found");

    const { data, error } = await client
        .from("comments")
        .insert({
            code_id: codeId,
            comment,
            user_id: user.id,
        })
        .select(`
          *,
          ${PUBLIC_USER_TABLE}!user_id(
            username
          )
        `)
        .maybeSingle();

    if (error) throw error;

    return {
        ...data,
        user: data?.public_users
    };
}

export const fetchDeleteComment = async (id: number, client: SupabaseClient) => {
    const { error } = await client
        .from("comments")
        .delete()
        .eq("id", id);

    if (error) throw error;
}

