import React from "react";
import { BadCode } from "../src/types";
import { CodeCard } from "../src/components/codes/client/CodeCard";

export default {
  title: "Components/CodeCard",
  component: CodeCard,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

// サンプルデータの作成
const sampleCode: BadCode = {
  id: 1,
  title: "サンプルコードタイトル",
  description: "サンプルコードの説明...",
  user_id: "1",
  created_at: "2021-01-01 00:00:00",
  updated_at: "2021-01-01 00:00:00",
};

// デフォルトのコードカード
export const Default = () => <CodeCard code={sampleCode} />;

// カスタムクラス名を持つコードカード
export const WithCustomClass = () => (
  <CodeCard code={sampleCode} className="bg-blue-500" />
);

// タイトルなしのコードカード
export const WithoutTitle = () => (
  <CodeCard code={{ ...sampleCode, title: "" }} />
);
