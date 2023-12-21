import { actionSignUp } from "@/src/actions/users";
import { Button } from "@/src/components/atoms/buttons/button";
import { BackButton } from "@/src/components/molecules/back-button";
import { LinkButton } from "@/src/components/molecules/buttons/link-button";
import { LabelInput } from "@/src/components/molecules/forms/LabelInput";
import React from "react";
import { RegisterFormErrorMessage } from "./register-form-error-message";

interface Props {
  errorStatus?: string;
}

export const RegisterForm = ({ errorStatus }: Props) => {
  return (
    <div className="relative flex flex-col w-full h-full justify-center items-center">
      <BackButton url="/" className="absolute left-8 top-8 " label="ホームへ" />

      <form
        className="max-w-md border px-8 py-12 rounded-md flex flex-col w-full justify-center gap-2 text-foreground"
        action={actionSignUp}
      >
        <LabelInput
          id="username"
          name="username"
          label="ユーザー名"
          placeholder="yamada"
        />
        <LabelInput
          type="email"
          id="email"
          name="email"
          label="メールアドレス"
          placeholder="taro@example.com"
        />
        <LabelInput
          type="password"
          id="password"
          name="password"
          label="パスワード"
          placeholder="pasword"
        />

        <Button type="submit">ユーザー登録</Button>
        <LinkButton url="/register" label="ログイン画面へ" />

        {errorStatus && <RegisterFormErrorMessage status={errorStatus} />}
      </form>
    </div>
  );
};
