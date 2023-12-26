import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchFavoriteCount } from "@/src/libs/externals/supabase/queries/favorites";
import { useEffect, useState } from "react"

export const useFetchFavoriteCount = (codeId: number) => {
    const { client } = useSupabase();
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetchCount();
    });

    const fetchCount = async () => {
        if (!client) throw new Error("接続に失敗しました。");
        const count = await fetchFavoriteCount(codeId, client);
        setCount(count);
    }

    return {
        count,
        setCount
    }
}