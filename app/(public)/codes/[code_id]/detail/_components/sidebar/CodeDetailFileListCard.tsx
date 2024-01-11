"use client";

import React from "react";

import { File } from "@/src/types";
import { Heading } from "@/src/components/atoms/texts/heading";
import { LinkButton } from "@/src/components/molecules/buttons/link-button";
import { CODES_EDIT_URL } from "@/src/libs/constants/urls";
import { EditIcon } from "lucide-react";
import { useBottomContainer } from "@/src/hooks/useBottomContainer";
import { useCodeDetail } from "../../_hooks/useCodeDetail";
import { CodeDetailFileList } from "./CodeDetailFile-List";

interface Props {
  files: File[];
  isAuthor: boolean;
  codeId: number;
}

export const CodeDetailFileListCard = ({ files, isAuthor, codeId }: Props) => {
  const { openContainer } = useBottomContainer();
  const { selectedFile, selectFile } = useCodeDetail();

  const onSelectFile = (file: File) => {
    if (selectedFile?.id === file.id) {
      selectFile(undefined);
      return;
    }
    selectFile(file);
    openContainer();
  };

  return (
    <div className="rounded-md bg-white w-full p-5">
      <div>
        <Heading className="border-b pb-1">ファイル一覧</Heading>

        <CodeDetailFileList files={files} onSelectFile={onSelectFile} />
      </div>

      {isAuthor && (
        <LinkButton
          url={CODES_EDIT_URL(codeId)}
          label="編集"
          Icon={<EditIcon className="h-4 w-4 mr-2 " />}
          className="bg-gray-100 border-none mt-4"
        />
      )}
    </div>
  );
};
