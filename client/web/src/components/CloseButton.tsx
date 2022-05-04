import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
  return (
    <Popover.Button className="top-4 right-4 absolute text-zinc-400 hover:text-zinc-100">
      {" "}
      <X weight="bold" size={16}/>{" "}
    </Popover.Button>
  );
}
