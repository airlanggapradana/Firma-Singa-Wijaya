"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

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
import { caseData } from "@/data/court_cases_by_ai";

export function SearchCaseBar() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[25rem] justify-between"
        >
          {value
            ? caseData.find((item) => item.case_title === value)?.case_title
            : "See Recent Cases..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[25rem] p-0">
        <Command>
          <CommandInput placeholder="Search case..." className="h-9" />
          <CommandList>
            <CommandEmpty>No cases found.</CommandEmpty>
            <CommandGroup className="p-2">
              {caseData.map((item) => (
                <CommandItem
                  key={item.case_id}
                  value={item.case_title}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  className="flex flex-col items-start gap-1 font-semibold"
                >
                  {item.case_title}
                  {item.charges.map((charge, index) => (
                    <span
                      key={index}
                      className="text-sm font-light text-gray-500"
                    >
                      {charge}
                      {index < item.charges.length - 1 ? ", " : ""}
                    </span>
                  ))}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === item.case_title ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
