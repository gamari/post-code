import React from "react";
import { Typo } from "../base/typo";

export const TopHero = () => {
  return (
    <section>
      <div className="border rounded-md bg-white p-6">
        <Typo type="h1" text="コードを良くする" />
        <Typo
          type="p"
          text="このサイトは、コーディングのバッドプラクティスを集めるためのサイトです。"
          className="mt-6"
        />
        <Typo
          type="p"
          text="どうすればよくなるか、を議論することができます。"
          className="mt-6"
        />
      </div>
    </section>
  );
};
