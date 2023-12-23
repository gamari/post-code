"use client";

import React from "react";

import { motion } from "framer-motion";
import { cn } from "@/src/libs/utils";

interface Props {
  children: React.ReactNode;
  from?: "left" | "right" | "top" | "bottom";
  delay?: number;
  duration?: number;
  className?: string;
}

const initialiMapping = {
  left: {
    x: -100,
    y: 0,
  },
  right: {
    x: 100,
    y: 0,
  },
  top: {
    x: 0,
    y: -100,
  },
  bottom: {
    x: 0,
    y: 100,
  },
};

const animateMapping = {
  left: {
    x: 0,
    y: 0,
  },
  right: {
    x: 0,
    y: 0,
  },
  top: {
    x: 0,
    y: 0,
  },
  bottom: {
    x: 0,
    y: 0,
  },
};

export const SlideIn = ({
  children,
  from = "left",
  delay = 0,
  duration = 0.5,
  className = "",
}: Props) => {
  return (
    <motion.div
      initial={{
        ...initialiMapping[from],
        opacity: 0,
      }}
      animate={{
        ...animateMapping[from],
        opacity: 1,
      }}
      transition={{ duration, delay }}
      className={cn("", className)}
    >
      {children}
    </motion.div>
  );
};
