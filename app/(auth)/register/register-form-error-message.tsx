import React from "react";

import { Typo } from "@/src/components/atoms/texts/typo";

interface Props {
  status?: string;
}

export const RegisterFormErrorMessage = ({ status }: Props) => {
  if (status == "9")
    return (
      <Typo text="ユーザー登録に失敗しました。" className="text-red-500" />
    );

  return <div>{status}</div>;
};
