import Link from "next/link";
import { cookies } from "next/headers";

import { getServerClient } from "@/libs/externals/supabase/admin-client";
import { Button } from "@/components/ui/button";

export default async function Header() {
  const cookieStore = cookies();
  const supabase = getServerClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
        <div>
          <Link href="/">
            <span className="text-xl font-bold">BadCodes</span>
          </Link>
        </div>
        {user ? (
          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="/dashboard">ダッシュボード</Link>
            </Button>
          </div>
        ) : (
          <Link
            href="/login"
            className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
