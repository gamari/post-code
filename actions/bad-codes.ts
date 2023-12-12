"use server";

import { getServerClient } from "@/libs/externals/supabase/admin-client";
import { fetchBadCodeById, fetchLatestBadCodes } from "@/libs/externals/supabase/queries/bad-codes";

export const actionGetLatestBadCodes = async () => {
    try {
        const supabase = getServerClient();
        const badCodes = await fetchLatestBadCodes(supabase);
        return badCodes;
    } catch (error) {
        return [];
    }
}

export const actionGetBadCodeById = async (id: number) => {
    const supabase = getServerClient();
    const badCodes = await fetchBadCodeById(id, supabase);
    return badCodes;
}
