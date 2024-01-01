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
