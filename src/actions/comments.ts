import { getServerClient } from "@/src/libs/externals/supabase/admin-client"
import { fetchCommentListByUser, fetchCommentsByCodeId } from "@/src/libs/externals/supabase/queries/comments";
import { fetchAuthUser } from "../libs/externals/supabase/queries/users";

export const actionGetCommentsByCodeId = async (codeId: number) => {
    const client = await getServerClient();

    const comments = await fetchCommentsByCodeId(codeId, client);

    return comments;
}

export const actionGetMyselfCommentList = async () => {
    const client = await getServerClient();

    const authUser = await fetchAuthUser(client);
    if (!authUser) throw new Error("ログインしてください。");

    const comments = await fetchCommentListByUser(authUser.id, client);

    return comments;
}