import { CodeDetail } from "@/src/types";
import { usePaginate } from "../usePaginate";
import { useEffect, useState } from "react";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { useLoading } from "../useLoading";

type FetcherProps = (page: number) => Promise<CodeDetail[] | undefined>;

export const usePaginateCodeList = (fetcher: FetcherProps) => {
    const { client } = useSupabase();
    const { loading, startLoading, stopLoading } = useLoading(true);

    const { page, nextPage, prevPage } = usePaginate();
    const [isDone, setIsDone] = useState(false);
    const [codeList, setCodeList] = useState<CodeDetail[]>([]);


    useEffect(() => {
        async function update() {
            if (!client) return;

            try {
                startLoading();
                const codeList = await fetcher(page);

                if (codeList?.length) {
                    setCodeList(prev => [...prev, ...codeList]);
                } else {
                    setIsDone(true);
                }
            } catch (e) {
                console.error(e);
            } finally {
                stopLoading();
            }
        }
        update();
    }, [page]);

    return {
        page,
        codeList,
        nextPage,
        prevPage,
        isDone,
        loading
    }
}