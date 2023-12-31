import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchCodeList, fetchCodeListBeforeDate } from "@/src/libs/externals/supabase/queries/codes";
import { Code, CodeDetail } from "@/src/types";
import { useEffect, useState } from "react";

export const useFetchLatestCodeList = () => {
    const { client } = useSupabase();
    const [codeList, setCodeList] = useState<CodeDetail[]>([]);
    const [loading, setLoading] = useState(false);
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        async function init() {
            if (!client) return;
            const result = await fetchCodeList(client, {
                eq: [
                    {
                        field: "is_public",
                        value: true
                    }
                ],
                order: [
                    {
                        field: "published_date",
                        ascending: false
                    }
                ]
            })
            setCodeList(result);
        }

        init();
    }, [])

    async function fetchMoreCodeList() {
        if (!client) return;
        if (loading) return;
        if (codeList.length === 0) return;
        if (!codeList[codeList.length - 1]?.created_at) return;

        try {
            setLoading(true);
            const result = await fetchCodeListBeforeDate(codeList[codeList.length - 1]?.created_at || "", client, {
                order: [
                    {
                        field: "created_at",
                        ascending: false
                    }
                ]

            })
            if (result?.length === 0) {
                setIsDone(true);
                return;
            }
            setCodeList([...codeList, ...result]);
        } catch (e) {
            // TODO
        } finally {
            setLoading(false);
        }
    }

    return { codeList, loading, fetchMoreCodeList, isDone };

}