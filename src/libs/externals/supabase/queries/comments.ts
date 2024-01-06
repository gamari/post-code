import { Comment, CommentDetail } from "@/src/types";
import { SupabaseClient } from "@supabase/supabase-js";
import { QueryOptions, applyQueryOptions } from "../options";
import { PUBLIC_USER_TABLE } from "@/src/libs/constants/tables";

/** Comment取得Fetcher */
export const fetchCommentList = async (client: SupabaseClient, options?: QueryOptions) => {
  let query = client
    .from("comments")
    .select(`
          *,
          code: codes (
            *
          ),
          ${PUBLIC_USER_TABLE}!user_id(
            username,
            icon_type
          )
    `);

  query = applyQueryOptions(query, options);

  const { data, error } = await query;

  if (error) throw error;

  return data as Comment[];
}

export const fetchCommentListWithUser = async (client: SupabaseClient, options?: QueryOptions) => {
  let query = client
    .from("comments")
    .select(`
          *,
          ${PUBLIC_USER_TABLE}!user_id(
            username,
            icon_type
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

export const fetchCommentListWithCode = async (client: SupabaseClient, options?: QueryOptions) => {
  let query = client
    .from("comments")
    .select(`
          *,
          code: codes (
            *
          ),
          ${PUBLIC_USER_TABLE}!user_id(
            username,
            icon_type
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

