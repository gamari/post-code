"use client";

import React, { useEffect } from "react";

import { SideLink } from "./SideLink";
import { BellIcon } from "lucide-react";
import { useNotificationsContext } from "@/src/contexts/NotificationsProvider";

export const SideNotifyLink = () => {
  const { isNotify } = useNotificationsContext();

  return (
    <div className="relative">
      {isNotify && (
        <div className="h-3 w-3 bg-sky-500 rounded-full absolute -top-1 left-4"></div>
      )}
      <SideLink
        url="/dashboard/notify"
        label="通知"
        Icon={<BellIcon className="w-5 h-5" />}
      />
    </div>
  );
};
