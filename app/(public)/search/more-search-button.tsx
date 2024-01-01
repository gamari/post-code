"use client";

import React from "react";

import { Center } from "@/src/components/atoms/containers/Center";
import { DownIcon } from "@/src/components/atoms/icons/down-icon";
import { Loader } from "@/src/components/molecules/displays/Loader";

interface Props {
  loading: boolean;
  onClick: () => void;
  isDone: boolean;
}

export const MoreSearchButton = ({ loading, onClick, isDone }: Props) => {
  return (
    <Center className="w-full mt-6 mb-20">
      {loading ? (
        <Loader />
      ) : (
        <>
          {!isDone && (
            <DownIcon
              onClick={onClick}
              className="border-2 border-gray-500 rounded-full cursor-pointer hover:text-sky-500"
            />
          )}
        </>
      )}
    </Center>
  );
};
