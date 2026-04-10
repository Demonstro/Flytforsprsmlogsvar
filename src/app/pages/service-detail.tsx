import { useParams, Link } from "react-router";
import { ALL_SERVICES, getServiceBySlug, type ServiceData } from "../data/services";
import svgPaths from "../../imports/HelpServicesLandingPage/svg-mtcrfxvim5";
import serviceSvgPaths from "../../imports/ServicePage/svg-sayhlcbu1w";
import imgImage from "../../imports/ServicePage/f8395b3dc9fd0a495e241f6bfd476daefdf2def2.png";
import imgImage1 from "../../imports/ServicePage/db55e3de3fc0e5ac73ac48a5550d00b9c8c54c6d.png";
import imgImage2 from "../../imports/ServicePage/fe47869726aa1aab9193d0e7666a69487fce30a2.png";

/* ─── Icons ─── */
function SmartphoneIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path d={serviceSvgPaths.p8205b00} fill="#0F0F0F" />
      <path clipRule="evenodd" d={serviceSvgPaths.p3f815a80} fill="#0F0F0F" fillRule="evenodd" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path clipRule="evenodd" d={serviceSvgPaths.p1db69980} fill="#0F0F0F" fillRule="evenodd" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <path d={svgPaths.pdea9900} fill="white" />
      <path d={svgPaths.p37acfa00} fill="white" />
    </svg>
  );
}

function WebIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="15" x2="14" y2="6" />
      <polyline points="6 6 14 6 14 15" />
    </svg>
  );
}

// Grubl gets screenshots
const GRUBL_IMAGES = [imgImage, imgImage1, imgImage2];

/* ─── Accent color for the decorative strip ─── */
function getAccentColor(service: ServiceData): string {
  if (service.slug === "grubl") return "#ff8afd";
  if (service.type === "snakk") return "#dbddff";
  return "#cfe8dc";
}

/* ─── Page Component ─── */
export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <div className="bg-[#f5f3f0] min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="font-['Borna',sans-serif] text-[30px] leading-[36px] tracking-[-0.12px] text-[#0f0f0f] mb-4" style={{ fontWeight: 600 }}>
          Tjeneste ikke funnet
        </h1>
        <Link to="/hjelpetjenester" className="underline text-[#2b5944]">
          Tilbake til hjelpetjenester
        </Link>
      </div>
    );
  }

  const images = service.slug === "grubl" ? GRUBL_IMAGES : undefined;
  const accentColor = getAccentColor(service);

  // Related services: others sharing at least one tag
  const related = ALL_SERVICES
    .filter((s) => s.slug !== service.slug && s.tags.some((t) => service.tags.includes(t)))
    .slice(0, 5);

  const isApp = service.metaType.toLowerCase().includes("app");
  const isWeb = service.metaType.toLowerCase().includes("nettside");

  return (
    <div className="bg-[#f5f3f0] min-h-screen">
      {/* Navigation */}
      <div className="px-3 py-4">
        <Link to="/hjelpetjenester" className="group inline-flex flex-col gap-[4px] items-center py-[8px]">
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
      </div>

      {/* Page header */}
      <div className="px-3 pb-8">
        <div className="mb-3">{service.logo}</div>
        <h1 className="font-['Borna',sans-serif] leading-[36px] text-[#0f0f0f] text-[30px] tracking-[-0.12px] mb-3" style={{ fontWeight: 600 }}>
          {service.title}
        </h1>

        {/* Metadata */}
        <div className="flex gap-2 items-center mb-3 flex-wrap">
          {isApp ? <SmartphoneIcon /> : <MessageIcon />}
          <p className="font-['Open_Sans',sans-serif] font-normal leading-[20px] text-[#454545] text-[14px] tracking-[-0.056px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {service.metaType}
          </p>
          <MessageIcon />
          <p className="font-['Open_Sans',sans-serif] font-normal leading-[20px] text-[#454545] text-[14px] tracking-[-0.056px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {service.metaLanguage}
          </p>
        </div>

        {/* Ingress */}
        <p className="font-['Open_Sans',sans-serif] font-normal leading-[26px] max-w-[351px] text-[#0f0f0f] text-[18px] tracking-[-0.072px] mb-3" style={{ fontVariationSettings: "'wdth' 100" }}>
          {service.ingress}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span key={tag} className="bg-[#cfe8dc] font-['Open_Sans',sans-serif] font-semibold leading-[20px] text-[#0f0f0f] text-[14px] tracking-[-0.056px] px-3 py-1 rounded-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative strip */}
      <div className="h-[80px] rounded-t-[36px] w-full" style={{ backgroundColor: accentColor }} />

      {/* Main content card */}
      <div className="bg-white rounded-b-[36px] overflow-hidden pb-10 -mt-px">
        {/* Action buttons */}
        <div className="px-3 pt-6 pb-2 flex flex-wrap gap-3">
          {service.actionButtons.map((btn, i) => {
            if (btn.type === "download") {
              return (
                <a key={i} href={btn.href} className="inline-flex gap-2 items-center bg-[#2b5944] hover:bg-[#1f4133] text-white min-h-[44px] px-5 py-[10px] rounded-[9999px] transition-colors">
                  {btn.icon === "apple" && <AppleIcon />}
                  <span className="font-['Open_Sans',sans-serif] font-semibold leading-[24px] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{btn.label}</span>
                </a>
              );
            }
            if (btn.type === "web") {
              return (
                <a key={i} href={btn.href} target="_blank" rel="noopener noreferrer" className="inline-flex gap-2 items-center bg-[#2b5944] hover:bg-[#1f4133] text-white min-h-[44px] px-5 py-[10px] rounded-[9999px] transition-colors">
                  <span className="font-['Open_Sans',sans-serif] font-semibold leading-[24px] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{btn.label}</span>
                  <WebIcon />
                </a>
              );
            }
            if (btn.type === "chat") {
              return (
                <a key={i} href={btn.href} target="_blank" rel="noopener noreferrer" className="inline-flex gap-2 items-center bg-[#2b5944] hover:bg-[#1f4133] text-white min-h-[44px] px-5 py-[10px] rounded-[9999px] transition-colors">
                  <span className="font-['Open_Sans',sans-serif] font-semibold leading-[24px] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{btn.label}</span>
                  <WebIcon />
                </a>
              );
            }
            if (btn.type === "phone") {
              return (
                <a key={i} href={btn.href} className="inline-flex gap-2 items-center border border-[#0f0f0f] hover:bg-[#f5f3f0] text-[#0f0f0f] min-h-[44px] px-5 py-[10px] rounded-[9999px] transition-colors">
                  <span className="font-['Open_Sans',sans-serif] font-semibold leading-[24px] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{btn.label}</span>
                </a>
              );
            }
            return null;
          })}
        </div>

        {/* Body text */}
        <div className="px-3 py-3">
          <div className="font-['Open_Sans',sans-serif] font-normal text-[16px] text-[#0f0f0f] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {service.body}
          </div>
        </div>

        {/* Image carousel (Grubl only) */}
        {images && images.length > 0 && (
          <div className="py-6 pl-3">
            <div className="flex gap-2 items-start overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              {images.map((src, i) => (
                <div key={i} className="shrink-0 w-[256px] h-[455px] rounded-[12px] overflow-hidden">
                  <img alt="" className="object-cover size-full" src={src} />
                </div>
              ))}
              <div className="shrink-0 w-0" />
            </div>
          </div>
        )}

        {/* Faglig ansvarlig */}
        <div className="px-3 py-3">
          <p className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="font-bold leading-[24px]">Faglig ansvarlig</span>
            <br />
            <span className="font-normal leading-[24px]">{service.responsible}</span>
          </p>
        </div>
      </div>

      {/* Related services */}
      {related.length > 0 && (
        <div className="bg-[#dbddff] py-6">
          <div className="flex items-start justify-between px-3 mb-4">
            <h2 className="font-['Borna',sans-serif] leading-[24px] text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontWeight: 600 }}>
              Relaterte tjenester
            </h2>
            <Link to="/hjelpetjenester" className="font-['Open_Sans',sans-serif] font-normal leading-[24px] text-[#0f0f0f] text-[16px] tracking-[-0.064px] underline hover:text-[#2b5944] transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
              Se alle
            </Link>
          </div>
          <div className="flex gap-3 items-stretch overflow-x-auto pl-3 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {related.map((s) => (
              <div key={s.slug} className="flex shrink-0">
                <Link to={`/hjelpetjenester/${s.slug}`} className="flex">
                  <div className="bg-white rounded-[12px] p-3 w-[289px] flex gap-[10px] items-center h-[68px]">
                    {s.logo}
                    <div className="flex-1 min-w-0">
                      <p className="font-['Borna',sans-serif] leading-[24px] text-[#0f0f0f] text-[16px] tracking-[-0.064px] truncate" style={{ fontWeight: 600 }}>
                        {s.title}
                      </p>
                    </div>
                    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" className="shrink-0">
                      <path clipRule="evenodd" d={svgPaths.pde69630} fill="#0F0F0F" fillRule="evenodd" />
                    </svg>
                  </div>
                </Link>
              </div>
            ))}
            <div className="shrink-0 w-0" />
          </div>
        </div>
      )}

      {/* Relaterte tema */}
      <div className="px-3 pt-10 pb-16">
        <h2 className="font-['Borna',sans-serif] leading-[32px] text-[#0f0f0f] text-[24px] tracking-[-0.096px] mb-5" style={{ fontWeight: 600 }}>
          Relaterte tema
        </h2>
        <div className="flex flex-wrap gap-3">
          {service.relatedTopics.map((topic) => (
            <Link key={topic} to="#" className="flex gap-2 items-center min-h-[44px] px-5 py-[10px] rounded-[9999px] relative border border-[#0f0f0f] hover:bg-[#e8e5e1] transition-colors">
              <span className="font-['Open_Sans',sans-serif] font-semibold leading-[24px] text-[#0f0f0f] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                {topic}
              </span>
            </Link>
          ))}
          <Link to="/tema" className="flex gap-2 items-center min-h-[44px] px-5 py-[10px] rounded-[9999px] relative border border-[#0f0f0f] hover:bg-[#e8e5e1] transition-colors">
            <span className="font-['Open_Sans',sans-serif] font-semibold leading-[24px] text-[#0f0f0f] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Alle tema
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
