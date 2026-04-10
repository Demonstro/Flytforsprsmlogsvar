import svgPaths from "./svg-9t1dmobbei";
import imgFrame3857 from "figma:asset/94badd35d44dd292aecf82e1041ee9b4fa8484c8.png";
import imgFrame3856 from "figma:asset/9ace3e9c006411cfde0d1fb6f41373bcaf19bec2.png";
import imgFrame3858 from "figma:asset/d9d46ca57210dba31b9d1ceed20995f95a661508.png";
import imgFrame3859 from "figma:asset/5fd5c2aab47c5d88c6eda0278ed510bb43f14577.png";

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

function RootChromePortrait() {
  return (
    <div className="absolute bg-white inset-0 overflow-clip" data-name=".root/chrome/portrait">
      <SystemIPhoneUi />
      <TopScreen />
    </div>
  );
}

function Browser() {
  return (
    <div className="content-stretch flex flex-col items-start shrink-0 sticky top-0 w-full" data-name="Browser">
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
    <div className="bg-[#f5f3f0] relative shrink-0 w-full" data-name="Menu">
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

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[351px]" data-name="Content">
      <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#0f0f0f] text-[30px] tracking-[-0.12px] w-full">Takk for spørsmålet ditt!</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[12px] relative w-full">
        <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Page header">
          <Content />
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Ingress">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[26px] max-w-[351px] min-h-px min-w-px relative text-[#0f0f0f] text-[18px] tracking-[-0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Vi svarer deg så fort vi kan, vanligvis i løpet av et døgn. Men det kan hende du må vente opp til tre dager.
          </p>
        </div>
      </div>
    </div>
  );
}

function Number() {
  return (
    <div className="bg-[#acd7c3] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Number">
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

function ButtonBase2() {
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

function Code1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[16px] relative shrink-0 w-full" data-name="Code">
      <Number />
      <div className="content-stretch flex items-start min-h-[44px] relative shrink-0" data-name="Button">
        <ButtonBase2 />
      </div>
    </div>
  );
}

function Code() {
  return (
    <div className="relative shrink-0 w-full" data-name="Code">
      <div className="content-stretch flex flex-col items-start pb-[24px] px-[12px] relative w-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[351px]" data-name="Paragraph">
          <div className="content-stretch flex flex-col items-start pb-[4px] pt-[32px] relative shrink-0 w-full" data-name="Heading">
            <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Din personlige kode</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[351px]" data-name="Paragraph">
          <div className="content-stretch flex items-start py-[12px] relative shrink-0 w-full" data-name="Body">
            <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[#0f0f0f] text-[0px] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px]">{`For å `}</span>
              <span className="decoration-solid font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] text-[#2b5944] underline" style={{ fontVariationSettings: "'wdth' 100" }}>
                sjekke svaret ditt
              </span>
              <span className="leading-[24px]">{` trenger du denne koden. Ta vare på den ved å skrive den ned, ta en skjermdump eller kopiere den til et sted du lett finner igjen.`}</span>
            </p>
          </div>
        </div>
        <Code1 />
      </div>
    </div>
  );
}

function YourQuestion() {
  return (
    <div className="relative shrink-0 w-full" data-name="Your question">
      <div className="content-stretch flex flex-col items-start pb-[24px] px-[12px] relative w-full">
        <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Accordion">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[16px] items-center p-[12px] relative w-full">
              <p className="flex-[1_0_0] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Spørsmålet ditt
              </p>
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icons/Arrows/Chevron-down">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="chevron-down 1">
                    <path clipRule="evenodd" d={svgPaths.p2b042d70} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Vector (Stroke)" stroke="var(--stroke-0, #0F0F0F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Se alle spørsmål og svar
      </p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Arrows/Arrow-right">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="arrow-right">
            <path clipRule="evenodd" d={svgPaths.p29ff4d00} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sjekk ut forsiden
      </p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Arrows/Arrow-right">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="arrow-right">
            <path clipRule="evenodd" d={svgPaths.p29ff4d00} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Links">
      <div className="content-stretch flex flex-col gap-[4px] items-center justify-center py-[8px] relative shrink-0" data-name="Link">
        <Frame />
        <div className="h-0 relative shrink-0 w-full" data-name="Line">
          <div className="absolute inset-[-2px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 2">
              <line id="Line" stroke="var(--stroke-0, #0F0F0F)" strokeWidth="2" x2="80" y1="1" y2="1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-center justify-center py-[8px] relative shrink-0" data-name="Link">
        <Frame2 />
        <div className="h-0 relative shrink-0 w-full" data-name="Line">
          <div className="absolute inset-[-2px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 2">
              <line id="Line" stroke="var(--stroke-0, #0F0F0F)" strokeWidth="2" x2="80" y1="1" y2="1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] relative w-full">
        <div className="bg-[#dbddff] relative rounded-[8px] shrink-0 w-full" data-name="Waiting for answer banner">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[20px] items-start px-[12px] py-[40px] relative w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[351px]" data-name="Heading">
                <p className="font-['Borna:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#0f0f0f] text-[24px] tracking-[-0.096px] w-full">Mens du venter på svar</p>
              </div>
              <Links />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[180px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3857} />
    </div>
  );
}

function Question() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Jeg sliter skikkelig sosialt og aner ikke hva jeg skal gjøre</p>
      </div>
    </div>
  );
}

function Tags() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tags">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[8px] items-center px-[16px] relative w-full">
          <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
            <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Jente, 16
            </p>
          </div>
          <div className="bg-[#f2f9f5] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
            <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Psykisk helse og følelser
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionCard() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[20px] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-[265px]" data-name="Question card">
      <Frame5 />
      <Question />
      <Tags />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[180px] max-h-[180px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3856} />
    </div>
  );
}

function Question1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Kan jeg ha sex før jeg fyller 16 år?</p>
      </div>
    </div>
  );
}

function Tags1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tags">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[8px] items-center px-[16px] relative w-full">
          <div className="bg-[#dbddff] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
            <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Gutt, 14
            </p>
          </div>
          <div className="bg-[#f5f5ff] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
            <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Sex
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionCard1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start min-h-[374px] overflow-clip pb-[20px] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-[265px]" data-name="Question card">
      <Frame4 />
      <Question1 />
      <Tags1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[180px] max-h-[180px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3858} />
    </div>
  );
}

function Question2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Tatt angrepille og er redd for graviditet.</p>
      </div>
    </div>
  );
}

function Tags2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tags">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[8px] items-center px-[16px] relative w-full">
          <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
            <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Jente, 17
            </p>
          </div>
          <div className="bg-[#f2f9f5] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
            <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Graviditet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionCard2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start min-h-[374px] overflow-clip pb-[20px] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-[265px]" data-name="Question card">
      <Frame6 />
      <Question2 />
      <Tags2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[180px] max-h-[180px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3859} />
    </div>
  );
}

function Question3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Hvorfor kommer jeg aldri når jeg har orgasmer?</p>
      </div>
    </div>
  );
}

function Tags3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tags">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[8px] items-center px-[16px] relative w-full">
          <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
            <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Jente, 18
            </p>
          </div>
          <div className="bg-[#f2f9f5] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
            <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Sex
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionCard3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start min-h-[374px] overflow-clip pb-[20px] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-[265px]" data-name="Question card">
      <Frame7 />
      <Question3 />
      <Tags3 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <QuestionCard />
      <QuestionCard1 />
      <QuestionCard2 />
      <QuestionCard3 />
      <div className="shrink-0 size-0" data-name="Spacing" />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Helsa di</p>
      </div>
    </div>
  );
}

function ChipBase() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative rounded-[99px] shrink-0" data-name="Chip base">
      <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <Label />
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icons/Arrows/Arrow-right">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="arrow-right">
            <path clipRule="evenodd" d={svgPaths.p15970100} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Forelskelse</p>
      </div>
    </div>
  );
}

function ChipBase1() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative rounded-[99px] shrink-0" data-name="Chip base">
      <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <Label1 />
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icons/Arrows/Arrow-right">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="arrow-right">
            <path clipRule="evenodd" d={svgPaths.p15970100} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Sex</p>
      </div>
    </div>
  );
}

function ChipBase2() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative rounded-[99px] shrink-0" data-name="Chip base">
      <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <Label2 />
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icons/Arrows/Arrow-right">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="arrow-right">
            <path clipRule="evenodd" d={svgPaths.p15970100} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Psykisk helse</p>
      </div>
    </div>
  );
}

function ChipBase3() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative rounded-[99px] shrink-0" data-name="Chip base">
      <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <Label3 />
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icons/Arrows/Arrow-right">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="arrow-right">
            <path clipRule="evenodd" d={svgPaths.p15970100} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Utdanning</p>
      </div>
    </div>
  );
}

function ChipBase4() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative rounded-[99px] shrink-0" data-name="Chip base">
      <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <Label4 />
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icons/Arrows/Arrow-right">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="arrow-right">
            <path clipRule="evenodd" d={svgPaths.p15970100} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Jobb</p>
      </div>
    </div>
  );
}

function ChipBase5() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative rounded-[99px] shrink-0" data-name="Chip base">
      <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <Label5 />
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icons/Arrows/Arrow-right">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="arrow-right">
            <path clipRule="evenodd" d={svgPaths.p15970100} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Row">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Chip">
        <ChipBase />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Chip">
        <ChipBase1 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Chip">
        <ChipBase2 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Chip">
        <ChipBase3 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Chip">
        <ChipBase4 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Chip">
        <ChipBase5 />
      </div>
      <div className="shrink-0 size-0" data-name="Spacing" />
    </div>
  );
}

function SubCategories() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Sub categories">
      <Row />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Alle tema
      </p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Arrows/Arrow-right">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="arrow-right">
            <path clipRule="evenodd" d={svgPaths.p29ff4d00} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ThemesMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pt-[16px] relative shrink-0 w-full" data-name="Themes Mobile">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0f0f0f] text-[20px] tracking-[-0.08px] w-full">Populære tema</p>
      </div>
      <SubCategories />
      <div className="content-stretch flex flex-col gap-[4px] items-center justify-center py-[8px] relative shrink-0" data-name="Link">
        <Frame3 />
        <div className="h-0 relative shrink-0 w-full" data-name="Line">
          <div className="absolute inset-[-2px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 2">
              <line id="Line" stroke="var(--stroke-0, #0F0F0F)" strokeWidth="2" x2="80" y1="1" y2="1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CarouselMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start pl-[12px] py-[40px] relative shrink-0 w-[375px]" data-name="Carousel Mobile">
      <div className="relative shrink-0 w-full" data-name="Heading">
        <div className="content-stretch flex flex-col items-start pr-[12px] relative w-full">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#0f0f0f] text-[24px] tracking-[-0.096px] w-full">{`Mest leste spørsmål `}</p>
        </div>
      </div>
      <Content1 />
      <ThemesMobile />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[26px] max-w-[351px] min-h-px min-w-px relative text-[18px] text-white tracking-[-0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ung.no er det offentliges informasjonskanal for ungdom. Vi gjør det litt lettere å være ung.
      </p>
    </div>
  );
}

function Logo() {
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
      <Text />
    </div>
  );
}

function Links2() {
  return (
    <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal gap-[16px] items-start leading-[24px] relative shrink-0 text-[16px] text-white tracking-[-0.064px] underline whitespace-nowrap" data-name="Links">
      <p className="[text-decoration-skip-ink:none] decoration-[6%] decoration-solid relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Om ung.no
      </p>
      <p className="[text-decoration-skip-ink:none] decoration-[6%] decoration-solid relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <Links2 />
    </div>
  );
}

function Links3() {
  return (
    <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal gap-[16px] items-start leading-[24px] relative shrink-0 text-[16px] text-white tracking-[-0.064px] underline whitespace-nowrap" data-name="Links">
      <p className="[text-decoration-skip-ink:none] decoration-[6%] decoration-solid relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Bestill plakater og brosjyrer
      </p>
      <p className="[text-decoration-skip-ink:none] decoration-[6%] decoration-solid relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <Links3 />
    </div>
  );
}

function Links4() {
  return (
    <div className="content-stretch flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal gap-[16px] items-start leading-[24px] relative shrink-0 text-[16px] text-white tracking-[-0.064px] underline whitespace-nowrap" data-name="Links">
      <p className="[text-decoration-skip-ink:none] decoration-[6%] decoration-solid relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Personvern
      </p>
      <p className="[text-decoration-skip-ink:none] decoration-[6%] decoration-solid relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Informasjonskapsler
      </p>
      <p className="[text-decoration-skip-ink:none] decoration-[6%] decoration-solid relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <Links4 />
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

function Links5() {
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
      <Links5 />
    </div>
  );
}

function Links1() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start py-[64px] relative shrink-0 w-full" data-name="Links">
      <Kontakt />
      <Tjenester />
      <Innhold />
      <FolgOss />
    </div>
  );
}

function ButtonBase3() {
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
        <ButtonBase3 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Footer">
      <div className="bg-[#2b5944] flex-[1_0_0] min-h-px min-w-px relative rounded-tl-[36px] rounded-tr-[36px]" data-name="Footer">
        <div className="content-stretch flex flex-col items-start pb-[24px] pt-[40px] px-[20px] relative w-full">
          <Logo />
          <Links1 />
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
    </div>
  );
}

export default function AskQuestionConfirmation() {
  return (
    <div className="bg-[#f5f3f0] content-stretch flex flex-col items-center relative size-full" data-name="Ask question - Confirmation">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
        <Browser />
        <Menu />
      </div>
      <Frame8 />
      <Code />
      <YourQuestion />
      <Frame9 />
      <CarouselMobile />
      <Footer />
    </div>
  );
}