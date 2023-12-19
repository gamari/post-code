import React from "react";
import { Badge } from "../../ui/badge";

interface Props {
  is_public: boolean;
  trueText?: string;
  falseText?: string;
}

export const ToggleBudge = ({ is_public, trueText, falseText }: Props) => {
  if (is_public) return <Badge variant="default">{trueText}</Badge>;

  return <Badge variant="outline">{falseText}</Badge>;
};
