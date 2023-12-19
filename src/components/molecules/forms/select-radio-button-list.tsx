import { Label } from "@radix-ui/react-label";
import React from "react";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";

interface Item {
  label: string;
  value: string;
}

interface Props {
  defaultValue: string;
  items: Item[];
  onChange?: (value: string) => void;
}

export const SelectRadioButtonList = ({
  defaultValue,
  items,
  onChange,
}: Props) => {
  return (
    <RadioGroup defaultValue={defaultValue} className="flex flex-row">
      <div className="flex items-center space-x-2">
        {items.map((item) => (
          <div className="flex items-center space-x-2">
            <Label htmlFor={item.value} className="cursor-pointer">
              <RadioGroupItem
                id={item.value}
                value={item.value}
                onClick={() => {
                  onChange?.(item.value);
                }}
              />
              {item.label}
            </Label>
          </div>
        ))}
      </div>
    </RadioGroup>
  );
};
