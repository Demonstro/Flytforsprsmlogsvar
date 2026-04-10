import svgPaths from "./svg-jp2pk5nxi8";

export default function Component() {
  return (
    <button className="content-stretch cursor-pointer flex gap-[12px] items-center pb-[8px] px-[16px] relative size-full" data-name="Component 1">
      <div className="flex flex-row items-center self-stretch">
        <div className="content-stretch flex h-full items-start relative shrink-0">
          <div className="relative shrink-0 size-[48px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
              <g id="Group 2">
                <circle cx="24" cy="24" fill="var(--fill-0, #DEEFE7)" id="Ellipse 1" r="24" />
                <g id="Group 3">
                  <g id="Group 1">
                    <rect height="5.27816" id="Rectangle 1" rx="2.63908" stroke="var(--stroke-0, black)" strokeWidth="1.19018" width="5.27816" x="11" y="18.6252" />
                    <path d={svgPaths.p2811ec00} id="Vector 2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.19018" />
                  </g>
                  <g id="Group 1_2">
                    <rect height="5.27816" id="Rectangle 1_2" rx="2.63908" stroke="var(--stroke-0, black)" strokeWidth="1.19018" transform="matrix(-1 0 0 1 36.554 18.6252)" width="5.27816" />
                    <path d={svgPaths.pc13b4c0} id="Vector 2_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.19018" />
                  </g>
                  <path d={svgPaths.p2c25c600} fill="var(--fill-0, #F5F5F5)" id="Rectangle 1_3" stroke="var(--stroke-0, black)" strokeWidth="1.19018" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative text-[#0f0f0f] text-left">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] tracking-[-0.064px] w-full">A very long title spanning two lines</p>
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] tracking-[-0.056px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          I dag
        </p>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative shrink-0">
          <div className="content-stretch flex h-full items-start pt-[12px] relative">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Arrows/Chevron-down">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="chevron-down 1">
                  <path clipRule="evenodd" d={svgPaths.p11bb02f2} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Vector (Stroke)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}