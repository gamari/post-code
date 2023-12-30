import React from "react";
import { Button } from "../../atoms/buttons/button";
import Link from "next/link";

export const DashboardButton = () => {
  return (
    <Button asChild>
      <Link href="/dashboard">ダッシュボード</Link>
    </Button>
  );
};
