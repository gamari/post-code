"use client";

import React from "react";

import { Input } from "../../atoms/forms/input";
import { Heading } from "../../atoms/texts/heading";

interface Props {
  id?: string;
  name?: string;
  label: string;
  value?: string;
  placeholder?: string;
  setValue?: (value: string) => void;
}

export const LabelInput = ({
  id,
  name,
  label,
  placeholder,
  value,
  setValue,
}: Props) => {
  return (
    <div>
      <Heading type="h4">{label}</Heading>
      <Input
        id={id}
        name={name}
        value={value}
        onChange={(e) => setValue?.(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};
