"use client";

import React from "react";

import { Textarea } from "@/src/components/atoms/forms/textarea";
import { Heading } from "@/src/components/atoms/texts/heading";
import { MarkdownPreviewer } from "@/src/components/molecules/displays/markdown-previewer";
import { Toggle } from "@/src/components/ui/toggle";
import { useCodeEditor } from "@/src/hooks/codes/editors/useCodeEditor";
import { useCodeEditorDescription } from "@/src/hooks/codes/editors/useCodeEditorDescription";

export const CodeEditorSaveEditorDescription = () => {
  const [isPreview, setIsPreview] = React.useState(false);

  const { code } = useCodeEditor();
  const { setDescription } = useCodeEditorDescription();

  return (
    <div>
      <Heading type="h4" className="mb-3">
        全体説明
      </Heading>

      <div className="mt-6">
        <div className="">
          {isPreview ? (
            <div className="border p-2 max-h-[300px] overflow-scroll scroll-auto">
              <MarkdownPreviewer content={code?.description || ""} />
            </div>
          ) : (
            <Textarea
              value={code?.description || ""}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="全体を通したコード解説（空欄可）"
              rows={12}
            />
          )}
        </div>

        <div className="flex flex-row-reverse pt-2">
          <Toggle
            aria-label="Toggle italic"
            onClick={() => setIsPreview(!isPreview)}
          >
            <span>プレビュー</span>
          </Toggle>
        </div>
      </div>
    </div>
  );
};
