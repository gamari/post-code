"use client";

import React, { FunctionComponent } from "react";

import { BadCode, BadCodeWithFiles } from "@/libs/types";
import { Input } from "@/components/common/ui/input";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/components/providers/supabase-provider/supabase-provider";
import { fetchAuthUser } from "@/libs/externals/supabase/queries/users";
import { fetchCreateFile } from "@/libs/externals/supabase/queries/files";
import { fetchUpdateBadCode } from "@/libs/externals/supabase/queries/bad-codes";
import { Textarea } from "@/components/common/ui/textarea";
import { Typo } from "@/components/common/typo";
import { File } from "@/libs/types";
import { fetchUpsertFiles } from "@/libs/externals/supabase/queries/files";
import { CodeEditorSidebar } from "../editor/client/CodeEditorSidebar";
import { useToast } from "@/components/ui/use-toast";
import { CodeFileEditor } from "../editor/client/CodeFileEditor";
import { NoContent } from "@/components/common/no-content";
import { useCodeEditor } from "@/components/providers/CodeEditorProvider";

interface Props {}

export const CodeEditor: FunctionComponent<Props> = ({}) => {
  const router = useRouter();
  const { client } = useSupabase();
  const { toast } = useToast();
  const {
    badCode,
    setTitle,
    setDescription,
    files,
    selectedFile,
    setSelectedFile,
    addFile,
    updateFile,
  } = useCodeEditor();

  const handleSave = async () => {
    // TODO selectedFileの変更を反映させる
    if (!client) return;

    const user = await fetchAuthUser(client);

    if (!user?.id) return;
    if (!badCode?.id) return;

    // Fileの反映
    if (!selectedFile?.name || !selectedFile?.content) {
      toast({
        title: "ファイル名とコンテンツを入力してください",
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

  const handleAddFile = async () => {
    if (!client) return;

    const user = await fetchAuthUser(client);

    if (!user?.id) return;

    const newFile: any = {
      name: "新しいファイル",
      user_id: user.id,
      bad_code_id: badCode?.id,
    };

    const retFile = await fetchCreateFile(newFile, client);

    addFile(retFile);
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

        <div className="border-t pt-4 mt-6">
          <Typo type="h4" text="詳細情報" />

          <div>
            <Input
              type="text"
              placeholder="タイトル"
              value={badCode?.title || ""}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mt-6">
            <Textarea
              value={badCode?.description || ""}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="コードの悪い部分を説明してください……"
              rows={8}
            />
          </div>
        </div>
      </div>

      <CodeEditorSidebar
        files={files}
        onClickAddFile={handleAddFile}
        onClickSave={handleSave}
      />
    </div>
  );
};
