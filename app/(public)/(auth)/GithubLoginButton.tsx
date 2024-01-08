import { GithubButton } from "@/src/components/molecules/buttons/github-button";
import { useSupabase } from "@/src/contexts/SupabaseProvider";
import React from "react";

export const GithubLoginButton = () => {
  const { client } = useSupabase();

  const handleLogin = async () => {
    await client?.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
      },
    });
  };
  return <GithubButton label="Githubでログインする" onClick={handleLogin} />;
};
