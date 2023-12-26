import React, { useEffect, useRef, useState } from "react";

import { CloseIcon } from "@/src/components/atoms/icons/close-icon";
import { Heading } from "@/src/components/atoms/texts/heading";
import { Typo } from "@/src/components/atoms/texts/typo";
import { useGetEditorCode } from "@/src/hooks/codes/editors/getter/useGetEditorCode";
import { useGetLanguageList } from "@/src/hooks/codes/languages/useGetLanguageList";
import { useSetEditorCode } from "@/src/hooks/codes/editors/setter/useSetEditorCode";
import { useSuggestLanguageList } from "@/src/hooks/codes/languages/useSuggestLanguageList";
import { useFormLanguage } from "@/src/hooks/codes/languages/useFormLanguage";
import { Language } from "@/src/types";

export const CodeEditorSaveEditorLanguages = () => {
  const { code } = useGetEditorCode();
  const { setLanguage: setEditorLanguage } = useSetEditorCode();

  const { languageList, getLanguageName } = useGetLanguageList();
  const { language, setLanguage } = useFormLanguage();
  const { suggestedLanguages, setSuggestedLanguages } =
    useSuggestLanguageList();

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown" && suggestedLanguages.length > 0) {
      e.preventDefault();
      setSelectedIndex((prevIndex) =>
        prevIndex < suggestedLanguages.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp" && suggestedLanguages.length > 0) {
      e.preventDefault();
      setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      selectLanguage(suggestedLanguages[selectedIndex]);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setLanguage(input);
    if (!input) {
      setSuggestedLanguages([]);
      return;
    }

    // 先頭4件まで
    const filteredLanguages = languageList
      .filter((lang) => lang.name.toLowerCase().startsWith(input.toLowerCase()))
      .slice(0, 4);
    setSuggestedLanguages(filteredLanguages);
  };

  const selectLanguage = (language: Language) => {
    console.log(language);
    setEditorLanguage(language);
    setSuggestedLanguages([]);
    setLanguage("");
  };

  const cancelLanguageSelection = () => {
    setLanguage("");
    setEditorLanguage(undefined);
    setSuggestedLanguages([]);
  };

  const onBlug = () => {
    setLanguage("");
    setSuggestedLanguages([]);
  };

  return (
    <div>
      <div className="mt-6">
        <Heading type="h4">言語</Heading>

        <div className="relative">
          <div className="flex flex-row gap-2 mt-3">
            <input
              type="text"
              ref={inputRef}
              value={language}
              onChange={onChange}
              onKeyDown={handleKeyDown}
              placeholder="言語を入力"
              className="border p-2 w-[200px] outline-none focus:border focus:border-sky-500"
              onBlur={onBlug}
            />

            <div className="flex items-center gap-2 border p-1  text-sm text-gray-600">
              {code?.language ? (
                <>
                  <Typo
                    text={getLanguageName(code?.language?.id) || ""}
                    className="text-gray-700 font-semibold text-sm ml-2"
                  />
                  <CloseIcon
                    onClick={cancelLanguageSelection}
                    className="cursor-pointer"
                  />
                </>
              ) : (
                <div className="px-2">未選択</div>
              )}
            </div>
          </div>

          {suggestedLanguages.length > 0 && (
            <ul className="border absolute top-10 bg-white z-[400]">
              {suggestedLanguages.map((language, index) => (
                <li
                  key={language.id}
                  onClick={() => selectLanguage(language)}
                  className={`p-2 cursor-pointer hover:bg-gray-100 ${
                    index === selectedIndex ? "bg-gray-200" : ""
                  }`}
                >
                  {language.display}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
