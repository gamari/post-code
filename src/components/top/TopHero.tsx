import React from "react";
import { Typo } from "../base/typo";

export const TopHero = () => {
  return (
    <section>
      <div className="border rounded-md bg-white p-6">
        <Typo type="h2" text="コードを良くするために" />
        <Typo
          type="p"
          text="このサイトは、コーディングのアンチパターンなどを集めて、「何が悪いのか」や「どうやったら良くなるのか」を議論するサイトです。"
          className="mt-6"
        />
        <Typo
          type="p"
          text="悪いコードから良いコードを書くためのヒントを見つけましょう。"
          className="mt-6"
        />
      </div>
    </section>
  );
};
