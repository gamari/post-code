import React from "react";
import { RegisterForm } from "./register-form";

const Page = ({ searchParams }: { searchParams: { error_status: string } }) => {
  const { error_status } = searchParams;

  return <RegisterForm errorStatus={error_status} />;
};

export default Page;
