"use client";

import { Card, CardHeader } from "@/src/components/molecules/displays/card";

const Error = () => {
  return (
    <div className="flex items-center justify-center">
      <Card>
        <CardHeader>エラーが発生しました</CardHeader>
      </Card>
    </div>
  );
};

export default Error;
