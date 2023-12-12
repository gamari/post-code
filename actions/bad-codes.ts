"use server";

import { getServerClient } from "@/libs/externals/supabase/admin-client";
import { fetchBadCodeById, fetchBadCodesByUserId, fetchLatestBadCodes } from "@/libs/externals/supabase/queries/bad-codes";
import { fetchAuthUser } from "@/libs/externals/supabase/queries/users";

export const actionGetMySelfBadCodes = async () => {
    const client = getServerClient();
    const authUser = await fetchAuthUser(client);

    if (!authUser?.id) throw new Error("認証ユーザーが見つかりませんでした。");

    const badCodes = await fetchBadCodesByUserId(authUser.id, client);

    return badCodes;
}

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
