import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { useLoading } from "@/src/hooks/useLoading";
import { usePaginate } from "@/src/hooks/usePaginate";
import { createEqCondition } from "@/src/libs/externals/supabase/options";
import { buildBeginnerCodeListOption } from "@/src/libs/externals/supabase/options/codes";
import { fetchCodeList } from "@/src/libs/externals/supabase/queries/codes";
import { CodeDetail } from "@/src/types";
import { useEffect, useState } from "react";

type FetcherInterface = (page: number) => Promise<CodeDetail[]>;

export const useLatestBeginnerCodeList = () => {
  const { client } = useSupabase();
  const { loading } = useLoading();
  const { page, nextPage, prevPage } = usePaginate();
  const [isDone, setIsDone] = useState(false);
  const [codeList, setCodeList] = useState<CodeDetail[]>([]);

  const fetcher = async (page: number) => {
    if (!client) return;
    const codeList = await fetchCodeList(
      client,
      buildBeginnerCodeListOption(page)
    );
    return codeList;
  };

  useEffect(() => {
    async function update() {
      if (!client) return;

      try {
        const codeList = await fetcher(page);

        if (codeList?.length) {
          setCodeList(codeList);
        }
      } catch (e) {
        console.error(e);
      }
    }
    update();
  }, [page]);

  return {
    codeList,
    loading,
  };
};
