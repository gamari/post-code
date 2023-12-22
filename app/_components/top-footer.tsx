import React from "react";
import { Container } from "../../src/components/molecules/container";

export const TopFooter = () => {
  return (
    <footer className="border-t py-12 w-full bg-white">
      <Container>
        <div className="flex flex-row items-center justify-between">
          <div>left</div>
          <div>right</div>
        </div>
      </Container>
    </footer>
  );
};
