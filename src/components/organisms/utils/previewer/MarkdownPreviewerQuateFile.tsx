import { useFiles } from "@/src/hooks/files/useFiles";
import React from "react";
import { FileViewer } from "../../files/FileViewer";

interface Props {
  filename: string;
}

export const MarkdownPreviewerQuateFile = ({ filename }: Props) => {
  const { getFileByFilename } = useFiles();
  const file = getFileByFilename(filename);

  if (!file)
    return (
      <div className="text-sky-700 p-4 rounded-md border">
        <div>[{filename}]が存在しません。</div>
      </div>
    );

  return <FileViewer file={file} />;
};
