import { CodeDetail } from "@/src/types";
import { useLoading } from "../../useLoading";
import { useState } from "react";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchCodeList } from "@/src/libs/externals/supabase/queries/codes";
import { buildCodesByTitleOption } from "@/src/libs/externals/supabase/options/codes";

export const useSearchCodeListByTitle = (title: string, initCodes: CodeDetail[]) => {
    const { client } = useSupabase();
    const { loading, startLoading, stopLoading } = useLoading();
    const [page, setPage] = useState(1);
    const [isDone, setIsDone] = useState(initCodes?.length === 0);
    const [codes, setCodes] = useState<CodeDetail[]>(initCodes);

    async function next() {
        if (!client) return;
        if (!title) return;

        try {
            startLoading();
            const retCodes = await fetchCodeList(client, buildCodesByTitleOption(title, page + 1));

            if (!retCodes?.length) {
                setIsDone(true);
                return;
            }

            setCodes(prev => [...prev, ...retCodes]);
            setPage(prev => prev + 1);
        } catch (e) {
            console.error(e);
        } finally {
            stopLoading()
        }
    }

    return {
        codes,
        loading,
        isDone,
        next
    };
}