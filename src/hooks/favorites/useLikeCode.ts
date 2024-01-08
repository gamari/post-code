import { useState } from "react";
import { useRouter } from "next/navigation";

import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchDeleteFavoriteCode, fetchCreateFavoriteCode } from "@/src/libs/externals/supabase/queries/favorites";

export const useLikeCode = (initIsFavorite: boolean) => {
    const router = useRouter();
    const { client } = useSupabase();

    const [isFavorite, setIsFavorite] = useState(initIsFavorite);

    const likeCode = async (codeId: number) => {
        if (!client) return;

        try {
            if (isFavorite) {
                await fetchDeleteFavoriteCode(codeId, client);
            } else {
                await fetchCreateFavoriteCode(codeId, client);
            }
            setIsFavorite((prev) => !prev);
            // router.refresh();
        } catch (e) {
            console.error(e);
        }
    };

    return {
        isFavorite,
        likeCode
    }
}