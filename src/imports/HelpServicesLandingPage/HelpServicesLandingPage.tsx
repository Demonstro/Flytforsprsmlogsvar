import svgPaths from "./svg-mtcrfxvim5";

function IconsChromeShare() {
  return (
    <div className="absolute right-[24px] size-[21px] top-[16px]" data-name=".icons/chrome/share">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id=".icons/chrome/share">
          <path d={svgPaths.pcf0a900} fill="var(--fill-0, #888888)" id="Share" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[7px] items-center justify-center left-[calc(50%+0.41px)] top-[16px]">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name=".icons/chrome/lock">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[11.508px] left-1/2 top-[calc(50%+0.64px)] w-[7.672px]" data-name="Lock">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.67188 11.5078">
            <path d={svgPaths.p25029470} fill="var(--fill-0, #0F0F0F)" id="Lock" />
          </svg>
        </div>
      </div>
      <p className="font-['Helvetica:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#262626] text-[18px] whitespace-nowrap">ung.no</p>
    </div>
  );
}

function ChromeTop() {
  return (
    <div className="h-[55px] relative shrink-0 w-full" data-name="Chrome - Top">
      <div className="absolute bg-white inset-[0_0_1.82%_0]" data-name="bg" />
      <div className="absolute bg-[#ededed] bottom-[10px] h-[36px] left-[11px] right-[10px] rounded-[30px]" data-name="chrome-bar-input" />
      <IconsChromeShare />
      <Frame1 />
      <div className="absolute h-0 left-0 right-0 top-[55px]">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 0.5">
            <line id="Line 2" stroke="var(--stroke-0, #C8C8C8)" strokeWidth="0.5" x2="375" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TopScreen() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1647px] items-start left-0 right-0 top-[38px]" data-name="Top+Screen">
      <ChromeTop />
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute contents right-[14.67px] top-[17.33px]" data-name="Battery">
      <div className="absolute h-[11.333px] right-[17px] top-[17.33px] w-[22px]" data-name="Rectangle">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 11.3333">
          <path d={svgPaths.p7e6b880} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, #0F0F0F)" />
        </svg>
      </div>
      <div className="absolute h-[4px] right-[14.67px] top-[21px] w-[1.328px]" data-name="Combined Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.32804 4">
          <path d={svgPaths.p32d253c0} fill="var(--fill-0, #0F0F0F)" id="Combined Shape" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute h-[7.333px] right-[19px] top-[19.33px] w-[18px]" data-name="Rectangle">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 7.33333">
          <path d={svgPaths.p3544af00} fill="var(--fill-0, #0F0F0F)" id="Rectangle" />
        </svg>
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="absolute contents right-[14.67px] top-[17.33px]" data-name="Right">
      <Battery />
      <div className="absolute h-[10.966px] right-[44.03px] top-[17.33px] w-[15.272px]" data-name="Wifi">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2725 10.966">
          <path d={svgPaths.p3d78f640} fill="var(--fill-0, #0F0F0F)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute h-[10.667px] right-[64.33px] top-[17.67px] w-[17px]" data-name="Mobile Signal">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10.667">
          <path d={svgPaths.p26d17600} fill="var(--fill-0, #0F0F0F)" id="Mobile Signal" />
        </svg>
      </div>
    </div>
  );
}

function Date() {
  return (
    <div className="absolute contents left-[33.45px] top-[17.17px]" data-name="Date">
      <div className="absolute h-[11.089px] left-[33.45px] top-[17.17px] w-[28.426px]" data-name="9:41">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4262 11.0889">
          <g id="9:41">
            <path d={svgPaths.p1218b780} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p25dc35c0} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p38b62380} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p3a930400} fill="var(--fill-0, #0F0F0F)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SystemStatusBar() {
  return (
    <div className="absolute h-[38px] left-0 overflow-clip right-0 top-0" data-name=".system/status-bar">
      <Right />
      <Date />
    </div>
  );
}

function SystemIPhoneUi() {
  return (
    <div className="absolute inset-[0_0_-38px_0]" data-name=".system/iPhone-ui">
      <SystemStatusBar />
    </div>
  );
}

function RootChromePortrait() {
  return (
    <div className="absolute bg-white inset-0 overflow-clip" data-name=".root/chrome/portrait">
      <TopScreen />
      <SystemIPhoneUi />
    </div>
  );
}

function Browser() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[2]" data-name="Browser">
      <div className="bg-white h-[93px] overflow-clip relative shrink-0 w-full" data-name="Chrome bar - Iphone">
        <RootChromePortrait />
      </div>
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="content-stretch flex items-center justify-center min-w-[44px] p-[12px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Navigation/Search">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="search 1">
            <path clipRule="evenodd" d={svgPaths.p237f08c0} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ButtonBase1() {
  return (
    <div className="content-stretch flex items-center justify-center min-w-[44px] p-[12px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Navigation/Menu">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="menu 1">
            <g id="Union">
              <path d={svgPaths.p6b68900} fill="var(--fill-0, #0F0F0F)" />
              <path d={svgPaths.p11ec2900} fill="var(--fill-0, #0F0F0F)" />
              <path d={svgPaths.p31f7f500} fill="var(--fill-0, #0F0F0F)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Buttons">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Icon-button">
        <ButtonBase />
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Icon-button">
        <ButtonBase1 />
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="bg-[#f5f3f0] relative shrink-0 w-full z-[1]" data-name="Menu">
      <div className="content-stretch flex items-start justify-between p-[12px] relative w-full">
        <div className="h-[48px] relative shrink-0 w-[66.098px]" data-name="Logo-sticker-variants">
          <div className="absolute inset-[0.32%_0.32%_0.19%_0.16%]" data-name="Outline">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65.7817 47.7544">
              <path clipRule="evenodd" d={svgPaths.p3226d2f0} fill="var(--fill-0, #79FC9E)" fillRule="evenodd" id="Outline" />
            </svg>
          </div>
          <div className="absolute inset-[7.02%_5.58%_7.1%_5.81%]" data-name="Logo-main">
            <div className="absolute inset-[0.23%_-0.02%_0.39%_-0.13%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.6603 40.9675">
                <g id="Vector">
                  <path d={svgPaths.p233f4600} fill="var(--fill-0, #0F0F0F)" />
                  <path d={svgPaths.p2eafdb00} fill="var(--fill-0, #0F0F0F)" />
                  <path d={svgPaths.p7acb900} fill="var(--fill-0, #0F0F0F)" />
                  <path d={svgPaths.p29a2b380} fill="var(--fill-0, #0F0F0F)" />
                  <path d={svgPaths.pad8f400} fill="var(--fill-0, #0F0F0F)" />
                  <path d={svgPaths.p72a8800} fill="var(--fill-0, #0F0F0F)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <Buttons />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Arrows/Arrow-left">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="arrow-left 1">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p12cd1d80} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p9576200} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" />
            </g>
          </g>
        </svg>
      </div>
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tilbake
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-col gap-[4px] items-center justify-center py-[16px] relative shrink-0" data-name="Link">
        <Frame />
        <div className="h-0 relative shrink-0 w-full" data-name="Line">
          <div className="absolute inset-[-2px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 2">
              <line id="Line" stroke="var(--stroke-0, #0F0F0F)" strokeWidth="2" x2="80" y1="1" y2="1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#0f0f0f] text-[30px] tracking-[-0.12px] w-full">Hjelp deg selv eller få hjelp</p>
      </div>
      <div className="content-stretch flex items-start pt-[20px] relative shrink-0 w-full" data-name="Ingress">
        <div className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] max-w-[351px] min-h-px min-w-px relative text-[#0f0f0f] text-[18px] tracking-[-0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[26px] mb-[20px]">Her har vi samlet tjenester for deg som ønsker å snakke med noen, enten via chat eller telefon.</p>
          <p className="leading-[26px]">Du kan også finne apper, videoer og kurs som du kan bruke til å lære om hvordan du kan håndtere ulike følelser og situasjoner i livet. Alle verktøyene er faglig godkjent og gratis å bruke.</p>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[4px] items-start pb-[8px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[26px]">Hva ønsker du hjelp til?</p>
      </div>
    </div>
  );
}

function PlaceholderText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Placeholder text">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#676767] text-[16px] text-justify tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Skriv inn ord, tema eller tjeneste</p>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[9999px]" data-name="Text input">
      <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
        <PlaceholderText />
      </div>
    </div>
  );
}

function ButtonBase2() {
  return (
    <div className="bg-[#2b5944] content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Søk</p>
      </div>
    </div>
  );
}

function SearchField() {
  return (
    <div className="content-stretch flex gap-[6px] items-end relative shrink-0 w-full" data-name="Search field">
      <TextInput />
      <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
        <ButtonBase2 />
      </div>
    </div>
  );
}

function SearchAndFilter() {
  return (
    <div className="relative shrink-0 w-full" data-name="Search and filter">
      <div className="content-stretch flex flex-col items-start pt-[32px] px-[12px] relative w-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[343px]" data-name="Search input">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
            <Label />
          </div>
          <SearchField />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading">
      <div className="content-stretch flex items-start justify-between leading-[24px] pr-[12px] relative text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full whitespace-nowrap">
        <p className="font-['Borna:SemiBold',sans-serif] not-italic relative shrink-0">Psykisk helse</p>
        <p className="[text-decoration-skip-ink:none] decoration-[6%] decoration-solid font-['Open_Sans:Regular',sans-serif] font-normal relative shrink-0 underline" style={{ fontVariationSettings: "'wdth' 100" }}>
          Se alle
        </p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name=".Open or closed help service">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b5944] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Døgnåpen</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndMetadata() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Title and metadata">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full">Alarmtelefonen for barn og unge</p>
      </div>
      <Row />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[8px] h-[72px] items-start relative shrink-0 w-full" data-name="Header">
      <div className="bg-[#d04620] overflow-clip relative rounded-[12px] shrink-0 size-[48px]" data-name="Service logo">
        <div className="absolute inset-[38.75%_12.5%_20%_12.5%]" data-name="Logo">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 19.8">
            <g id="Logo">
              <path clipRule="evenodd" d={svgPaths.p32dd1000} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pce01800} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p80bf700} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p132b4000} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p263df440} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3e21b480} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path d={svgPaths.p3c383f00} fill="var(--fill-0, white)" />
              <path clipRule="evenodd" d={svgPaths.p2ebe7a80} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path d={svgPaths.p342f4b00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p46c3000} fill="var(--fill-0, white)" />
              <path d={svgPaths.p187ce000} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3c0cc780} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3f24d8f0} fill="var(--fill-0, white)" />
              <path clipRule="evenodd" d={svgPaths.p3807af00} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p388da500} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p384ca580} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path d={svgPaths.p37f94800} fill="var(--fill-0, white)" />
              <path clipRule="evenodd" d={svgPaths.p14106e80} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path d={svgPaths.p39fe3040} fill="var(--fill-0, white)" />
              <path d={svgPaths.p21669a00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p9333e80} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3e069900} fill="var(--fill-0, white)" />
              <path d={svgPaths.p212a3800} fill="var(--fill-0, white)" />
              <path d={svgPaths.p554a300} fill="var(--fill-0, white)" />
              <path d={svgPaths.p2d41600} fill="var(--fill-0, white)" />
              <path d={svgPaths.pdf9b100} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1a65c480} fill="var(--fill-0, white)" />
              <path clipRule="evenodd" d={svgPaths.pa263f0} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path d={svgPaths.p398f2400} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3e59b600} fill="var(--fill-0, white)" />
              <path d={svgPaths.p33fd1d00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p14c1d000} fill="var(--fill-0, white)" />
              <path d={svgPaths.p37597580} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
      <TitleAndMetadata />
    </div>
  );
}

function ButtonBase3() {
  return (
    <div className="bg-[#dfdfdf] content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#888] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Chat</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="Icons/Arrows/Arrow-Up-Rright">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="arrow-up-right 1">
            <path d={svgPaths.p12127880} fill="var(--fill-0, #888888)" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ButtonBase4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Things/Phone">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g clipPath="url(#clip0_53_2815)" id="phone 1">
            <path d={svgPaths.p2e43180} fill="var(--fill-0, #888888)" id="Vector (Stroke)" />
          </g>
          <defs>
            <clipPath id="clip0_53_2815">
              <rect fill="white" height="20" width="20" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Ring oss</p>
      </div>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Buttons">
      <div className="content-stretch flex items-center min-h-[44px] relative shrink-0" data-name="Button">
        <ButtonBase3 />
      </div>
      <div className="content-stretch flex items-start min-h-[44px] relative shrink-0" data-name="Button">
        <ButtonBase4 />
      </div>
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Description">
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis tracking-[-0.064px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Alarmtelefonen er barnevernets døgnåpne svartjeneste.
      </p>
    </div>
  );
}

function ButtonBase5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button base">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Les mer
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

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[44px] py-[8px] relative rounded-[50px] shrink-0" data-name="Frame">
      <ButtonBase5 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 2">
            <line id="Line" stroke="var(--stroke-0, #0F0F0F)" strokeWidth="2" x2="85" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArticleCard() {
  return (
    <div className="bg-white h-full relative rounded-[12px] shrink-0 w-[289px]" data-name="Article card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
          <Header />
          <Buttons1 />
          <Description />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-[44px] min-w-px relative" data-name="Button">
            <Frame2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name=".Open or closed help service">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Selvhjelpsverktøy</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndMetadata1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Title and metadata">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full">Grubl</p>
      </div>
      <Row1 />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[72px] items-start relative shrink-0 w-full" data-name="Header">
      <div className="bg-black overflow-clip relative rounded-[12px] shrink-0 size-[48px]" data-name="Service logo">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.0001 48">
          <g id="Logo">
            <g id="Text">
              <path d={svgPaths.p16c72500} fill="var(--fill-0, white)" />
              <path clipRule="evenodd" d={svgPaths.p36c37520} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path d={svgPaths.p33f98e00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p19974800} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1aa35c80} fill="var(--fill-0, white)" />
            </g>
            <rect fill="var(--fill-0, #FF8C31)" height="2.225" id="Fullstop " width="2.25" x="40.575" y="26.325" />
            <rect fill="var(--fill-0, #FF8AFD)" height="10.9" id="Rectangle" width="10.9" x="37.1" />
            <rect fill="var(--fill-0, #007DF9)" height="4.2" id="Rectangle_2" width="4.2" x="32.9" />
            <rect fill="var(--fill-0, #007DF9)" height="4.7" id="Rectangle_3" width="4.7" x="9.825" y="43.3" />
            <rect fill="var(--fill-0, #FF8C31)" height="9.825" id="Rectangle_4" width="9.825" y="38.175" />
          </g>
        </svg>
      </div>
      <TitleAndMetadata1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute inset-[8.33%_15.59%_8.33%_16.67%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5479 16.6667">
        <g id="Frame 3448">
          <g id="Union">
            <path d={svgPaths.pdea9900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p37acfa00} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonBase6() {
  return (
    <div className="bg-[#2b5944] content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div className="relative shrink-0 size-[20px]" data-name="Icons/Brands/Apple-icon">
        <Frame16 />
      </div>
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Last ned fra AppStore</p>
      </div>
    </div>
  );
}

function Buttons2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Buttons">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
        <ButtonBase6 />
      </div>
    </div>
  );
}

function Description1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Description">
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis tracking-[-0.064px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Grubl er en app som kan hjelpe deg å gruble mindre.
      </p>
    </div>
  );
}

function ButtonBase7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button base">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Les mer
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

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[44px] py-[8px] relative rounded-[50px] shrink-0" data-name="Frame">
      <ButtonBase7 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 2">
            <line id="Line" stroke="var(--stroke-0, #0F0F0F)" strokeWidth="2" x2="85" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArticleCard1() {
  return (
    <div className="bg-white h-full relative rounded-[12px] shrink-0 w-[289px]" data-name="Article card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
          <Header1 />
          <Buttons2 />
          <Description1 />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-[44px] min-w-px relative" data-name="Button">
            <Frame3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] relative shrink-0 text-[14px] tracking-[-0.056px] whitespace-nowrap" data-name=".Open or closed help service">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#2b5944]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Åpen</p>
        </div>
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#0f0f0f]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">- Stenger 16:00</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndMetadata2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Title and metadata">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full">Spiseforstyrrelses-foreningen (SPISFO)</p>
      </div>
      <Row2 />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[72px] items-start relative shrink-0 w-full" data-name="Header">
      <div className="bg-[#f9f2ea] overflow-clip relative rounded-[12px] shrink-0 size-[48px]" data-name="Service logo">
        <div className="absolute inset-[18.75%_12.5%_20%_12.5%]" data-name="Logo">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 29.4">
            <path clipRule="evenodd" d={svgPaths.p2f269700} fill="var(--fill-0, #599D9F)" fillRule="evenodd" id="Logo" />
          </svg>
        </div>
      </div>
      <TitleAndMetadata2 />
    </div>
  );
}

function ButtonBase8() {
  return (
    <div className="bg-[#2b5944] content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Chat</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="Icons/Arrows/Arrow-Up-Rright">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="arrow-up-right 1">
            <path d={svgPaths.p12127880} fill="var(--fill-0, white)" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ButtonBase9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Things/Phone">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g clipPath="url(#clip0_53_2805)" id="phone 1">
            <path d={svgPaths.p2e43180} fill="var(--fill-0, #0F0F0F)" id="Vector (Stroke)" />
          </g>
          <defs>
            <clipPath id="clip0_53_2805">
              <rect fill="white" height="20" width="20" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Ring oss</p>
      </div>
    </div>
  );
}

function Buttons3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Buttons">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
        <ButtonBase8 />
      </div>
      <div className="content-stretch flex items-start min-h-[44px] relative shrink-0" data-name="Button">
        <ButtonBase9 />
      </div>
    </div>
  );
}

function Description2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Description">
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis tracking-[-0.064px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        SPISFO tilbyr informasjon og støtte på telefon og chat.
      </p>
    </div>
  );
}

function ButtonBase10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button base">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Les mer
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

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[44px] py-[8px] relative rounded-[50px] shrink-0" data-name="Frame">
      <ButtonBase10 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 2">
            <line id="Line" stroke="var(--stroke-0, #0F0F0F)" strokeWidth="2" x2="85" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArticleCard2() {
  return (
    <div className="bg-white h-full relative rounded-[12px] shrink-0 w-[289px]" data-name="Article card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
          <Header2 />
          <Buttons3 />
          <Description2 />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-[44px] min-w-px relative" data-name="Button">
            <Frame4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-[250px] min-w-px relative w-full" data-name="Content">
      <ArticleCard />
      <ArticleCard1 />
      <ArticleCard2 />
      <div className="shrink-0 size-0" data-name="Spacing" />
    </div>
  );
}

function Carousel() {
  return (
    <div className="h-[360px] relative shrink-0 w-full" data-name="Carousel">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center pl-[12px] py-[24px] relative size-full">
          <Heading />
          <Content1 />
        </div>
      </div>
    </div>
  );
}

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

function Frame5() {
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
      <Frame5 />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[18px] text-black tracking-[-0.072px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Begynn med å fortelle oss hvor du befinner deg nå.
      </p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Text />
    </div>
  );
}

function ButtonBase11() {
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

function ButtonBase12() {
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

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[44px] py-[8px] relative rounded-[50px] shrink-0" data-name="Frame">
      <ButtonBase12 />
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
        <ButtonBase11 />
      </div>
      <div className="content-stretch flex flex-col items-start min-h-[44px] relative shrink-0" data-name="Button">
        <Frame6 />
      </div>
    </div>
  );
}

function FullBlock() {
  return (
    <div className="bg-[#ebebff] relative shrink-0 w-full" data-name="Full block">
      <div className="content-stretch flex flex-col gap-[40px] items-start px-[12px] py-[40px] relative w-full">
        <Content2 />
        <ButtonRow />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading">
      <div className="content-stretch flex items-start justify-between leading-[24px] px-[12px] relative text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full whitespace-nowrap">
        <p className="font-['Borna:SemiBold',sans-serif] not-italic relative shrink-0">Utdanning</p>
        <p className="[text-decoration-skip-ink:none] decoration-[6%] decoration-solid font-['Open_Sans:Regular',sans-serif] font-normal relative shrink-0 underline" style={{ fontVariationSettings: "'wdth' 100" }}>
          Se alle
        </p>
      </div>
    </div>
  );
}

function Illustrasjon() {
  return (
    <div className="absolute inset-[19.93%_7.5%_10%_32.5%]" data-name="Illustrasjon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.7997 33.6328">
        <g id="Illustrasjon">
          <path d={svgPaths.p1ca01700} fill="var(--fill-0, #F07C14)" id="Union" />
          <path d={svgPaths.p7442600} fill="var(--fill-0, white)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p7095f80} fill="var(--fill-0, #F07C14)" fillRule="evenodd" id="Subtract" />
          <path clipRule="evenodd" d={svgPaths.p1785f400} fill="var(--fill-0, #F07C14)" fillRule="evenodd" id="Union_2" />
          <path d={svgPaths.p3c5f6300} fill="var(--fill-0, white)" id="Subtract_2" />
          <path clipRule="evenodd" d={svgPaths.p38864400} fill="var(--fill-0, black)" fillRule="evenodd" id="Union_3" />
          <g id="Union_4">
            <path d={svgPaths.p17273400} fill="var(--fill-0, #F07C14)" />
            <path d={svgPaths.p31fa1900} fill="var(--fill-0, #F07C14)" />
            <path d={svgPaths.p2e1c6000} fill="var(--fill-0, #F07C14)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute inset-[10%_70%_70%_10%]" data-name="Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 9.6">
        <g id="Logo">
          <rect fill="var(--fill-0, #EE7C22)" height="9.6" rx="2" width="9.6" />
          <path d={svgPaths.p4606df0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name=".Open or closed help service">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b5944] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Døgnåpen</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndMetadata3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-between min-h-px min-w-px relative" data-name="Title and metadata">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full">Jobbkompasset</p>
      </div>
      <Row3 />
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex gap-[10px] h-[72px] items-start relative shrink-0 w-full" data-name="Header">
      <div className="bg-white overflow-clip relative rounded-[12px] shrink-0 size-[48px]" data-name="Service logo">
        <Illustrasjon />
        <Logo />
      </div>
      <TitleAndMetadata3 />
    </div>
  );
}

function ButtonBase13() {
  return (
    <div className="bg-[#2b5944] content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Chat</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="Icons/Arrows/Arrow-Up-Rright">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="arrow-up-right 1">
            <path d={svgPaths.p12127880} fill="var(--fill-0, white)" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ButtonBase14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div aria-hidden="true" className="absolute border border-[#888] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Things/Phone">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g clipPath="url(#clip0_53_2815)" id="phone 1">
            <path d={svgPaths.p2e43180} fill="var(--fill-0, #888888)" id="Vector (Stroke)" />
          </g>
          <defs>
            <clipPath id="clip0_53_2815">
              <rect fill="white" height="20" width="20" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#888] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Ring oss</p>
      </div>
    </div>
  );
}

function Buttons4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Buttons">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
        <ButtonBase13 />
      </div>
      <div className="content-stretch flex items-start min-h-[44px] relative shrink-0" data-name="Button">
        <ButtonBase14 />
      </div>
    </div>
  );
}

function Description3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Description">
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis tracking-[-0.064px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Alarmtelefonen er barnevernets døgnåpne svartjeneste.
      </p>
    </div>
  );
}

function ButtonBase15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button base">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Les mer
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

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[44px] py-[8px] relative rounded-[50px] shrink-0" data-name="Frame">
      <ButtonBase15 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 2">
            <line id="Line" stroke="var(--stroke-0, #0F0F0F)" strokeWidth="2" x2="85" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArticleCard3() {
  return (
    <div className="bg-white h-full relative rounded-[12px] shrink-0 w-[289px]" data-name="Article card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
          <Header3 />
          <Buttons4 />
          <Description3 />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-[44px] min-w-px relative" data-name="Button">
            <Frame7 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name=".Open or closed help service">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Selvhjelpsverktøy</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndMetadata4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[72px] items-start min-h-px min-w-px relative" data-name="Title and metadata">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full">Karakterkalkulatoren</p>
      </div>
      <Row4 />
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex gap-[10px] h-[72px] items-start relative shrink-0 w-full" data-name="Header">
      <div className="bg-white overflow-clip relative rounded-[12px] shrink-0 size-[48px]" data-name="Service logo">
        <div className="absolute inset-[12.5%_22.5%_15%_23.75%]" data-name="Logo">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.8 34.8024">
            <g id="Logo">
              <path clipRule="evenodd" d={svgPaths.pb265200} fill="var(--fill-0, #F07C21)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p19e57380} fill="var(--fill-0, #F07C21)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p116e4e00} fill="var(--fill-0, #F07C21)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p17a95d80} fill="var(--fill-0, #F07C21)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p90d3e00} fill="var(--fill-0, #F07C21)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p14c76f0} fill="var(--fill-0, #F07C21)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p285a6b00} fill="var(--fill-0, #F07C21)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2c9da6c0} fill="var(--fill-0, #F07C21)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p34d09500} fill="var(--fill-0, #F07C21)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p120a9c00} fill="var(--fill-0, #F07C21)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <TitleAndMetadata4 />
    </div>
  );
}

function ButtonBase16() {
  return (
    <div className="bg-[#2b5944] content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Vis i nettleser</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="Icons/Arrows/Arrow-Up-Rright">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="arrow-up-right 1">
            <path d={svgPaths.p12127880} fill="var(--fill-0, white)" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Buttons5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Buttons">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
        <ButtonBase16 />
      </div>
    </div>
  );
}

function Description4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Description">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black tracking-[-0.064px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Regn ut hvor mange poeng du har, og se hva du kan komme inn på.
      </p>
    </div>
  );
}

function ButtonBase17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button base">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Les mer
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

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[44px] py-[8px] relative rounded-[50px] shrink-0" data-name="Frame">
      <ButtonBase17 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 2">
            <line id="Line" stroke="var(--stroke-0, #0F0F0F)" strokeWidth="2" x2="85" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArticleCard4() {
  return (
    <div className="bg-white h-full relative rounded-[12px] shrink-0 w-[289px]" data-name="Article card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
          <Header4 />
          <Buttons5 />
          <Description4 />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-[44px] min-w-px relative" data-name="Button">
            <Frame8 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] relative shrink-0 text-[14px] tracking-[-0.056px] whitespace-nowrap" data-name=".Open or closed help service">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#b82a1f]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Stengt</p>
        </div>
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#0f0f0f]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">- Åpner 16:00</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndMetadata5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[72px] items-start min-h-px min-w-px relative" data-name="Title and metadata">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full">Digital leksehjelp (Røde Kors)</p>
      </div>
      <Row5 />
    </div>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex gap-[10px] h-[72px] items-start relative shrink-0 w-full" data-name="Header">
      <div className="bg-white overflow-clip relative rounded-[12px] shrink-0 size-[48px]" data-name="Service logo">
        <div className="absolute inset-[23.75%]" data-name="Logo">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.2 25.2">
            <path d={svgPaths.p23d66b00} fill="var(--fill-0, #D52B1E)" id="Logo" />
          </svg>
        </div>
      </div>
      <TitleAndMetadata5 />
    </div>
  );
}

function ButtonBase18() {
  return (
    <div className="bg-[#2b5944] content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Chat</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="Icons/Arrows/Arrow-Up-Rright">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="arrow-up-right 1">
            <path d={svgPaths.p12127880} fill="var(--fill-0, white)" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ButtonBase19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Things/Phone">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g clipPath="url(#clip0_53_2805)" id="phone 1">
            <path d={svgPaths.p2e43180} fill="var(--fill-0, #0F0F0F)" id="Vector (Stroke)" />
          </g>
          <defs>
            <clipPath id="clip0_53_2805">
              <rect fill="white" height="20" width="20" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Ring oss</p>
      </div>
    </div>
  );
}

function Buttons6() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Buttons">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
        <ButtonBase18 />
      </div>
      <div className="content-stretch flex items-start min-h-[44px] relative shrink-0" data-name="Button">
        <ButtonBase19 />
      </div>
    </div>
  );
}

function Description5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Description">
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis tracking-[-0.064px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Hos Digital Leksehjelp kan du få hjelp med skolearbeidet der du er. Du trenger ingen innlogging og tilbudet er gratis og anonymt.
      </p>
    </div>
  );
}

function ButtonBase20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button base">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Les mer
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

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[44px] py-[8px] relative rounded-[50px] shrink-0" data-name="Frame">
      <ButtonBase20 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 2">
            <line id="Line" stroke="var(--stroke-0, #0F0F0F)" strokeWidth="2" x2="85" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArticleCard5() {
  return (
    <div className="bg-white h-full relative rounded-[12px] shrink-0 w-[289px]" data-name="Article card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
          <Header5 />
          <Buttons6 />
          <Description5 />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-[44px] min-w-px relative" data-name="Button">
            <Frame9 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-[250px] min-w-px relative w-full" data-name="Content">
      <ArticleCard3 />
      <ArticleCard4 />
      <ArticleCard5 />
      <div className="shrink-0 size-0" data-name="Spacing" />
    </div>
  );
}

function Carousel1() {
  return (
    <div className="h-[360px] relative shrink-0 w-full" data-name="Carousel">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pl-[12px] py-[24px] relative size-full">
          <Heading1 />
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading">
      <div className="content-stretch flex items-start justify-between leading-[24px] px-[12px] relative text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full whitespace-nowrap">
        <p className="font-['Borna:SemiBold',sans-serif] not-italic relative shrink-0">Sex</p>
        <p className="[text-decoration-skip-ink:none] decoration-[6%] decoration-solid font-['Open_Sans:Regular',sans-serif] font-normal relative shrink-0 underline" style={{ fontVariationSettings: "'wdth' 100" }}>
          Se alle
        </p>
      </div>
    </div>
  );
}

function Logo1() {
  return (
    <div className="absolute inset-[28.75%_12.5%]" data-name="Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.0003 20.4002">
        <g id="Logo">
          <g id="Union">
            <path clipRule="evenodd" d={svgPaths.p166f1100} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p34b9fd00} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pbd61f00} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p1cd0c140} fill="var(--fill-0, white)" />
            <path d={svgPaths.p395c3900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p899fa80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2d413200} fill="var(--fill-0, white)" />
          </g>
          <path d={svgPaths.p1ca2f900} fill="var(--fill-0, #ED1F7D)" id="Union_2" />
        </g>
      </svg>
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name=".Open or closed help service">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b5944] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Døgnåpen</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndMetadata6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[72px] items-start min-h-px min-w-px relative" data-name="Title and metadata">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full">Amathea</p>
      </div>
      <Row6 />
    </div>
  );
}

function Header6() {
  return (
    <div className="content-stretch flex gap-[10px] h-[72px] items-start relative shrink-0 w-full" data-name="Header">
      <div className="bg-[#341221] overflow-clip relative rounded-[12px] shrink-0 size-[48px]" data-name="Service logo">
        <Logo1 />
      </div>
      <TitleAndMetadata6 />
    </div>
  );
}

function ButtonBase21() {
  return (
    <div className="bg-[#2b5944] content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Chat</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="Icons/Arrows/Arrow-Up-Rright">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="arrow-up-right 1">
            <path d={svgPaths.p12127880} fill="var(--fill-0, white)" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ButtonBase22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div aria-hidden="true" className="absolute border border-[#888] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Things/Phone">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g clipPath="url(#clip0_53_2815)" id="phone 1">
            <path d={svgPaths.p2e43180} fill="var(--fill-0, #888888)" id="Vector (Stroke)" />
          </g>
          <defs>
            <clipPath id="clip0_53_2815">
              <rect fill="white" height="20" width="20" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#888] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Ring oss</p>
      </div>
    </div>
  );
}

function Buttons7() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Buttons">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
        <ButtonBase21 />
      </div>
      <div className="content-stretch flex items-start min-h-[44px] relative shrink-0" data-name="Button">
        <ButtonBase22 />
      </div>
    </div>
  );
}

function Description6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Description">
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis tracking-[-0.064px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Alarmtelefonen er barnevernets døgnåpne svartjeneste.
      </p>
    </div>
  );
}

function ButtonBase23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button base">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Les mer
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

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[44px] py-[8px] relative rounded-[50px] shrink-0" data-name="Frame">
      <ButtonBase23 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 2">
            <line id="Line" stroke="var(--stroke-0, #0F0F0F)" strokeWidth="2" x2="85" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArticleCard6() {
  return (
    <div className="bg-white h-full relative rounded-[12px] shrink-0 w-[289px]" data-name="Article card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
          <Header6 />
          <Buttons7 />
          <Description6 />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-[44px] min-w-px relative" data-name="Button">
            <Frame10 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Logo2() {
  return (
    <div className="absolute inset-[1.17%_0_0_0]" data-name="Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 47.4363">
        <g id="Logo">
          <g id="Intersect">
            <path d={svgPaths.p3366c380} fill="var(--fill-0, #FFCEBD)" />
            <path d={svgPaths.p35caef00} fill="var(--fill-0, #FFCEBD)" />
          </g>
          <g id="Intersect_2">
            <path d={svgPaths.pde85e20} fill="var(--fill-0, #FFA383)" />
            <path d={svgPaths.p1d6ce580} fill="var(--fill-0, #FFA383)" />
          </g>
          <path d={svgPaths.p23841180} fill="var(--fill-0, #15E1FF)" id="Union" />
          <path d={svgPaths.p235a6800} fill="var(--fill-0, #065E6A)" id="Vector" />
          <path d={svgPaths.p1e5e7300} fill="var(--fill-0, #ED145B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name=".Open or closed help service">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Selvhjelpsverktøy</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndMetadata7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[72px] items-start min-h-px min-w-px relative" data-name="Title and metadata">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full">Skamløs</p>
      </div>
      <Row7 />
    </div>
  );
}

function Header7() {
  return (
    <div className="content-stretch flex gap-[10px] h-[72px] items-start relative shrink-0 w-full" data-name="Header">
      <div className="bg-white overflow-clip relative rounded-[12px] shrink-0 size-[48px]" data-name="Service logo">
        <Logo2 />
      </div>
      <TitleAndMetadata7 />
    </div>
  );
}

function ButtonBase24() {
  return (
    <div className="bg-[#2b5944] content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Vis i nettleser</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="Icons/Arrows/Arrow-Up-Rright">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="arrow-up-right 1">
            <path d={svgPaths.p12127880} fill="var(--fill-0, white)" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Buttons8() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Buttons">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
        <ButtonBase24 />
      </div>
    </div>
  );
}

function Description7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Description">
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis tracking-[-0.064px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Regn ut hvor mange poeng du har, og se hva du kan komme inn på.
      </p>
    </div>
  );
}

function ButtonBase25() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button base">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Les mer
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

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[44px] py-[8px] relative rounded-[50px] shrink-0" data-name="Frame">
      <ButtonBase25 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 2">
            <line id="Line" stroke="var(--stroke-0, #0F0F0F)" strokeWidth="2" x2="85" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArticleCard7() {
  return (
    <div className="bg-white h-full relative rounded-[12px] shrink-0 w-[289px]" data-name="Article card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
          <Header7 />
          <Buttons8 />
          <Description7 />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-[44px] min-w-px relative" data-name="Button">
            <Frame11 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Logo3() {
  return (
    <div className="absolute inset-[17.5%_10%_23.94%_15%]" data-name="Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.0001 28.11">
        <g id="Logo">
          <path d={svgPaths.p3f2fca00} fill="var(--fill-0, #FFB350)" fillOpacity="0.24" id="Vector" />
          <path d={svgPaths.p24c39bc0} fill="var(--fill-0, #FFB350)" fillOpacity="0.65" id="Vector_2" />
          <path d={svgPaths.p21f17c80} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name=".Open or closed help service">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Selvhjelpsverktøy</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndMetadata8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[72px] items-start min-h-px min-w-px relative" data-name="Title and metadata">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full">Hva er innafor?</p>
      </div>
      <Row8 />
    </div>
  );
}

function Header8() {
  return (
    <div className="content-stretch flex gap-[10px] h-[72px] items-start relative shrink-0 w-full" data-name="Header">
      <div className="bg-[#2e0a52] overflow-clip relative rounded-[12px] shrink-0 size-[48px]" data-name="Service logo">
        <Logo3 />
      </div>
      <TitleAndMetadata8 />
    </div>
  );
}

function ButtonBase26() {
  return (
    <div className="bg-[#2b5944] content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Chat</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="Icons/Arrows/Arrow-Up-Rright">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="arrow-up-right 1">
            <path d={svgPaths.p12127880} fill="var(--fill-0, white)" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ButtonBase27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Things/Phone">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g clipPath="url(#clip0_53_2805)" id="phone 1">
            <path d={svgPaths.p2e43180} fill="var(--fill-0, #0F0F0F)" id="Vector (Stroke)" />
          </g>
          <defs>
            <clipPath id="clip0_53_2805">
              <rect fill="white" height="20" width="20" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Ring oss</p>
      </div>
    </div>
  );
}

function Buttons9() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Buttons">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
        <ButtonBase26 />
      </div>
      <div className="content-stretch flex items-start min-h-[44px] relative shrink-0" data-name="Button">
        <ButtonBase27 />
      </div>
    </div>
  );
}

function Description8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Description">
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis tracking-[-0.064px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        I dette verktøyet kan du få konkrete råd og veiledning om seksuell atferd.
      </p>
    </div>
  );
}

function ButtonBase28() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button base">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Les mer
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

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[44px] py-[8px] relative rounded-[50px] shrink-0" data-name="Frame">
      <ButtonBase28 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 2">
            <line id="Line" stroke="var(--stroke-0, #0F0F0F)" strokeWidth="2" x2="85" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArticleCard8() {
  return (
    <div className="bg-white h-full relative rounded-[12px] shrink-0 w-[289px]" data-name="Article card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
          <Header8 />
          <Buttons9 />
          <Description8 />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-[44px] min-w-px relative" data-name="Button">
            <Frame12 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-[250px] min-w-px relative w-full" data-name="Content">
      <ArticleCard6 />
      <ArticleCard7 />
      <ArticleCard8 />
      <div className="shrink-0 size-0" data-name="Spacing" />
    </div>
  );
}

function Carousel2() {
  return (
    <div className="h-[360px] relative shrink-0 w-full" data-name="Carousel">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pl-[12px] py-[24px] relative size-full">
          <Heading2 />
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading">
      <div className="content-stretch flex items-start justify-between leading-[24px] px-[12px] relative text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full whitespace-nowrap">
        <p className="font-['Borna:SemiBold',sans-serif] not-italic relative shrink-0">Problemer hjemme</p>
        <p className="[text-decoration-skip-ink:none] decoration-[6%] decoration-solid font-['Open_Sans:Regular',sans-serif] font-normal relative shrink-0 underline" style={{ fontVariationSettings: "'wdth' 100" }}>
          Se alle
        </p>
      </div>
    </div>
  );
}

function Logo4() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Logo">
          <path d={svgPaths.p3f92e600} fill="var(--fill-0, #EE2D26)" id="Exclude" />
          <path d={svgPaths.p28b76d00} fill="var(--fill-0, #99D9E8)" id="Subtract" opacity="0.74" />
        </g>
      </svg>
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name=".Open or closed help service">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b5944] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Døgnåpent</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndMetadata9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Title and metadata">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full">Sidetmedord.no to linjer</p>
      </div>
      <Row9 />
    </div>
  );
}

function LogoAndTitle() {
  return (
    <div className="content-stretch flex gap-[10px] h-[68px] items-center relative shrink-0 w-full" data-name="Logo and Title">
      <div className="bg-white relative rounded-[12px] shrink-0 size-[48px]" data-name="Service logo">
        <Logo4 />
      </div>
      <TitleAndMetadata9 />
      <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Icons/Arrows/Arrow-right">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <g id="arrow-right">
            <path clipRule="evenodd" d={svgPaths.pde69630} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArticleCard9() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-[289px]" data-name="Article card">
      <LogoAndTitle />
    </div>
  );
}

function Logo5() {
  return (
    <div className="absolute inset-[35%_5%_36.25%_5%]" data-name="Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.2001 13.8002">
        <g id="Logo">
          <g id="Union">
            <path clipRule="evenodd" d={svgPaths.p5f17940} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p12ceb300} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p34dc4800} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.p2f14cb00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1c53ce00} fill="var(--fill-0, black)" />
          </g>
          <g id="Union_2">
            <path clipRule="evenodd" d={svgPaths.p2089e300} fill="var(--fill-0, #FF893D)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1806ad80} fill="var(--fill-0, #FF893D)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p199e7900} fill="var(--fill-0, #FF893D)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p37e22800} fill="var(--fill-0, #FF893D)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1f837e00} fill="var(--fill-0, #FF893D)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1d22d480} fill="var(--fill-0, #FF893D)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p28fce300} fill="var(--fill-0, #FF893D)" fillRule="evenodd" />
            <path d={svgPaths.p5031600} fill="var(--fill-0, #FF893D)" />
            <path clipRule="evenodd" d={svgPaths.p20a71e71} fill="var(--fill-0, #FF893D)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p39c8880} fill="var(--fill-0, #FF893D)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p300afd80} fill="var(--fill-0, #FF893D)" fillRule="evenodd" />
            <path d={svgPaths.p2b96e600} fill="var(--fill-0, #FF893D)" />
            <path d={svgPaths.p2a11bd00} fill="var(--fill-0, #FF893D)" />
            <path d={svgPaths.p29660600} fill="var(--fill-0, #FF893D)" />
            <path d={svgPaths.p79509c0} fill="var(--fill-0, #FF893D)" />
            <path d={svgPaths.p39d79e00} fill="var(--fill-0, #FF893D)" />
            <path d={svgPaths.p2c3a1d00} fill="var(--fill-0, #FF893D)" />
            <path d={svgPaths.p36e9b5a0} fill="var(--fill-0, #FF893D)" />
            <path d={svgPaths.p396b1b80} fill="var(--fill-0, #FF893D)" />
            <path d={svgPaths.p3fd71100} fill="var(--fill-0, #FF893D)" />
            <path d={svgPaths.p152ad980} fill="var(--fill-0, #FF893D)" />
            <path clipRule="evenodd" d={svgPaths.p1976be80} fill="var(--fill-0, #FF893D)" fillRule="evenodd" />
            <path d={svgPaths.p6d60c80} fill="var(--fill-0, #FF893D)" />
            <path d={svgPaths.p283aa300} fill="var(--fill-0, #FF893D)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Row10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] relative shrink-0 text-[14px] tracking-[-0.056px] whitespace-nowrap" data-name=".Open or closed help service">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#b82a1f]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Stengt</p>
        </div>
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#0f0f0f]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">- Åpner tor 08:00</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndMetadata10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Title and metadata">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full">Ivareta</p>
      </div>
      <Row10 />
    </div>
  );
}

function LogoAndTitle1() {
  return (
    <div className="content-stretch flex gap-[10px] h-[68px] items-center relative shrink-0 w-full" data-name="Logo and Title">
      <div className="bg-white relative rounded-[12px] shrink-0 size-[48px]" data-name="Service logo">
        <Logo5 />
      </div>
      <TitleAndMetadata10 />
      <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Icons/Arrows/Arrow-right">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <g id="arrow-right">
            <path clipRule="evenodd" d={svgPaths.pde69630} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArticleCard10() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-[289px]" data-name="Article card">
      <LogoAndTitle1 />
    </div>
  );
}

function Logo6() {
  return (
    <div className="absolute inset-[26.25%_12.5%_12.76%_12.5%]" data-name="Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.0001 29.2732">
        <g id="Logo">
          <path clipRule="evenodd" d={svgPaths.p19828d00} fill="var(--fill-0, #1C2B39)" fillRule="evenodd" id="Union" />
          <g id="Union_2">
            <path d={svgPaths.pd959800} fill="var(--fill-0, #F16C51)" />
            <path d={svgPaths.p24363180} fill="var(--fill-0, #F16C51)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Row11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] relative shrink-0 text-[14px] tracking-[-0.056px] whitespace-nowrap" data-name=".Open or closed help service">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#2b5944]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Åpen</p>
        </div>
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#0f0f0f]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">- Stenger 16:00</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndMetadata11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Title and metadata">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full">Unge pårørende</p>
      </div>
      <Row11 />
    </div>
  );
}

function LogoAndTitle2() {
  return (
    <div className="content-stretch flex gap-[10px] h-[68px] items-center relative shrink-0 w-full" data-name="Logo and Title">
      <div className="bg-white relative rounded-[12px] shrink-0 size-[48px]" data-name="Service logo">
        <Logo6 />
      </div>
      <TitleAndMetadata11 />
      <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Icons/Arrows/Arrow-right">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <g id="arrow-right">
            <path clipRule="evenodd" d={svgPaths.pde69630} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArticleCard11() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-[289px]" data-name="Article card">
      <LogoAndTitle2 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <ArticleCard9 />
      <ArticleCard10 />
      <ArticleCard11 />
      <div className="shrink-0 size-0" data-name="Spacing" />
    </div>
  );
}

function Carousel3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Carousel">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pl-[12px] py-[24px] relative w-full">
          <Heading3 />
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading">
      <div className="content-stretch flex items-start justify-between leading-[24px] px-[12px] relative text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full whitespace-nowrap">
        <p className="font-['Borna:SemiBold',sans-serif] not-italic relative shrink-0">Mest populære apper</p>
        <p className="[text-decoration-skip-ink:none] decoration-[6%] decoration-solid font-['Open_Sans:Regular',sans-serif] font-normal relative shrink-0 underline" style={{ fontVariationSettings: "'wdth' 100" }}>
          Se alle
        </p>
      </div>
    </div>
  );
}

function Row12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name=".Open or closed help service">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Selvhjelpsverktøy</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndMetadata12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Title and metadata">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">NAV</p>
      </div>
      <Row12 />
    </div>
  );
}

function LogoAndTitle3() {
  return (
    <div className="content-stretch flex gap-[10px] h-[68px] items-center relative shrink-0 w-full" data-name="Logo and Title">
      <div className="bg-[#c30000] overflow-clip relative rounded-[12px] shrink-0 size-[48px]" data-name="Service logo">
        <div className="absolute inset-[38.75%_12.5%_38.74%_12.5%]" data-name="Logo">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 10.8062">
            <path clipRule="evenodd" d={svgPaths.pbfd3d40} fill="var(--fill-0, white)" fillRule="evenodd" id="Logo" />
          </svg>
        </div>
      </div>
      <TitleAndMetadata12 />
      <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Icons/Arrows/Arrow-right">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <g id="arrow-right">
            <path clipRule="evenodd" d={svgPaths.pde69630} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArticleCard12() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-[289px]" data-name="Article card">
      <LogoAndTitle3 />
    </div>
  );
}

function Logo7() {
  return (
    <div className="absolute inset-[19.05%_12.57%_19.05%_12.7%]" data-name="Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.8729 29.7141">
        <g id="Logo">
          <g id="Union">
            <path d={svgPaths.p2e970180} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPaths.pbad2200} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.p2967b000} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPaths.p31e3ac00} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.p15caf180} fill="var(--fill-0, black)" />
          </g>
          <g id="Union_2">
            <path d={svgPaths.p3a948d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.pe6d2df0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2f27c900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2d11ad00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2054af70} fill="var(--fill-0, white)" />
            <path d={svgPaths.p16d56d80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p269f7e00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p41eab00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p6569b00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p132ad400} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Row13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name=".Open or closed help service">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Selvhjelpsverktøy</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndMetadata13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Title and metadata">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full">Gå10</p>
      </div>
      <Row13 />
    </div>
  );
}

function LogoAndTitle4() {
  return (
    <div className="content-stretch flex gap-[10px] h-[68px] items-center relative shrink-0 w-full" data-name="Logo and Title">
      <div className="bg-[#ee5335] overflow-clip relative rounded-[12px] shrink-0 size-[48px]" data-name="Service logo">
        <Logo7 />
      </div>
      <TitleAndMetadata13 />
      <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Icons/Arrows/Arrow-right">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <g id="arrow-right">
            <path clipRule="evenodd" d={svgPaths.pde69630} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArticleCard13() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-[289px]" data-name="Article card">
      <LogoAndTitle4 />
    </div>
  );
}

function Row14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name=".Open or closed help service">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Selvhjelpsverktøy</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndMetadata14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Title and metadata">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full">Tankevirus</p>
      </div>
      <Row14 />
    </div>
  );
}

function LogoAndTitle5() {
  return (
    <div className="content-stretch flex gap-[10px] h-[68px] items-center relative shrink-0 w-full" data-name="Logo and Title">
      <div className="bg-white relative rounded-[12px] shrink-0 size-[48px]" data-name="Service logo">
        <div className="absolute inset-[25.54%_17.89%_25.58%_17.93%]" data-name="Logo">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.8036 23.4601">
            <g id="Logo">
              <path d={svgPaths.p7723980} fill="var(--fill-0, black)" />
              <path d={svgPaths.p14b83b00} fill="var(--fill-0, black)" />
              <path d={svgPaths.p19c27600} fill="var(--fill-0, black)" />
              <path d={svgPaths.p26dce700} fill="var(--fill-0, black)" />
              <path d={svgPaths.p1faa0600} fill="var(--fill-0, black)" />
              <path d={svgPaths.p304b300} fill="var(--fill-0, black)" />
              <path d={svgPaths.p2a683900} fill="var(--fill-0, black)" />
              <path d={svgPaths.p12156800} fill="var(--fill-0, black)" />
              <path d={svgPaths.p18fe4f80} fill="var(--fill-0, black)" />
              <path d={svgPaths.pcccc9f0} fill="var(--fill-0, black)" />
            </g>
          </svg>
        </div>
      </div>
      <TitleAndMetadata14 />
      <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Icons/Arrows/Arrow-right">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <g id="arrow-right">
            <path clipRule="evenodd" d={svgPaths.pde69630} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArticleCard14() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-[289px]" data-name="Article card">
      <LogoAndTitle5 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <ArticleCard12 />
      <ArticleCard13 />
      <ArticleCard14 />
      <div className="shrink-0 size-0" data-name="Spacing" />
    </div>
  );
}

function Carousel4() {
  return (
    <div className="bg-[#deefe7] relative shrink-0 w-full" data-name="Carousel">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pl-[12px] py-[24px] relative w-full">
          <Heading4 />
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading">
      <div className="content-stretch flex items-start justify-between leading-[24px] px-[12px] relative text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full whitespace-nowrap">
        <p className="font-['Borna:SemiBold',sans-serif] not-italic relative shrink-0">Rusmidler</p>
        <p className="[text-decoration-skip-ink:none] decoration-[6%] decoration-solid font-['Open_Sans:Regular',sans-serif] font-normal relative shrink-0 underline" style={{ fontVariationSettings: "'wdth' 100" }}>
          Se alle
        </p>
      </div>
    </div>
  );
}

function Logo8() {
  return (
    <div className="absolute inset-[20%_45.09%_20%_42.5%]" data-name="Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.95837 28.8">
        <g id="Logo">
          <path d={svgPaths.p3f8ad600} fill="var(--fill-0, #1D1D1B)" id="Vector" />
          <path d={svgPaths.p89b7b00} fill="var(--fill-0, #00AADB)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Row15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] relative shrink-0 text-[14px] tracking-[-0.056px] whitespace-nowrap" data-name=".Open or closed help service">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#2b5944]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Åpen</p>
        </div>
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#0f0f0f]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">- Stenger 14:30</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndMetadata15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[72px] items-start min-h-px min-w-px relative" data-name="Title and metadata">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full">RUSinfo</p>
      </div>
      <Row15 />
    </div>
  );
}

function Header9() {
  return (
    <div className="content-stretch flex gap-[10px] h-[72px] items-start relative shrink-0 w-full" data-name="Header">
      <div className="bg-white overflow-clip relative rounded-[12px] shrink-0 size-[48px]" data-name="Service logo">
        <Logo8 />
      </div>
      <TitleAndMetadata15 />
    </div>
  );
}

function ButtonBase29() {
  return (
    <div className="bg-[#2b5944] content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Chat</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="Icons/Arrows/Arrow-Up-Rright">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="arrow-up-right 1">
            <path d={svgPaths.p12127880} fill="var(--fill-0, white)" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ButtonBase30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Things/Phone">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g clipPath="url(#clip0_53_2805)" id="phone 1">
            <path d={svgPaths.p2e43180} fill="var(--fill-0, #0F0F0F)" id="Vector (Stroke)" />
          </g>
          <defs>
            <clipPath id="clip0_53_2805">
              <rect fill="white" height="20" width="20" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Ring oss</p>
      </div>
    </div>
  );
}

function Buttons10() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Buttons">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
        <ButtonBase29 />
      </div>
      <div className="content-stretch flex items-start min-h-[44px] relative shrink-0" data-name="Button">
        <ButtonBase30 />
      </div>
    </div>
  );
}

function Description9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Description">
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis tracking-[-0.064px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ta kontakt om det gjelder deg selv, vennen din, familie, kjæresten din, eller andre.
      </p>
    </div>
  );
}

function ButtonBase31() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button base">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Les mer
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

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[44px] py-[8px] relative rounded-[50px] shrink-0" data-name="Frame">
      <ButtonBase31 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 2">
            <line id="Line" stroke="var(--stroke-0, #0F0F0F)" strokeWidth="2" x2="85" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArticleCard15() {
  return (
    <div className="bg-white h-full relative rounded-[12px] shrink-0 w-[289px]" data-name="Article card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
          <Header9 />
          <Buttons10 />
          <Description9 />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-[44px] min-w-px relative" data-name="Button">
            <Frame13 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Logo9() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Logo">
          <path d={svgPaths.p19e72770} fill="var(--fill-0, #FF3723)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1842f2c0} fill="var(--fill-0, black)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Row16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] relative shrink-0 text-[14px] tracking-[-0.056px] whitespace-nowrap" data-name=".Open or closed help service">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#b82a1f]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Stengt</p>
        </div>
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#0f0f0f]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">- Åpner 17:00</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndMetadata16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[72px] items-start min-h-px min-w-px relative" data-name="Title and metadata">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full">Barn av rusmisbrukere</p>
      </div>
      <Row16 />
    </div>
  );
}

function Header10() {
  return (
    <div className="content-stretch flex gap-[10px] h-[72px] items-start relative shrink-0 w-full" data-name="Header">
      <div className="bg-white overflow-clip relative rounded-[12px] shrink-0 size-[48px]" data-name="Service logo">
        <Logo9 />
      </div>
      <TitleAndMetadata16 />
    </div>
  );
}

function ButtonBase32() {
  return (
    <div className="bg-[#dfdfdf] content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#888] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Chat</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="Icons/Arrows/Arrow-Up-Rright">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="arrow-up-right 1">
            <path d={svgPaths.p12127880} fill="var(--fill-0, #888888)" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ButtonBase33() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Things/Phone">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g clipPath="url(#clip0_53_2805)" id="phone 1">
            <path d={svgPaths.p2e43180} fill="var(--fill-0, #0F0F0F)" id="Vector (Stroke)" />
          </g>
          <defs>
            <clipPath id="clip0_53_2805">
              <rect fill="white" height="20" width="20" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Ring oss</p>
      </div>
    </div>
  );
}

function Buttons11() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Buttons">
      <div className="content-stretch flex items-center min-h-[44px] relative shrink-0" data-name="Button">
        <ButtonBase32 />
      </div>
      <div className="content-stretch flex items-start min-h-[44px] relative shrink-0" data-name="Button">
        <ButtonBase33 />
      </div>
    </div>
  );
}

function Description10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Description">
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis tracking-[-0.064px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Anonym tjeneste for deg som opplever alkohol- eller rusmisbruk i nære relasjoner.
      </p>
    </div>
  );
}

function ButtonBase34() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button base">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Les mer
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

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[44px] py-[8px] relative rounded-[50px] shrink-0" data-name="Frame">
      <ButtonBase34 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 2">
            <line id="Line" stroke="var(--stroke-0, #0F0F0F)" strokeWidth="2" x2="85" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArticleCard16() {
  return (
    <div className="bg-white h-full relative rounded-[12px] shrink-0 w-[289px]" data-name="Article card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
          <Header10 />
          <Buttons11 />
          <Description10 />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-[44px] min-w-px relative" data-name="Button">
            <Frame14 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Row17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] relative shrink-0 text-[14px] tracking-[-0.056px] whitespace-nowrap" data-name=".Open or closed help service">
        <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#b82a1f]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Stengt</p>
        </div>
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#0f0f0f]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">- Åpner 14:30</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndMetadata17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[72px] items-start min-h-px min-w-px relative" data-name="Title and metadata">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full">SnakkOmPsyken</p>
      </div>
      <Row17 />
    </div>
  );
}

function Header11() {
  return (
    <div className="content-stretch flex gap-[10px] h-[72px] items-start relative shrink-0 w-full" data-name="Header">
      <div className="bg-white overflow-clip relative rounded-[12px] shrink-0 size-[48px]" data-name="Service logo">
        <div className="absolute inset-[23.75%]" data-name="Logo">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.2 25.2">
            <path d={svgPaths.p1308eb00} fill="var(--fill-0, #1D3277)" id="Logo" />
          </svg>
        </div>
      </div>
      <TitleAndMetadata17 />
    </div>
  );
}

function ButtonBase35() {
  return (
    <div className="bg-[#2b5944] content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Chat</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="Icons/Arrows/Arrow-Up-Rright">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="arrow-up-right 1">
            <path d={svgPaths.p12127880} fill="var(--fill-0, white)" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Buttons12() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Buttons">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
        <ButtonBase35 />
      </div>
    </div>
  );
}

function Description11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Description">
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis tracking-[-0.064px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ta kontakt om har det vanskelig, selv om du ikke vet hvorfor.
      </p>
    </div>
  );
}

function ButtonBase36() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button base">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Les mer
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

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[44px] py-[8px] relative rounded-[50px] shrink-0" data-name="Frame">
      <ButtonBase36 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 2">
            <line id="Line" stroke="var(--stroke-0, #0F0F0F)" strokeWidth="2" x2="85" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArticleCard17() {
  return (
    <div className="bg-white h-full relative rounded-[12px] shrink-0 w-[289px]" data-name="Article card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
          <Header11 />
          <Buttons12 />
          <Description11 />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-[44px] min-w-px relative" data-name="Button">
            <Frame15 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-[250px] min-w-px relative w-full" data-name="Content">
      <ArticleCard15 />
      <ArticleCard16 />
      <ArticleCard17 />
      <div className="shrink-0 size-0" data-name="Spacing" />
    </div>
  );
}

function Carousel5() {
  return (
    <div className="h-[360px] relative shrink-0 w-full" data-name="Carousel">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pl-[12px] py-[24px] relative size-full">
          <Heading5 />
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full">
      <div className="relative shrink-0 w-full" data-name="Page header">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] relative w-full">
            <Content />
          </div>
        </div>
      </div>
      <SearchAndFilter />
      <Carousel />
      <FullBlock />
      <Carousel1 />
      <Carousel2 />
      <Carousel3 />
      <Carousel4 />
      <Carousel5 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[26px] max-w-[351px] min-h-px min-w-px relative text-[18px] text-white tracking-[-0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ung.no er det offentliges informasjonskanal for ungdom. Vi gjør det litt lettere å være ung.
      </p>
    </div>
  );
}

function Logo10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Logo">
      <div className="h-[48px] relative shrink-0 w-[66.75px]" data-name="Logo-main">
        <div className="absolute inset-[0.23%_-0.02%_0.39%_-0.13%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.8501 47.7018">
            <g id="Vector">
              <path d={svgPaths.p3013e700} fill="var(--fill-0, white)" />
              <path d={svgPaths.p32bf7b00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p201f9b00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p21fee8f0} fill="var(--fill-0, white)" />
              <path d={svgPaths.p7ab7a00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3784fd80} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
      <Text1 />
    </div>
  );
}

function Links1() {
  return (
    <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal gap-[16px] items-start leading-[24px] relative shrink-0 text-[16px] text-white tracking-[-0.064px] whitespace-nowrap" data-name="Links">
      <p className="[text-decoration-skip-ink:none] decoration-[6%] decoration-solid relative shrink-0 underline" style={{ fontVariationSettings: "'wdth' 100" }}>
        Om ung.no
      </p>
      <p className="[text-decoration-skip-ink:none] decoration-[6%] decoration-solid relative shrink-0 underline" style={{ fontVariationSettings: "'wdth' 100" }}>
        Kontakt redaksjonen
      </p>
    </div>
  );
}

function Kontakt() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Kontakt">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[271px]" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.072px] w-full">Kontakt</p>
      </div>
      <Links1 />
    </div>
  );
}

function Links2() {
  return (
    <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal gap-[16px] items-start leading-[24px] relative shrink-0 text-[16px] text-white tracking-[-0.064px] whitespace-nowrap" data-name="Links">
      <p className="[text-decoration-skip-ink:none] decoration-[6%] decoration-solid relative shrink-0 underline" style={{ fontVariationSettings: "'wdth' 100" }}>
        Bestill plakater og brosjyrer
      </p>
      <p className="[text-decoration-skip-ink:none] decoration-[6%] decoration-solid relative shrink-0 underline" style={{ fontVariationSettings: "'wdth' 100" }}>
        Statistikk for ung.no
      </p>
    </div>
  );
}

function Tjenester() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Tjenester">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[271px]" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.072px] w-full">Tjenester</p>
      </div>
      <Links2 />
    </div>
  );
}

function Links3() {
  return (
    <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal gap-[16px] items-start leading-[24px] relative shrink-0 text-[16px] text-white tracking-[-0.064px] whitespace-nowrap" data-name="Links">
      <p className="[text-decoration-skip-ink:none] decoration-[6%] decoration-solid relative shrink-0 underline" style={{ fontVariationSettings: "'wdth' 100" }}>
        Personvern
      </p>
      <p className="[text-decoration-skip-ink:none] decoration-[6%] decoration-solid relative shrink-0 underline" style={{ fontVariationSettings: "'wdth' 100" }}>
        Informasjonskapsler
      </p>
      <p className="[text-decoration-skip-ink:none] decoration-[6%] decoration-solid relative shrink-0 underline" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tilgjengelighetserklæring
      </p>
    </div>
  );
}

function Innhold() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Innhold">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[271px]" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.072px] w-full">Innhold</p>
      </div>
      <Links3 />
    </div>
  );
}

function SoMeLinks() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="SoMe links">
      <div className="relative shrink-0 size-[30px]" data-name="Icons/Brands/Instagram">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <path d={svgPaths.pd46da40} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[30px]" data-name="Icons/Brands/Facebook">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <g id="Union">
            <path d={svgPaths.p37997b70} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p12cce080} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
      <div className="relative shrink-0 size-[30px]" data-name="Icons/Brands/Snapchat">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <g id="Union">
            <path d={svgPaths.p12aa52e0} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p12cce080} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
      <div className="relative shrink-0 size-[30px]" data-name="Icons/Brands/Tiktok">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <g id="Vector">
            <path d={svgPaths.p178e7e00} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p31d5f700} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Links4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Links">
      <SoMeLinks />
    </div>
  );
}

function FolgOss() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Følg oss">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[271px]" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.072px] w-full">Følg oss</p>
      </div>
      <Links4 />
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start py-[64px] relative shrink-0 w-full" data-name="Links">
      <Kontakt />
      <Tjenester />
      <Innhold />
      <FolgOss />
    </div>
  );
}

function ButtonBase37() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center min-w-[44px] p-[12px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Arrows/Arrow-up">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="arrow-up 2">
            <path d={svgPaths.p22f37080} id="Vector" stroke="var(--stroke-0, #0F0F0F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function BackToTop() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Back to top">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Icon-button">
        <ButtonBase37 />
      </div>
    </div>
  );
}

export default function HelpServicesLandingPage() {
  return (
    <div className="bg-[#f5f3f0] content-stretch flex flex-col items-center relative size-full" data-name="Help services landing page">
      <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full" data-name="Header">
        <Browser />
        <Menu />
      </div>
      <Frame17 />
      <div className="bg-[#2b5944] content-stretch flex flex-col items-start pb-[24px] pt-[40px] px-[20px] relative rounded-tl-[36px] rounded-tr-[36px] shrink-0 w-[375px]" data-name="Footer">
        <Logo10 />
        <Links />
        <div className="relative shrink-0 size-[56px]" data-name="Bufdir logo">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[70px] left-[calc(50%-0.5px)] overflow-clip top-1/2 w-[69px]" data-name="Bufdir vertical 1c">
            <div className="absolute inset-[79.87%_77%_0.36%_5.81%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8665 13.8363">
                <path d={svgPaths.p38fbc000} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[83.8%_59.28%_0_25.79%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.302 11.3428">
                <path d={svgPaths.p2a615680} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[78.13%_45.41%_0.36%_43.35%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.75351 15.0625">
                <path d={svgPaths.p339a0231} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[78.45%_27.88%_0_55.16%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.703 15.0823">
                <path d={svgPaths.p172ec480} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[83.8%_19.04%_0.36%_76.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.1965 11.0938">
                <path d={svgPaths.p9ebbb00} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[78.45%_19.04%_18.16%_76.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.1965 2.36819">
                <path d={svgPaths.p24074600} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[83.5%_3.8%_0.36%_85.17%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.60651 11.3012">
                <path d={svgPaths.p30619100} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[18.81%_17.94%_73.03%_73.39%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.97846 5.71487">
                <path d={svgPaths.p12045400} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[0_0_32.02%_0]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.9965 47.5888">
                <path d={svgPaths.p1cf27500} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <BackToTop />
      </div>
    </div>
  );
}