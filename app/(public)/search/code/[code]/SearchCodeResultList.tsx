"use client";

import React from "react";

import { FileIcon } from "@/src/components/molecules/displays/file-icon";
import { LinkText } from "@/src/components/molecules/displays/link-text";
import { Logo } from "@/src/components/molecules/logo";
import { HilightCodeViewer } from "@/src/components/organisms/codes/HilightCodeViewer";
import { CODES_DETAIL_URL } from "@/src/libs/constants/urls";
import { convertFilenameToFiletype } from "@/src/libs/editors";
import { SearchResultCode } from "@/src/types";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { useSearchCodeList } from "@/src/hooks/codes/search/useSearchCodeList";
import { MoreSearchButton } from "../../more-search-button";

interface Props {
  query: string;
  codes: SearchResultCode[];
}

export const SearchCodeResultList = ({ codes: initCodes, query }: Props) => {
  const { codes, next, loading, isDone } = useSearchCodeList(initCodes);

  return (
    <Flex direction="column" gap={40}>
      {/* TODO Component化 */}
      {codes.map((code) => {
        return (
          <div
            key={`${code.id}-${code.file.id}`}
            className="flex flex-col bg-white rounded-md shadow-md w-full"
          >
            <div className="border-b p-2 flex items-center gap-2 py-2">
              <Logo size="sm" />
              <LinkText
                url={CODES_DETAIL_URL(code.id)}
                label={code.title}
                className="font-bold te"
              />
            </div>

            <div className="p-4">
              <div className="flex flex-row items-center gap-2 mb-2">
                <FileIcon
                  fileType={convertFilenameToFiletype(code.file.name)}
                />
                <span className="text-sm text-gray-600">{code.file.name}</span>
              </div>
              <HilightCodeViewer file={code.file} query={query} />
            </div>
          </div>
        );
      })}

      {/* TODO Component化 */}
      <MoreSearchButton
        loading={loading}
        isDone={isDone}
        onClick={() => {
          next(query);
        }}
      />
    </Flex>
  );
};
