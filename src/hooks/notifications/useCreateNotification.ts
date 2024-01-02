import { useSupabase } from "@/src/contexts/SupabaseProvider"
import { fetchCreateNotification } from "@/src/libs/externals/supabase/queries/notifications";

export const useCreateNotification = () => {
    const { client, authUser } = useSupabase();

    const fetchCreateCommentNotification = async (commentId: number, userId: string) => {
        if (!client) return;

        // TODO 完成したらコメントアウトを外す
        // if (authUser?.id === userId) return;

        const newNotification = {
            user_id: userId,
            comment_id: commentId
        } as any;

        await fetchCreateNotification(newNotification, client);
    }

    return {
        fetchCreateCommentNotification
    }
}