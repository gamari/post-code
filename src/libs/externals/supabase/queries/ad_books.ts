import { SupabaseClient } from "@supabase/supabase-js";
import { QueryOptions } from "../options";
import { AD_BOOKS_TABLE } from "@/src/libs/constants/tables";
import { convertPostgretErrorToAppErrorMessage } from "../errors";

export const fetchRandomAdBook = async (client: SupabaseClient, options?: QueryOptions) => {
    const { data, error } = await client
        .from(AD_BOOKS_TABLE)
        .select(`
          *
        `)
        .maybeSingle();

    if (error) throw new Error(convertPostgretErrorToAppErrorMessage(error));

    return data
};