import { cookies } from "next/headers";
import AuthButton from "../../auth/auth-button/auth-button";
import Link from "next/link";
import { getServerClient } from "@/libs/externals/supabase/admin-client";


export default function Header() {
  const cookieStore = cookies()

  const canInitSupabaseClient = () => {
    try {
      getServerClient(cookieStore)
      return true
    } catch (e) {
      return false
    }
  }
  
  const isSupabaseConnected = canInitSupabaseClient()

  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
        <div>
          <Link href="/">
            Logo
          </Link>
        </div>
        {isSupabaseConnected && <AuthButton />}
      </div>
    </nav>
  );
}
