import React from "react";

interface Props {
  status?: string;
}

import { ErrorMessage } from "@/src/components/molecules/displays/error-message";

export const LoginFormErrorMessage = ({ status }: Props) => {
  if (!status) return null;
  if (status == "9") return <ErrorMessage message={"ログインに失敗しました"} />;
  return <ErrorMessage message={"エラーが発生しました"} />;
};
