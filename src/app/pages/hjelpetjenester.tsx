import { useState } from "react";
import { Link } from "react-router";
import { ServiceCard } from "../components/service-card";
import { ALL_SERVICES, toCardProps, type ServiceData } from "../data/services";
import svgPaths from "../../imports/HelpServicesLandingPage/svg-mtcrfxvim5";
import fullBlockSvg from "../../imports/HelpServicesLandingPage/svg-fullblock";

export function Hjelpetjenester() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const snakkServices = ALL_SERVICES.filter((s) => s.type === "snakk");
  const selvhjelpServices = ALL_SERVICES.filter((s) => s.type === "selvhjelp");

  const filterBySearch = (services: ServiceData[]) =>
    searchQuery.trim() === ""
      ? services
      : services.filter((s) => {
          const q = searchQuery.toLowerCase();
          return (
            s.title.toLowerCase().includes(q) ||
            s.ingress.toLowerCase().includes(q) ||
            s.tags.some((tag) => tag.toLowerCase().includes(q))
          );
        });

  const filteredSnakk = filterBySearch(snakkServices);
  const filteredSelvhjelp = filterBySearch(selvhjelpServices);

  // Helper: interleave services from both types for a balanced mix
  const mixFromBothTypes = (services: ServiceData[], count: number) => {
    const snakk = services.filter((s) => s.type === "snakk");
    const selvhjelp = services.filter((s) => s.type === "selvhjelp");
    const mixed: ServiceData[] = [];
    let si = 0, hi = 0;
    while (mixed.length < count && (si < snakk.length || hi < selvhjelp.length)) {
      if (si < snakk.length) mixed.push(snakk[si++]);
      if (mixed.length < count && hi < selvhjelp.length) mixed.push(selvhjelp[hi++]);
    }
    return mixed;
  };

  const psykiskHelseTags = [
    "Psykisk helse og følelser",
    "Psykiske vansker",
    "Selvtillit og identitet",
    "Mobbing",
    "Spiseforstyrrelser",
    "Selvskading",
    "Sorg og krise",
    "Hva kan hjelpe",
  ];
  const psykiskHelseServices = mixFromBothTypes(
    filterBySearch(
      ALL_SERVICES.filter((s) =>
        s.tags.some((t) => psykiskHelseTags.includes(t))
      )
    ),
    5
  );

  const sexTags = [
    "Sex",
    "Onanering",
    "Prevensjon",
    "Kjønnssykdommer",
    "P-piller",
    "Graviditet",
  ];
  const sexServices = mixFromBothTypes(
    filterBySearch(
      ALL_SERVICES.filter((s) =>
        s.tags.some((t) => sexTags.includes(t))
      )
    ),
    5
  );

  return (
    <div className="bg-[#f5f3f0] min-h-screen pb-12">
      {/* Back button + Heading */}
      <div className="px-3 pt-6 pb-8">
        <Link to="/" className="group inline-flex flex-col gap-[4px] items-center py-[8px] mb-6">
          <div className="flex gap-[4px] items-center">
            <div className="size-[20px] overflow-clip">
              <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                <path clipRule="evenodd" d={svgPaths.p12cd1d80} className="fill-[#0f0f0f] group-hover:fill-[#2b5944] transition-colors" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p9576200} className="fill-[#0f0f0f] group-hover:fill-[#2b5944] transition-colors" fillRule="evenodd" />
              </svg>
            </div>
            <p className="font-['Open_Sans',sans-serif] font-semibold leading-[24px] text-[#0f0f0f] group-hover:text-[#2b5944] transition-colors text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Tilbake
            </p>
          </div>
          <div className="h-0 w-full relative">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 2">
                <line className="stroke-[#0f0f0f] group-hover:stroke-[#2b5944] transition-colors" strokeWidth="2" x2="80" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </Link>

        <h1 className="font-['Borna',sans-serif] leading-[36px] text-[#0f0f0f] text-[30px] tracking-[-0.12px] mb-5" style={{ fontWeight: 600 }}>
          Hjelp deg selv eller få hjelp
        </h1>

        <div className="font-['Open_Sans',sans-serif] font-normal text-[18px] text-[#0f0f0f] tracking-[-0.072px] space-y-5" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[26px]">
            Her har vi samlet tjenester for deg som ønsker å snakke med noen, enten via chat eller telefon.
          </p>
          <p className="leading-[26px]">
            Du kan også finne apper, videoer og kurs som du kan bruke til å lære om hvordan du kan håndtere ulike følelser og situasjoner i livet. Alle verktøyene er faglig godkjent og gratis å bruke.
          </p>
        </div>
      </div>

      {/* Theme filter */}
      <div className="px-3 mb-8">
        <div className="relative">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#454545" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Søk etter tjeneste eller tema..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full min-h-[48px] pl-11 pr-4 py-3 rounded-[9999px] border border-[#c4c0ba] bg-white font-['Open_Sans',sans-serif] font-normal text-[16px] text-[#0f0f0f] tracking-[-0.064px] placeholder:text-[#757575] focus:outline-none focus:border-[#2b5944] focus:ring-1 focus:ring-[#2b5944] transition-colors"
            style={{ fontVariationSettings: "'wdth' 100" }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#454545] hover:text-[#0f0f0f] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Count */}
      <div className="px-3 mb-4">
        <p className="font-['Open_Sans',sans-serif] font-normal text-[16px] text-[#454545] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {filteredSnakk.length + filteredSelvhjelp.length} tjenester
        </p>
      </div>

      {/* Snakk med noen section */}
      {psykiskHelseServices.length > 0 && (
        <ServiceCarousel title="Psykisk helse" services={psykiskHelseServices} />
      )}

      {/* Hjelp nær deg section */}
      {!searchQuery && (
        <div className="px-3 py-8 mb-8">
          <div className="bg-[#ebebff] flex flex-col gap-[40px] items-start px-[12px] py-[40px] rounded-[24px]">
            <div className="flex flex-col gap-[8px] items-start w-full">
              <div className="w-full pr-[12px]">
                <p className="font-['Borna',sans-serif] leading-[32px] text-[#0f0f0f] text-[24px] tracking-[-0.096px]" style={{ fontWeight: 600 }}>
                  Hjelp nær deg
                </p>
              </div>
              <p className="font-['Open_Sans',sans-serif] font-normal leading-[26px] text-[18px] text-[#0f0f0f] tracking-[-0.072px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                <span className="underline decoration-solid" style={{ textDecorationSkipInk: "none" }}>Helsestasjon for ungdom (HFU)</span>
                {` er et gratis tilbud der kan du få veiledning om prevensjon og seksuell helse. Du kan også få hjelp til psykisk helse og svar på andre helsespørsmål. `}
              </p>
              <div className="flex flex-col items-center py-[8px] w-full">
                <svg className="block" width="240" height="228" fill="none" viewBox="0 0 240 228.442">
                  <path d={svgPaths.p1b974170} fill="#585EFF" />
                  <path d={svgPaths.p11a44200} fill="white" />
                  <path d={svgPaths.p38ed280} fill="black" />
                </svg>
              </div>
              <p className="font-['Open_Sans',sans-serif] font-normal leading-[26px] text-[18px] text-black tracking-[-0.072px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                Begynn med å fortelle oss hvor du befinner deg nå.
              </p>
            </div>
            <div className="flex flex-col gap-[16px] items-start">
              <button className="bg-[#0f0f0f] hover:bg-[#2b2b2b] flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] rounded-[9999px] transition-colors">
                <svg className="shrink-0 size-[20px]" fill="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={fullBlockSvg.p1836f680} fill="white" fillRule="evenodd" />
                  <path clipRule="evenodd" d={fullBlockSvg.p117ef600} fill="white" fillRule="evenodd" />
                </svg>
                <span className="font-['Open_Sans',sans-serif] font-semibold leading-[24px] text-[16px] text-white tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Bruk min lokasjon
                </span>
              </button>
              <div className="flex flex-col items-start min-h-[44px]">
                <div className="flex flex-col gap-[4px] items-center justify-center min-h-[44px] py-[8px] rounded-[50px]">
                  <div className="flex gap-[4px] items-center">
                    <p className="font-['Open_Sans',sans-serif] font-semibold leading-[24px] text-[#0f0f0f] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Jeg vil legge inn manuelt
                    </p>
                    <svg className="shrink-0 size-[20px]" fill="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={fullBlockSvg.pad10300} fill="#0F0F0F" fillRule="evenodd" />
                    </svg>
                  </div>
                  <div className="h-0 w-full relative">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 210 2">
                        <line stroke="#0F0F0F" strokeWidth="2" x2="210" y1="1" y2="1" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sex section */}
      {sexServices.length > 0 && (
        <ServiceCarousel title="Sex" services={sexServices} />
      )}
    </div>
  );
}

function ServiceCarousel({ title, services }: { title: string; services: ServiceData[] }) {
  return (
    <div className="mb-8">
      <div className="flex items-start justify-between px-3 mb-4">
        <h2 className="font-['Borna',sans-serif] leading-[24px] text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontWeight: 600 }}>
          {title}
        </h2>
        <span className="font-['Open_Sans',sans-serif] font-normal leading-[24px] text-[#454545] text-[14px] tracking-[-0.056px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {services.length} tjenester
        </span>
      </div>

      <div
        className="flex gap-3 items-stretch overflow-x-auto -ml-3 pl-3 w-[calc(100%+0.75rem)] -my-2 py-2 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {services.map((service) => (
          <div key={service.slug} className="flex">
            <ServiceCard {...toCardProps(service)} />
          </div>
        ))}
      </div>
    </div>
  );
}