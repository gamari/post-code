import { cn } from "@/src/libs/utils";
import { TextLinkLogo } from "@/src/components/molecules/text-link-logo";
import { APP_TITLE } from "@/src/libs/constants";
import { LoginButton } from "@/src/components/molecules/forms/buttons/login-button";
import { DashboardButton } from "@/src/components/molecules/forms/buttons/dashboard-button";
import { actionGetAuthUser } from "@/src/actions/users";
import { HeaderSearch } from "./HeaderSearch";
import { Flex } from "@/src/components/atoms/containers/Flex";
import { RegisterButton } from "@/src/components/molecules/forms/buttons/register-button";
import { ActiveLink } from "@/src/components/molecules/ActiveLink";

export default async function Header() {
  const authUser = await actionGetAuthUser();

  return (
    <nav
      className={cn(
        "z-[200] w-full flex justify-center bg-white pt-2 pb-1",
        "border-b border-b-foreground/10"
      )}
    >
      <div className="w-full max-w-7xl flex flex-col">
        <div className="flex justify-between items-center p-3 text-sm px-4">
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

        <div className="px-4 flex flex-row gap-4">
          <ActiveLink url="/" label="ホーム" />
          <ActiveLink url="/beginner" label="ビギナー" />
          {/* <ActiveLink url="/tools" label="ツール" /> */}
          <ActiveLink url="/ai" label="AI" />
          <ActiveLink url="/qa" label="質問" />
          {/* <ActiveLink url="/errors" label="エラー" /> */}
          {/* <ActiveLink url="/services" label="サービス" /> */}
          {/* <ActiveLink url="/qa" label="質問" /> */}
        </div>
      </div>
    </nav>
  );
}
