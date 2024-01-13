import React from "react";
import { getServerClient } from "@/src/libs/externals/supabase/server-client";
import { redirect } from "next/navigation";
import { FaDoorOpen } from "react-icons/fa6";
import { Button } from "@/src/components/atoms/forms/button";

export const LogoutButton = () => {
  const signOut = async () => {
    "use server";
    const supabase = getServerClient();

    await supabase.auth.signOut();
    return redirect("/login");
  };
  return (
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
  );
};
