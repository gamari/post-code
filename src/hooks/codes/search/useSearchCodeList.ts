import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { createOrderCondition } from "@/src/libs/externals/supabase/options";
import { fetchCodeListByFileCode } from "@/src/libs/externals/supabase/queries/codes";
import { SearchResultCode } from "@/src/types";
import { useState } from "react";
import { useLoading } from "../../useLoading";
import { SEARCH_LIMIT } from "@/src/libs/constants/limits";

export const useSearchCodeList = (initCodes: SearchResultCode[]) => {
    const { client } = useSupabase();
    const { loading, startLoading, stopLoading } = useLoading();
    const [isDone, setIsDone] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [codes, setCodes] = useState<SearchResultCode[]>(initCodes);

    const next = async (code: string) => {
        if (!client) return;
        try {
            startLoading();
            const retCodes = await fetchCodeListByFileCode(code, client, page + 1, {
                order: [
                    createOrderCondition("updated_at", false)
                ],
                limit: SEARCH_LIMIT
            });

            if (retCodes.length === 0) {
                setIsDone(true);
                return;
            }
            setCodes(prev => [...prev, ...retCodes]);
            setPage(prev => prev + 1);
        } catch (e) {

        } finally {
            stopLoading();
        }
    }

    return {
        codes,
        next,
        loading,
        isDone
    }
}