import Link from "next/link";

import { Button } from "@/src/components/atoms/buttons/button";
import { actionGetAuthUser } from "@/src/actions/users";
import { Logo } from "../src/components/molecules/logo";
import { SearchBox } from "../src/components/organisms/search/SearchBox";
import { cn } from "@/src/libs/utils";

export default async function Header() {
  const authUser = await actionGetAuthUser();

  return (
    <nav
      className={cn(
        "z-[100] sticky top-0 w-full flex justify-center h-16 bg-white",
        "border-b border-b-foreground/10"
      )}
    >
      <div className="w-full max-w-6xl flex justify-between items-center p-3 text-sm px-10">
        <div>
          <Link href="/" className="flex flex-row gap-2 items-center">
            <Logo />
            <span className="text-xl text-gray-800 font-bold">BadCodes</span>
          </Link>
        </div>

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
