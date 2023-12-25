import { LinkText } from "@/src/components/molecules/displays/link-text";
import { HilightCodeViewer } from "@/src/components/organisms/codes/HilightCodeViewer";
import { FileViewer } from "@/src/components/organisms/files/FileViewer";
import { CODES_DETAIL_URL } from "@/src/libs/constants/urls";
import { Code, SearchResultCode } from "@/src/types";
import React from "react";

interface Props {
  query: string;
  codes: SearchResultCode[];
}

export const SearchCodeResultList = ({ codes, query }: Props) => {
  return (
    <div className=" flex flex-col gap-10">
      {codes.map((code) => {
        return (
          <div
            key={code.id}
            className="flex flex-col bg-white rounded-md shadow-md"
          >
            <div className="border-b p-2">
              <LinkText
                url={CODES_DETAIL_URL(code.id)}
                label={code.title}
                className="font-bold te"
              />
            </div>

            <div className="p-4">
              <HilightCodeViewer code={code.file.content || ""} query={query} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
