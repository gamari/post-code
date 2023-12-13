"use client";

import React, { FunctionComponent } from "react";

import { BadCode } from "@/libs/types";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/components/providers/supabase-provider/supabase-provider";
import { fetchAuthUser } from "@/libs/externals/supabase/queries/users";
import { fetchUpdateBadCode } from "@/libs/externals/supabase/queries/bad-codes";
import { fetchUpsertFiles } from "@/libs/externals/supabase/queries/files";
import { CodeEditorSidebar } from "../editor/client/CodeEditorSidebar";
import { useToast } from "@/components/ui/use-toast";
import { CodeFileEditor } from "../editor/client/CodeFileEditor";
import { NoContent } from "@/components/common/no-content";
import { useCodeEditor } from "@/components/providers/CodeEditorProvider";
import { CodeDetailInfoEditor } from "../editor/client/CodeDetailInfoEditor";

interface Props {}

export const CodeEditor: FunctionComponent<Props> = ({}) => {
  const router = useRouter();
  const { client } = useSupabase();
  const { toast } = useToast();
  const {
    badCode,
    files,
    selectedFile,
    setSelectedFile,
    updateFile,
  } = useCodeEditor();

  const handleSave = async () => {
    // TODO selectedFileの変更を反映させる
    if (!client) return;

    const user = await fetchAuthUser(client);

    if (!user?.id) return;
    if (!badCode?.id) return;

    // Fileの反映
    if (!selectedFile?.name) {
      toast({
        title: "ファイル名を入力して下さい",
      });
      return;
    }
    updateFile(selectedFile);

    const newFiles = files.map((file) => {
      if (file.id === selectedFile.id) return selectedFile;
      return file;
    });

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
    <div className="flex flex-row gap-4">
      <div className="w-[600px]">
        <div>
          {selectedFile ? (
            <CodeFileEditor
              file={selectedFile}
              setFile={setSelectedFile}
              className="h-[400px]"
            />
          ) : (
            <NoContent
              text="ファイルを選択してください"
              className="h-[400px]"
            />
          )}
        </div>

        <CodeDetailInfoEditor className="border-t-2 mt-10 pt-4" />
      </div>

      <CodeEditorSidebar files={files} onClickSave={handleSave} />
    </div>
  );
};
