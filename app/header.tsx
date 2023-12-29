"use client";

import { SearchBox } from "../src/components/organisms/search/SearchBox";
import { cn } from "@/src/libs/utils";
import { TextLinkLogo } from "@/src/components/molecules/text-link-logo";
import { APP_TITLE } from "@/src/libs/constants";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { LoginButton } from "@/src/components/molecules/buttons/login-button";
import { DashboardButton } from "@/src/components/molecules/buttons/dashboard-button";

export default function Header() {
  const { authUser, loading } = useSupabase();

  return (
    <nav
      className={cn(
        "z-[100] sticky top-0 w-full flex justify-center h-16 bg-white",
        "border-b border-b-foreground/10"
      )}
    >
      <div className="w-full max-w-6xl flex justify-between items-center p-3 text-sm px-10">
        <TextLinkLogo url="/" label={APP_TITLE} />

        <div className="flex items-center gap-4">
          {!loading && (
            <>
              <SearchBox />

              {authUser ? <DashboardButton /> : <LoginButton />}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
