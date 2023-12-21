import React from "react";
import { RegisterForm } from "./register-form";

const Page = ({
  searchParams,
}: {
  searchParams: { message: string; error_status: string };
}) => {
  const { message, error_status } = searchParams;

  return <RegisterForm message={message} errorStatus={error_status} />;
};

export default Page;
