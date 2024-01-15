import { useFiles } from "@/src/hooks/files/useFiles";
import React from "react";
import { FileViewer } from "../../files/FileViewer";

interface Props {
  filename: string;
}

export const MarkdownPreviewerQuateFile = ({ filename }: Props) => {
  const { getFileByFilename } = useFiles();
  const file = getFileByFilename(filename);

  if (!file) return <div>対象のファイルが存在しません。</div>;

  return <FileViewer file={file} />;
};
