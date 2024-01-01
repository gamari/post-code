import { SEARCH_LIMIT } from "../../constants/limits"
import { createEqCondition, createOrderCondition } from "./queries"

export const buildCodesByTitleOption = (title: string, page=1) => {
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
    }
}