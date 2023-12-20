import React from "react";
import { Container } from "../../src/components/molecules/container";
import { MockBlock } from "../../src/components/molecules/displays/mock-block";
import { Heading } from "@/src/components/atoms/texts/heading";
import { Description } from "@/src/components/atoms/texts/description";

export const TopAboutSection = () => {
  return (
    <section className="py-12">
      <Container>
        <div className="flex flex-row">
          <div className="flex-1">
            <MockBlock height={300} />
          </div>

          <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6">
            <Heading type="h2">BadCodesとは？</Heading>
            <Description>BadCodesとは、悪いコードを収集し、</Description>
            <Description>
              どうすれば良いコードにできるかを議論するためのサイトです。
            </Description>
          </div>
        </div>
      </Container>
    </section>
  );
};
