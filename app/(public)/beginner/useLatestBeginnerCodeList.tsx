import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { usePaginateCodeList } from "@/src/hooks/codes/usePaginateCodeList";
import { buildBeginnerCodeListOption } from "@/src/libs/externals/supabase/options/codes";
import { fetchCodeList } from "@/src/libs/externals/supabase/queries/codes";

export const useLatestBeginnerCodeList = () => {
  const { client } = useSupabase();

  const fetcher = async (page: number) => {
    if (!client) return;

    const codeList = await fetchCodeList(
      client,
      buildBeginnerCodeListOption(page)
    );
    return codeList;
  };

  const { codeList, nextPage, isDone, loading } = usePaginateCodeList(fetcher);

  return {
    codeList,
    nextPage,
    isDone,
    loading,
  };
};
