import { cookies } from "next/headers";
import DeployButton from "./DeployButton";
import { createClient } from '@/utils/supabase/server'
import AuthButton from "./AuthButton";
import Link from "next/link";


export default function Header() {
  const cookieStore = cookies()

  const canInitSupabaseClient = () => {
    try {
      createClient(cookieStore)
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
