import { cn } from "@/libs/utils";
import React, { FunctionComponent } from "react";

interface Props {
  text: string;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "p";
  className?: string;
}

export const Typo: FunctionComponent<Props> = ({
  text,
  type = "p",
  className = "",
}) => {
  if (type === "h1")
    return <h1 className={cn("text-4xl font-bold", className)}>{text}</h1>;
  if (type === "h2")
    return <h2 className={cn("text-3xl font-bold", className)}>{text}</h2>;
  if (type === "h3")
    return <h3 className={cn("text-xl font-bold", className)}>{text}</h3>;
  if (type === "h4") return <h4 className={cn("text-base", className)}>{text}</h4>;
  if (type === "h5")
    return <h5 className={cn("text-sm", className)}>{text}</h5>;
  if (type === "p") return <p>{text}</p>;

  return <p>{text}</p>;
};
