import React from "react";

import { Flex } from "../atoms/containers/Flex";
import { DateString } from "../atoms/texts/date-string";
import { DateIcon } from "../atoms/icons/date-icon";
import { UpdateIcon } from "../atoms/icons/update-icon";

interface Props {
  publishedDate: string | null;
  updatedDate: string | null;
}

export const DateInfo = ({ publishedDate, updatedDate }: Props) => {
  return (
    <Flex gap={12} className="text-xs text-gray-500 mt-2">
      {publishedDate && (
        <Flex gap={4}>
          <DateIcon size={"xs"} />
          <div>公開日</div>
          <div>
            <DateString value={publishedDate || ""} />
          </div>
        </Flex>
      )}
      <Flex gap={4}>
        <UpdateIcon size={"xs"} />
        <div>更新日</div>
        <div>
          <DateString value={updatedDate || ""} />
        </div>
      </Flex>
    </Flex>
  );
};
