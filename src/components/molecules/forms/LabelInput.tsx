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
  type?: "text" | "password" | "email";
  autocomplete?: string;
}

export const LabelInput = ({
  id,
  name,
  label,
  placeholder,
  value,
  setValue,
  type = "text",
  autocomplete,
}: Props) => {
  return (
    <div className="w-full">
      <Heading type="h4" className="mb-1">{label}</Heading>
      <Input
        id={id}
        name={name}
        value={value}
        type={type}
        onChange={(e) => setValue?.(e.target.value)}
        placeholder={placeholder}
        autoComplete={autocomplete}
        className="shadow-none"
      />
    </div>
  );
};
