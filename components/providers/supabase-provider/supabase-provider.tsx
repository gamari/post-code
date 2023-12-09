"use client";

import { createBrowserClient } from "@supabase/ssr";
import { SupabaseClient } from "@supabase/supabase-js";
import { createContext, useContext, useState } from "react";

interface SupabaseProviderContextProps {
  client: SupabaseClient | null;
}

interface SupabaseProviderProps {
  children: React.ReactNode;
}

const SupabaseProviderContext = createContext<SupabaseProviderContextProps>({
  client: null,
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

  return (
    <SupabaseProviderContext.Provider
      value={{
        client: supabase,
      }}
    >
      {children}
    </SupabaseProviderContext.Provider>
  );
};

export const useSupabase = (): SupabaseProviderContextProps =>
  useContext(SupabaseProviderContext);
