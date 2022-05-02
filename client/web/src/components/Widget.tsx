import { useState } from "react";

import { ChatTeardropDots } from "phosphor-react";

export function Widget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  function toggleWidgetVisibility() {
    setIsWidgetOpen(!isWidgetOpen);
  }

  return (
    <div className="absolute right-10 bottom-10">
      {isWidgetOpen && <p>Teste</p>}
      <button
        onClick={toggleWidgetVisibility}
        className="bg-brand-500 text-white h-12 rounded-full px-3 flex items-center group transition-all duration-500"
      >
        <ChatTeardropDots size={16} className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear font-medium">
          <span className="ml-2"></span>
          Feedback
        </span>
      </button>
    </div>
  );
}
