import { convertFilenameToFiletype } from "@/src/libs/editors";
import { File } from "@/src/types";
import React from "react";

import { CodeViewer } from "./CodeViewer";

interface Props {
  // code: string;
  file: File;
  query: string;
}

export const HilightCodeViewer = ({ file, query }: Props) => {
  return (
    <CodeViewer
      language={convertFilenameToFiletype(file?.name)}
      content={file.content || ""}
      className="p-4"
    />
  );
};
