import React from "react";

import { Heading } from "@/src/components/atoms/texts/heading";
import { useCodeEditor } from "@/src/hooks/codes/editors/useCodeEditor";
import { SelectLanguageList } from "@/src/components/organisms/languages/SelectLanguageList";

export const CodeEditorSaveEditorLanguages = () => {
  const { code, setLanguage: setEditorLanguage } = useCodeEditor();

  return (
    <div>
      <div className="mt-6">
        <Heading type="h4">言語</Heading>

        <SelectLanguageList
          selected={code?.language}
          onSelect={setEditorLanguage}
        />
      </div>
    </div>
  );
};
