import React from "react";
import { Button } from "../../atoms/forms/button";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <Button asChild variant="outline">
      <Link
        href="/login"
        className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
      >
        ログイン
      </Link>
    </Button>
  );
};
