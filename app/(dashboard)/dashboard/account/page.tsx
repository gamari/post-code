import React from "react";

import { actionGetMySelf } from "@/src/actions/users";
import { AccountForm } from "@/src/components/auth/client/AccountForm";
import { getServerClient } from "@/src/libs/externals/supabase/admin-client";
import { redirect } from "next/navigation";
import { FaDoorOpen } from "react-icons/fa6";
import { Button } from "@/src/components/ui/button";

const AccountPage = async () => {
  const user = await actionGetMySelf();

  if (!user) {
    return <div>ログインしてください</div>;
  }

  const signOut = async () => {
    "use server";
    const supabase = getServerClient();

    await supabase.auth.signOut();
    return redirect("/login");
  };

  return (
    <div className="p-6">
      <AccountForm user={user} />

      {/* TODO ツール */}
      <div>
        <form action={signOut} className="p-5">
          <Button
            type="submit"
            variant="outline"
            className="border border-red-500 hover:opacity-80 hover:text-red-500 text-red-500 flex flex-row items-center gap-1"
          >
            <FaDoorOpen className="h-5 w-5" />
            ログアウト
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AccountPage;
