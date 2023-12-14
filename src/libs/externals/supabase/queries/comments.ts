import { SupabaseClient } from "@supabase/supabase-js";

export const fetchCommentsByCodeId = async (badCodeId: number, client: SupabaseClient) => {
    const { data, error } = await client
        .from("comments")
        .select("*")
        .eq("bad_code_id", badCodeId)
        .order("created_at", { ascending: true });

    if (error) throw error;

    return data;

}

export const fetchCreateComment = async (badCodeId: number, comment: string, client: SupabaseClient) => {
    const { data: { user }, error: userError } = await client.auth.getUser();

    if (userError) throw userError;
    if (!user?.id) throw new Error("user not found");

    const { data, error } = await client
        .from("comments")
        .insert({
            bad_code_id: badCodeId,
            comment,
            user_id: user.id,
        });

    if (error) throw error;

    return data;
}