import { CloseButton } from "../../CloseButton";

import successImg from "../../../assets/success.svg";

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({
  onFeedbackRestartRequested,
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className="flex flex-col items-center w-[304px] py-10">
        <img src={successImg} alt="Success" />
        <span className="text-zinc-100 font-medium text-xl leading-6 mt-2">
          Agradecemos o feedback!
        </span>
        <button
          onClick={onFeedbackRestartRequested}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-[4px]
          border-transparent text-sm leading-6 hover:bg-zinc-700
          transition-colors focus:ring-2 focus:outline-none focus:ring-offset-zinc-900
          focus:ring-brand-500"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
