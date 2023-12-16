import React from "react";
import { Container } from "../base/container";
import { Typo } from "../base/typo";
import { MockBlock } from "../base/mock-block";

export const AboutSection = () => {
  return (
    <section className="py-12">
      <Container>
        <div className="flex flex-row">
          <div className="flex-1">
            <MockBlock height={300} />
          </div>

          <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6">
            <Typo type="h2" text="About" />
            <p>BadCodesとは、悪いコードを収集し、どうすればよくなるかを議論するサイトです。</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
