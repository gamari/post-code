"use client";

import React from "react";
import Link from "next/link";

import { Button } from "../../atoms/forms/button";
import { useNotificationsContext } from "@/src/contexts/NotificationsProvider";

export const DashboardButton = () => {
  const { isNotify } = useNotificationsContext();

  return (
    <Button asChild className="relative">
      <Link href="/dashboard">
        ダッシュボード
        {isNotify && (
          <div className="h-3 w-3 bg-sky-500 rounded-full absolute -top-1 left-4"></div>
        )}
      </Link>
    </Button>
  );
};
