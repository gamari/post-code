"use client";

import React, { useEffect } from "react";

import { SideLink } from "./SideLink";
import { BellIcon } from "lucide-react";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { fetchCheckOwnNotification } from "@/src/libs/externals/supabase/queries/notifications";

export const SideNotifyLink = () => {
  const { client } = useSupabase();
  const [isNotify, setIsNotify] = React.useState(false);

  const checkNotifications = async () => {
    if (!client) return;
    console.log("checkNotifications");
    const checked = await fetchCheckOwnNotification(client);
    setIsNotify(checked);
  };

  useEffect(() => {
    checkNotifications();

    const time = 1000 * 60 * 5;
    const intervalId = setInterval(checkNotifications, time);

    return () => clearInterval(intervalId);
  }, []);

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
