import { SupabaseClient } from "@supabase/supabase-js";

export const fetchBadCodesBySelf = async (client: SupabaseClient) => {
    const {
        data: { user },
    } = await client.auth.getUser();

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const { data: codes, error } = await client
        .from("bad_codes")
        .select("*")
        .eq("user_id", user?.id);


    if (error) return [];

    return codes;
}

export const fetchBadCodeById = async (id: string, client: SupabaseClient) => {
    const { data: code, error } = await client
        .from("bad_codes")
        .select()
        .eq("id", id)
        .single();

    if (error) return null;

    return code;
}