"use server";

import { getServerClient } from "@/libs/externals/supabase/admin-client";
import { fetchBadCodeById, fetchBadCodesByUserId, fetchLatestBadCodes } from "@/libs/externals/supabase/queries/bad-codes";
import { fetchAuthUser } from "@/libs/externals/supabase/queries/users";

// One
export const actionGetBadCodeById = async (id: number) => {
    const client = getServerClient();
    const badCodes = await fetchBadCodeById(id, client);
    return badCodes;
}

// List
export const actionGetMySelfBadCodeList = async () => {
    const client = getServerClient();
    const authUser = await fetchAuthUser(client);
    const badCodes = await fetchBadCodesByUserId(authUser?.id || "", client);
    return badCodes;
}

export const actionGetLatestBadCodeList = async () => {
    const client = getServerClient();
    const badCodes = await fetchLatestBadCodes(client);
    return badCodes;
}