"use client";

import { Input } from "@/src/components/atoms/forms/input";
import { Heading } from "@/src/components/atoms/texts/heading";
import React, { useState } from "react";

export const CheckPassword = () => {
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [error, setError] = useState("");

  return (
    <>
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
          autoComplete={"password"}
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
            setPasswordConfirm(e.target.value)
          }}
          placeholder={"password2"}
          autoComplete={"password2"}
          className="shadow-none"
        />

        <div>
            {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </>
  );
};
