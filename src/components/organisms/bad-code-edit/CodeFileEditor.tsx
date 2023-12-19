import React from "react";

import { File } from "@/src/types";
import { Input } from "@/src/components/atoms/forms/input";
import { Textarea } from "@/src/components/atoms/forms/textarea";
import { cn } from "@/src/libs/utils";

interface Props {
  file?: File;
  setFile: (file: File) => void;
  className?: string;
}

export const CodeFileEditor = ({ file, setFile, className }: Props) => {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <Input
        value={file?.name || ""}
        onChange={(e) => {
          if (!file) return;
          setFile({ ...file, name: e.target.value });
        }}
      />
      <Textarea
        value={file?.content || ""}
        onChange={(e) => {
          if (!file) return;
          setFile({ ...file, content: e.target.value });
        }}
        placeholder="コードを入力"
        className="flex-1"
      />
    </div>
  );
};
