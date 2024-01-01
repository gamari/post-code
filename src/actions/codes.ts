"use server";

import { getServerClient } from "@/src/libs/externals/supabase/admin-client";
import { fetchCodeById, fetchCodeList, fetchCodeListByFileCode, fetchFavoriteCodeList } from "@/src/libs/externals/supabase/queries/codes";
import { fetchAuthUser } from "@/src/libs/externals/supabase/queries/users";
import { createEqCondition, createOrderCondition } from "../libs/externals/supabase/options";
import { SEARCH_LIMIT } from "../libs/constants/limits";
import { buildCodesByTitleOption, buildLatestCodesOption } from "../libs/externals/supabase/options/codes";

// One
export const actionGetCodeById = async (id: number) => {
    const client = getServerClient();
    const codes = await fetchCodeById(id, client);
    return codes;
}

// List
export const actionGetcodeListByUser = async (userId: string) => {
    const client = getServerClient();
    const codes = await fetchCodeList(client, {
        eq: [
            createEqCondition("user_id", userId)
        ],
        order: [
            createOrderCondition("updated_at", false)
        ],
        limit: SEARCH_LIMIT
    });
    return codes;
}

export const actionGetCodeListByTitle = async (title: string) => {
    const client = getServerClient();
    const codes = await fetchCodeList(client, buildCodesByTitleOption(title, 1));
    return codes;
}

export const actionGetCodeListByFileCode = async (fileCode: string) => {
    const client = getServerClient();
    const codes = await fetchCodeListByFileCode(fileCode, client, 1, {
        eq: [
            createEqCondition("is_public", true)
        ],
        order: [
            createOrderCondition("updated_at", false)
        ],
        limit: SEARCH_LIMIT
    });
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
        ],
        limit: 40
    });
    return codes;
}

/** 最新のコード一覧を取得。 */
export const actionGetLatestBadCodeList = async () => {
    const client = getServerClient();
    const codes = await fetchCodeList(client, buildLatestCodesOption());
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