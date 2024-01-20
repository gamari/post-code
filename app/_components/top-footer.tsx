import React from "react";
import { LinkText } from "@/src/components/molecules/displays/link-text";

export const TopFooter = () => {
  return (
    <footer className="border-t py-12 w-full bg-white">
      <div className="px-6 max-w-7xl mx-auto">
        <div className="flex flex-row items-center justify-between">
          <div>
            <p>© 2024 BadCode</p>
          </div>
          <div className="flex flex-row gap-4">
            <div>
              <LinkText url="/contact" label="お問い合わせ" />
            </div>
            <div>
              <LinkText url="/terms" label="利用規約" />
            </div>
            <div>
              <LinkText url="/privacy" label="プライバシーポリシー" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
