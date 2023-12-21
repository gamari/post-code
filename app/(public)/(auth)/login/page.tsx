import { LoginForm } from "./login-form";

export default function Login({
  searchParams,
}: {
  searchParams: { error_status: string };
}) {
  return <LoginForm errorStatus={searchParams.error_status} />;
}
