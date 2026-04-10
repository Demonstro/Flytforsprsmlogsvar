import svgPaths from "./svg-8vsmcvmcdl";

function Number() {
  return (
    <div className="bg-[#acd7c3] relative rounded-[4px] shrink-0 w-full" data-name="Number">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[24px]">hvalross-kake-fiolin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Div/Copy">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="sort">
            <g id="Union">
              <path clipRule="evenodd" d={svgPaths.p1b0e44d0} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" />
              <path d={svgPaths.p38b87000} fill="var(--fill-0, #0F0F0F)" />
            </g>
          </g>
        </svg>
      </div>
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Kopier</p>
      </div>
    </div>
  );
}

export default function Code() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center py-[16px] relative size-full" data-name="Code">
      <Number />
      <div className="content-stretch flex items-start min-h-[44px] relative shrink-0" data-name="Button">
        <ButtonBase />
      </div>
    </div>
  );
}