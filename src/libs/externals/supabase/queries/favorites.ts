import { SupabaseClient } from "@supabase/supabase-js";
import { fetchAuthUser } from "./users";

export const fetchFavoriteCount = async (code_id: number, client: SupabaseClient) => {
    const { count, error } = await client
        .from("favorites")
        .select(`
          code_id
        `, {
            count: "exact"
        })
        .match({ code_id: code_id })

    if (error) throw error;

    return count || 0;
}


// Create-Update-Delete
export const fetchCreateFavoriteCode = async (code_id: number, client: SupabaseClient) => {
    const { data: { user }, error: userError } = await client.auth.getUser();

    if (userError) throw userError;
    if (!user?.id) throw new Error("User not found");

    const { data, error } = await client
        .from("favorites")
        .insert({ code_id: code_id, user_id: user?.id });

    if (error) throw error;

    return data;
}

export const fetchDeleteFavoriteCode = async (code_id: number, client: SupabaseClient) => {
    const { data: { user }, error: userError } = await client.auth.getUser();

    if (userError) throw userError;
    if (!user?.id) throw new Error("User not found");

    const { data, error } = await client
        .from("favorites")
        .delete()
        .eq("code_id", code_id)
        .eq("user_id", user?.id);

    if (error) throw error;

    return data;
}

export const fetchIsFavoriteCode = async (code_id: number, client: SupabaseClient) => {
    const authUser = await fetchAuthUser(client);

    if (!authUser?.id) return false;

    const { data, error } = await client
        .from("favorites")
        .select("*")
        .eq("code_id", code_id)
        .eq("user_id", authUser?.id);

    if (error) throw error;

    if (data?.length) return true;
    return false;
}