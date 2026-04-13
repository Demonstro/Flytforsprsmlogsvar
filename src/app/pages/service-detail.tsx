import { useParams, Link, useNavigate } from "react-router";
import { ALL_SERVICES, getServiceBySlug, sortByOpenStatus, type ServiceData, type WeeklyHours, isDognapen, getOpenStatus } from "../data/services";
import svgPaths from "../../imports/HelpServicesLandingPage/svg-mtcrfxvim5";
import serviceSvgPaths from "../../imports/ServicePage/svg-sayhlcbu1w";
import { SERVICE_IMG_1 as imgImage, SERVICE_IMG_2 as imgImage1, SERVICE_IMG_3 as imgImage2 } from "../data/images";

/* ─── Icons ─── */
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

/* ─── Opening hours table ─── */
const DAY_LABELS: { key: keyof WeeklyHours; label: string }[] = [
  { key: "mandag", label: "Mandag" },
  { key: "tirsdag", label: "Tirsdag" },
  { key: "onsdag", label: "Onsdag" },
  { key: "torsdag", label: "Torsdag" },
  { key: "fredag", label: "Fredag" },
  { key: "lordag", label: "Lørdag" },
  { key: "sondag", label: "Søndag" },
];

function OpeningHoursTable({ hours }: { hours: WeeklyHours }) {
  const alwaysOpen = isDognapen(hours);

  if (alwaysOpen) return null;

  return (
    <div className="bg-[#f5f3f0] rounded-[12px] overflow-hidden">
      <div className="w-full flex items-start justify-between p-3">
        <p className="font-['Open_Sans',sans-serif] font-semibold leading-[24px] text-[#0f0f0f] text-[16px] tracking-[-0.064px] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
          Åpningstider
        </p>
      </div>
      <div className="px-3 pb-4">
        <div className="flex flex-col gap-2">
          {DAY_LABELS.map(({ key, label }) => {
            const val = hours[key];
            return (
              <div key={key} className="flex gap-3 items-start w-full">
                <p className="font-['Open_Sans',sans-serif] font-normal leading-[26px] text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-[70px] shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {label}
                </p>
                <div className="flex-1 text-right">
                  {val === "Stengt" ? (
                    <p className="font-['Open_Sans',sans-serif] font-semibold leading-[24px] text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Stengt
                    </p>
                  ) : (
                    val.map((slot, i) => (
                      <p key={i} className="font-['Open_Sans',sans-serif] font-semibold leading-[24px] text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {slot}
                      </p>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <p className="font-['Open_Sans',sans-serif] font-normal leading-[24px] text-[16px] text-black tracking-[-0.064px] pt-4" style={{ fontVariationSettings: "'wdth' 100" }}>
          Åpningstider for telefon kan avvike.
        </p>
      </div>
    </div>
  );
}

/* ─── Status badge helper ─── */
function getChannelStatus(service: ServiceData) {
  const channels: { label: string; status: string; statusColor: string }[] = [];

  if (service.type !== "snakk") {
    // Selvhjelp services just show the meta type
    channels.push({ label: service.metaType, status: "", statusColor: "#454545" });
    return channels;
  }

  const status = getOpenStatus(service.openingHours);
  const hasChat = service.actionButtons.some((b) => b.type === "chat");
  const hasPhone = service.actionButtons.some((b) => b.type === "phone");

  if (hasChat) {
    channels.push({
      label: "Chat",
      status: status === "Døgnåpen" ? "Døgnåpen" : status === "Åpen" ? "Åpen" : "Stengt",
      statusColor: status === "Stengt" ? "#b82a1f" : "#2b5944",
    });
  }
  if (hasPhone) {
    channels.push({
      label: "Telefon",
      status: status === "Døgnåpen" ? "Døgnåpen" : status === "Åpen" ? "Åpen" : "Stengt",
      statusColor: status === "Stengt" ? "#b82a1f" : "#2b5944",
    });
  }
  if (!hasChat && !hasPhone) {
    channels.push({
      label: service.metaType,
      status: status === "Døgnåpen" ? "Døgnåpen" : status === "Åpen" ? "Åpen" : "Stengt",
      statusColor: status === "Stengt" ? "#b82a1f" : "#2b5944",
    });
  }
  return channels;
}

/* ─── Page Component ─── */
export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
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
  const channels = getChannelStatus(service);
  const serviceStatus = service.type === "snakk" ? getOpenStatus(service.openingHours) : null;
  const isClosed = serviceStatus === "Stengt";

  // Related services: others sharing at least one tag, open first
  const related = sortByOpenStatus(
    ALL_SERVICES.filter((s) => s.slug !== service.slug && s.tags.some((t) => service.tags.includes(t)))
  ).slice(0, 5);

  return (
    <div className="bg-[#f5f3f0] min-h-screen">
      {/* Navigation */}
      <div className="px-3 py-4">
        <button onClick={() => navigate(-1)} className="group inline-flex flex-col gap-[4px] items-center py-[8px]">
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
        </button>
      </div>

      {/* Page header */}
      <div className="px-3 pt-6 pb-0">
        <div className="mb-3">{service.logo}</div>

        {/* Title + metadata */}
        <div className="flex flex-col gap-3">
          <h1 className="font-['Borna',sans-serif] leading-[36px] text-[#0f0f0f] text-[30px] tracking-[-0.12px]" style={{ fontWeight: 600 }}>
            {service.title}
          </h1>

          {/* Channel status rows */}
          <div className="flex flex-col gap-0">
            {channels.map((ch, i) => (
              <div key={i} className="flex gap-2 items-center">
                <p className="font-['Open_Sans',sans-serif] font-normal leading-[20px] text-[#454545] text-[14px] tracking-[-0.056px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {ch.label}
                </p>
                {ch.status && (
                  <p className="font-['Open_Sans',sans-serif] font-semibold leading-[20px] text-[14px] tracking-[-0.056px]" style={{ fontVariationSettings: "'wdth' 100", color: ch.statusColor }}>
                    {ch.status}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Ingress */}
          <p className="font-['Open_Sans',sans-serif] font-normal leading-[26px] max-w-[351px] text-[#0f0f0f] text-[18px] tracking-[-0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      </div>

      {/* Main content card */}
      <div className="bg-white rounded-[36px] overflow-hidden pb-10 mt-8 mx-3">
        {/* Action buttons */}
        <div className="px-3 pt-8 pb-0 flex flex-wrap gap-4">
          {service.actionButtons.map((btn, i) => {
            if (btn.type === "download") {
              return (
                <a key={i} href={btn.href} className="inline-flex gap-2 items-center bg-[#2b5944] hover:bg-[#3c7c5e] text-white min-h-[44px] px-5 py-[10px] rounded-[9999px] transition-colors">
                  {btn.icon === "apple" && <AppleIcon />}
                  <span className="font-['Open_Sans',sans-serif] font-semibold leading-[24px] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{btn.label}</span>
                </a>
              );
            }
            if (btn.type === "web" || btn.type === "chat") {
              const btnDisabled = isClosed && btn.type === "chat";
              if (btnDisabled) {
                return (
                  <span key={i} className="inline-flex gap-2 items-center bg-[#dfdfdf] text-[#888] min-h-[44px] px-5 py-[10px] rounded-[9999px] cursor-not-allowed">
                    <WebIcon />
                    <span className="font-['Open_Sans',sans-serif] font-semibold leading-[24px] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{btn.label}</span>
                  </span>
                );
              }
              return (
                <a key={i} href={btn.href} target="_blank" rel="noopener noreferrer" className="inline-flex gap-2 items-center bg-[#2b5944] hover:bg-[#3c7c5e] text-white min-h-[44px] px-5 py-[10px] rounded-[9999px] transition-colors">
                  <WebIcon />
                  <span className="font-['Open_Sans',sans-serif] font-semibold leading-[24px] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{btn.label}</span>
                </a>
              );
            }
            if (btn.type === "phone") {
              const btnDisabled = isClosed;
              if (btnDisabled) {
                return (
                  <span key={i} className="inline-flex gap-2 items-center border border-[#888] text-[#888] min-h-[44px] px-5 py-[10px] rounded-[9999px] cursor-not-allowed">
                    <span className="font-['Open_Sans',sans-serif] font-semibold leading-[24px] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{btn.label}</span>
                  </span>
                );
              }
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
        <div className="px-3 pt-4 pb-3">
          <div className="font-['Open_Sans',sans-serif] font-normal leading-[24px] text-[16px] text-[#0f0f0f] tracking-[-0.064px] py-3" style={{ fontVariationSettings: "'wdth' 100" }}>
            {service.body}
          </div>
        </div>

        {/* Opening hours table */}
        {service.openingHours && (
          <div className="px-3 py-0">
            <OpeningHoursTable hours={service.openingHours} />
          </div>
        )}

        {/* Image carousel (Grubl only) */}
        {images && images.length > 0 && (
          <div className="py-6 pl-3">
            <div className="flex gap-2 items-start overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: "none" }}>
              {images.map((src, i) => (
                <div key={i} className="shrink-0 w-[256px] h-[455px] rounded-[12px] overflow-hidden">
                  <img alt="" className="object-cover size-full" src={src} />
                </div>
              ))}
              <div className="shrink-0 w-px" />
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
        <div className="bg-[#dbddff] py-6 mt-8">
          <div className="flex items-start justify-between px-3 mb-4">
            <h2 className="font-['Borna',sans-serif] leading-[24px] text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontWeight: 600 }}>
              Mest populære apper
            </h2>
            <Link to="/hjelpetjenester" className="font-['Open_Sans',sans-serif] font-normal leading-[24px] text-[#0f0f0f] text-[16px] tracking-[-0.064px] underline hover:text-[#2b5944] transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
              Se alle
            </Link>
          </div>
          <div className="flex gap-3 items-stretch overflow-x-auto pl-3 -my-2 py-2 pb-2 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
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
            <div className="shrink-0 w-px" />
          </div>
        </div>
      )}

      {/* Relaterte tema */}
      <div className="px-3 pt-10 pb-16">
        <h2 className="font-['Borna',sans-serif] leading-[32px] text-[#0f0f0f] text-[24px] tracking-[-0.096px] mb-5" style={{ fontWeight: 600 }}>
          Relaterte tema
        </h2>
        <div className="flex flex-wrap gap-2 mb-5">
          {service.relatedTopics.map((topic) => (
            <Link key={topic} to="#" className="flex gap-2 items-center min-h-[44px] px-5 py-[10px] rounded-[9999px] relative border border-[#0f0f0f] hover:bg-[#e8e5e1] transition-colors">
              <span className="font-['Open_Sans',sans-serif] font-semibold leading-[24px] text-[#0f0f0f] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                {topic}
              </span>
            </Link>
          ))}
        </div>
        <Link to="/tema" className="group inline-flex flex-col gap-[4px] items-center py-[8px]">
          <div className="flex gap-[4px] items-center">
            <p className="font-['Open_Sans',sans-serif] font-semibold leading-[24px] text-[#0f0f0f] group-hover:text-[#2b5944] transition-colors text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Alle temaer
            </p>
            <div className="size-[20px] overflow-clip">
              <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                <path clipRule="evenodd" d={svgPaths.pad10300} className="fill-[#0f0f0f] group-hover:fill-[#2b5944] transition-colors" fillRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="h-0 w-full relative">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 2">
                <line className="stroke-[#0f0f0f] group-hover:stroke-[#2b5944] transition-colors" strokeWidth="2" x2="100" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
