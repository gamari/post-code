import React from "react";
import { NextPage } from "next";
import { cookies } from "next/headers";

import { createClient } from "@/utils/supabase/server";
import { CodeEditor } from "./_components/code-editor";
import Header from "@/components/Header";

interface Props {
  params: {
    code_id: string;
  };
}

const CodeEditPage: NextPage<Props> = async ({ params: { code_id } }) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: badCode } = await supabase
    .from("bad_codes")
    .select()
    .eq("code_id", code_id)
    .maybeSingle();

  return (
    <>
      <Header />
      <div>
        <CodeEditor code={badCode} />
      </div>
    </>
  );
};

export default CodeEditPage;
