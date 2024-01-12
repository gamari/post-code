import * as React from "react";

import { cn } from "@/src/libs/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    onSubmit?: () => void;
  }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, onSubmit, ...props }, ref) => {
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'Enter') {
        onSubmit?.();
      }
    };
    return (
      <textarea
        className={cn(
          "text-gray-800 flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-4 text-sm ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 resize-none",
          "focus:outline-none focus:border-blue-500 bg-white shadow",
          className
        )}
        onKeyDown={handleKeyDown}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
