import svgPaths from "./svg-vadedfpb76";

export default function Component() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col items-start relative size-full" data-name="Component 1">
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center pb-[8px] px-[16px] relative w-full">
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
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative text-[#0f0f0f] text-left">
              <p className="font-['Borna:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] tracking-[-0.064px] w-full">Helsesykepleier</p>
              <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] tracking-[-0.056px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                I dag
              </p>
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Arrows/Chevron-up">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="chevron-up 1">
                  <path clipRule="evenodd" d={svgPaths.p3dbf1c80} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Vector (Stroke)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f9f5] relative shrink-0 w-full" data-name="Body">
        <div className="content-stretch flex items-start px-[16px] py-[24px] relative w-full">
          <div className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[#0f0f0f] text-[0px] text-[16px] text-left tracking-[-0.064px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[24px] mb-[20px]">{`Helfo er en del av Staten som passer på at du får tilbake penger du har krav på når du har vært hos lege, tannlege eller har kjøpt medisiner. `}</p>
            <p>
              <span className="leading-[24px]">{`De hjelper også med frikort, så du slipper å betale når du har betalt nok egenandeler. Du kan finne informasjon og få hjelp på `}</span>
              <span className="decoration-solid font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] tracking-[-0.064px] underline" style={{ fontVariationSettings: "'wdth' 100" }}>
                helfo.no
              </span>
              <span className="leading-[24px]">.</span>
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}