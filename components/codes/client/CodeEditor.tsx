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
    if (!client) return;

    const user = await fetchMyself(client);

    if (!user?.id) return;
    if (!id) return;

    await fetchUpsertFiles(files, client);

    await fetchUpdateBadCode(
      // @ts-ignore
      { id, title, description, user_id: user.id },
      client
    );

    router.refresh();
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
      <div className="w-[500px]">
        <div>
          {selectedFile ? (
            <div className="flex flex-col h-[250px] gap-3">
              <Input
                value={selectedFile?.name || ""}
                onChange={(e) => {
                  if (!selectedFile) return;
                  setSelectedFile({ ...selectedFile, name: e.target.value });
                }}
              />
              <Textarea
                value={selectedFile?.content || ""}
                onChange={(e) => {
                  if (!selectedFile) return;
                  setSelectedFile({ ...selectedFile, content: e.target.value });
                }}
                placeholder="コードを入力"
                className="flex-1"
              />
            </div>
          ) : (
            <div className="h-[250px] p-6 border rounded-md flex items-center justify-center text-gray-600">
              <p>編集するファイルを選択してください</p>
            </div>
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
