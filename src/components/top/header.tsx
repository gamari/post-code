import Link from "next/link";

import { Button } from "@/src/components/ui/button";
import { actionGetAuthUser } from "@/src/actions/users";
import { Logo } from "../base/logo";

export default async function Header() {
  const authUser = await actionGetAuthUser();

  return (
    <nav className="sticky top-0 w-full flex justify-center border-b border-b-foreground/10 h-16 z-[400] bg-white">
      <div className="w-full max-w-6xl flex justify-between items-center p-3 text-sm px-10">
        <div>
          <Logo />
        </div>
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
    </nav>
  );
}
