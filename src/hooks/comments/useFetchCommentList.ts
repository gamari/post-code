import { useSupabase } from "@/src/contexts/SupabaseProvider"
import { fetchCommentList } from "@/src/libs/externals/supabase/queries/comments";

export const useFetchCommentList = () => {
    const { client } = useSupabase();

    const fetchCodeListAfterDate = async (targetDate: string) => {
        if (!client) throw new Error("クライアントがありません。");

        console.log("targetDate", targetDate);

        const newComments = await fetchCommentList(client, {
            gt: [
                { field: "created_at", value: targetDate },
            ],
            order: [
                { field: "created_at", ascending: true },
            ],
        });

        return newComments;
    }

    return {
        fetchCodeListAfterDate
    }
}