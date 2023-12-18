import React from "react";
import { Container } from "../base/container";

export const TopFooter = () => {
  return (
    <footer className="border-t py-12">
      <Container>
        <div className="flex flex-row items-center justify-between">
          <div>left</div>
          <div>right</div>
        </div>
      </Container>
    </footer>
  );
};
