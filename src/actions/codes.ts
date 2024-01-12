"use server";

import { getServerClient } from "@/src/libs/externals/supabase/admin-client";
import { fetchCodeById, fetchCodeList, fetchCodeListByFileCode, fetchCodeListByLanguage, fetchFavoriteCodeList, fetchRandomCodeList } from "@/src/libs/externals/supabase/queries/codes";
import { fetchAuthUser } from "@/src/libs/externals/supabase/queries/users";
import { createEqCondition, createOrderCondition } from "../libs/externals/supabase/options";
import { SEARCH_LIMIT } from "../libs/constants/limits";
import { buildCodesByTitleOption, buildLatestCodesOption } from "../libs/externals/supabase/options/codes";
import { Advertisement } from "../types";
import { createRandomAdvertisementList } from "../libs/ads";

// One
export const actionGetCodeById = async (id: number) => {
    const client = getServerClient();
    const codes = await fetchCodeById(id, client);
    return codes;
}

// List
export const actionGetCodeListByUser = async (userId: string) => {
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

/** タイトル検索 */
export const actionGetCodeListByTitle = async (title: string) => {
    const client = getServerClient();
    const codes = await fetchCodeList(client, buildCodesByTitleOption(title, 1));
    return codes;
}

/** ファイル検索 */
export const actionGetCodeListByFileCode = async (fileCode: string) => {
    const client = getServerClient();
    const codes = await fetchCodeListByFileCode(fileCode, client, 1, {
        eq: [
            createEqCondition("codes.is_public", true)
        ],
        order: [
            createOrderCondition("updated_at", false)
        ],
        limit: SEARCH_LIMIT
    });
    return codes;
}

/** 言語検索 */
export const actionGetCodeListByLanguage = async (language: string) => {
    const client = getServerClient();
    const codes = await fetchCodeListByLanguage(language, client, {
        limit: SEARCH_LIMIT
    });
    return codes;
}

export const actionGetOwnCodeList = async () => {
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

    // const ads: Advertisement[] = createRandomAdvertisementList();
    const ads: Advertisement[] = [];

    return [...codes, ...ads] as Advertisement[];
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


/** TODO オススメの記事を取得 -> 使えない */
export const actionGetRecommendedCodeList = async () => {
    const client = getServerClient();
    const codes = await fetchRandomCodeList(client, {
        limit: 20
    });
    return codes;
}