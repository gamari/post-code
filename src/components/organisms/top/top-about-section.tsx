import React from "react";
import { Container } from "../../molecules/container";
import { Typo } from "../../atoms/typo";
import { MockBlock } from "../../molecules/displays/mock-block";

export const TopAboutSection = () => {
  return (
    <section className="py-12">
      <Container>
        <div className="flex flex-row">
          <div className="flex-1">
            <MockBlock height={300} />
          </div>

          <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6">
            <Typo type="h2" text="About" />
            <p>BadCodesとは、悪いコードを収集し、</p>
            <p>どうすれば良いコードにできるかを議論するためのサイトです。</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
