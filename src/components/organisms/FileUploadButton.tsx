import React, { useRef } from "react";
import { ImageIcon } from "../atoms/icons/image-icon";

interface Props {
  onSelect: (file: File) => void;
}

export const FileUploadButton = ({ onSelect }: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async () => {
    if (!fileInputRef?.current?.files?.length) return;

    const file = fileInputRef?.current?.files[0];

    if (file) {
      onSelect(file);
      // 次の選択のためにリセットしている
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="relative">
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileSelect}
        accept="image/*"
      />
      <ImageIcon
        onClick={() => {
          if (!fileInputRef?.current) return;
          fileInputRef.current.click();
        }}
        size="xl"
        className="rounded-full p-2 hover:bg-gray-100 cursor-pointer"
      />
    </div>
  );
};
