import { Link, useNavigate } from "react-router";
import svgPaths from "../../imports/svg-pqm7nhdsko";

interface GlobalMenuProps {
  onClose: () => void;
}

const MENU_SECTIONS = [
  {
    items: [
      { label: "Spørsmål og svar", href: "/sporsmaal-og-svar" },
      { label: "Still spørsmål", href: "/still-sporsmal" },
      { label: "Sjekk ditt svar", href: "#" },
    ],
  },
  {
    items: [
      { label: "Hjelp nær deg", href: "#" },
      { label: "Hjelpetjenester", href: "/hjelpetjenester" },
    ],
  },
  {
    items: [
      { label: "Temaer", href: "/tema" },
      { label: "Om Ung.no", href: "#" },
    ],
  },
];

export function GlobalMenu({ onClose }: GlobalMenuProps) {
  const navigate = useNavigate();

  const handleLinkClick = (href: string) => {
    onClose();
    if (href !== "#") {
      navigate(href);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#f5f3f0] flex flex-col items-center overflow-y-auto">
      <div className="w-full max-w-[375px] flex flex-col min-h-full">
        {/* Content */}
        <div className="flex flex-col items-start pb-[40px] pt-[12px] px-[12px] relative flex-1">
          {/* Back / Tilbake button */}
          <div className="flex gap-[16px] items-center py-[8px] w-full">
            <button
              onClick={onClose}
              className="group flex flex-col gap-[4px] items-center justify-center py-[8px] cursor-pointer self-start w-fit focus-visible:outline-none relative"
            >
              <div className="flex gap-[4px] items-center">
                <div className="size-[20px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                    <path
                      clipRule="evenodd"
                      d={svgPaths.p12cd1d80}
                      className="fill-[#0f0f0f] group-hover:fill-[#2b5944] transition-colors"
                      fillRule="evenodd"
                    />
                    <path
                      clipRule="evenodd"
                      d={svgPaths.p9576200}
                      className="fill-[#0f0f0f] group-hover:fill-[#2b5944] transition-colors"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
                <p
                  className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] group-hover:text-[#2b5944] transition-colors leading-[24px] tracking-[-0.064px] whitespace-nowrap"
                  style={{ fontWeight: 600 }}
                >
                  Tilbake
                </p>
              </div>
              <div className="h-[2px] w-full bg-[#0f0f0f] group-hover:bg-[#2b5944] transition-colors" />
              <div className="absolute inset-[0_-8px] rounded-[4px] opacity-0 group-focus-visible:opacity-100">
                <div aria-hidden="true" className="absolute border-2 border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-[4px]" />
              </div>
            </button>
          </div>

          {/* Menu sections */}
          <div className="flex flex-col gap-[32px] items-end py-[20px] w-full">
            {MENU_SECTIONS.map((section, sIdx) => (
              <div key={sIdx} className="flex flex-col gap-[8px] items-start w-full">
                {[...section.items].reverse().map((item) => (
                  <MenuLink
                    key={item.label}
                    label={item.label}
                    onClick={() => handleLinkClick(item.href)}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Illustration - positioned at bottom right */}
          <div className="fixed bottom-6 right-6 h-[182px] w-[227px] z-[101]">
            <div className="absolute inset-[1.74%_5%_21.18%_10.83%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 191.058 140.292">
                <path d={svgPaths.p2dd0f400} fill="#79FC9E" />
              </svg>
            </div>
            <div className="absolute inset-[15.63%_17.22%_0.69%_6.39%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 173.403 152.299">
                <path d={svgPaths.p37b87f00} fill="white" />
                <path d={svgPaths.p379f8300} fill="black" />
                <path d={svgPaths.p26d9dfc0} fill="black" />
                <path d={svgPaths.p380a4d00} fill="black" />
                <path d={svgPaths.p15218400} fill="black" />
                <path d={svgPaths.p36e28480} fill="black" />
                <path d={svgPaths.p1842b1f0} fill="black" />
                <path d={svgPaths.p320cde80} fill="black" />
                <path d={svgPaths.p276b5000} fill="black" />
                <path d={svgPaths.p2c8ef000} fill="black" />
                <path d={svgPaths.p1a22b870} fill="black" />
                <path clipRule="evenodd" d={svgPaths.p3e5f2700} fill="black" fillRule="evenodd" />
                <path d={svgPaths.p2a120300} fill="black" />
                <path d={svgPaths.p2654e40} fill="black" />
                <path d={svgPaths.p1c5b49c0} fill="black" />
                <path d={svgPaths.p1a3b2580} fill="black" />
                <path d={svgPaths.p35c09e00} fill="black" />
                <path d={svgPaths.p2400b100} fill="black" />
                <path d={svgPaths.p3f3b7600} fill="black" />
                <path d={svgPaths.p3359bd80} fill="black" />
                <path d={svgPaths.p31a86cf0} fill="black" />
                <path clipRule="evenodd" d={svgPaths.p1a36b780} fill="black" fillRule="evenodd" />
                <path d={svgPaths.p141add70} fill="black" />
                <path d={svgPaths.p21eca200} fill="black" />
                <path clipRule="evenodd" d={svgPaths.p2a7d9500} fill="black" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuLink({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative flex flex-col gap-[4px] items-center justify-center py-[8px] cursor-pointer self-start w-fit focus-visible:outline-none"
    >
      <div className="flex gap-[4px] items-center">
        <p
          className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] group-hover:text-[#2b5944] transition-colors leading-[24px] tracking-[-0.064px] whitespace-nowrap"
          style={{ fontWeight: 600, fontVariationSettings: "'wdth' 100" }}
        >
          {label}
        </p>
      </div>
      <div className="h-[2px] w-full bg-[#0f0f0f] group-hover:bg-[#2b5944] transition-colors" />
    </button>
  );
}