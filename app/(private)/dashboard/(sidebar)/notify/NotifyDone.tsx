"use client";

import { useNotificationsContext } from "@/src/contexts/NotificationsProvider";
import React, { useEffect } from "react";

export const NotifyDone = () => {
  const { setIsNotify } = useNotificationsContext();

  useEffect(() => {
    setIsNotify(false);
  }, []);

  return null;
};
