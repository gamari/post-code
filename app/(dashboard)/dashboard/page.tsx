import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";

import { createServerClient } from "@/libs/supabase/server";

import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreateCodeButton } from "../../../components/codes/create-code-button/create-code-button";
import { CodeCard } from "../../../components/codes/code-card/code-card";

const DashboardPage = async () => {
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: codes } = await supabase
    .from("bad_codes")
    .select()
    .eq("profile_id", user?.id);

  return (
    <div>
      <div>
        <CreateCodeButton />
      </div>

      {!!codes?.length ? (
        <div>
          {codes?.map((code) => (
            <CodeCard code={code} key={code.code_id} />
          ))}
        </div>
      ) : (
        <Card>
          <CardHeader>
            <p>作成したコードが存在しません</p>
          </CardHeader>
        </Card>
      )}
    </div>
  );
};

export default DashboardPage;
