import React from "react";

import { LanguageListProvider } from "@/src/contexts/LanguageListProvider";
import { NotificationsProvider } from "@/src/contexts/NotificationsProvider";
import { SupabaseProvider } from "@/src/contexts/SupabaseProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SupabaseProvider>
      <LanguageListProvider>
        <NotificationsProvider>{children}</NotificationsProvider>
      </LanguageListProvider>
    </SupabaseProvider>
  );
};
