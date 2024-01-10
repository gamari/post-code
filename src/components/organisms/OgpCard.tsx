import { useLoading } from "@/src/hooks/useLoading";
import React, { useEffect, useState } from "react";
import { Flex } from "../atoms/containers/Flex";
import Image from "next/image";
import { Skeleton } from "../molecules/displays/skeleton";
import { CodeIcon } from "../atoms/icons/code-icon";
import Link from "next/link";

interface Props {
  url: string;
}

interface OgpData {
  title: string;
  description: string;
  url: string;
  image: string;
}

export const OgpCard = ({ url }: Props) => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [data, setData] = useState<OgpData>();

  useEffect(() => {
    startLoading();
    fetch(`/api/ogp?url=${encodeURIComponent(url)}`)
      .then((payload) => payload.json())
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        stopLoading();
      });
  }, [url]);

  if (loading)
    return (
      <div className="border rounded-md">
        <Skeleton rows={2} />
      </div>
    );

  return (
    <Link href={data?.url || ""} className="w-full">
      <Flex className="relative border rounded-md" gap={12}>
        <div>
          {data?.image && (
            <Image
              alt="no-image"
              src={data?.image || ""}
              width={200}
              height={200}
              // className="object-contain"
              className="object-cover"
            />
          )}
        </div>
        <Flex gap={8} direction="column" className="p-4">
          <div className="text-lg text-gray-600 font-bold">{data?.title}</div>
          <div className="text-sm text-gray-500">{data?.description}</div>
        </Flex>

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
