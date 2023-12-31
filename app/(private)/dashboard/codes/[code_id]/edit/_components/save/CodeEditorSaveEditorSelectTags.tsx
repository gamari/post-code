import React, { useState } from "react";

import { Heading } from "@/src/components/atoms/texts/heading";
import { useCodeEditor } from "@/src/hooks/codes/editors/useCodeEditor";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { Tag } from "@/src/types";
import { fetchOrCreateTag } from "@/src/libs/externals/supabase/queries/tags";

export const CodeEditorSaveEditorSelectTags = () => {
  const { code, addTag, removeTag } = useCodeEditor();

  const { client } = useSupabase();

  const [input, setInput] = useState("");

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleKeyDown = async (e: any) => {
    if (e.key === "Enter" && input) {
      if (!client) return;
      const newTag = input.trim();
      const tag = await fetchOrCreateTag(newTag, client);
      if (tag && !code?.tags?.some((tag) => tag.name === newTag)) {
        addTag(tag);
      }
      setInput("");
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
        />
      </div>
    </div>
  );
};
