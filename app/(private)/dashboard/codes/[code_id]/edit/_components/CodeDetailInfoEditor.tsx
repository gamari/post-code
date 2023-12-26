"use client";

import React, { useState } from "react";

import { Textarea } from "@/src/components/atoms/forms/textarea";
import { cn } from "@/src/libs/utils";
import { Heading } from "@/src/components/atoms/texts/heading";
import { useGetEditorCode } from "@/src/hooks/codes/editors/getter/useGetEditorCode";
import { useSetEditorCode } from "@/src/hooks/codes/editors/setter/useSetEditorCode";
import { Typo } from "@/src/components/atoms/texts/typo";
import { Switch } from "@/src/components/ui/switch";

import { Language } from "@/src/types";
import { CloseIcon } from "@/src/components/atoms/icons/close-icon";

const mockLanguages: Language[] = [
  {
    id: 1,
    name: "javascript",
    display: "JavaScript",
  },
  {
    id: 2,
    name: "python",
    display: "Python",
  },
];

function getLanguageName(id: number) {
  return mockLanguages.find((lang) => lang.id === id)?.name;
}

interface Props {
  className?: string;
}

export const CodeDetailInfoEditor = ({ className }: Props) => {
  const { code } = useGetEditorCode();
  const { setDescription, setIsPublic, setLanguage } = useSetEditorCode();

  // TODO リファクタリング
  const [languageInput, setLanguageInput] = useState("");
  const [suggestedLanguages, setSuggestedLanguages] = useState<Language[]>([]);

  const handleLanguageInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = e.target.value;
    setLanguageInput(input);
    if (!input) {
      setSuggestedLanguages([]);
      return;
    }

    const filteredLanguages = mockLanguages.filter((lang) =>
      lang.name.toLowerCase().startsWith(input.toLowerCase())
    );
    setSuggestedLanguages(filteredLanguages);
  };

  const selectLanguage = (language: Language) => {
    setLanguageInput(language.display);
    setLanguage(language.id);
    setSuggestedLanguages([]);
    setLanguageInput("");
  };

  const cancelLanguageSelection = () => {
    setLanguage(null);
    setLanguageInput("");
    setSuggestedLanguages([]);
  };

  return (
    <div className={cn("", className)}>
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

      <div>
        <Typo text="言語" className="text-gray-700 font-semibold text-sm" />
        <div className="flex flex-row">
          <input
            type="text"
            value={languageInput}
            onChange={handleLanguageInputChange}
            placeholder="言語を入力"
            className="border p-2"
          />
          {code?.language && (
            <div className="border p-1 flex items-center gap-2">
              <Typo
                text={getLanguageName(code.language) || ""}
                className="text-gray-700 font-semibold text-sm ml-2"
              />
              <CloseIcon onClick={cancelLanguageSelection} className="cursor-pointer" />
            </div>
          )}
        </div>
        {suggestedLanguages.length > 0 && (
          <ul className="border p-2">
            {suggestedLanguages.map((language) => (
              <li
                key={language.id}
                onClick={() => selectLanguage(language)}
                className="cursor-pointer hover:bg-gray-200"
              >
                {language.display}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="my-6 flex items-center gap-2">
        <Typo text="公開設定" className="text-gray-700 font-semibold text-sm" />
        <Switch
          checked={code?.is_public || false}
          onCheckedChange={(value) => {
            setIsPublic(value);
          }}
        />
      </div>
    </div>
  );
};
