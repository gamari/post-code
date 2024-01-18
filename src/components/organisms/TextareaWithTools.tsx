import React, { useState } from "react";

import { cn } from "@/src/libs/utils";
import { MarkdownPreviewer } from "./utils/previewer/MarkdownPreviewer";
import { Textarea } from "../atoms/forms/textarea";
import { Flex } from "../atoms/containers/Flex";
import { FileUploadButton } from "./FileUploadButton";
import { Toggle } from "../ui/toggle";
import { FaCheck } from "react-icons/fa6";
import { useAi } from "@/src/hooks/ai/useAi";
import { useCodeEditorModalContext } from "@/app/(private)/dashboard/(non-sidebar)/codes/[code_id]/edit/_contexts/CodeEditorModalProvider";

interface Props {
  className?: string;
  value: string;
  rows?: number;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  height?: number;
  hiddenTools?: boolean;
  setValue: (value: string) => void;
  onPasteImage?: (file: File) => Promise<string | undefined>;
  onSubmit?: () => void;
  onTogglePreview?: () => void;
}

export const TextareaWithTools = ({
  value,
  setValue,
  className,
  onSubmit,
  rows = 4,
  placeholder,
  maxLength,
  onPasteImage,
  disabled,
  onTogglePreview,
  height = 600,
  hiddenTools = false,
}: Props) => {
  const [isPreview, setIsPreview] = useState(false);
  const { aiKey } = useAi();
  // hooksへ
  const { toggleAiModal } = useCodeEditorModalContext();

  const handleOnSelectImage = async (file: File) => {
    if (onPasteImage) {
      const url = await onPasteImage(file);
      setValue(value + url);
    }
  };

  const handleOnPaste = async (e: React.ClipboardEvent) => {
    const items = e.clipboardData.items;
    for (const item of items) {
      if (item.type.startsWith("image/")) {
        e.preventDefault();
        const file = item.getAsFile();
        if (!file) return;
        if (onPasteImage) {
          const url = await onPasteImage(file);
          const textarea = e.target as HTMLTextAreaElement;
          const cursorPosition = textarea.selectionStart;
          const textBeforeCursorPosition = value.substring(0, cursorPosition);
          const textAfterCursorPosition = value.substring(cursorPosition);
          setValue(textBeforeCursorPosition + url + textAfterCursorPosition);
        }
      }
    }
  };

  const handleTogglePreview = () => {
    setIsPreview(!isPreview);
    onTogglePreview && onTogglePreview();
  };

  return (
    <div className={cn("", className)}>
      {isPreview ? (
        <div
          className="border p-6 overflow-scroll scroll-auto bg-white"
          style={{
            height: height,
          }}
        >
          <MarkdownPreviewer content={value || ""} />
        </div>
      ) : (
        <Textarea
          value={value || ""}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          onSubmit={onSubmit}
          maxLength={maxLength}
          onPaste={handleOnPaste}
          disabled={disabled}
        />
      )}

      <Flex className="pt-2" alignItems="center" justifyContent="between">
        <Flex className="px-4">
          {!hiddenTools && (
            <>
              {!isPreview && (
                <Flex alignItems="center" gap={4}>
                  <FileUploadButton onSelect={handleOnSelectImage} />
                  {aiKey && (
                    <div
                      className="cursor-pointer text-xl items-center justify-center hover:bg-gray-100 p-1 rounded-full"
                      onClick={() => {
                        toggleAiModal && toggleAiModal();
                      }}
                    >
                      AI
                    </div>
                  )}
                </Flex>
              )}
            </>
          )}
        </Flex>
        <Toggle
          aria-label="Toggle italic"
          onClick={() => handleTogglePreview()}
          pressed={isPreview}
        >
          <FaCheck className="mr-1" />
          <span>プレビュー</span>
        </Toggle>
      </Flex>
    </div>
  );
};
