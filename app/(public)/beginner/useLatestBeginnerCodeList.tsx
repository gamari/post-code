import { useLoading } from "@/src/hooks/useLoading";
import { CodeDetail } from "@/src/types";
import { useState } from "react";

export const useLatestBeginnerCodeList = () => {
  const { loading } = useLoading();
  const [isDone, setIsDone] = useState(false);
  const [codeList, setCodeList] = useState<CodeDetail[]>([]);

  return {
    codeList,
    loading,
  };
};
