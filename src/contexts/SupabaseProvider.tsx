"use client";

import { AuthUser } from "@/src/types";
import { createBrowserClient } from "@supabase/ssr";
import { SupabaseClient } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";

interface SupabaseProviderContextProps {
  client: SupabaseClient | null;
  getAuthUser: () => Promise<AuthUser | null>;
  authUser: AuthUser | null;
}

interface SupabaseProviderProps {
  children: React.ReactNode;
}

const SupabaseProviderContext = createContext<SupabaseProviderContextProps>({
  client: null,
  getAuthUser: async () => null,
  authUser: null,
});

export const SupabaseProvider = ({
  children,
}: SupabaseProviderProps): JSX.Element => {
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

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    setAuthUser(user);

    return user;
  }

  return (
    <SupabaseProviderContext.Provider
      value={{
        client: supabase,
        getAuthUser,
        authUser,
      }}
    >
      {children}
    </SupabaseProviderContext.Provider>
  );
};

export const useSupabase = (): SupabaseProviderContextProps =>
  useContext(SupabaseProviderContext);
