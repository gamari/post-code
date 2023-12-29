import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchCreateComment } from "@/src/libs/externals/supabase/queries/comments";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useFormComment = () => {
    const router = useRouter();
    const { client } = useSupabase();
    const [comment, setComment] = useState("");

    const saveComment = async (codeId: number) => {
        if (!client) throw new Error("接続に失敗しました。");
        if (!comment) throw new Error("コメントを入力してください。");
        const retComment = await fetchCreateComment(codeId, comment, client);

        router.refresh();
        return retComment;
    }

    return {
        comment,
        setComment,
        saveComment
    }
}