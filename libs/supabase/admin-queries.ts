import { cookies } from "next/headers";
import { createServerClient } from "./server";

export const fetchBadCodesBySelf = async () => {
    const cookieStore = cookies();
    const supabase = createServerClient(cookieStore);

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const { data: codes, error } = await supabase
        .from("bad_codes")
        .select()
        .eq("user_id", user?.id);

    if (error) return [];

    return codes;
}

export const fetchBadCodeById = async (id: string) => {
    const cookieStore = cookies();
    const supabase = createServerClient(cookieStore);

    const { data: code, error } = await supabase
        .from("bad_codes")
        .select()
        .eq("id", id)
        .single();

    if (error) return null;

    return code;
}