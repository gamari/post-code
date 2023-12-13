"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { MdSave } from "react-icons/md";

import { Button } from "@/components/common/ui/button";
import { useCodeEditor } from "@/components/providers/CodeEditorProvider";
import { useSupabase } from "@/components/providers/supabase-provider/supabase-provider";
import { useToast } from "@/components/ui/use-toast";
import { fetchUpdateBadCode } from "@/libs/externals/supabase/queries/bad-codes";
import { fetchUpsertFiles } from "@/libs/externals/supabase/queries/files";
import { BadCode } from "@/libs/types";

export const CodeEditorSaveButton = () => {
  const router = useRouter();
  const { client, getAuthUser } = useSupabase();
  const { toast } = useToast();
  const { badCode, files, selectedFile, updateFile } = useCodeEditor();

  const handleOnSave = async () => {
    if (!client) return;

    const user = await getAuthUser();

    if (!user?.id) return;
    if (!badCode?.id) return;

    // Fileの反映
    if (selectedFile) {
      if (!selectedFile?.name) {
        toast({
          title: "ファイル名を入力して下さい",
        });
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

    const newBadCode: BadCode = {
      id: badCode.id,
      title: badCode.title,
      description: badCode.description,
      created_at: badCode.created_at,
      updated_at: badCode.updated_at,
      user_id: user.id,
    };

    await fetchUpdateBadCode(newBadCode, client);

    router.push(`/codes/${badCode?.id}/detail`);
  };

  return (
    <Button onClick={handleOnSave} className="w-full">
      <MdSave className="h-4 w-4 mr-2" />
      保存
    </Button>
  );
};
