import React from "react";
import { Container } from "../../src/components/molecules/container";
import { LinkText } from "@/src/components/molecules/displays/link-text";

export const TopFooter = () => {
  return (
    <footer className="border-t py-12 w-full bg-white">
      <Container>
        <div className="flex flex-row items-center justify-between">
          <div>
            <p>© 2023 BadCode</p>
          </div>
          <div className="flex flex-row gap-4">
            <div>
              <LinkText url="" label="利用規約" />
            </div>
            <div>
              <LinkText url="" label="プライバシーポリシー" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
