import React from "react";

import { Toggle } from "../ui/toggle";
import { FaCheck } from "react-icons/fa6";

interface Props {
  isPreview: boolean;
  setIsPreview: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PreviewButton = ({ isPreview, setIsPreview }: Props) => {
  return (
    <Toggle
      aria-label="Toggle italic"
      onClick={() => setIsPreview(!isPreview)}
      pressed={isPreview}
    >
      <FaCheck className="mr-1" />
      <span>プレビュー</span>
    </Toggle>
  );
};
