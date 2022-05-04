import { ChatTeardropDots } from "phosphor-react";

import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";

export function Widget() {
  return (
    <Popover className="absolute right-4 bottom-4 md:right-6 md:bottom-6 flex flex-col items-end">
      <Popover.Panel>
      <WidgetForm />
      </Popover.Panel>
      <Popover.Button className="bg-brand-500 text-white h-12 rounded-full px-3 flex items-center group transition-all duration-500">
        <ChatTeardropDots size={16} className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-200 ease-linear font-medium">
          <span className="ml-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
