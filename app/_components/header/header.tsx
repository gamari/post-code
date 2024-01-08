import { cn } from "@/src/libs/utils";
import { TextLinkLogo } from "@/src/components/molecules/text-link-logo";
import { APP_TITLE } from "@/src/libs/constants";
import { LoginButton } from "@/src/components/molecules/buttons/login-button";
import { DashboardButton } from "@/src/components/molecules/buttons/dashboard-button";
import { actionGetAuthUser } from "@/src/actions/users";
import { HeaderSearch } from "./HeaderSearch";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { RegisterButton } from "@/src/components/molecules/buttons/register-button";

export default async function Header() {
  const authUser = await actionGetAuthUser();

  return (
    <nav
      className={cn(
        "z-[100] sticky top-0 w-full flex justify-center py-2 bg-white",
        "border-b border-b-foreground/10"
      )}
    >
      <div className="w-full max-w-7xl flex justify-between items-center p-3 text-sm px-10">
        <TextLinkLogo url="/" label={APP_TITLE} />

        <div className="flex items-center gap-4">
          <HeaderSearch />

          {authUser ? (
            <DashboardButton />
          ) : (
            <Flex alignItems="center" gap={8}>
              <LoginButton />
              <RegisterButton />
            </Flex>
          )}
        </div>
      </div>
    </nav>
  );
}
