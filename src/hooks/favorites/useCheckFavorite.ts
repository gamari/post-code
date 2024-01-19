import { useSupabase } from "@/src/contexts/SupabaseProvider"
import { fetchIsFavoriteCode } from "@/src/libs/externals/supabase/queries/favorites";
import { useEffect, useState } from "react";

export const useCheckFavorite = (code_id: number) => {
    const { client } = useSupabase();
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const check = async () => {
            if (!client) return;
            const retFavorite = await fetchIsFavoriteCode(code_id, client);
            setIsFavorite(retFavorite);
        }
        check();
    }, [client, code_id]);

    return {
        isFavorite
    }
}