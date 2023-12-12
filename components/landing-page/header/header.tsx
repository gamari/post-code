import Link from "next/link";

import { Button } from "@/components/common/ui/button";
import { actionGetAuthUser } from "@/actions/users";

export default async function Header() {
  const authUser = await actionGetAuthUser();

  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-6xl flex justify-between items-center p-3 text-sm">
        <div>
          <Link href="/">
            <span className="text-2xl font-bold">BadCodes</span>
          </Link>
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
