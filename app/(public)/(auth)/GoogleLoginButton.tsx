"use client";

import React from "react";

import { Button } from "@/src/components/atoms/buttons/button";
import { useSupabase } from "@/src/contexts/SupabaseProvider";

export const GoogleLoginButton = () => {
  const { client } = useSupabase();

  const handleLogin = async () => {
    await client?.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <Button type="button" onClick={handleLogin}>
      GoogleLogin
    </Button>
  );
};
