import { Outlet, Link, useLocation } from "react-router";
import { useEffect, useState, useRef, useCallback } from "react";
import svgPaths from "../../imports/svg-cwur148zul";
import { UngLogo, SearchIcon, MenuIcon, SocialIcons, ArrowUpIcon } from "./shared";
import { GlobalMenu } from "./global-menu";

export function RootLayout() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isAnswerPage = pathname.startsWith("/sporsmaal-og-svar/") && pathname.length > "/sporsmaal-og-svar/".length;

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const [headerHidden, setHeaderHidden] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    if (currentY > lastScrollY.current && currentY > 72) {
      setHeaderHidden(true);
    } else {
      setHeaderHidden(false);
    }
    lastScrollY.current = currentY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="bg-[#2b2b2b] flex flex-col items-center min-h-screen w-full font-['Open_Sans',sans-serif]">
      <div className="w-full max-w-[412px] flex flex-col min-h-screen bg-[#f5f3f0]">
        {/* ─── Header ─── */}
        <header
          className={`${isAnswerPage ? "bg-[#acd7c3]" : "bg-[#f5f3f0]"} sticky top-0 z-50 flex items-center justify-between p-3 w-full transition-transform duration-300 ease-in-out`}
          style={{ transform: headerHidden ? "translateY(-100%)" : "translateY(0)" }}
        >
          <Link to="/">
            <UngLogo blobColor={isAnswerPage ? "white" : "#79FC9E"} />
          </Link>
          <div className="flex gap-2">
            <button className="size-11 flex items-center justify-center rounded-full border border-[#0f0f0f]">
              <SearchIcon />
            </button>
            <button
              className="size-11 flex items-center justify-center rounded-full border border-[#0f0f0f]"
              onClick={() => setMenuOpen(true)}
            >
              <MenuIcon />
            </button>
          </div>
        </header>

        {/* ─── Global Menu ─── */}
        {menuOpen && <GlobalMenu onClose={() => setMenuOpen(false)} />}

        {/* ─── Page Content ─── */}
        <main className="flex-1">
          <Outlet />
        </main>

        {/* ─── Footer ─── */}
        <footer className="bg-[#2b5944] rounded-t-[36px] px-5 pt-10 pb-6 w-full">
          <div className="flex flex-col gap-4">
            <div className="relative" style={{ width: 67, height: 48 }}>
              <svg className="block size-full" viewBox="0 0 66.85 47.7" fill="none">
                <path d={svgPaths.p3013e700} fill="white" />
                <path d={svgPaths.p32bf7b00} fill="white" />
                <path d={svgPaths.p201f9b00} fill="white" />
                <path d={svgPaths.p21fee8f0} fill="white" />
                <path d={svgPaths.p7ab7a00} fill="white" />
                <path d={svgPaths.p3784fd80} fill="white" />
              </svg>
            </div>
            <p className="font-['Open_Sans',sans-serif] text-[18px] text-white leading-[26px] tracking-[-0.072px] max-w-[351px]" style={{ fontWeight: 400 }}>
              Ung.no er det offentliges informasjonskanal for ungdom. Vi gjør det litt lettere å være ung.
            </p>
          </div>

          <div className="flex flex-col gap-14 py-16">
            <FooterSection title="Kontakt" links={["Om ung.no", "Kontakt redaksjonen"]} />
            <FooterSection title="Tjenester" links={["Bestill plakater og brosjyrer", "Statistikk for ung.no"]} />
            <FooterSection title="Innhold" links={["Personvern", "Informasjonskapsler", "Tilgjengelighetserklæring"]} />
            <div className="flex flex-col gap-4">
              <h3 className="font-['Borna',sans-serif] text-[18px] text-white leading-[26px] tracking-[-0.072px]" style={{ fontWeight: 600 }}>Følg oss</h3>
              <SocialIcons />
            </div>
          </div>

          <div className="flex items-end justify-between">
            <div className="size-14 opacity-50">
              <svg viewBox="0 0 69 47.59" fill="none" className="block size-full">
                <path d={svgPaths.p1cf27500} fill="white" />
              </svg>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-white size-11 rounded-full border border-[#0f0f0f] flex items-center justify-center"
            >
              <ArrowUpIcon />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

function FooterSection({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-['Borna',sans-serif] text-[18px] text-white leading-[26px] tracking-[-0.072px]" style={{ fontWeight: 600 }}>{title}</h3>
      <div className="flex flex-col gap-4">
        {links.map((link) => (
          <a key={link} href="#" className="font-['Open_Sans',sans-serif] text-[16px] text-white leading-[24px] tracking-[-0.064px] underline" style={{ fontWeight: 400 }}>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}