"use client";

import React from "react";
import Link from "next/link";

import { BadCodeDetail } from "@/src/types";
import { CodePanel } from "./code-panel";
import { cn } from "@/src/libs/utils";
import { SlideIn } from "../../../molecules/animation/SlideIn";

interface Props {
  codes?: BadCodeDetail[];
  className?: string;
}

export const CodePanelList = ({ codes, className }: Props) => {
  if (!codes) return null;

  return (
    <div
      className={cn("w-full grid grid-cols-1 md:grid-cols-2 gap-6", className)}
    >
      {codes.map((code, index) => (
        <SlideIn delay={index * 0.1} from="bottom" key={code.id}>
          <Link href={`/codes/${code.id}/detail`}>
            <CodePanel
              code={code}
              className="cursor-pointer hover:opacity-80"
            />
          </Link>
        </SlideIn>
      ))}
    </div>
  );
};