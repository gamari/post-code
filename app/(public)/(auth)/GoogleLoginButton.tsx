"use client";

import React from "react";

import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { GoogleButton } from "@/src/components/molecules/forms/buttons/google-button";

export const GoogleLoginButton = () => {
  const { client } = useSupabase();

  const handleLogin = async () => {
    await client?.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
      },
    });
  };

  return <GoogleButton onClick={handleLogin} label="Googleでログイン" />;
};
