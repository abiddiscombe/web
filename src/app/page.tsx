import { ArrowRightIcon } from "lucide-react";

export default function Home() {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/abiddiscombe",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/abiddiscombe",
    },
  ];

  return (
    <>
      <div className="mb-6 animate-in fade-in slide-in-from-bottom-5 blur-in-10 duration-500 ease-in-out">
        <h2 className="font-medium">Archie Biddiscombe</h2>
        <p className="font-medium">Full-Stack Software Engineer</p>
      </div>
      <div className="mb-4 animate-in fade-in slide-in-from-bottom-5 blur-in-10 duration-600 ease-in-out">
        <p className="text-base/7">
          I build things on the web with strong attention to UI design, often
          with a focus on geospatial tech. I&apos;m guided by a product engineer
          mindset and driven by curiosity to keep learning... with a healthy
          dose of travel and adventure on the side.
        </p>
      </div>
      <div className="mb-10 animate-in fade-in slide-in-from-bottom-5 blur-in-10 duration-1000 ease-in-out">
        <ul className="flex items-center gap-6">
          {socials.map((social) => (
            <li key={social.href} className="block group">
              <a
                href={social.href}
                target="_blank"
                className="text-blue-700 dark:text-blue-400 flex items-center gap-1"
              >
                <span className="block">{social.name}</span>
                <ArrowRightIcon className="transition-transform duration-100 block size-3 group-hover:translate-x-1" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="animate-in fade-in slide-in-from-bottom-5 blur-in-10 duration-1200 ease-in-out">
        <h2 className="font-medium mb-2">Notes</h2>
        <ul className="space-y-2">
          <li>
            <a className="block underline-offset-2 cursor-pointer decoration-zinc-500 hover:underline active:decoration-2">
              <span className="tabular-nums text-zinc-500">2025 05 08</span>
              &emsp;
              <span>Elizabeth Feinler</span>
            </a>
          </li>
          <li className="space-x-6">
            <span className="tabular-nums text-zinc-500">2025 05 07</span>
            <span>/healthz</span>
          </li>
          <li className="space-x-6">
            <span className="tabular-nums text-zinc-500">2025 05 06</span>
            <span>CSS Tabular Numbers</span>
          </li>
        </ul>
      </div> */}
    </>
  );
}
