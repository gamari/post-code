import React from "react";
import { Container } from "../../src/components/molecules/container";
import { Typo } from "../../src/components/atoms/texts/typo";

export const TopFavoriteCodesSection = () => {
  return (
    <section>
      <Container>
        <Typo type="h1" text="人気" />
      </Container>
    </section>
  );
};
