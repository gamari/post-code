import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { usePaginateCodeList } from "@/src/hooks/codes/usePaginateCodeList";
import { useLoading } from "@/src/hooks/useLoading";
import { buildBeginnerCodeListOption } from "@/src/libs/externals/supabase/options/codes";
import { fetchCodeList } from "@/src/libs/externals/supabase/queries/codes";

export const useLatestBeginnerCodeList = () => {
  const { client } = useSupabase();
  const { loading, startLoading, stopLoading } = useLoading(true);

  const fetcher = async (page: number) => {
    if (!client) return;

    try {
      const codeList = await fetchCodeList(
        client,
        buildBeginnerCodeListOption(page)
      );
      return codeList;
    } catch (e) {
      return [];
    } finally {
      stopLoading();
    }
  };

  const { codeList, nextPage, prevPage, isDone } = usePaginateCodeList(fetcher);

  return {
    codeList,
    loading,
    nextPage,
    isDone,
  };
};
