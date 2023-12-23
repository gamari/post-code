import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchCommentsByCodeId } from "@/src/libs/externals/supabase/queries/comments";
import { useEffect, useState } from "react";
import { useSetCommentList } from "./useSetCommentList";

export const useInitCommentList = (codeId: number) => {
    const { client } = useSupabase();
    const { setCommentList } = useSetCommentList();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        initCommentList();
    }, [codeId])

    async function initCommentList() {
        // TODO エラーになる
        if (!codeId) return
        if (!client) return;

        const comments = await fetchCommentsByCodeId(codeId, client);
        setCommentList(comments);
        setLoading(false);
    }

    return { loading }
}