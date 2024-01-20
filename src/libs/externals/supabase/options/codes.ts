import { SEARCH_LIMIT, TOP_LIMIT } from "@/src/libs/constants/limits";
import { createEqCondition, createOrderCondition } from ".";

/** 最新コード取得。 */
export const buildLatestCodesOption = () => {
    return {
        eq: [
            createEqCondition("is_public", true)
        ],
        order: [
            createOrderCondition("published_date", false)
        ],
        limit: TOP_LIMIT
    }
}

/** 以前のものを取得。 */
export const buildCodesBeforeDate = (target: string) => {
    return {
        lt: [
            {
                field: "published_date",
                value: target
            }
        ],
        order: [
            {
                field: "created_at",
                ascending: false
            }
        ],
        limit: SEARCH_LIMIT

    }
}

/** タイトル検索。 */
export const buildCodesByTitleOption = (title: string, page = 1) => {
    const start = (page - 1) * SEARCH_LIMIT;
    const end = page * SEARCH_LIMIT;
    return {
        like: [
            createEqCondition("title", title)
        ],
        eq: [
            createEqCondition("is_public", true)
        ],
        order: [
            createOrderCondition("updated_at", false)
        ],
        range: {
            start,
            end
        },
        limit: SEARCH_LIMIT
    };
};

/** 初心者用コード。 */
export const buildBeginnerCodeListOption = (page = 1) => {
    const start = (page - 1) * 1;
    const end = page * 1;
    return {
        limit: 1,
        range: {
            start,
            end,
        },
        eq: [
            createEqCondition("is_public", true),
        ],
        filter: [
            {
                field: "tags",
                operator: "not.is",
                value: null,
            },
            {
                field: "tags.name",
                operator: "eq",
                value: "初心者",
            },
        ],
    }
}


/** AIツールに関する記事。 */
export const buildAiToolCodeListOption = (page = 1) => {
    const start = (page - 1) * SEARCH_LIMIT;
    return {
        range: {
            start,
            end: page * SEARCH_LIMIT
        },
        eq: [
            createEqCondition("is_public", true),
            createEqCondition("tags.name", "AI"),
        ],
        filter: [
            {
                field: "tags",
                operator: "not.is",
                value: null,
            }
        ],
        order: [
            createOrderCondition("published_date", false)
        ],
        limit: TOP_LIMIT
    }
}