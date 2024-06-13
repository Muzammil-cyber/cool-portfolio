"use client";
import React from "react";
import { SparklesCore } from "./background/sparkles";

export default function LoadingComponent() {
  // const [mounted, setMounted] = useState(false);
  // const { resolvedTheme: theme } = useTheme();

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) {
  //   return null;
  // }

  return (
    <div className="h-[40rem] relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md bg-slate-950">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1}
          maxSize={2}
          speed={8}
          particleDensity={200}
          className="w-full h-full"
          particleColor={"#F9FAFB"}
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center relative z-20 text-white">
        Brewing up the good stuff
        <span className="animate-ping">.</span>
        <span className="animate-ping delay-100">.</span>
        <span className="animate-ping delay-150">.</span>
      </h1>
    </div>
  );
}
