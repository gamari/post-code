import React, { useRef, useState } from "react";

import { cn } from "@/src/libs/utils";
import { MarkdownPreviewer } from "./utils/previewer/MarkdownPreviewer";
import { Textarea } from "../atoms/forms/textarea";
import { PreviewButton } from "../molecules/preview-button";
import { Flex } from "../atoms/containers/Flex";
import { FileUploadButton } from "./FileUploadButton";
import { Toggle } from "../ui/toggle";
import { FaCheck } from "react-icons/fa6";

interface Props {
  className?: string;
  value: string;
  setValue: (value: string) => void;
  onSubmit?: () => void;
  rows?: number;
  placeholder?: string;
  maxLength?: number;
  onPasteImage?: (file: File) => Promise<string | undefined>;
  disabled?: boolean;
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
}: Props) => {
  const [isPreview, setIsPreview] = useState(false);

  const handleOnSelectImage = (file: File) => {
    onPasteImage && onPasteImage(file);
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
        <div className="border p-6 h-[600px] overflow-scroll scroll-auto bg-white">
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
          {!isPreview && <FileUploadButton onSelect={handleOnSelectImage} />}
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
