import { useSupabase } from "@/src/contexts/SupabaseProvider";
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