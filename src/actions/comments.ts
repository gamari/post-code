import { getServerClient } from "@/src/libs/externals/supabase/admin-client"
import { fetchCommentListByUser, fetchCommentList, fetchCommentListWithCode } from "@/src/libs/externals/supabase/queries/comments";
import { fetchAuthUser } from "../libs/externals/supabase/queries/users";

/** 最新リスト。 */
export const actionGetLatestCommentList = async () => {
    const client = await getServerClient();

    const comments = await fetchCommentListWithCode(client, {
        order: [
            { field: "created_at", ascending: true },
        ],
    });

    return comments;
}

/** コード別コメントリスト。 */
export const actionGetCommentListByCodeId = async (codeId: number) => {
    const client = await getServerClient();

    const comments = await fetchCommentList(client, {
        eq: [
            { field: "code_id", value: codeId },
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

    const comments = await fetchCommentListByUser(authUser.id, client);

    return comments;
}