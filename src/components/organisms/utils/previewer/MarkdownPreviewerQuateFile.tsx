import { useFiles } from "@/src/hooks/files/useFiles";
import React from "react";
import { FileViewer } from "../../files/FileViewer";
import { FileIcon } from "@/src/components/molecules/displays/file-icon";
import { convertFilenameToFiletype } from "@/src/libs/editors";
import { Flex } from "@/src/components/atoms/containers/Flex";

interface Props {
  filename: string;
}

export const MarkdownPreviewerQuateFile = ({ filename }: Props) => {
  const { getFileByFilename } = useFiles();
  const file = getFileByFilename(filename);

  if (!file)
    return (
      <div className="text-sky-700 p-4 rounded-md border my-4">
        <div>[{filename}]を引用</div>
      </div>
    );

  return (
    <div>
      <Flex alignItems="center" gap={4}>
        <FileIcon fileType={convertFilenameToFiletype(file?.name)} size="xs" />
        <span>{file.name}</span>
      </Flex>
      <FileViewer file={file} />
    </div>
  );
};
