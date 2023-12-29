"use client";

import React from "react";

import { Button } from "@/src/components/atoms/buttons/button";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import { GoogleButton } from "@/src/components/molecules/buttons/google-button";

export const GoogleLoginButton = () => {
  const { client } = useSupabase();

  const handleLogin = async () => {
    await client?.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <GoogleButton
      onClick={handleLogin}
      label="Googleでログイン"
    />
  );
};
