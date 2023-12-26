import { useEffect, useState } from "react";

import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchCommentListWithUser } from "@/src/libs/externals/supabase/queries/comments";
import { useSetCommentList } from "./useSetCommentList";
import { createEqCondition } from "@/src/libs/externals/supabase/queries";

export const useInitCommentList = (codeId: number) => {
    const { client, authUser } = useSupabase();
    const { setCommentList } = useSetCommentList();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        initCommentList();
    }, [codeId, authUser])

    async function initCommentList() {
        // TODO エラーになる
        if (!codeId) return
        if (!client) return;
        if (!authUser) return;

        const comments = await fetchCommentListWithUser(client, {
            eq: [
                createEqCondition("user_id", authUser?.id)
            ],
        });
        setCommentList(comments);
        setLoading(false);
    }

    return { loading }
}