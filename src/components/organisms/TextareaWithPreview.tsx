import { cn } from "@/src/libs/utils";
import React from "react";
import { MarkdownPreviewer } from "../molecules/displays/markdown-previewer";
import { Textarea } from "../atoms/forms/textarea";
import { PreviewButton } from "../molecules/preview-button";

interface Props {
  className?: string;
  value: string;
  setValue: (value: string) => void;
  onSubmit?: () => void;
  rows?: number;
  placeholder?: string;
  maxLength?: number;
}

export const TextareaWithPreview = ({
  value,
  setValue,
  className,
  onSubmit,
  rows = 4,
  placeholder,
  maxLength,
}: Props) => {
  const [isPreview, setIsPreview] = React.useState(false);

  return (
    <div className={cn("", className)}>
      {isPreview ? (
        <div className="border p-2 h-[400px] overflow-scroll scroll-auto bg-white">
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
        />
      )}

      <div className="flex flex-row-reverse pt-2">
        <PreviewButton isPreview={isPreview} setIsPreview={setIsPreview} />
      </div>
    </div>
  );
};
