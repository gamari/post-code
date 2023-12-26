import { Language } from "@/src/types";
import { SupabaseClient } from "@supabase/supabase-js";

export const fetchLanguageList = async (client: SupabaseClient) => {
    const { data, error } = await client.from("languages").select("*");

    if (error) throw error;

    return data as Language[]
}