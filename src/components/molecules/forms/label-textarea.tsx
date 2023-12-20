import React from "react";
import { Textarea } from "../../atoms/forms/textarea";
import { Typo } from "../../atoms/texts/typo";
import { Heading } from "../../atoms/texts/heading";

interface Props {
  label: string;
  value: string;
  setValue: (value: string) => void;
  rows?: number;
}

export const LabelTextarea = ({ label, value, setValue, rows = 4 }: Props) => {
  return (
    <div>
      <Heading type="h4">{label}</Heading>
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={rows}
      />
    </div>
  );
};
