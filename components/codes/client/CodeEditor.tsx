"use client";

import React, { FunctionComponent, useState } from "react";

import { BadCodeWithFiles } from "@/libs/types";
import { Button } from "@/components/common/ui/button";
import { Input } from "@/components/common/ui/input";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/components/providers/supabase-provider/supabase-provider";
import { fetchMyself } from "@/libs/externals/supabase/queries/users";
import { fetchCreateFile } from "@/libs/externals/supabase/queries/files";
import { fetchUpdateBadCode } from "@/libs/externals/supabase/queries/bad-codes";
import { Textarea } from "@/components/common/ui/textarea";
import { Typo } from "@/components/common/typo";
import { useBadCodeForm } from "@/hooks/bad-codes/use-bad-code-form";
import { File } from "@/libs/types";
import { fetchUpsertFiles } from "@/libs/externals/supabase/queries/files";
import { CodeEditorSidebar } from "../editor/client/CodeEditorSidebar";
import { useToast } from "@/components/ui/use-toast";
import { CodeFileEditor } from "../editor/client/CodeFileEditor";
import { NoContent } from "@/components/common/no-content";

interface Props {
  code: BadCodeWithFiles;
}

export const CodeEditor: FunctionComponent<Props> = ({ code: initCode }) => {
  const router = useRouter();
  const { client } = useSupabase();
  const { toast } = useToast();
  const {
    id,
    title,
    setTitle,
    description,
    setDescription,
    files,
    addFile,
    updateFile,
  } = useBadCodeForm(initCode);
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);

  const handleSave = async () => {
    // TODO selectedFileの変更を反映させる
    if (!client) return;

    const user = await fetchMyself(client);

    if (!user?.id) return;
    if (!id) return;

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

    await fetchUpdateBadCode(
      // @ts-ignore
      { id, title, description, user_id: user.id },
      client
    );

    router.push(`/codes/${id}/detail`);
  };

  const handleAddFile = async () => {
    if (!client) return;

    const user = await fetchMyself(client);

    if (!user?.id) return;

    const newFile: any = {
      name: "新しいファイル",
      user_id: user.id,
      bad_code_id: id,
    };

    const retFile = await fetchCreateFile(newFile, client);

    addFile(retFile);
  };

  const handleChangeFile = async (file: File) => {
    if (selectedFile && !selectedFile?.name) {
      toast({
        title: "ファイル名を入力してください",
      });
      return;
    }

    if (selectedFile?.id === file.id) return;
    if (selectedFile?.id !== file.id && selectedFile?.content) {
      updateFile(selectedFile);
    }
    setSelectedFile(file);
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
              value={title || ""}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mt-6">
            <Textarea
              value={description || ""}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="コードの悪い部分を説明してください……"
              rows={8}
            />
          </div>
        </div>
      </div>

      <CodeEditorSidebar
        files={files}
        selectedFile={selectedFile}
        onClickFile={handleChangeFile}
        onClickAddFile={handleAddFile}
        onClickSave={handleSave}
      />
    </div>
  );
};
