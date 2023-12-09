"use client";

import React, { FunctionComponent, useState } from "react";

import { BadCodeWithFiles } from "@/libs/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/components/providers/supabase-provider/supabase-provider";
import { fetchMyself } from "@/libs/externals/supabase/queries/users";
import { fetchCreateFile } from "@/libs/externals/supabase/queries/files";
import { fetchUpdateBadCode } from "@/libs/externals/supabase/queries/bad-codes";
import { Textarea } from "@/components/ui/textarea";
import { Typo } from "@/components/common/typo/typo";
import { useBadCodeForm } from "@/hooks/bad-codes/use-bad-code-form";
import { File } from "@/libs/types";
import { fetchUpsertFiles } from "@/libs/externals/supabase/queries/files";

interface Props {
  code: BadCodeWithFiles;
}

export const CodeEditor: FunctionComponent<Props> = ({ code: initCode }) => {
  const router = useRouter();
  const { client } = useSupabase();
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
    if (selectedFile?.id === file.id) return;
    if (selectedFile?.id !== file.id && selectedFile?.content) {
      updateFile(selectedFile);
    }
    setSelectedFile(file);
  };

  return (
    <div className="flex flex-row gap-4">
      <div className="w-[400px]">
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
            placeholder="説明"
            rows={8}
          />
        </div>

        <div className="mt-6">
          <Typo text="コード" type="h3" className="text-gray-700" />

          <div>
            {selectedFile && (
              <Textarea
                value={selectedFile?.content || ""}
                onChange={(e) => {
                  if (!selectedFile) return;
                  setSelectedFile({ ...selectedFile, content: e.target.value });
                }}
                placeholder="コードを入力"
                rows={8}
              />
            )}
          </div>
          {/* TODO fileをサイドバーから選択して、 */}
        </div>
      </div>

      <div className="w-[180px] border p-6 rounded-md ">
        <div>ファイル一覧</div>

        <div className="mt-6">
          {files?.map((file) => (
            <div
              key={file.id}
              className="flex flex-row items-center"
              onClick={() => handleChangeFile(file)}
            >
              <div className="flex-1">{file.name}</div>
              <div>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  編集
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div>
          <Button onClick={handleAddFile}>ファイル追加</Button>
        </div>

        <div className="mt-10">
          <Button onClick={handleSave}>保存</Button>
        </div>
      </div>
    </div>
  );
};
