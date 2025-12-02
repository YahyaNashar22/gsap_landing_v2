import { useEffect, useState } from "react";

const Loader = ({ progress }: { progress: number }) => {
  const messages = [
    "Preparing your experience…",
    "Loading animations…",
    "Optimizing assets…",
    "Almost ready…",
  ];
  const [index, setIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setFade(true); // fade in
      }, 250);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader flex-center absolute z-100 h-dvh w-screen overflow-hidden bg-violet-50 flex-col gap-6">
      <div className="three-body">
        <div className="three-body__dot" />
        <div className="three-body__dot" />
        <div className="three-body__dot" />
      </div>

      <div className="w-60 h-2 bg-violet-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-violet-600 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="text-violet-700 text-xl font-zentry tracking-widest">
        {progress}%
      </div>

      {/* Rotating Text */}
      <div
        className={`text-violet-500 text-base font-zentry transition-opacity duration-300 tracking-widest ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {messages[index]}
      </div>
    </div>
  );
};

export default Loader;
