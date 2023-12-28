"use client";

import Link from "next/link";

import { Button } from "@/src/components/atoms/buttons/button";
import { actionGetAuthUser } from "@/src/actions/users";
import { SearchBox } from "../src/components/organisms/search/SearchBox";
import { cn } from "@/src/libs/utils";
import { TextLinkLogo } from "@/src/components/molecules/text-link-logo";
import { APP_TITLE } from "@/src/libs/constants";
import { useSupabase } from "@/src/contexts/SupabaseProvider";

export default function Header() {
  const { authUser } = useSupabase();

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
          <SearchBox />

          {authUser ? (
            <div className="flex items-center gap-4">
              <Button asChild>
                <Link href="/dashboard">ダッシュボード</Link>
              </Button>
            </div>
          ) : (
            <Button asChild variant="outline">
              <Link
                href="/login"
                className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
              >
                ログイン
              </Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
