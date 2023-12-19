import React from "react";
import { Input } from "../../atoms/forms/input";
import { Typo } from "../../atoms/texts/typo";

interface Props {
  label: string;
  value: string;
  setValue: (value: string) => void;
}

export const LabelInput = ({ label, value, setValue }: Props) => {
  return (
    <div>
      <Typo type="h4" text={label} />
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};
