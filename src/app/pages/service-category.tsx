import { useParams, Link } from "react-router";
import { getMainCategoryBySlug, getCategoryGroupBySlug, getCategoryGroupTags, type MainCategory, type CategoryGroup } from "../data/categories";
import { ALL_SERVICES, toCardProps, getOpenStatus } from "../data/services";
import { ServiceCard } from "../components/service-card";
import svgPaths from "../../imports/HelpServicesLandingPage/svg-mtcrfxvim5";

/* ─── Main category page: /hjelpetjenester/kategori/:categorySlug ─── */
export function ServiceCategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const main = categorySlug ? getMainCategoryBySlug(categorySlug) : undefined;

  if (!main) {
    return (
      <div className="bg-[#f5f3f0] min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="font-['Borna',sans-serif] text-[30px] leading-[36px] tracking-[-0.12px] text-[#0f0f0f] mb-4" style={{ fontWeight: 600 }}>
          Kategori ikke funnet
        </h1>
        <Link to="/hjelpetjenester" className="underline text-[#2b5944]">Tilbake til hjelpetjenester</Link>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f3f0] min-h-screen pb-12">
      <BackLink />

      <div className="px-3 pb-2">
        <h1 className="font-['Borna',sans-serif] leading-[36px] text-[#0f0f0f] text-[30px] tracking-[-0.12px] mb-2" style={{ fontWeight: 600 }}>
          {main.label}
        </h1>
        <p className="font-['Open_Sans',sans-serif] font-normal leading-[26px] text-[#0f0f0f] text-[18px] tracking-[-0.072px] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
          {main.description}
        </p>
      </div>

      {/* Category group carousels */}
      <div className="flex flex-col gap-0">
        {main.categories.map((group) => {
          const tags = getCategoryGroupTags(group);
          const services = ALL_SERVICES.filter((s) => s.tags.some((t) => tags.includes(t)));
          if (services.length === 0) return null;
          return (
            <div key={group.slug} className="mb-8 px-3">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-['Borna',sans-serif] leading-[24px] text-[#0f0f0f] text-[18px] tracking-[-0.072px]" style={{ fontWeight: 600 }}>
                  {group.label}
                </h2>
                <Link
                  to={`/hjelpetjenester/kategori/${main.slug}/${group.slug}`}
                  className="font-['Open_Sans',sans-serif] font-semibold leading-[24px] text-[#454545] text-[14px] tracking-[-0.056px] whitespace-nowrap hover:text-[#2b5944] transition-colors"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Se alle
                </Link>
              </div>
              <div
                className="flex gap-3 items-stretch overflow-x-auto -ml-3 pl-3 w-[calc(100%+0.75rem)] -my-2 py-2 pb-2 scrollbar-hide"
                style={{ scrollbarWidth: "none" }}
              >
                {services.slice(0, 5).map((service) => (
                  <div key={service.slug} className="flex shrink-0">
                    <ServiceCard {...toCardProps(service)} />
                  </div>
                ))}
                <div className="shrink-0 w-0" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Category group page: /hjelpetjenester/kategori/:categorySlug/:subCategorySlug ─── */
export function ServiceSubCategoryPage() {
  const { categorySlug, subCategorySlug } = useParams<{ categorySlug: string; subCategorySlug: string }>();
  const result = categorySlug && subCategorySlug ? getCategoryGroupBySlug(categorySlug, subCategorySlug) : undefined;

  if (!result) {
    return (
      <div className="bg-[#f5f3f0] min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="font-['Borna',sans-serif] text-[30px] leading-[36px] tracking-[-0.12px] text-[#0f0f0f] mb-4" style={{ fontWeight: 600 }}>
          Kategori ikke funnet
        </h1>
        <Link to="/hjelpetjenester" className="underline text-[#2b5944]">Tilbake til hjelpetjenester</Link>
      </div>
    );
  }

  const { main, group } = result;
  const tags = getCategoryGroupTags(group);
  const services = ALL_SERVICES.filter((s) => s.tags.some((t) => tags.includes(t)));

  return (
    <div className="bg-[#f5f3f0] min-h-screen pb-12">
      <BackLink to={`/hjelpetjenester/kategori/${main.slug}`} />

      <div className="px-3 pb-2">
        <p className="font-['Open_Sans',sans-serif] font-normal leading-[20px] text-[#454545] text-[14px] tracking-[-0.056px] mb-1" style={{ fontVariationSettings: "'wdth' 100" }}>
          {main.label}
        </p>
        <h1 className="font-['Borna',sans-serif] leading-[36px] text-[#0f0f0f] text-[30px] tracking-[-0.12px] mb-1" style={{ fontWeight: 600 }}>
          {group.label}
        </h1>
        <p className="font-['Open_Sans',sans-serif] font-normal leading-[20px] text-[#454545] text-[14px] tracking-[-0.056px] mb-4" style={{ fontVariationSettings: "'wdth' 100" }}>
          {services.length} tjenester
        </p>
      </div>

      {/* Sub-category filter pills (if any) */}
      {group.subCategories.length > 0 && (
        <div className="px-3 flex flex-wrap gap-2 mb-6">
          {group.subCategories.map((sub) => {
            const count = ALL_SERVICES.filter((s) => s.tags.some((t) => sub.tags.includes(t))).length;
            if (count === 0) return null;
            return (
              <span
                key={sub.slug}
                className="flex items-center px-3 py-1 rounded-[12px] bg-[#cfe8dc] font-['Open_Sans',sans-serif] font-semibold leading-[20px] text-[#0f0f0f] text-[14px] tracking-[-0.056px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {sub.label}
              </span>
            );
          })}
        </div>
      )}

      {/* Service list */}
      <div className="px-3 flex flex-col gap-3">
        {services.map((service) => (
          <div key={service.slug}>
            <ServiceCard {...toCardProps(service)} fullWidth />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Service list item ─── */
function ServiceListItem({ service }: { service: typeof ALL_SERVICES[number] }) {
  const status = service.type === "snakk" ? getOpenStatus(service.openingHours) : null;

  return (
    <Link
      to={`/hjelpetjenester/${service.slug}`}
      className="bg-white rounded-[12px] p-3 flex gap-[10px] items-center hover:shadow-md transition-shadow"
    >
      <div className="shrink-0">{service.logo}</div>
      <div className="flex-1 flex flex-col gap-0 min-w-0">
        <p className="font-['Borna',sans-serif] leading-[24px] text-[#0f0f0f] text-[16px] tracking-[-0.064px] truncate" style={{ fontWeight: 600 }}>
          {service.title}
        </p>
        {status && (
          <p
            className="font-['Open_Sans',sans-serif] font-semibold leading-[20px] text-[14px] tracking-[-0.056px] whitespace-nowrap"
            style={{ fontVariationSettings: "'wdth' 100", color: status === "Stengt" ? "#b82a1f" : "#2b5944" }}
          >
            {status}
          </p>
        )}
        {!status && service.type === "selvhjelp" && (
          <p className="font-['Open_Sans',sans-serif] font-normal leading-[20px] text-[#454545] text-[14px] tracking-[-0.056px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {service.metaType}
          </p>
        )}
      </div>
      <div className="shrink-0 size-[28px]">
        <svg className="block size-full" fill="none" viewBox="0 0 20 20">
          <path clipRule="evenodd" d={svgPaths.pad10300} fill="#0F0F0F" fillRule="evenodd" />
        </svg>
      </div>
    </Link>
  );
}

/* ─── Back link ─── */
function BackLink({ to = "/hjelpetjenester" }: { to?: string }) {
  return (
    <div className="px-3 py-4">
      <Link to={to} className="group inline-flex flex-col gap-[4px] items-center py-[8px]">
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
  );
}
