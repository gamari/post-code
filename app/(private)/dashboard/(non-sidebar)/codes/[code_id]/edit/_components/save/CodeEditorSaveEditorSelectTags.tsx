import React, { useState } from "react";

import { Heading } from "@/src/components/atoms/texts/heading";
import { useCodeEditor } from "@/app/(private)/dashboard/(non-sidebar)/codes/[code_id]/edit/_hooks/useCodeEditor";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { Tag } from "@/src/types";
import { fetchOrCreateTag } from "@/src/libs/externals/supabase/queries/tags";
import { useAlert } from "@/src/hooks/useAlert";

export const CodeEditorSaveEditorSelectTags = () => {
  const { errorAlert } = useAlert();
  const { code, addTag, removeTag } = useCodeEditor();

  const { client } = useSupabase();

  const [input, setInput] = useState("");

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleKeyDown = async (e: any) => {
    if (e.key === "Enter" && input) {
      if (!client) return;

      try {
        const newTag = input.trim();
        if (!newTag) throw new Error("タグを入力してください");
        if (newTag.length > 20) throw new Error("タグは20文字以内で入力してください");
        const tag = await fetchOrCreateTag(newTag, client);
        if (tag && !code?.tags?.some((tag) => tag.name === newTag)) {
          addTag(tag);
        }
        setInput("");
      } catch (e) {
        errorAlert("タグの追加に失敗しました", e);
      }
    }
  };

  return (
    <div>
      <div className="mt-6">
        <Heading type="h4">タグ(3つまで)</Heading>
      </div>

      <div className="p-2 flex items-center flex-wrap border rounded-md w-[400px] bg-white">
        <div className="flex flex-row gap-2">
          {code?.tags?.map((tag) => (
            <div
              key={`tag-${tag.id}`}
              className="bg-gray-300 rounded-md p-1 cursor-pointer mb-3"
              onClick={() => {
                removeTag(tag);
              }}
            >
              {tag.name}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="w-full outline-none"
          disabled={(code?.tags?.length || 0) >= 3}
          maxLength={20}
        />
      </div>
    </div>
  );
};
