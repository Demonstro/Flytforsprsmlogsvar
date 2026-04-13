import { Link } from "react-router";
import { ArrowRightSmallIcon } from "./shared";
import svgPaths from "../../imports/HelpServicesLandingPage/svg-mtcrfxvim5";

interface ServiceButton {
  type: "chat" | "phone" | "download";
  label: string;
  href?: string;
  disabled?: boolean;
  icon?: "apple" | "phone";
}

export interface ServiceCardProps {
  title: string;
  description: string;
  logo: React.ReactNode;
  status?: {
    text: string;
    variant: "open" | "available" | "tool" | "closed";
  };
  buttons: ServiceButton[];
  detailLink?: string;
  fullWidth?: boolean;
}

export function ServiceCard({
  title,
  description,
  logo,
  status,
  buttons,
  detailLink = "#",
  fullWidth,
}: ServiceCardProps) {
  return (
    <div className={`bg-white h-full rounded-[12px] flex flex-col ${fullWidth ? "w-full" : "shrink-0 w-[289px]"}`}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="flex flex-col gap-[12px] p-[12px] size-full">
          {/* Header */}
          <div className="flex gap-[8px] h-[72px] items-start shrink-0 w-full">
            {logo}
            <div className="flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px">
              <p className="font-['Borna',sans-serif] leading-[24px] text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full" style={{ fontWeight: 600 }}>
                {title}
              </p>
              {status && (
                <div className="flex gap-[4px] items-center">
                  <p
                    className={`font-['Open_Sans',sans-serif] leading-[20px] text-[14px] tracking-[-0.056px] whitespace-nowrap font-semibold ${
                      status.variant === "open"
                        ? "text-[#2b5944]"
                        : status.variant === "closed"
                        ? "text-[#b82a1f]"
                        : "text-[#0f0f0f]"
                    }`}
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {status.text}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-[16px] items-center flex-wrap">
            {buttons.map((button, i) => (
              <ServiceButton key={i} {...button} />
            ))}
          </div>

          {/* Description */}
          <div className="flex-1 flex flex-col min-h-px min-w-px w-full">
            <p className="flex-1 font-['Open_Sans',sans-serif] font-normal leading-[24px] text-[16px] text-black tracking-[-0.064px] overflow-hidden text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
              {description}
            </p>
          </div>

          {/* Read more link */}
          <div className="flex flex-col items-start justify-end min-h-[44px]">
            <Link to={detailLink} className="group flex flex-col gap-[4px] items-center justify-center min-h-[44px] py-[8px] rounded-[50px]">
              <div className="flex gap-[4px] items-center">
                <p className="font-['Open_Sans',sans-serif] font-semibold leading-[24px] text-[#0f0f0f] text-[16px] tracking-[-0.064px] whitespace-nowrap group-hover:text-[#2b5944] transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Les mer
                </p>
                <div className="size-[20px] overflow-clip">
                  <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d={svgPaths.pad10300} className="fill-[#0f0f0f] group-hover:fill-[#2b5944] transition-colors" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="h-0 w-full relative">
                <div className="absolute inset-[-2px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 2">
                    <line className="stroke-[#0f0f0f] group-hover:stroke-[#2b5944] transition-colors" strokeWidth="2" x2="85" y1="1" y2="1" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceButton({ type, label, href = "#", disabled = false, icon }: ServiceButton) {
  const baseClasses = "flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] rounded-[9999px] transition-colors";

  if (type === "download") {
    return (
      <a
        href={href}
        className={`${baseClasses} bg-[#2b5944] hover:bg-[#1f4133] text-white`}
      >
        {icon === "apple" && (
          <div className="size-[20px] relative">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.pdea9900} fill="white" />
              <path d={svgPaths.p37acfa00} fill="white" />
            </svg>
          </div>
        )}
        <span className="font-['Open_Sans',sans-serif] font-semibold leading-[24px] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          {label}
        </span>
      </a>
    );
  }

  if (type === "chat") {
    if (disabled) {
      return (
        <span className={`${baseClasses} bg-[#dfdfdf] text-[#888] cursor-not-allowed`}>
          <span className="font-['Open_Sans',sans-serif] font-semibold leading-[24px] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </span>
          <div className="size-[20px]">
            <svg className="block size-full" fill="none" viewBox="0 0 20 20">
              <path d={svgPaths.p12127880} fill="currentColor" />
            </svg>
          </div>
        </span>
      );
    }
    return (
      <a
        href={href}
        className={`${baseClasses} bg-[#2b5944] hover:bg-[#3c7c5e] text-white`}
      >
        <span className="font-['Open_Sans',sans-serif] font-semibold leading-[24px] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          {label}
        </span>
        <div className="size-[20px]">
          <svg className="block size-full" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.p12127880} fill="currentColor" />
          </svg>
        </div>
      </a>
    );
  }

  if (type === "phone") {
    if (disabled) {
      return (
        <span className={`${baseClasses} border border-[#888] text-[#888] cursor-not-allowed`}>
          <div className="size-[20px] overflow-clip">
            <svg className="block size-full" fill="none" viewBox="0 0 20 20">
              <g clipPath="url(#clip0_53_2815)">
                <path d={svgPaths.p2e43180} fill="#888888" />
              </g>
              <defs>
                <clipPath id="clip0_53_2815">
                  <rect fill="white" height="20" width="20" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <span className="font-['Open_Sans',sans-serif] font-semibold leading-[24px] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </span>
        </span>
      );
    }
    return (
      <a
        href={href}
        className={`${baseClasses} border border-[#0f0f0f] hover:bg-[#f5f3f0] text-[#0f0f0f]`}
      >
        <div className="size-[20px] overflow-clip">
          <svg className="block size-full" fill="none" viewBox="0 0 20 20">
            <g clipPath="url(#clip0_53_2815)">
              <path d={svgPaths.p2e43180} fill="#0f0f0f" />
            </g>
            <defs>
              <clipPath id="clip0_53_2815">
                <rect fill="white" height="20" width="20" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <span className="font-['Open_Sans',sans-serif] font-semibold leading-[24px] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          {label}
        </span>
      </a>
    );
  }

  return null;
}

// Logo components for different services
export function AlarmtelefonenLogo() {
  return (
    <div className="bg-[#d04620] overflow-clip rounded-[12px] shrink-0 size-[48px] relative">
      <svg className="absolute inset-[38.75%_12.5%_20%_12.5%] block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 19.8">
        <path clipRule="evenodd" d={svgPaths.p32dd1000} fill="white" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.pce01800} fill="white" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p80bf700} fill="white" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p132b4000} fill="white" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p263df440} fill="white" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p3e21b480} fill="white" fillRule="evenodd" />
        <path d={svgPaths.p3c383f00} fill="white" />
        <path clipRule="evenodd" d={svgPaths.p2ebe7a80} fill="white" fillRule="evenodd" />
        <path d={svgPaths.p342f4b00} fill="white" />
        <path d={svgPaths.p46c3000} fill="white" />
        <path d={svgPaths.p187ce000} fill="white" />
        <path d={svgPaths.p3c0cc780} fill="white" />
        <path d={svgPaths.p3f24d8f0} fill="white" />
        <path clipRule="evenodd" d={svgPaths.p3807af00} fill="white" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p388da500} fill="white" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p384ca580} fill="white" fillRule="evenodd" />
        <path d={svgPaths.p37f94800} fill="white" />
        <path clipRule="evenodd" d={svgPaths.p14106e80} fill="white" fillRule="evenodd" />
        <path d={svgPaths.p39fe3040} fill="white" />
        <path d={svgPaths.p21669a00} fill="white" />
        <path d={svgPaths.p9333e80} fill="white" />
        <path d={svgPaths.p3e069900} fill="white" />
        <path d={svgPaths.p212a3800} fill="white" />
        <path d={svgPaths.p554a300} fill="white" />
        <path d={svgPaths.p2d41600} fill="white" />
        <path d={svgPaths.pdf9b100} fill="white" />
        <path d={svgPaths.p1a65c480} fill="white" />
        <path clipRule="evenodd" d={svgPaths.pa263f0} fill="white" fillRule="evenodd" />
        <path d={svgPaths.p398f2400} fill="white" />
        <path d={svgPaths.p3e59b600} fill="white" />
        <path d={svgPaths.p33fd1d00} fill="white" />
        <path d={svgPaths.p14c1d000} fill="white" />
        <path d={svgPaths.p37597580} fill="white" />
      </svg>
    </div>
  );
}

export function GrublLogo() {
  return (
    <div className="bg-black overflow-clip rounded-[12px] shrink-0 size-[48px] relative">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <path d={svgPaths.p16c72500} fill="white" />
        <path clipRule="evenodd" d={svgPaths.p36c37520} fill="white" fillRule="evenodd" />
        <path d={svgPaths.p33f98e00} fill="white" />
        <path d={svgPaths.p19974800} fill="white" />
        <path d={svgPaths.p1aa35c80} fill="white" />
        <rect fill="#FF8C31" height="2.225" width="2.25" x="40.575" y="26.325" />
        <rect fill="#FF8AFD" height="10.9" width="10.9" x="37.1" />
        <rect fill="#007DF9" height="4.2" width="4.2" x="32.9" />
        <rect fill="#007DF9" height="4.7" width="4.7" x="9.825" y="43.3" />
        <rect fill="#FF8C31" height="9.825" width="9.825" y="38.175" />
      </svg>
    </div>
  );
}

export function SpisfoLogo() {
  return (
    <div className="bg-[#f9f2ea] overflow-clip rounded-[12px] shrink-0 size-[48px] relative">
      <svg className="absolute inset-[18.75%_12.5%_20%_12.5%] block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 29.4">
        <path clipRule="evenodd" d={svgPaths.p2f269700} fill="#599D9F" fillRule="evenodd" />
      </svg>
    </div>
  );
}