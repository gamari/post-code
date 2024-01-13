import React from "react";

import { File } from "@/src/types";
import { Typo } from "@/src/components/atoms/texts/typo";
import { MdOutlineInsertDriveFile } from "react-icons/md";
import { FileItemList } from "@/src/components/organisms/files/file-item-list";
import { useCodeDetail } from "../../_hooks/useCodeDetail";

interface Props {
  files: File[];
  onSelectFile: (file: File) => void;
}

export const CodeDetailFileList = ({ files, onSelectFile }: Props) => {
  const { selectedFile } = useCodeDetail();

  if (!files?.length) {
    return (
      <div className="mt-2 flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2 rounded-md p-2 select-none text-sm">
          <MdOutlineInsertDriveFile className="w-4 h-4" />
          <Typo text="ファイルがありません" />
        </div>
      </div>
    );
  }

  return (
    <FileItemList
      files={files}
      selectedFile={selectedFile}
      className="mt-3"
      onClick={(file) => onSelectFile(file)}
    />
  );
};
