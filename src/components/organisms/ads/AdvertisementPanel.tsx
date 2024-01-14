"use client";

import React, { useEffect, useState } from "react";

import { Flex } from "../../atoms/containers/Flex";
import { cn } from "@/src/libs/utils";
import { AdBook } from "@/src/types";
import { fetchRandomAdBook } from "@/src/libs/externals/supabase/queries/ad_books";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import Link from "next/link";
import { fetchCreateAdView } from "@/src/libs/externals/supabase/queries/ad_views";

interface Props {
  className?: string;
}

export const AdvertisementPanel = ({ className }: Props) => {
  const { client } = useSupabase();
  const [data, setData] = useState<AdBook>();

  useEffect(() => {
    const init = async () => {
      if (!client) return;
      const book = await fetchRandomAdBook(client);
      setData(book);
      // TODO 要検証
      // await fetchCreateAdView(book?.id, client);
    };
    init();
  }, []);

  return (
    <Link href={data?.amazon_link || ""} target="_blank">
      <Flex
        className={cn("px-6 py-8 rounded-lg bg-white min-h-[124px]", className)}
      >
        <div>image</div>
        <div>
          <div>{data?.title}</div>
          <div>{data?.description}</div>
        </div>
      </Flex>
    </Link>
  );
};
