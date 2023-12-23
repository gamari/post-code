import { Heading } from "@/src/components/atoms/texts/heading";
import { Container } from "@/src/components/molecules/container";
import React from "react";

export const TopLatestCommentSection = () => {
  return (
    <section className="bg-gray-50 w-full py-12 ">
      <Container>
        <Heading type="h2">議論</Heading>
      </Container>
    </section>
  );
};
