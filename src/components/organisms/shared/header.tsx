import Link from "next/link";

import { Button } from "@/src/components/atoms/buttons/button";
import { actionGetAuthUser } from "@/src/actions/users";
import { Logo } from "../../molecules/logo";
import { SearchBox } from "../search/SearchBox";

export default async function Header() {
  const authUser = await actionGetAuthUser();

  return (
    <nav className="sticky top-0 w-full flex justify-center border-b border-b-foreground/10 h-16  bg-white">
      <div className="w-full max-w-6xl flex justify-between items-center p-3 text-sm px-10">
        <div>
          <Logo />
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
