import React from "react";
import { Typo } from "../base/typo";

export const TopHero = () => {
  return (
    <section>
      <div>
        <Typo type="h1" text="悪いコードから学ぶ" />
        <Typo
          type="p"
          text="このサイトでは悪いコードを集めて、それを「真似しない」または「議論する」ことを目的に立ち上げました。"
          className="mt-6"
        />
      </div>
    </section>
  );
};
