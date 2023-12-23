"use client";

import React from "react";

import { CodeEditorFileList } from "../files/CodeEditorFileList";
import { CodeEditorSaveModalButton } from "../CodeEditorSaveModalButton";
import { LinkButton } from "@/src/components/molecules/buttons/link-button";
import { CodeEditorNewFileModalButton } from "../CodeEditorNewFileModalButton";
import { Heading } from "@/src/components/atoms/texts/heading";
import { Switch } from "@/src/components/ui/switch";
import { Typo } from "@/src/components/atoms/texts/typo";
import { useGetEditorCode } from "@/src/hooks/codes/editors/getter/useGetEditorCode";
import { useGetEditorFiles } from "@/src/hooks/codes/editors/getter/useGetEditorFiles";
import { useSetEditorCode } from "@/src/hooks/codes/editors/setter/useSetEditorCode";

export const CodeEditorSidebar = () => {
  const { code } = useGetEditorCode();
  const { files } = useGetEditorFiles();
  const { setIsPublic } = useSetEditorCode();

  return (
    <div className="w-full h-fit border p-5 rounded-md bg-white">
      <div className="flex flex-row items-center gap-2 pb-2 border-b">
        <Heading type="h4">ファイル一覧</Heading>
        <CodeEditorNewFileModalButton />
      </div>

      <div className="mt-6 flex flex-col gap-2 max-h-[400px] overflow-auto">
        <CodeEditorFileList files={files} />
      </div>

      <div className="my-6 flex items-center gap-2">
        <Typo text="公開" className="text-gray-700 font-semibold text-sm" />
        <Switch
          checked={code?.is_public || false}
          onCheckedChange={(value) => {
            setIsPublic(value);
          }}
        />
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <CodeEditorSaveModalButton />

        <LinkButton
          url={`/codes/${code?.id}/detail`}
          label="詳細画面へ"
          target="_blank"
        />
      </div>
    </div>
  );
};
