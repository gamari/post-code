"use client";

import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { useLoading } from "@/src/hooks/useLoading";
import { usePaginate } from "@/src/hooks/usePaginate";
import { buildAiToolCodeListOption } from "@/src/libs/externals/supabase/options/codes";
import { fetchCodeList } from "@/src/libs/externals/supabase/queries/codes";
import { CodeDetail } from "@/src/types";
import { useEffect, useState } from "react"

export const useAiToolCodeList = () => {
    const { client } = useSupabase();
    const { page } = usePaginate();
    const { loading } = useLoading();
    const [codeList, setCodeList] = useState<CodeDetail[]>([]);

    useEffect(() => {
        async function update() {
            if (!client) return;
            const codes = await fetchCodeList(client, buildAiToolCodeListOption());
            setCodeList(codes);
            console.log(codes);
        }
        update();
    }, [page])

    return {
        codeList,
    }
}