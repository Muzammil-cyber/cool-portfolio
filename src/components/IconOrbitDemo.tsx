"use client";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { Icons, SMALL_BREAKPOINT } from "@/lib/constant";
import { useWindowSize } from "@/lib/useHooks";

export function OrbitingCirclesDemo() {
  const { width } = useWindowSize();
  const isMobile: boolean = width < SMALL_BREAKPOINT;
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      {/* Inner Circles */}
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        radius={isMobile ? 40 : 80}
      >
        <Icons.engineering className="fill-primary" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        delay={9}
        radius={isMobile ? 40 : 80}
      >
        <Icons.globe className="fill-primary" />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={isMobile ? 75 : 150}
        reverse
      >
        <Icons.captivePortal className="fill-primary" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={isMobile ? 75 : 150}
        delay={3}
        reverse
      >
        <Icons.developerMode className="fill-primary" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={isMobile ? 75 : 150}
        delay={6}
        reverse
      >
        <Icons.database className="fill-primary" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={isMobile ? 75 : 150}
        delay={9}
        reverse
      >
        <Icons.code className="fill-primary" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={isMobile ? 75 : 150}
        delay={12}
        reverse
      >
        <Icons.webhook className="fill-primary" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={isMobile ? 75 : 150}
        delay={15}
        reverse
      >
        <Icons.http className="fill-primary" />
      </OrbitingCircles>
    </div>
  );
}
