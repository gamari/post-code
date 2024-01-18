import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { createEqCondition } from "@/src/libs/externals/supabase/options";
import { fetchRandomCodeList } from "@/src/libs/externals/supabase/queries/codes";
import { CodeDetail } from "@/src/types";
import { useEffect, useState } from "react";

export const useFetchRandomCodeList = () => {
    const { client } = useSupabase();
    const [loading, setLoading] = useState<boolean>(true);
    const [codes, setCodes] = useState<CodeDetail[]>([]);

    useEffect(() => {
        init();
    }, [])

    const init = async () => {
        if (!client) return;
        try {
            const codes = await fetchRandomCodeList(client, {
                eq: [
                    createEqCondition("is_public", true)
                ],
                limit: 2
            });
            setCodes(codes);
        } catch (e) {
        } finally {
            setLoading(false);
        }
    }

    return {
        codes,
        loading
    };
}