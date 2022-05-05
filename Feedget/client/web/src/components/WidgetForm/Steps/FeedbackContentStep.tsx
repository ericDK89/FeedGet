import { FormEvent, useState } from "react";

import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "./ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleSubmitFeedback(e: FormEvent) {
    e.preventDefault();
    console.log(comment);
    onFeedbackSent()
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="absolute left-4 top-4 text-zinc-400 hover:text-zinc-100"
          onClick={() => onFeedbackRestartRequested()}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex gap-2 items-center">
          <img
            src={feedbackTypeInfo.img.src}
            alt={feedbackTypeInfo.img.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          onChange={(e) => setComment(e.target.value)}
          className="min-w-[304px] w-full min-h-[112px] text-sm 
          placeholder-zinc-400 text-zinc-100 
          border-zinc-600 bg-transparent rounded-[4px] 
          focus:ring-brand-500 focus:ring-1
          resize-none focus:outline-none focus:border-transparent
          scrollbar-thumb-zinc-600 scrollbar-track-transparent 
          scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
        />
        <footer className="flex items-center gap-2 mt-2">
          <ScreenshotButton
            onScreenshotTook={setScreenshot}
            screenshot={screenshot}
            comment={comment}
          />
          <button
            type="submit"
            disabled={comment?.length === 0}
            className="rounded-[4px] bg-brand-500 
            border-transparent flex-1 flex 
            justify-center items-center text-sm leading-6 
            hover:bg-brand-300 focus:outline-none focus:ring-2
            focus:ring-offset-2 focus:ring-offset-zinc-900
            focus:ring-brand-500 transition-colors py-2 px-[74px]
            disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}
