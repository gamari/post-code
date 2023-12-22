import React from "react";

import { Container } from "../../src/components/molecules/container";
import { Heading } from "@/src/components/atoms/texts/heading";

export const TopFavoriteCodesSection = () => {
  return (
    <section className="w-full bg-gray-100">
      <Container>
        <Heading type="h2">人気のコード</Heading>
      </Container>
    </section>
  );
};
