"use server";

import { getServerClient } from "@/src/libs/externals/supabase/admin-client";
import { fetchIsFavoriteCode } from "@/src/libs/externals/supabase/queries/favorites";

export const actionCheckFavoriteCode = async (code_id: number) => {
    const client = getServerClient();
    const isFavorite = await fetchIsFavoriteCode(code_id, client);
    return isFavorite;
}