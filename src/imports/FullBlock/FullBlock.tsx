import svgPaths from "./svg-86pzyy3n14";

function Illustration() {
  return (
    <div className="h-[228.442px] relative shrink-0 w-[240px]" data-name="Illustration">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 228.442">
        <g id="Illustration">
          <path d={svgPaths.p1b974170} fill="var(--fill-0, #585EFF)" id="Vector" />
          <path d={svgPaths.p11a44200} fill="var(--fill-0, white)" id="Vector 1" />
          <path d={svgPaths.p38ed280} fill="var(--fill-0, black)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center py-[8px] relative shrink-0 w-full">
      <Illustration />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="relative shrink-0 w-full" data-name="Heading">
        <div className="content-stretch flex flex-col items-start pr-[12px] relative w-full">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#0f0f0f] text-[24px] tracking-[-0.096px] w-full">Hjelp nær deg</p>
        </div>
      </div>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-black tracking-[-0.072px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="[text-decoration-skip-ink:none] decoration-solid leading-[26px] text-[#0f0f0f] text-[18px] underline" style={{ fontVariationSettings: "'wdth' 100" }}>
          Helsestasjon for ungdom (HFU)
        </span>
        <span className="leading-[26px] text-[#0f0f0f] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>{` er et gratis tilbud der kan du få veiledning om prevensjon og seksuell helse. Du kan også få hjelp til psykisk helse og svar på andre helsespørsmål. `}</span>
      </p>
      <Frame1 />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[18px] text-black tracking-[-0.072px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Begynn med å fortelle oss hvor du befinner deg nå.
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Text />
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Things/Map-pin">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="map-pin 1">
            <g id="Union">
              <path clipRule="evenodd" d={svgPaths.p1836f680} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p117ef600} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </g>
        </svg>
      </div>
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Bruk min lokasjon</p>
      </div>
    </div>
  );
}

function ButtonBase1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button base">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jeg vil legge inn manuelt
      </p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Arrows/Arrow-right">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="arrow-right">
            <path clipRule="evenodd" d={svgPaths.pad10300} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[44px] py-[8px] relative rounded-[50px] shrink-0" data-name="Frame">
      <ButtonBase1 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 210 2">
            <line id="Line" stroke="var(--stroke-0, #0F0F0F)" strokeWidth="2" x2="210" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonRow() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Button Row">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
        <ButtonBase />
      </div>
      <div className="content-stretch flex flex-col items-start min-h-[44px] relative shrink-0" data-name="Button">
        <Frame />
      </div>
    </div>
  );
}

export default function FullBlock() {
  return (
    <div className="bg-[#ebebff] content-stretch flex flex-col gap-[40px] items-start px-[12px] py-[40px] relative size-full" data-name="Full block">
      <Content />
      <ButtonRow />
    </div>
  );
}