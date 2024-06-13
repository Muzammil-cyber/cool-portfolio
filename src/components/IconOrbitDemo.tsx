import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { Icons } from "@/lib/constant";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      {/* Inner Circles */}
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        radius={80}
      >
        <Icons.engineering className="fill-primary" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        delay={9}
        radius={80}
      >
        <Icons.globe className="fill-primary" />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={150}
        reverse
      >
        <Icons.captivePortal className="fill-primary" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={150}
        delay={3}
        reverse
      >
        <Icons.developerMode className="fill-primary" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={150}
        delay={6}
        reverse
      >
        <Icons.database className="fill-primary" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={150}
        delay={9}
        reverse
      >
        <Icons.code className="fill-primary" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={150}
        delay={12}
        reverse
      >
        <Icons.webhook className="fill-primary" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={150}
        delay={15}
        reverse
      >
        <Icons.http className="fill-primary" />
      </OrbitingCircles>
    </div>
  );
}
