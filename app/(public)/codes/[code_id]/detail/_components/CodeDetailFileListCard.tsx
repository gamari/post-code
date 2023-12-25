"use client";

import React, { useEffect } from "react";

import { File } from "@/src/types";
import { useCodeDetailContext } from "@/src/contexts/CodeDetailProvider";
import { Typo } from "@/src/components/atoms/texts/typo";
import { FileItemList } from "@/src/components/organisms/files/file-item-list";
import { MdOutlineInsertDriveFile } from "react-icons/md";
import { Heading } from "@/src/components/atoms/texts/heading";
import { LinkButton } from "@/src/components/molecules/buttons/link-button";
import { CODES_EDIT_URL } from "@/src/libs/constants/urls";
import { EditIcon } from "lucide-react";

interface Props {
  files: File[];
  isAuthor: boolean;
  codeId: number;
}

export const CodeDetailFileListCard = ({ files, isAuthor, codeId }: Props) => {
  const { setSelectedFile, selectedFile } = useCodeDetailContext();

  useEffect(() => {
    if (!files?.length) return;
    setSelectedFile && setSelectedFile(files[0]);
  }, [files]);

  const onSelectFile = (file: File) => {
    setSelectedFile && setSelectedFile(file);
  };

  return (
    <div className="border rounded-md bg-white w-full p-5">
      <div>
        <Heading className="border-b pb-1">ファイル一覧</Heading>

        {!files?.length ? (
          <div className="mt-2 flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2 rounded-md p-2 select-none text-sm">
              <MdOutlineInsertDriveFile className="w-4 h-4" />
              <Typo text="ファイルがありません" />
            </div>
          </div>
        ) : (
          <FileItemList
            files={files}
            selectedFile={selectedFile}
            className="mt-3"
            onClick={(file) => onSelectFile(file)}
          />
        )}
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
