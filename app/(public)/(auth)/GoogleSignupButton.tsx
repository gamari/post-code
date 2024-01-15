"use client";

import React from "react";

import { GoogleButton } from "@/src/components/molecules/forms/buttons/google-button";
import { useSupabase } from "@/src/contexts/SupabaseProvider";

export const GoogleSignupButton = () => {
  const { client } = useSupabase();

  const handleLogin = async () => {
    await client?.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
      },
    });
  };

  return <GoogleButton onClick={handleLogin} label="Googleで登録" />;
};
