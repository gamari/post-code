"use client";

import { NotificationsProvider } from "@/src/contexts/NotificationsProvider";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const PrivateProviders = ({ children }: Props) => {
  return <NotificationsProvider>{children}</NotificationsProvider>;
};
