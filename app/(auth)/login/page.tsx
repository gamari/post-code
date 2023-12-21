import { LoginForm } from "./login-form";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return <LoginForm message={searchParams.message} />;
}
