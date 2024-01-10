import React from "react";
import Link from "next/link";

import { CodeAdvertisement, CodeDetail } from "@/src/types";
import { CodePanel } from "./code-panel";
import { cn } from "@/src/libs/utils";
import { SlideIn } from "../../../molecules/animation/SlideIn";
import { AdvertisementPanel } from "../../ads/AdvertisementPanel";

// TODO 広告とコードの判別をするために型をリファクタリングする
interface Props {
  codes?: (CodeAdvertisement)[];
  className?: string;
}

export const CodePanelList = ({ codes, className }: Props) => {
  if (!codes) return null;

  return (
    <div
      className={cn(
        "w-full grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-6",
        className
      )}
    >
      {codes.map((code, index) => (
        <SlideIn delay={index * 0.1} from="bottom" key={code.id}>
          {code?.isAd ? (
            <AdvertisementPanel />
          ) : (
            <Link href={`/codes/${code.id}/detail`}>
              <CodePanel
                code={code}
                className="cursor-pointer hover:opacity-80"
              />
            </Link>
          )}
        </SlideIn>
      ))}
    </div>
  );
};
