import React from "react";
import { Badge } from "../../atoms/badges/badge";

interface Props {
  is_public: boolean;
  trueText?: string;
  falseText?: string;
}

export const ToggleBudge = ({ is_public, trueText, falseText }: Props) => {
  if (is_public) return <Badge variant="default" className="bg-gray-800">{trueText}</Badge>;

  return <Badge variant="outline" className="border-gray-400 text-gray-600 text-xs">{falseText}</Badge>;
};
