import { Language } from "@/src/types";
import { SupabaseClient } from "@supabase/supabase-js";
import { convertPostgretErrorToAppErrorMessage } from "../errors";

export const fetchLanguageList = async (client: SupabaseClient) => {
    const { data, error } = await client.from("languages").select("*");

    if (error) throw new Error(convertPostgretErrorToAppErrorMessage(error));

    return data as Language[]
}