"use client";

import React from "react";

import { SearchIcon } from "lucide-react";

export const SearchBox = () => {
  const [code, setCode] = React.useState("");

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!code) return;
    if (e.key === "Enter") {
      window.location.href = `/search/${code}`;
    }
  };

  return (
    <div className="border flex items-center p-2 gap-3">
      <SearchIcon />
      <input
        type="text"
        className="bg-transparent outline-none w-[180px]"
        onKeyDown={onKeyDown}
        onChange={(e) => {
          setCode(e.target.value);
        }}
        placeholder="コード検索"
      />
    </div>
  );
};
