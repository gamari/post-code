"use server";

import { getServerClient } from "@/src/libs/externals/supabase/admin-client";
import { fetchCodeById, fetchCodeList, fetchCodeListByFileCode, fetchCodeListWithUser, fetchFavoriteCodeList } from "@/src/libs/externals/supabase/queries/codes";
import { fetchAuthUser } from "@/src/libs/externals/supabase/queries/users";
import { createEqCondition, createEqConditions, createOrderCondition } from "../libs/externals/supabase/queries";

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

export const actionGetOwnBadCodeList = async () => {
    const client = getServerClient();
    const authUser = await fetchAuthUser(client);
    const codes = await fetchCodeList(client, {
        eq: [
            createEqCondition("user_id", authUser?.id)
        ],
        order: [
            createOrderCondition("updated_at", false)
        ]
    });
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
    const authUser = await fetchAuthUser(client);
    const codes = await fetchFavoriteCodeList(client, {
        eq: [
            createEqCondition("user_id", authUser?.id)
        ],
        limit: 20
    });
    return codes;
}