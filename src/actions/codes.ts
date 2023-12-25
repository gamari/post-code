"use server";

import { getServerClient } from "@/src/libs/externals/supabase/admin-client";
import { fetchCodeById, fetchCodeListByFileCode, fetchCodeListWithUser, fetchCodesByUserId, fetchFavoriteCodes } from "@/src/libs/externals/supabase/queries/codes";
import { fetchAuthUser } from "@/src/libs/externals/supabase/queries/users";

// One
export const actionGetBadCodeById = async (id: number) => {
    const client = getServerClient();
    const codes = await fetchCodeById(id, client);
    return codes;
}

// List
export const actionGetCodeListByFileCode = async (fileCode: string) => {
    const client = getServerClient();
    const codes = await fetchCodeListByFileCode(fileCode, client);
    return codes;

}


export const actionGetMySelfBadCodeList = async () => {
    const client = getServerClient();
    const authUser = await fetchAuthUser(client);
    const codes = await fetchCodesByUserId(authUser?.id || "", client);
    return codes;
}

/** 最新のコード一覧を取得。 */
export const actionGetLatestBadCodeList = async () => {
    const client = getServerClient();
    const codes = await fetchCodeListWithUser(client);
    return codes;
}

export const actionGetFavoriteCodeList = async () => {
    const client = getServerClient();
    const codes = await fetchFavoriteCodes(client);
    return codes;
}