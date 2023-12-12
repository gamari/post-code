import { getServerClient } from "@/libs/externals/supabase/admin-client"
import { fetchCommentsByCodeId } from "@/libs/externals/supabase/queries/comments";

export const actionGetCommentsByCodeId = async (codeId: number) => {
    const client = await getServerClient();
    
    const comments = await fetchCommentsByCodeId(codeId, client);

    return comments;
}