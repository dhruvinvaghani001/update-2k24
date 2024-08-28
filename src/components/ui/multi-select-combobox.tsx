"use client";
import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type EmailOption = {
  value: string;
  label: string;
};

type MultiSelectComboboxProps = {
  options: EmailOption[];
  selectedOptions: EmailOption[];
  onChange: (selected: EmailOption[]) => void;
};

export const MultiSelectCombobox = ({
  options,
  selectedOptions,
  onChange,
}: MultiSelectComboboxProps) => {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSelect = (option: EmailOption) => {
    const alreadySelected = selectedOptions?.some(
      (selected) => selected.value === option.value
    );
    if (!alreadySelected) {
      onChange([...selectedOptions, option]);
    } else {
      onChange(
        selectedOptions.filter((selected) => selected.value !== option.value)
      );
    }
    setOpen(false);
  };
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {selectedOptions?.length > 0
              ? selectedOptions.map((opt) => opt.label).join(", ")
              : "Select options..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput
              placeholder="Search emails..."
              value={searchQuery}
              onValueChange={setSearchQuery}
            />
            <CommandList>
              <CommandEmpty>No options found.</CommandEmpty>
              <CommandGroup>
                {filteredOptions?.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.label}
                    onSelect={() => handleSelect(option)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedOptions?.some(
                          (opt) => opt.value === option.value
                        )
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <div className="space-y-2 mt-2">
        {selectedOptions?.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">
              {option.label}
            </span>
            <button
              type="button"
              onClick={() =>
                onChange(
                  selectedOptions.filter((opt) => opt.value !== option.value)
                )
              }
              className="text-red-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
