import React from "react";
import { Container } from "../../molecules/container";
import { Typo } from "../../atoms/typo";

export const TopFavoriteCodesSection = () => {
  return (
    <section>
      <Container>
        <Typo type="h1" text="人気" />
      </Container>
    </section>
  );
};
