import { useEffect, useState } from "react";
import { useLoading } from "../useLoading";
import { CodeDetail } from "@/src/types";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchCodeById } from "@/src/libs/externals/supabase/queries/codes";

export const useFetchCodeById = (id: number) => {
    const { client } = useSupabase();
    const { loading, stopLoading } = useLoading(true);
    const [code, setCode] = useState<CodeDetail | null>(null);

    useEffect(() => {
        async function init() {
            if (!client) return;
            try {
                const retCode = await fetchCodeById(id, client);
                setCode(retCode);
            } catch (e) {
                // TODO
            } finally {
                stopLoading();
            }
        }

        init();
    }, [id]);

    return { code, loading };
}