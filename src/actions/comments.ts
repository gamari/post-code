import { getServerClient } from "@/src/libs/externals/supabase/admin-client"
import { fetchCommentList } from "@/src/libs/externals/supabase/queries/comments";
import { fetchAuthUser } from "../libs/externals/supabase/queries/users";

/** 最新リスト。 */
export const actionGetLatestCommentList = async () => {
    const client = await getServerClient();

    const comments = await fetchCommentList(client, {
        order: [
            { field: "created_at", ascending: false },
        ],
    });

    return comments;
}

export const actionGetCommentListAfterDate = async (targetDate: string) => {
    const client = await getServerClient();

    const comments = await fetchCommentList(client, {
        gt: [
            { field: "created_at", value: targetDate },
        ],
        order: [
            { field: "created_at", ascending: true },
        ],
    });

    return comments;
}


export const actionGetMyselfCommentList = async () => {
    const client = await getServerClient();

    const authUser = await fetchAuthUser(client);
    if (!authUser) throw new Error("ログインしてください。");

    const comments = await fetchCommentList(client, {
        eq: [
            { field: "user_id", value: authUser.id },
        ],
        order: [
            { field: "created_at", ascending: true },
        ],
    });

    return comments;
}