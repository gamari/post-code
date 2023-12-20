import { SupabaseClient } from "@supabase/supabase-js";

export const fetchCommentsByCodeId = async (codeId: number, client: SupabaseClient) => {
    const { data, error } = await client
        .from("comments")
        .select("*")
        .eq("code_id", codeId)
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