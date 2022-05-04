import { feedbackTypes, FeedbackType } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeProps {
  onFeedbackTypeChange: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChange }: FeedbackTypeProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex pt-8 pb-12 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-2 hover:border-brand-500"
              type="button"
              onClick={() => {
                onFeedbackTypeChange(key as FeedbackType);
              }}
            >
              <img src={value.img.src} alt={value.img.alt} />
              <span> {value.title} </span>
            </button>
          );
        })}
      </div>
    </>
  );
}
