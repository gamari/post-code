"use client";

import React, { useState } from "react";

import { SearchIcon } from "@/src/components/atoms/icons/search-icon";
import { Modal } from "@/src/components/molecules/displays/Modal";
import { useModal } from "@/src/hooks/useModal";
import { Toggle } from "@/src/components/ui/toggle";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { Input } from "@/src/components/atoms/forms/input";
import { Button } from "@/src/components/atoms/buttons/button";
import { useRouter } from "next/navigation";

export const HeaderSearch = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const [mode, setMode] = useState<"title" | "code">("title");
  const { isOpen, toggleModal } = useModal();

  const handleSearch = () => {
    // TODO 検索文字は「30文字までにする」
    toggleModal();
    if (mode === "title") {
      router.push(`/search/title/${query}`);
    } else {
      router.push(`/search/code/${query}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <SearchIcon
        className="text-gray-400 p-1 rounded-full cursor-pointer hover:bg-slate-100"
        size={"lg"}
        onClick={toggleModal}
      />

      <Modal isOpen={isOpen} onClose={toggleModal}>
        <div className="w-[400px]">
          <Flex gap={8} direction="row">
            <Toggle
              onClick={() => {
                setMode("title");
              }}
              pressed={mode == "title"}
            >
              タイトル検索
            </Toggle>
            <Toggle
              onClick={() => {
                setMode("code");
              }}
              pressed={mode == "code"}
            >
              コード検索
            </Toggle>
          </Flex>

          <Flex gap={8} className="mt-4 mb-6">
            <Input
              placeholder={
                mode === "title"
                  ? "検索したいタイトル"
                  : mode == "code"
                  ? "検索したいコード"
                  : ""
              }
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
            <Button onClick={handleSearch}>検索</Button>
          </Flex>
        </div>
      </Modal>
    </>
  );
};
