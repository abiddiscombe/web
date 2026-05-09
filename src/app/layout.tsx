import type { Metadata } from "next";
import "@fontsource-variable/ibm-plex-sans/wght.css";
import "./globals.css";
import { Header } from "./_Header";

export const metadata: Metadata = {
  title: "Archie | @abiddiscombe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="bg-zinc-50 dark:bg-zinc-900 p-10 space-y-4 sm:pt-28 *:mx-auto *:max-w-2xl tracking-wide">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
