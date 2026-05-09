"use client";

import { usePathname } from "next/navigation";
import { HeaderCompass } from "./_HeaderCompass";
import { ArrowLeftCircleIcon } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  const pathname = usePathname();

  const isRootPath = pathname === "/";

  return (
    <header className="flex items-center gap-2">
      {isRootPath ? (
        <HeaderCompass />
      ) : (
        <Link href="/" aria-label="Return Home">
          <ArrowLeftCircleIcon className="size-6 text-zinc-900" />
        </Link>
      )}
    </header>
  );
};
