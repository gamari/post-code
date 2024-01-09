import React from "react";

import { ErrorMessage } from "@/src/components/molecules/displays/error-message";

interface Props {
  status?: string;
}

export const RegisterFormErrorMessage = ({ status }: Props) => {
  if (status == "1")
    return (
      <ErrorMessage message={"メールアドレスかユーザー名が重複しています"} />
    );
  if (status == "2")
    return <ErrorMessage message={"確認用パスワードが間違っています"} />;
  if (status == "9")
    return <ErrorMessage message={"ユーザー登録に失敗しました"} />;

  return <ErrorMessage message={"エラーが発生しました"} />;
};
