import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { useLoading } from "@/src/hooks/useLoading";
import { usePaginate } from "@/src/hooks/usePaginate";
import { createEqCondition } from "@/src/libs/externals/supabase/options";
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
    const limit = 10;
    const start = (page - 1) * limit;
    const end = start + limit;
    const codeList = await fetchCodeList(client, {
      limit,
      range: {
        start,
        end,
      },
      eq: [
        createEqCondition("is_public", true),
        // createEqCondition("tags.name", "tag"),
      ],
      filter: [
        {
          field: "tags",
          operator: "not.is",
          value: null,
        },
        // TODO いったん「初心者」タグのみで絞る
        // TODO 今後は「beginner」タグを付与する
        {
          field: "tags.name",
          operator: "eq",
          value: "初心者",
        },
      ],
    });
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
