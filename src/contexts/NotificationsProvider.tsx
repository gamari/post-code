"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useSupabase } from "./SupabaseProvider";
import { fetchCheckOwnNotification } from "../libs/externals/supabase/queries/notifications";

interface ContextProps {
  isNotify: boolean;
  setIsNotify: (isNotify: boolean) => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

const NotificationsContext = createContext<ContextProps>({
  isNotify: false,
  setIsNotify: () => {},
});

export const NotificationsProvider = ({ children }: ProviderProps) => {
  const [isNotify, setIsNotify] = useState(false);
  const { client } = useSupabase();

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
    <NotificationsContext.Provider value={{ isNotify, setIsNotify }}>
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotificationsContext = () => {
  return useContext(NotificationsContext);
};
