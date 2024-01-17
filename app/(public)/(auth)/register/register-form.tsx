"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { actionSignUp } from "@/src/actions/users";
import { Button } from "@/src/components/atoms/forms/button";
import { BackButton } from "@/src/components/molecules/forms/buttons/back-button";
import { LinkButton } from "@/src/components/molecules/forms/buttons/link-button";
import { LabelInput } from "@/src/components/molecules/forms/LabelInput";
import { RegisterFormErrorMessage } from "./register-form-error-message";
import { Heading } from "@/src/components/atoms/texts/heading";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { useLoading } from "@/src/hooks/useLoading";
import { GithubSignupButton } from "../GithubSignupButton";
import { Input } from "@/src/components/atoms/forms/input";

interface Props {
  errorStatus?: string;
}

export const RegisterForm = ({ errorStatus }: Props) => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const { loading, startLoading, stopLoading } = useLoading();

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={12}
      className="relative w-full h-full my-4"
    >
      <BackButton url="/" className="absolute left-8 top-8 " label="ホームへ" />

      <form
        className="max-w-md bg-white border px-10 py-12 rounded-md flex flex-col items-center w-full justify-center gap-4 text-foreground"
        action={actionSignUp}
        onSubmit={() => {
          startLoading();
          setTimeout(() => {
            stopLoading();
          }, 2000);
        }}
      >
        <Heading>ユーザー登録画面</Heading>
        <div className="w-full">
          <Heading type="h4" className="mb-1">
            メールアドレス
          </Heading>
          <Input
            type={"email"}
            id={"email"}
            name={"email"}
            placeholder={"postcode@example.com"}
            autoComplete={"off"}
            className="shadow-none"
          />
        </div>

        <div className="w-full">
          <Heading type="h4" className="mb-1">
            ユーザー名
          </Heading>
          <Input
            type={"text"}
            id={"username"}
            name={"username"}
            placeholder={"ユーザー名"}
            autoComplete={"off"}
            className="shadow-none"
          />
        </div>

        <div className="w-full">
          <Heading type="h4" className="mb-1">
            パスワード
          </Heading>
          <Input
            id="password"
            name="password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder={"password"}
            autoComplete={"off"}
            className="shadow-none"
          />
        </div>

        <div className="w-full">
          <Heading type="h4" className="mb-1">
            パスワード確認
          </Heading>
          <Input
            id={"password2"}
            name={"password2"}
            value={passwordConfirm}
            type={"password2"}
            onChange={(e) => {
              if (password !== e.target.value) {
                setError("パスワードが一致しません");
              } else {
                setError("");
              }
              setPasswordConfirm(e.target.value);
            }}
            placeholder={"password2"}
            autoComplete={"off"}
            className="shadow-none"
          />

          <div>{error && <p className="text-red-500">{error}</p>}</div>
        </div>

        <div className="text-gray-600 text-sm py-2">
          <Link href="/terms" className="text-blue-500 hover:underline">
            利用規約
          </Link>
          に同意の上、登録を行ってください。
        </div>

        <Button
          type="submit"
          className="mt-3 w-full"
          disabled={loading || password != passwordConfirm || !password}
        >
          ユーザー登録
        </Button>
        <LinkButton url="/login" label="ログイン画面へ" />

        {errorStatus && <RegisterFormErrorMessage status={errorStatus} />}

        <Flex direction="column" gap={8} className="w-full mt-3 pt-2">
          <Heading type="h4">ソーシャルアカウントで登録</Heading>
          <GithubSignupButton />
        </Flex>
      </form>
    </Flex>
  );
};
