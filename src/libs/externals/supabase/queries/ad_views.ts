import { AD_VIEWS_TABLE } from "@/src/libs/constants/tables";
import { SupabaseClient } from "@supabase/supabase-js";

export const fetchCreateAdView = async (bookId: string, client: SupabaseClient) => {
    const { data, error } = await client.from(AD_VIEWS_TABLE).insert({ ad_book_id: bookId });
    if (error) throw error;
    return data;
}