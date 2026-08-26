import { useEffect, useState } from "react";

const loadingMessages = [
  "Sniffing around for the good dogs...",
  "Fetching 50 adorable breeds...",
  "Checking who deserves all the treats...",
  "Teaching the dogs not to eat the code...",
  "Chasing the fastest tail...",
  "Collecting important dog facts...",
];

function LoadingScreen({ onFinish }) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const messageTimer = setInterval(() => {
      setMessageIndex(
        (prev) => (prev + 1) % loadingMessages.length
      );
    }, 650);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);

          setTimeout(() => {
            onFinish();
          }, 250);

          return 100;
        }

        return prev + Math.floor(Math.random() * 8) + 3;
      });
    }, 180);

    return () => {
      clearInterval(messageTimer);
      clearInterval(progressTimer);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-100 flex min-h-screen items-center justify-center overflow-hidden bg-orange-50 px-6">
      {/* Decorative paws */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.08]">
        <span className="absolute left-[10%] top-[15%] rotate-[-25deg] text-7xl">
          🐾
        </span>

        <span className="absolute right-[12%] top-[20%] rotate-20 text-6xl">
          🐾
        </span>

        <span className="absolute bottom-[15%] left-[20%] rotate-30 text-8xl">
          🐾
        </span>

        <span className="absolute bottom-[12%] right-[18%] rotate-[-15deg] text-7xl">
          🐾
        </span>
      </div>

      <div className="relative w-full max-w-md text-center">
        {/* Dog */}
        <div className="mb-6 text-7xl">
          🐶
        </div>

        {/* Ball */}
        <div className="mb-8 flex items-center justify-center gap-6">
          <span className="animate-bounce text-5xl">
            🎾
          </span>

          <div className="h-0.5 w-20 rounded-full bg-orange-200" />
        </div>

        <p className="mb-3 text-sm font-bold tracking-[0.3em] text-orange-500">
          INTERNATIONAL DOG DAY
        </p>

        <h1 className="mb-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
          FIND YOUR DOG
        </h1>

        <p className="mb-8 min-h-12 text-lg text-gray-600">
          {loadingMessages[messageIndex]}
        </p>

        {/* Progress */}
        <div className="h-3 overflow-hidden rounded-full bg-orange-100">
          <div
            className="h-full rounded-full bg-orange-500 transition-all duration-200 ease-out"
            style={{
              width: `${Math.min(progress, 100)}%`,
            }}
          />
        </div>

        <div className="mt-3 flex justify-between text-xs font-semibold text-gray-400">
          <span>WOOF...</span>
          <span>{Math.min(progress, 100)}%</span>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;