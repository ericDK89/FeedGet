import { useState } from "react";

import bugImg from "../../assets/bug.svg";
import ideaImg from "../../assets/idea.svg";
import thoughtImg from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  bug: {
    title: "Problema",
    img: {
      src: bugImg,
      alt: "Problema",
    },
  },
  idea: {
    title: "Ideia",
    img: {
      src: ideaImg,
      alt: "Ideia",
    },
  },
  other: {
    title: "Outro",
    img: {
      src: thoughtImg,
      alt: "Outro",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false)
  }

  return (
    <div
      className="bg-darkTheme-900 p-4 relative rounded-2xl 
      mb-4 flex flex-col items-center shadow-lg md:w-auto 
      w-[calc(100vw-2rem)]"
    >
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-zinc-400 font-medium">
        Feito com ♥ pela{" "}
        <a
          className="underline underline-offset-2"
          href="https://www.rocketseat.com.br"
          target="_blank"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
