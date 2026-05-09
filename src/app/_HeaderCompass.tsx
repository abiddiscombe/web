"use client";

import { CompassIcon, SmileIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export const HeaderCompass = () => {
  const compassRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const t = compassRef.current;

    if (!t) {
      return;
    }

    const tBbox = t.getBoundingClientRect();

    const tCenter = {
      x: tBbox.left + tBbox.width / 2,
      y: tBbox.top + tBbox.height / 2,
    };

    function handleInteraction(e: MouseEvent) {
      if (!t) {
        return;
      }

      const angle =
        Math.atan2(e.pageX - tCenter.x, -(e.pageY - tCenter.y)) *
        (180 / Math.PI);

      t.style.transform = `rotate(${angle - 45}deg)`;
    }

    document.addEventListener("mousemove", handleInteraction);

    return () => {
      document.removeEventListener("mousemove", handleInteraction);
    };
  }, []);

  return (
    <Link
      href="/"
      className=" text-zinc-900 dark:text-zinc-50 group grid *:row-1 *:col-1"
    >
      <SmileIcon
        id="hover"
        className="z-10 hidden size-6 group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      <CompassIcon
        ref={compassRef}
        className="opacity-100 size-6 group-hover:opacity-0 transition-opacity duration-300"
      />
    </Link>
  );
};
