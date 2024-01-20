"use client";

import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { usePaginateCodeList } from "@/src/hooks/codes/usePaginateCodeList";
import { buildLatestAiCodeListOption } from "@/src/libs/externals/supabase/options/codes";
import { fetchCodeList } from "@/src/libs/externals/supabase/queries/codes";

export const useLatestAiCodeList = () => {
    const { client } = useSupabase();
    const fetcher = async (page: number) => {
        if (!client) return;
        const codes = await fetchCodeList(client, buildLatestAiCodeListOption(page));
        return codes;
    }
    const { codeList, loading, isDone, nextPage } = usePaginateCodeList(fetcher);

    return {
        codeList,
        loading,
        isDone,
        nextPage
    }
}