import { Comment } from "@/src/types";
import { SupabaseClient } from "@supabase/supabase-js";

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

    if (options?.eq) {
        options.eq.forEach(condition => {
            query = query.eq(condition.field, condition.value);
        });
    }

    if (options?.order) {
        options.order.forEach(condition => {
            query = query.order(condition.field, { ascending: condition.ascending ?? true });
        });
    }

    query = query.limit(options?.limit || 3);

    const { data, error } = await query;

    if (error) throw error;

    return data as Comment[];
}

export const fetchCommentListByCodeId = async (codeId: number, client: SupabaseClient) => {
    const { data, error } = await client
        .from("comments")
        .select("*")
        .eq("code_id", codeId)
        .order("created_at", { ascending: true });

    if (error) throw error;

    return data;
}

export const fetchCommentListByUser = async (userId: string, client: SupabaseClient) => {
    const { data, error } = await client
        .from("comments")
        .select(`
          *,
          code: codes (
            *
          )
        `)
        .eq("user_id", userId)
        .order("created_at", { ascending: true });

    if (error) throw error;

    return data;
}


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
        .select("*")
        .maybeSingle();

    if (error) throw error;

    return data;
}