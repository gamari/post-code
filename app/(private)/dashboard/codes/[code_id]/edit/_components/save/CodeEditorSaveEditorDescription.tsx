import { Textarea } from "@/src/components/atoms/forms/textarea";
import { Heading } from "@/src/components/atoms/texts/heading";
import { useGetEditorCode } from "@/src/hooks/codes/editors/getter/useGetEditorCode";
import { useSetEditorCode } from "@/src/hooks/codes/editors/setter/useSetEditorCode";
import React from "react";

export const CodeEditorSaveEditorDescription = () => {
  const { code } = useGetEditorCode();
  const { setDescription } = useSetEditorCode();

  return (
    <div>
      <Heading type="h4" className="mb-3">
        全体説明
      </Heading>

      <div className="mt-6">
        <Textarea
          value={code?.description || ""}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="全体を通したコードの解説を書いてください。"
          rows={8}
        />
      </div>
    </div>
  );
};
