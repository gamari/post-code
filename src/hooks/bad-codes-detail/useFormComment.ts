import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchCreateComment } from "@/src/libs/externals/supabase/queries/comments";
import { Comment } from "@/src/types";
import { useState } from "react";

export const useFormComment = () => {
    const { client } = useSupabase();
    const [comment, setComment] = useState("");

    const saveComment = async (codeId: number) => {
        if (!client) throw new Error("接続に失敗しました。");
        if (!comment) throw new Error("コメントを入力してください。");
        return await fetchCreateComment(codeId, comment, client);
    }

    return {
        comment,
        setComment,
        saveComment
    }
}