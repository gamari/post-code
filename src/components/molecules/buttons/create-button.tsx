import React from "react";
import { Button } from "../../atoms/buttons/button";
import { Loader2 } from "lucide-react";
import { PlusIcon } from "../../atoms/icons/PlusIcon";

interface Props {
  label: string;
  onClick?: () => void;
  loading?: boolean;
}

export const CreateButton = ({ label, onClick, loading = false }: Props) => {
  return (
    <Button onClick={onClick} asChild>
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
