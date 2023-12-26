import React from "react";
import { Button, ButtonProps } from "../../atoms/buttons/button";
import { Loader2 } from "lucide-react";
import { PlusIcon } from "../../atoms/icons/PlusIcon";

interface Props extends ButtonProps {
  label: string;
  loading?: boolean;
}

export const CreateButton = ({
  label,
  onClick,
  loading = false,
  type = "button",
}: Props) => {
  return (
    <Button onClick={onClick} asChild className="cursor-pointer" type={type}>
      <div>
        {loading ? (
          <Loader2 className="mr-1 h-4 w-4 animate-spin" />
        ) : (
          <PlusIcon className="mr-2 h-4 w-4" />
        )}
        {label}
      </div>
    </Button>
  );
};
