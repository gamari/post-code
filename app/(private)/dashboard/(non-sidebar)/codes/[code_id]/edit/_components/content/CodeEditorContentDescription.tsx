"use client";

import React from "react";

import { Textarea } from "@/src/components/atoms/forms/textarea";
import { MarkdownPreviewer } from "@/src/components/molecules/displays/markdown-previewer";
import { useCodeEditor } from "@/src/hooks/codes/editors/useCodeEditor";
import { PreviewButton } from "@/src/components/molecules/preview-button";

export const CodeEditorContentDescription = () => {
  const [isPreview, setIsPreview] = React.useState(false);

  const { code, setDescription } = useCodeEditor();

  return (
    <div>
      <div className="mt-6">
        <div className="">
          {isPreview ? (
            <div className="border p-2 h-[400px] overflow-scroll scroll-auto bg-white">
              <MarkdownPreviewer content={code?.description || ""} />
            </div>
          ) : (
            <Textarea
              value={code?.description || ""}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="全体を通したコード解説（マークダウン形式）"
              rows={20}
            />
          )}
        </div>

        <div className="flex flex-row-reverse pt-2">
          <PreviewButton isPreview={isPreview} setIsPreview={setIsPreview} />
        </div>
      </div>
    </div>
  );
};
