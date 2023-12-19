"use client";

import { Card, CardHeader } from "@/src/components/ui/card";

const Error = () => {
  return (
    <div className="flex items-center justify-center pt-10">
      <Card>
        <CardHeader>対象のコードがありません</CardHeader>
      </Card>
    </div>
  );
};

export default Error;
