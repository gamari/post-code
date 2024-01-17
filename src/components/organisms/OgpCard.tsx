"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { useLoading } from "@/src/hooks/useLoading";
import { Flex } from "../atoms/containers/Flex";
import { Skeleton } from "../molecules/displays/skeleton";
import { CodeIcon } from "../atoms/icons/code-icon";
import Link from "next/link";
import { cn } from "@/src/libs/utils";

interface Props {
  url: string;
  className?: string;
}

interface OgpData {
  title: string;
  description: string;
  url: string;
  image: string;
}

export const OgpCard = ({ url, className }: Props) => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [data, setData] = useState<OgpData>();

  useEffect(() => {
    if (data) return;
    startLoading();
    fetch(`/api/ogp?url=${encodeURIComponent(url)}`, {
      cache: "force-cache",
      next: {
        revalidate: 3600,
      },
    })
      .then((payload) => {
        if (payload.ok) {
          return payload.json();
        } else {
          throw new Error("OGP情報取得に失敗しました。");
        }
      })
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        stopLoading();
      })
      .catch((e) => {
        setData(undefined);
      });
  }, [url]);

  if (loading)
    return (
      <div className={cn("border rounded-md", className)}>
        <Skeleton rows={2} />
      </div>
    );

  return (
    <Link href={data?.url || url || ""} className={cn("w-full", className)}>
      <Flex className="relative border rounded-md" gap={12}>
        {data ? (
          <>
            <div>
              {data?.image && (
                <Image
                  alt="no-image"
                  src={data?.image || ""}
                  width={200}
                  height={200}
                  className="object-cover"
                />
              )}
            </div>
            <Flex gap={8} direction="column" className="p-4">
              <div className="text-lg text-gray-600 font-bold">
                {data?.title}
              </div>
              <div className="text-sm text-gray-500">{data?.description}</div>
            </Flex>
          </>
        ) : (
          <div className="p-4">
            <div>このリンクは非公開または存在しないため表示できません</div>
            <div className="text-sm">({url})</div>
          </div>
        )}
        <Flex
          direction="row"
          gap={4}
          alignItems="center"
          className="absolute bottom-2 right-2 text-sm text-gray-600"
        >
          <CodeIcon size={"sm"} />
          <span>PostCode</span>
        </Flex>
      </Flex>
    </Link>
  );
};
