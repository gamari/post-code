"use client";

import { AuthUser } from "@/src/types";
import { createBrowserClient } from "@supabase/ssr";
import { SupabaseClient } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";
import { useLoading } from "../hooks/useLoading";

interface SupabaseProviderContextProps {
  client: SupabaseClient | null;
  getAuthUser: () => Promise<AuthUser | null>;
  authUser: AuthUser | null;
  loading: boolean;
}

interface SupabaseProviderProps {
  children: React.ReactNode;
}

const SupabaseProviderContext = createContext<SupabaseProviderContextProps>({
  client: null,
  getAuthUser: async () => null,
  authUser: null,
  loading: false,
});

export const SupabaseProvider = ({
  children,
}: SupabaseProviderProps): JSX.Element => {
  const { loading, startLoading, stopLoading } = useLoading(true);
  const [supabase] = useState(() =>
    createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
  );
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    async function init() {
      getAuthUser();
    }
    init();
  }, []);

  async function getAuthUser() {
    if (authUser) return authUser;

    try {
      startLoading();
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      setAuthUser(user);
      return user;
    } catch (e) {
      console.error(e);
      return null;
    } finally {
      stopLoading();
    }
  }

  return (
    <SupabaseProviderContext.Provider
      value={{
        client: supabase,
        getAuthUser,
        authUser,
        loading,
      }}
    >
      {children}
    </SupabaseProviderContext.Provider>
  );
};

export const useSupabase = (): SupabaseProviderContextProps =>
  useContext(SupabaseProviderContext);
