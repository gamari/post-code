"use server";

import { getServerClient } from "@/src/libs/externals/supabase/admin-client";
import { fetchCodeById, fetchCodesByUserId, fetchLatestCodes } from "@/src/libs/externals/supabase/queries/bad-codes";
import { fetchAuthUser } from "@/src/libs/externals/supabase/queries/users";

// One
export const actionGetBadCodeById = async (id: number) => {
    const client = getServerClient();
    const badCodes = await fetchCodeById(id, client);
    return badCodes;
}

// List
export const actionGetMySelfBadCodeList = async () => {
    const client = getServerClient();
    const authUser = await fetchAuthUser(client);
    const badCodes = await fetchCodesByUserId(authUser?.id || "", client);
    return badCodes;
}

export const actionGetLatestBadCodeList = async () => {
    const client = getServerClient();
    const badCodes = await fetchLatestCodes(client);
    return badCodes;
}