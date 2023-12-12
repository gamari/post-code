"use server";

import { getServerClient } from "@/libs/externals/supabase/admin-client";
import { fetchLatestBadCodes } from "@/libs/externals/supabase/queries/bad-codes";

export const actionGetLatestBadCodes = async () => {
    try {
        const supabase = getServerClient();
        const badCodes = await fetchLatestBadCodes(supabase);
        return badCodes;
    } catch (error) {
        return [];
    }
}