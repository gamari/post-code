import React from "react";

import { ErrorMessage } from "@/src/components/molecules/displays/error-message";

interface Props {
  status?: string;
}

export const RegisterFormErrorMessage = ({ status }: Props) => {
  if (status == "9")
    return <ErrorMessage message={"ユーザー登録に失敗しました"} />;

  return <ErrorMessage message={"エラーが発生しました"} />;
};
