import { useEffect, useState } from "react";

import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchCommentListWithUser } from "@/src/libs/externals/supabase/queries/comments";
import { useSetCommentList } from "./useSetCommentList";
import { createEqCondition } from "@/src/libs/externals/supabase/queries";
import { Code } from "@/src/types";

export const useInitCommentList = (code: Code) => {
    const { client, authUser } = useSupabase();
    const { setCommentList } = useSetCommentList();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        initCommentList();
    }, [code, authUser])

    async function initCommentList() {
        // TODO エラーになる
        if (!code?.id) return
        if (!client) return;
        if (!authUser) return;

        const comments = await fetchCommentListWithUser(client, {
            eq: [
                // createEqCondition("user_id", authUser?.id)
                createEqCondition("code_id", code.id)
            ],
        });
        setCommentList(comments);
        setLoading(false);
    }

    return { loading }
}