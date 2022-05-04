import { useState } from "react";

import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { Loading } from "../../Loading";

interface ScreenshotButtonProps {
  onScreenshotTook: (screenshot: string | null) => void;
  screenshot: string | null;
  comment: string ;
}

export function ScreenshotButton({
  screenshot,
  onScreenshotTook,
  comment,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");
    onScreenshotTook(base64image);
    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        onClick={() => onScreenshotTook(null)}
        className="p-1 w-10 h-10 rounded-[4px] flex 
        items-end justify-end border-[1px] border-zinc-600
        text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "right bottom",
          backgroundSize: 180,
        }}
      >
        <Trash size={16} weight="fill" className="absolute" />
      </button>
    );
  }

  return (
    <button
      type="button"
      disabled={comment.length === 0}
      className="p-2 bg-zinc-800 rounded-[4px] 
        border-transparent hover:bg-zinc-700
        transition-colors focus:outline-none focus:ring-2
        focus:ring-offset-2 focus:ring-offset-zinc-900
        focus:ring-brand-500 disabled:opacity-50 
        disabled:hover:bg-zinc-800"
      onClick={handleTakeScreenshot}
    >
      {isTakingScreenshot ? <Loading /> : <Camera size={24} />}
    </button>
  );
}
