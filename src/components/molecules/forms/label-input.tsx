import React from "react";
import { Input } from "../../atoms/forms/input";
import { Typo } from "../../atoms/texts/typo";
import { Heading } from "../../atoms/texts/heading";

interface Props {
  label: string;
  value: string;
  setValue: (value: string) => void;
}

export const LabelInput = ({ label, value, setValue }: Props) => {
  return (
    <div>
      <Heading type="h4">{label}</Heading>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};
