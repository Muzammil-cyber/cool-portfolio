"use client";
import React from "react";
import { SparklesCore } from "./background/sparkles";

export default function LoadingComponent() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-md bg-slate-950 p-4">
      <div className="absolute inset-0 h-screen w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1}
          maxSize={2}
          speed={8}
          particleDensity={200}
          className="h-full w-full"
          particleColor={"#F9FAFB"}
        />
      </div>
      <h1 className="relative z-20 text-center text-3xl font-bold text-white md:text-5xl lg:text-6xl">
        Brewing up the good stuff
        <span className="animate-ping">.</span>
        <span className="animate-ping delay-100">.</span>
        <span className="animate-ping delay-150">.</span>
      </h1>
    </div>
  );
}
