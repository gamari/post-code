"use server";

import { getServerClient } from "@/src/libs/externals/supabase/admin-client";
import { fetchCodeById, fetchCodesByUserId, fetchFavoriteCodes, fetchLatestCodes } from "@/src/libs/externals/supabase/queries/codes";
import { fetchAuthUser } from "@/src/libs/externals/supabase/queries/users";

// One
export const actionGetBadCodeById = async (id: number) => {
    const client = getServerClient();
    const codes = await fetchCodeById(id, client);
    return codes;
}

// List
export const actionGetMySelfBadCodeList = async () => {
    const client = getServerClient();
    const authUser = await fetchAuthUser(client);
    const codes = await fetchCodesByUserId(authUser?.id || "", client);
    return codes;
}

export const actionGetLatestBadCodeList = async () => {
    const client = getServerClient();
    const codes = await fetchLatestCodes(client);
    return codes;
}

export const actionGetFavoriteCodeList = async () => {
    const client = getServerClient();
    const codes = await fetchFavoriteCodes(client);
    return codes;
}