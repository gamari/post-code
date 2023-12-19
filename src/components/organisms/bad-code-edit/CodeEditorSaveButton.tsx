"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { MdSave } from "react-icons/md";

import { Button } from "@/src/components/atoms/buttons/button";
import { useCodeEditor } from "@/src/contexts/CodeEditorProvider";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { useToast } from "@/src/components/ui/use-toast";
import { fetchUpdateBadCode } from "@/src/libs/externals/supabase/queries/bad-codes";
import { fetchUpsertFiles } from "@/src/libs/externals/supabase/queries/files";
import { BadCode } from "@/src/types";
import { Loader } from "@/src/components/molecules/displays/Loader";
import { useSaveCodeEditor } from "@/src/hooks/bad-codes-detail/useSaveCodeEditor";
import { useAlert } from "@/src/hooks/useAlert";
import { SaveButton } from "../../molecules/buttons/save-button";

export const CodeEditorSaveButton = () => {
  const { client, getAuthUser } = useSupabase();
  const { errorAlert, infoAlert } = useAlert();

  const { badCode, files, selectedFile, updateFile } = useCodeEditor();

  const { saveEditor } = useSaveCodeEditor();

  const [isLoading, setIsLoading] = useState(false);

  const handleOnSave = async () => {
    if (!client) return;

    const user = await getAuthUser();

    if (!user?.id) return;
    if (!badCode?.id) return;

    // Fileの反映
    try {
      setIsLoading(true);
      if (selectedFile) {
        if (!selectedFile?.name) {
          infoAlert("ファイル名を入力して下さい");
          return;
        }
        updateFile(selectedFile);
      }

      let newFiles = files;
      if (selectedFile) {
        newFiles = files.map((file) => {
          if (file.id === selectedFile.id) return selectedFile;
          return file;
        });
      }

      await fetchUpsertFiles(newFiles, client);
      await saveEditor();
      infoAlert("保存しました");
    } catch (error) {
      errorAlert("保存に失敗しました", error);
    } finally {
      setIsLoading(false);
    }
  };

  return <SaveButton label="保存" onClick={handleOnSave} loading={isLoading} />;
};
