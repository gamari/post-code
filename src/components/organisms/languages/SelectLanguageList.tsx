import React, { useRef, useState } from "react";
import { Relative } from "../../atoms/containers/relative";
import { Flex } from "../../atoms/containers/Flex";
import { Language } from "@/src/types";
import { useSuggestLanguageList } from "@/src/hooks/languages/useSuggestLanguageList";
import { useLanguageList } from "@/src/hooks/languages/useLanguageList";
import { useFormLanguage } from "@/src/hooks/languages/useFormLanguage";
import { Typo } from "../../atoms/texts/typo";
import { CloseIcon } from "../../atoms/icons/close-icon";

interface Props {
  onSelect: (language?: Language) => void;
  selected: Language | undefined;
}

export const SelectLanguageList = ({ selected, onSelect }: Props) => {
  const { suggestedLanguages, setSuggestedLanguages } =
    useSuggestLanguageList();
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // TODO 選択肢は外部から入れたほうが良いかもしれない
  const { languageList, getLanguage } = useLanguageList();
  const { language, setLanguage } = useFormLanguage();

  const inputRef = useRef<HTMLInputElement>(null);

  const selectLanguage = (language: Language) => {
    onSelect(language);
    setSuggestedLanguages([]);
    setLanguage("");
  };

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

  const cancelLanguageSelection = () => {
    setLanguage("");
    onSelect(undefined);
    setSuggestedLanguages([]);
  };

  const onBlug = () => {
    // TODO 直さないとダメ
    // TODO onClickと連動するためにつけている
    setTimeout(() => {
      setLanguage("");
      setSuggestedLanguages([]);
    }, 200);
  };

  return (
    <Relative>
      <div className="flex flex-row gap-2 mt-3">
        <input
          type="text"
          ref={inputRef}
          value={language}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          placeholder="言語を入力（空欄可）"
          className="rounded-lg border p-2 w-[200px] outline-none focus:border focus:border-sky-500"
          onBlur={onBlug}
        />

        <Flex
          alignItems="center"
          gap={8}
          className="border p-1  text-sm text-gray-600"
        >
          {selected ? (
            <>
              <Typo
                text={getLanguage(selected?.id)?.display || ""}
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
        </Flex>
      </div>

      {suggestedLanguages.length > 0 && (
        <ul className="border border-gray-sky rounded-md absolute top-10 bg-white z-[400] shadow-lg">
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
    </Relative>
  );
};
