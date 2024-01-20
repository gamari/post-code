import { CodeDetail } from "@/src/types";
import { usePaginate } from "../usePaginate";
import { useEffect, useState } from "react";
import { useSupabase } from "@/src/contexts/SupabaseProvider";

type FetcherProps = (page: number) => Promise<CodeDetail[] | undefined>;

export const usePaginateCodeList = (fetcher: FetcherProps) => {
    const { client } = useSupabase();

    const { page, nextPage, prevPage } = usePaginate();
    const [isDone, setIsDone] = useState(false);
    const [codeList, setCodeList] = useState<CodeDetail[]>([]);


    useEffect(() => {
        async function update() {
            if (!client) return;

            try {
                const codeList = await fetcher(page);

                if (codeList?.length) {
                    setCodeList(prev => [...prev, ...codeList]);
                } else {
                    setIsDone(true);
                }
            } catch (e) {
                console.error(e);
            }
        }
        update();
    }, [page]);

    return {
        page,
        codeList,
        nextPage,
        prevPage,
        isDone
    }
}