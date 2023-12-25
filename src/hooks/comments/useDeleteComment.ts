import { useSupabase } from "@/src/contexts/SupabaseProvider"
import { fetchDeleteComment } from "@/src/libs/externals/supabase/queries/comments";
import { Comment, CommentDetail } from "@/src/types"

export const useDeleteComment = () => {
    const { client } = useSupabase();

    async function deleteComment(comment: Comment) {
        if (!client) throw new Error("接続に失敗しました。")
        await fetchDeleteComment(comment?.id, client);
    }

    return { deleteComment }
}