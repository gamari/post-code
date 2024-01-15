import React from "react";
import { Loader2, SaveIcon } from "lucide-react";
import { Button } from "../../../atoms/forms/button";

interface Props {
  label: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

export const SaveButton = ({
  label,
  onClick,
  loading = false,
  disabled,
}: Props) => {
  return (
    <Button
      onClick={onClick}
      asChild
      disabled={disabled || loading}
      className="cursor-pointer"
    >
      <div>
        {loading ? (
          <Loader2 className="mr-1 h-4 w-4 animate-spin" />
        ) : (
          <SaveIcon className="mr-2 h-4 w-4" />
        )}
        {label}
      </div>
    </Button>
  );
};
