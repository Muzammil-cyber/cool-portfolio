"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageSection() {
  const [click, setClick] = useState<string>();
  const images = ["image-1.jpg", "image-2.jpg", "image-3.jpg"];

  useEffect(() => {
    if (click) {
      setTimeout(() => {
        setClick(undefined);
      }, 3000);
    }
  }, [click]);

  return (
    <section className="flex w-full gap-4">
      {images.map((image) => (
        <div
          key={image}
          className={cn(
            "relative h-[284px] w-[175px] overflow-hidden rounded-md blur-sm hover:blur-none",
            {
              "blur-none": click === image,
            },
          )}
          onClick={() => setClick(image)}
        >
          <Image
            src={`/images/${image}`}
            fill
            alt={image}
            className={cn("transition-all duration-300 hover:scale-110", {
              "scale-105": click === image,
            })}
          />
        </div>
      ))}
    </section>
  );
}
