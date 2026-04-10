import svgPaths from "./svg-hltzvno3qc";

function ButtonBase() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button base">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Arrows/Arrow-right">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="arrow-right">
            <path clipRule="evenodd" d={svgPaths.p29ff4d00} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Union" />
          </g>
        </svg>
      </div>
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Alle spørsmål og svar
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[44px] py-[8px] relative rounded-[50px] shrink-0" data-name="Frame">
      <ButtonBase />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 2">
            <line id="Line" stroke="var(--stroke-0, #0F0F0F)" strokeWidth="2" x2="120" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Button() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full" data-name="Button">
      <Frame />
    </div>
  );
}