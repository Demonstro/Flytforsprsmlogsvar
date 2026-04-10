import svgPaths from "./svg-qw0ft7gxmf";
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
      <p className="font-['Helvetica:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#262626] text-[18px] whitespace-nowrap">ung.no/oss</p>
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
    <div className="bg-[#f5f3f0] content-stretch flex items-start justify-between p-[12px] relative shrink-0 w-[375px] z-[15]" data-name="Menu">
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
  );
}

function Decor() {
  return (
    <div className="absolute h-[578.393px] left-[-45px] top-[0.62px] w-[386.542px]" data-name="Decor">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 386.542 578.393">
        <g id="Decor">
          <g id="Union">
            <path clipRule="evenodd" d={svgPaths.p3b47ed00} fill="var(--fill-0, #DEEFE7)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3713de80} fill="var(--fill-0, #DEEFE7)" fillRule="evenodd" />
          </g>
          <g id="Union_2">
            <path d={svgPaths.p1b898b00} fill="var(--fill-0, #DEEFE7)" />
            <path clipRule="evenodd" d={svgPaths.p3095480} fill="var(--fill-0, #DEEFE7)" fillRule="evenodd" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p14472580} fill="var(--fill-0, #DEEFE7)" fillRule="evenodd" id="Union_3" />
          <path clipRule="evenodd" d={svgPaths.p116e5a60} fill="var(--fill-0, #DEEFE7)" fillRule="evenodd" id="Union_4" />
          <path clipRule="evenodd" d={svgPaths.p413d800} fill="var(--fill-0, #DEEFE7)" fillRule="evenodd" id="Union_5" />
        </g>
      </svg>
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

function BackButton() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Back button">
      <button className="content-stretch cursor-pointer flex flex-col gap-[4px] items-center justify-center py-[8px] relative shrink-0" data-name="Link">
        <Frame />
        <div className="h-0 relative shrink-0 w-full" data-name="Line">
          <div className="absolute inset-[-2px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 2">
              <line id="Line" stroke="var(--stroke-0, #0F0F0F)" strokeWidth="2" x2="80" y1="1" y2="1" />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <BackButton />
      <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#0f0f0f] text-[30px] tracking-[-0.12px] w-full">Spørsmål og svar</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0f0f0f] text-[20px] tracking-[-0.08px] w-full">{`Hva lurer du på? `}</p>
      </div>
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Ingress">
        <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[26px] max-w-[351px] min-h-px min-w-px relative text-[#0f0f0f] text-[18px] tracking-[-0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Spør et ekte menneske som bryr seg.
        </p>
      </div>
    </div>
  );
}

function ButtonBase2() {
  return (
    <div className="bg-[#2b5944] flex-[1_0_0] min-h-[44px] min-w-px relative rounded-[9999px]" data-name="Button base">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] px-[20px] py-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Things/Message-circle">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g id="message-circle 1">
                <path clipRule="evenodd" d={svgPaths.p11034f00} fill="var(--fill-0, white)" fillRule="evenodd" id="RR" />
              </g>
            </svg>
          </div>
          <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[24px]">Send inn ditt spørsmål</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[600px] relative shrink-0 w-full">
      <Title />
      <Frame14 />
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Button">
        <ButtonBase2 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sjekk ditt svar
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
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Links">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[26px] max-w-[351px] min-w-full relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        For deg som allerede har sendt inn et spørsmål:
      </p>
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

function TopBannerAndSearch() {
  return (
    <div className="bg-[#f2f9f5] relative shrink-0 w-full z-[14]" data-name="Top banner and search">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center px-[12px] py-[24px] relative w-full">
          <Decor />
          <Frame5 />
          <Links />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
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
      <Frame11 />
      <Question />
      <Tags />
    </div>
  );
}

function Frame10() {
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
      <Frame10 />
      <Question1 />
      <Tags1 />
    </div>
  );
}

function Frame12() {
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
      <Frame12 />
      <Question2 />
      <Tags2 />
    </div>
  );
}

function Frame13() {
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
      <Frame13 />
      <Question3 />
      <Tags3 />
    </div>
  );
}

function Content() {
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
    <div className="bg-[#deefe7] content-stretch flex flex-col gap-[20px] items-start pl-[12px] py-[40px] relative shrink-0 w-[375px] z-[13]" data-name="Carousel Mobile">
      <div className="relative shrink-0 w-full" data-name="Heading">
        <div className="content-stretch flex flex-col items-start pr-[12px] relative w-full">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#0f0f0f] text-[24px] tracking-[-0.096px] w-full">{`Mest leste spørsmål `}</p>
        </div>
      </div>
      <Content />
      <ThemesMobile />
    </div>
  );
}

function PlaceholderText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Placeholder text">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#676767] text-[16px] text-justify tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Søk på hva som helst ...</p>
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

function ButtonBase3() {
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
        <ButtonBase3 />
      </div>
    </div>
  );
}

function ButtonBase4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Div/Filter">
        <div className="absolute inset-[16.91%_0.6%_7.19%_0]" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8791 15.1799">
            <g id="Union">
              <path clipRule="evenodd" d={svgPaths.p3cf83b00} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1fc4a4c0} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Filtrer</p>
      </div>
    </div>
  );
}

function Filter() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Filter">
      <div className="content-stretch flex items-start min-h-[44px] relative shrink-0" data-name="Button">
        <ButtonBase4 />
      </div>
    </div>
  );
}

function SearchAndFilter() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-[24px] px-[12px] relative shrink-0 w-[375px] z-[12]" data-name="Search and filter">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[#0f0f0f] text-[24px] tracking-[-0.096px] w-[min-content]">Siste spørsmål</p>
      <div className="content-stretch flex items-start relative shrink-0 w-[351px]" data-name="Ingress">
        <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[26px] max-w-[351px] min-h-px min-w-px relative text-[#0f0f0f] text-[18px] tracking-[-0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Søk i tidligere stilte spørsmål. Eller bruk filteret til å vise kun det som du syns er interessant.
        </p>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Search input">
        <SearchField />
      </div>
      <Filter />
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Header row">
      <p className="flex-[1_0_0] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jeg overtenker alt, hva kan jeg gjøre?
      </p>
    </div>
  );
}

function Tag() {
  return (
    <div className="content-stretch flex items-start relative rounded-[5px] shrink-0" data-name="Tag">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#454545] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jente, 16
      </p>
    </div>
  );
}

function GenderAndAge() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Gender and age">
      <Tag />
    </div>
  );
}

function Tag1() {
  return (
    <div className="content-stretch flex items-start relative rounded-[5px] shrink-0" data-name="Tag">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#454545] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Psykisk helse og følelser
      </p>
    </div>
  );
}

function Topic() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Topic">
      <Tag1 />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <GenderAndAge />
      <div className="flex h-[13px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[13px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 1">
                <line id="Divider" stroke="var(--stroke-0, #AFAFAF)" x2="13" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Topic />
    </div>
  );
}

function Metadata() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Metadata">
      <Left />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#454545] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        I dag
      </p>
    </div>
  );
}

function HeaderRow1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Header row">
      <p className="flex-[1_0_0] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jeg vet ikke hvordan jeg skal prate med henne.
      </p>
    </div>
  );
}

function Tag2() {
  return (
    <div className="content-stretch flex items-start relative rounded-[5px] shrink-0" data-name="Tag">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#454545] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Gutt, 14
      </p>
    </div>
  );
}

function GenderAndAge1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Gender and age">
      <Tag2 />
    </div>
  );
}

function Tag3() {
  return (
    <div className="content-stretch flex items-start relative rounded-[5px] shrink-0" data-name="Tag">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#454545] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Forelskelse
      </p>
    </div>
  );
}

function Topic1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Topic">
      <Tag3 />
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <GenderAndAge1 />
      <div className="flex h-[13px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[13px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 1">
                <line id="Divider" stroke="var(--stroke-0, #AFAFAF)" x2="13" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Topic1 />
    </div>
  );
}

function Metadata1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Metadata">
      <Left1 />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#454545] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        I dag
      </p>
    </div>
  );
}

function HeaderRow2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Header row">
      <p className="flex-[1_0_0] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Hvordan finner jeg ut hvor jeg har blitt trukket penger fra?
      </p>
    </div>
  );
}

function Tag4() {
  return (
    <div className="content-stretch flex items-start relative rounded-[5px] shrink-0" data-name="Tag">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#454545] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Gutt, 16
      </p>
    </div>
  );
}

function GenderAndAge2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Gender and age">
      <Tag4 />
    </div>
  );
}

function Tag5() {
  return (
    <div className="content-stretch flex items-start relative rounded-[5px] shrink-0" data-name="Tag">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#454545] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lov og rett
      </p>
    </div>
  );
}

function Topic2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Topic">
      <Tag5 />
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <GenderAndAge2 />
      <div className="flex h-[13px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[13px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 1">
                <line id="Divider" stroke="var(--stroke-0, #AFAFAF)" x2="13" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Topic2 />
    </div>
  );
}

function Metadata2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Metadata">
      <Left2 />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#454545] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        I dag
      </p>
    </div>
  );
}

function HeaderRow3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Header row">
      <p className="flex-[1_0_0] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Vet ikke hva jeg kan studere
      </p>
    </div>
  );
}

function Tag6() {
  return (
    <div className="content-stretch flex items-start relative rounded-[5px] shrink-0" data-name="Tag">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#454545] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jente, 15
      </p>
    </div>
  );
}

function GenderAndAge3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Gender and age">
      <Tag6 />
    </div>
  );
}

function Tag7() {
  return (
    <div className="content-stretch flex items-start relative rounded-[5px] shrink-0" data-name="Tag">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#454545] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Videregående skole
      </p>
    </div>
  );
}

function Topic3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Topic">
      <Tag7 />
    </div>
  );
}

function Left3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <GenderAndAge3 />
      <div className="flex h-[13px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[13px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 1">
                <line id="Divider" stroke="var(--stroke-0, #AFAFAF)" x2="13" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Topic3 />
    </div>
  );
}

function Metadata3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Metadata">
      <Left3 />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#454545] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        I dag
      </p>
    </div>
  );
}

function HeaderRow4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Header row">
      <p className="flex-[1_0_0] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jeg har lyst til å kjøpe sexleketøy, er jeg gammel nok?
      </p>
    </div>
  );
}

function Tag8() {
  return (
    <div className="content-stretch flex items-start relative rounded-[5px] shrink-0" data-name="Tag">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#454545] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jente, 15
      </p>
    </div>
  );
}

function GenderAndAge4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Gender and age">
      <Tag8 />
    </div>
  );
}

function Tag9() {
  return (
    <div className="content-stretch flex items-start relative rounded-[5px] shrink-0" data-name="Tag">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#454545] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sex
      </p>
    </div>
  );
}

function Topic4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Topic">
      <Tag9 />
    </div>
  );
}

function Left4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <GenderAndAge4 />
      <div className="flex h-[13px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[13px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 1">
                <line id="Divider" stroke="var(--stroke-0, #AFAFAF)" x2="13" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Topic4 />
    </div>
  );
}

function Metadata4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Metadata">
      <Left4 />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#454545] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        I går
      </p>
    </div>
  );
}

function Questions() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pb-[8px] relative shrink-0 w-full" data-name="Questions">
      <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Question card">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <HeaderRow />
          <Metadata />
        </div>
      </div>
      <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Question card">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <HeaderRow1 />
          <Metadata1 />
        </div>
      </div>
      <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Question card">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <HeaderRow2 />
          <Metadata2 />
        </div>
      </div>
      <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Question card">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <HeaderRow3 />
          <Metadata3 />
        </div>
      </div>
      <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Question card">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <HeaderRow4 />
          <Metadata4 />
        </div>
      </div>
    </div>
  );
}

function ButtonBase5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button base">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Navigation/Plus">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="plus 1">
            <path d={svgPaths.p83dad00} fill="var(--fill-0, #0F0F0F)" id="Union" />
          </g>
        </svg>
      </div>
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Flere spørsmål og svar
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[44px] py-[8px] relative rounded-[50px] shrink-0" data-name="Frame">
      <ButtonBase5 />
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

function QuestionList() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] px-[12px] relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-[375px] z-[11]" data-name="Question list">
      <Questions />
      <div className="content-stretch flex flex-col items-center min-h-[44px] relative shrink-0" data-name="Button">
        <Frame4 />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="h-[180px] max-h-[180px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3859} />
    </div>
  );
}

function Question4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Hvorfor kommer jeg aldri når jeg har orgasmer?</p>
      </div>
    </div>
  );
}

function Tags4() {
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

function QuestionCard4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[20px] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Question card">
      <Frame15 />
      <Question4 />
      <Tags4 />
    </div>
  );
}

function Question5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.072px] w-full">Tatt angrepille og er redd for graviditet.</p>
    </div>
  );
}

function Tags5() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
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
  );
}

function QuestionCard5() {
  return (
    <div className="bg-[#3c7c5e] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative w-full">
        <Question5 />
        <Tags5 />
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="relative shrink-0 w-full z-[10]">
      <div className="content-stretch flex flex-col gap-[10px] items-start pb-[40px] pl-[12px] pr-[32px] pt-[20px] relative w-full">
        <QuestionCard4 />
        <QuestionCard5 />
      </div>
    </div>
  );
}

function Question6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Får ikke penis inn i skjeden, hva gjør vi?</p>
    </div>
  );
}

function Tags6() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#dbddff] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Gutt, 16
        </p>
      </div>
    </div>
  );
}

function QuestionCard6() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Question6 />
        <Tags6 />
      </div>
    </div>
  );
}

function Question7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Er det mulig å bli befruktet når man har ubeskyttet sex etter eggløsning?</p>
    </div>
  );
}

function Tags7() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jente, 16
        </p>
      </div>
    </div>
  );
}

function QuestionCard7() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-[289px]" data-name="Question card">
      <Question7 />
      <Tags7 />
    </div>
  );
}

function Question8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Har jeg gjort noe galt når jeg sendte nudes?</p>
    </div>
  );
}

function Tags8() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#dbddff] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Gutt, 16
        </p>
      </div>
    </div>
  );
}

function QuestionCard8() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Question8 />
        <Tags8 />
      </div>
    </div>
  );
}

function Question9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Hvordan kan jeg starte med sex? Både jeg og kjæresten vil!</p>
    </div>
  );
}

function Tags9() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#dbddff] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Gutt, 17
        </p>
      </div>
    </div>
  );
}

function QuestionCard9() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Question9 />
        <Tags9 />
      </div>
    </div>
  );
}

function Question10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Hvorfor har jeg så vondt under samleie?</p>
    </div>
  );
}

function Tags10() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jente, 18
        </p>
      </div>
    </div>
  );
}

function QuestionCard10() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Question10 />
        <Tags10 />
      </div>
    </div>
  );
}

function Question11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Kjæresten driver og vil ha sex med meg, hva gjør jeg?</p>
    </div>
  );
}

function Tags11() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#dbddff] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Gutt, 17
        </p>
      </div>
    </div>
  );
}

function QuestionCard11() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Question11 />
        <Tags11 />
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <QuestionCard6 />
      <QuestionCard7 />
      <QuestionCard8 />
      <QuestionCard9 />
      <QuestionCard10 />
      <QuestionCard11 />
      <div className="shrink-0 size-0" data-name="Spacing" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Alle spørsmål om sex
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

function CarouselMobile1() {
  return (
    <div className="bg-[#acd7c3] content-stretch flex flex-col gap-[20px] items-start pl-[12px] py-[40px] relative shrink-0 w-[375px] z-[9]" data-name="Carousel Mobile">
      <div className="relative shrink-0 w-full" data-name="Heading">
        <div className="content-stretch flex flex-col items-start pr-[12px] relative w-full">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#0f0f0f] text-[24px] tracking-[-0.096px] w-full">Spørsmål om sex</p>
        </div>
      </div>
      <Content1 />
      <div className="content-stretch flex flex-col gap-[4px] items-center justify-center py-[8px] relative shrink-0" data-name="Link">
        <Frame6 />
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

function Question12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Jeg sliter skikkelig sosialt og aner ikke hva jeg skal gjøre</p>
    </div>
  );
}

function Tags12() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
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
  );
}

function QuestionCard12() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative w-full">
        <Question12 />
        <Tags12 />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="h-[168px] relative shrink-0 w-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[162px] left-[calc(50%-2.53px)] top-[calc(50%-0.57px)] w-[155px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 162">
          <path d={svgPaths.pc35d600} fill="var(--fill-0, white)" id="Vector 3" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[148px] left-[calc(50%-2.53px)] top-[calc(50%-2.57px)] w-[139px]" data-name="Union">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139 148">
          <g id="Union">
            <path d={svgPaths.p30982400} fill="var(--fill-0, black)" />
            <path d={svgPaths.p19a11600} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3bf22840} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1026f200} fill="var(--fill-0, black)" />
            <path d={svgPaths.pd6a8800} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3deed080} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1c0cba00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p22546e00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3f669400} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPaths.p2b027900} fill="var(--fill-0, black)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Question13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.072px] w-full">Kan jeg ha sex før jeg fyller 16 år?</p>
    </div>
  );
}

function Tags13() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#f5f5ff] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Gutt, 14
        </p>
      </div>
      <div className="bg-[#dbddff] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Sex
        </p>
      </div>
    </div>
  );
}

function QuestionCard13() {
  return (
    <div className="bg-[#5046e5] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative w-full">
        <Frame17 />
        <Question13 />
        <Tags13 />
      </div>
    </div>
  );
}

function Question14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Hvorfor kommer jeg aldri når jeg har orgasmer?</p>
    </div>
  );
}

function Tags14() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#d1d3ff] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Gutt, 14
        </p>
      </div>
      <div className="bg-[#ebebff] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Sex
        </p>
      </div>
    </div>
  );
}

function QuestionCard14() {
  return (
    <div className="bg-[#f5f5ff] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative w-full">
        <Question14 />
        <Tags14 />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-[180px] max-h-[180px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3858} />
    </div>
  );
}

function Question15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Tatt angrepille og er redd for graviditet.</p>
      </div>
    </div>
  );
}

function Tags15() {
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

function QuestionCard15() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[20px] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Question card">
      <Frame18 />
      <Question15 />
      <Tags15 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 w-full z-[8]">
      <div className="content-stretch flex flex-col gap-[10px] items-start pb-[40px] pl-[12px] pr-[32px] pt-[20px] relative w-full">
        <QuestionCard12 />
        <QuestionCard13 />
        <QuestionCard14 />
        <QuestionCard15 />
      </div>
    </div>
  );
}

function Question16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Renser skjeden seg selv eller må jeg vaske?</p>
    </div>
  );
}

function Tags16() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jente, 16
        </p>
      </div>
    </div>
  );
}

function QuestionCard16() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Question16 />
        <Tags16 />
      </div>
    </div>
  );
}

function Question17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Bør jeg starte med Isotretinoin?</p>
    </div>
  );
}

function Tags17() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jente, 20
        </p>
      </div>
    </div>
  );
}

function QuestionCard17() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Question17 />
        <Tags17 />
      </div>
    </div>
  );
}

function Question18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Er det noe annet eg kan gjøre for å fikse overbitt?</p>
    </div>
  );
}

function Tags18() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#ecdfda] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          14 år
        </p>
      </div>
    </div>
  );
}

function QuestionCard18() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Question18 />
        <Tags18 />
      </div>
    </div>
  );
}

function Question19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Klumper bak der jeg har hull i ørene</p>
    </div>
  );
}

function Tags19() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jente, 16
        </p>
      </div>
    </div>
  );
}

function QuestionCard19() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Question19 />
        <Tags19 />
      </div>
    </div>
  );
}

function Question20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Jeg var syk og gikk ned i vekt, vil jeg gå opp igjen?</p>
    </div>
  );
}

function Tags20() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#dbddff] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Gutt, 16
        </p>
      </div>
    </div>
  );
}

function QuestionCard20() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Question20 />
        <Tags20 />
      </div>
    </div>
  );
}

function Question21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Får alle jenter mensen?</p>
    </div>
  );
}

function Tags21() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jente, 14
        </p>
      </div>
    </div>
  );
}

function QuestionCard21() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Question21 />
        <Tags21 />
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <QuestionCard16 />
      <QuestionCard17 />
      <QuestionCard18 />
      <QuestionCard19 />
      <QuestionCard20 />
      <QuestionCard21 />
      <div className="shrink-0 size-0" data-name="Spacing" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] text-right text-white tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Alle spørsmål om kropp
      </p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Arrows/Arrow-right">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="arrow-right">
            <path clipRule="evenodd" d={svgPaths.p29ff4d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CarouselMobile2() {
  return (
    <div className="bg-[#2b5944] content-stretch flex flex-col gap-[20px] items-start pl-[12px] py-[40px] relative shrink-0 w-[375px] z-[7]" data-name="Carousel Mobile">
      <div className="relative shrink-0 w-full" data-name="Heading">
        <div className="content-stretch flex flex-col items-start pr-[12px] relative w-full">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.096px] w-full">Spørsmål om kropp</p>
        </div>
      </div>
      <Content2 />
      <div className="content-stretch flex flex-col gap-[4px] items-center justify-center py-[8px] relative shrink-0" data-name="Link">
        <Frame7 />
        <div className="h-0 relative shrink-0 w-full" data-name="Line">
          <div className="absolute inset-[-2px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 198 2">
              <line id="Line" stroke="var(--stroke-0, white)" strokeWidth="2" x2="198" y1="1" y2="1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="h-[180px] max-h-[180px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3856} />
    </div>
  );
}

function Question22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Kan jeg ha sex før jeg fyller 16 år?</p>
      </div>
    </div>
  );
}

function Tags22() {
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

function QuestionCard22() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[20px] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Question card">
      <Frame20 />
      <Question22 />
      <Tags22 />
    </div>
  );
}

function Question23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Hvorfor kommer jeg aldri når jeg har orgasmer?</p>
    </div>
  );
}

function Tags23() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#89c6aa] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jente, 16
        </p>
      </div>
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Psykisk helse og følelser
        </p>
      </div>
    </div>
  );
}

function QuestionCard23() {
  return (
    <div className="bg-[#deefe7] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative w-full">
        <Question23 />
        <Tags23 />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 w-full z-[6]">
      <div className="content-stretch flex flex-col gap-[10px] items-start pb-[40px] pl-[12px] pr-[32px] pt-[20px] relative w-full">
        <QuestionCard22 />
        <QuestionCard23 />
      </div>
    </div>
  );
}

function Question24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Hva gjør jeg når venninnen min oppleves manipulerende og egoistisk?</p>
    </div>
  );
}

function Tags24() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jente, 15
        </p>
      </div>
    </div>
  );
}

function QuestionCard24() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Question24 />
        <Tags24 />
      </div>
    </div>
  );
}

function Question25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Jeg og vennene mine har ulike meninger/synspunkter</p>
    </div>
  );
}

function Tags25() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#dbddff] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Gutt, 15
        </p>
      </div>
    </div>
  );
}

function QuestionCard25() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Question25 />
        <Tags25 />
      </div>
    </div>
  );
}

function Question26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Hva kan jeg gjøre for at venninnen min skal være trygg på skolen?</p>
    </div>
  );
}

function Tags26() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#dbddff] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Gutt, 17
        </p>
      </div>
    </div>
  );
}

function QuestionCard26() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Question26 />
        <Tags26 />
      </div>
    </div>
  );
}

function Question27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Jeg gikk til helsesykepleier med bekymring. Var det riktig?</p>
    </div>
  );
}

function Tags27() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jente, 16
        </p>
      </div>
    </div>
  );
}

function QuestionCard27() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Question27 />
        <Tags27 />
      </div>
    </div>
  );
}

function Question28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Er usikker på om jeg er kastet ut av vennegjengen</p>
    </div>
  );
}

function Tags28() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#dbddff] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Gutt, 16
        </p>
      </div>
    </div>
  );
}

function QuestionCard28() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Question28 />
        <Tags28 />
      </div>
    </div>
  );
}

function Question29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Har ikke kontakt med venner utenom skoletiden. Hvordan få dypere vennskap?</p>
    </div>
  );
}

function Tags29() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jente, 17
        </p>
      </div>
    </div>
  );
}

function QuestionCard29() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Question29 />
        <Tags29 />
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <QuestionCard24 />
      <QuestionCard25 />
      <QuestionCard26 />
      <QuestionCard27 />
      <QuestionCard28 />
      <QuestionCard29 />
      <div className="shrink-0 size-0" data-name="Spacing" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Alle spørsmål om vennskap
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

function CarouselMobile3() {
  return (
    <div className="bg-[#c7c9ff] content-stretch flex flex-col gap-[20px] items-start pl-[12px] py-[40px] relative shrink-0 w-[375px] z-[5]" data-name="Carousel Mobile">
      <div className="relative shrink-0 w-full" data-name="Heading">
        <div className="content-stretch flex flex-col items-start pr-[12px] relative w-full">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#0f0f0f] text-[24px] tracking-[-0.096px] w-full">Spørsmål om vennskap</p>
        </div>
      </div>
      <Content3 />
      <div className="content-stretch flex flex-col gap-[4px] items-center justify-center py-[8px] relative shrink-0" data-name="Link">
        <Frame8 />
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

function Frame22() {
  return (
    <div className="h-[168px] relative shrink-0 w-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[138px] left-[calc(50%-1.52px)] top-[calc(50%+1.26px)] w-[160px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 138">
          <path d={svgPaths.p2baffe00} fill="var(--fill-0, #DEEFE7)" id="Vector 3" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-[calc(50%-1.02px)] top-[calc(50%-0.24px)] w-[149px]" data-name="Union">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 123">
          <g id="Union">
            <path d={svgPaths.p3c0f480} fill="var(--fill-0, black)" />
            <path d={svgPaths.p286b8e80} fill="var(--fill-0, black)" />
            <path d={svgPaths.pd9b070} fill="var(--fill-0, black)" />
            <path d={svgPaths.p337aeb80} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPaths.p18733c80} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p15528700} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3dcbd5c0} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p39aad780} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.p2cfcf1f0} fill="var(--fill-0, black)" />
            <path d={svgPaths.p52a9e80} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPaths.p189f3400} fill="var(--fill-0, black)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Question30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Jeg sliter skikkelig sosialt og aner ikke hva jeg skal gjøre</p>
    </div>
  );
}

function Tags30() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
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
  );
}

function QuestionCard30() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative w-full">
        <Frame22 />
        <Question30 />
        <Tags30 />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="h-[168px] relative shrink-0 w-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[164px] left-[calc(50%+3.5px)] top-[calc(50%+2px)] w-[100px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 164">
          <path d={svgPaths.p6f662c0} fill="var(--fill-0, white)" id="Vector 3" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[155px] left-[calc(50%+3.5px)] top-[calc(50%+0.5px)] w-[88px]" data-name="Union">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 155">
          <g id="Union">
            <path d={svgPaths.p22b916b0} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPaths.p905e100} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p7e98400} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p11149f80} fill="var(--fill-0, black)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Question31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.072px] w-full">Tatt angrepille og er redd for graviditet.</p>
    </div>
  );
}

function Tags31() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#f2f9f5] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jente, 16
        </p>
      </div>
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Psykisk helse og følelser
        </p>
      </div>
    </div>
  );
}

function QuestionCard31() {
  return (
    <div className="bg-[#3c7c5e] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative w-full">
        <Frame23 />
        <Question31 />
        <Tags31 />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="h-[168px] relative shrink-0 w-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[128.692px] left-[calc(50%+1.07px)] top-[calc(50%-1.18px)] w-[207.214px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207.214 128.692">
          <path d={svgPaths.p30f1fcc0} fill="var(--fill-0, white)" id="Vector 3" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[119px] left-[calc(50%+0.5px)] top-[calc(50%-2.5px)] w-[194px]" data-name="Union">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 194 119">
          <g id="Union">
            <path d={svgPaths.p19eb0180} fill="var(--fill-0, black)" />
            <path d={svgPaths.p18e96000} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2269d100} fill="var(--fill-0, black)" />
            <path d={svgPaths.pdbb4980} fill="var(--fill-0, black)" />
            <path d={svgPaths.pd1b7600} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1be35200} fill="var(--fill-0, black)" />
            <path d={svgPaths.p35dfba80} fill="var(--fill-0, black)" />
            <path d={svgPaths.pbfb7100} fill="var(--fill-0, black)" />
            <path d={svgPaths.p4211c00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1ade4480} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2962800} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2c1f7780} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2f0ed180} fill="var(--fill-0, black)" />
            <path d={svgPaths.p22613380} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2fbbad80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2b4b8080} fill="var(--fill-0, black)" />
            <path d={svgPaths.p66b5d00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2911ce00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3d587f00} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPaths.p3d48100} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1c096e00} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.p1e35200} fill="var(--fill-0, black)" />
            <path d={svgPaths.p211b00c0} fill="var(--fill-0, black)" />
            <path d={svgPaths.p35b53900} fill="var(--fill-0, black)" />
            <path d={svgPaths.p24333b80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2918b800} fill="var(--fill-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Question32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Hvorfor kommer jeg aldri når jeg har orgasmer?</p>
    </div>
  );
}

function Tags32() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#89c6aa] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jente, 16
        </p>
      </div>
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Psykisk helse og følelser
        </p>
      </div>
    </div>
  );
}

function QuestionCard32() {
  return (
    <div className="bg-[#deefe7] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative w-full">
        <Frame24 />
        <Question32 />
        <Tags32 />
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="h-[168px] relative shrink-0 w-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[162px] left-[calc(50%-2.53px)] top-[calc(50%-0.57px)] w-[155px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 162">
          <path d={svgPaths.pc35d600} fill="var(--fill-0, white)" id="Vector 3" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[148px] left-[calc(50%-2.53px)] top-[calc(50%-2.57px)] w-[139px]" data-name="Union">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139 148">
          <g id="Union">
            <path d={svgPaths.p30982400} fill="var(--fill-0, black)" />
            <path d={svgPaths.p19a11600} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3bf22840} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1026f200} fill="var(--fill-0, black)" />
            <path d={svgPaths.pd6a8800} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3deed080} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1c0cba00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p22546e00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3f669400} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPaths.p2b027900} fill="var(--fill-0, black)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Question33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Hvorfor kommer jeg aldri når jeg har orgasmer?</p>
    </div>
  );
}

function Tags33() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#c7c9ff] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Gutt, 14
        </p>
      </div>
      <div className="bg-[#dbddff] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Sex
        </p>
      </div>
    </div>
  );
}

function QuestionCard33() {
  return (
    <div className="bg-[#ebebff] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative w-full">
        <Frame25 />
        <Question33 />
        <Tags33 />
      </div>
    </div>
  );
}

function Question34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.072px] w-full">Kan jeg ha sex før jeg fyller 16 år?</p>
    </div>
  );
}

function Tags34() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#dbddff] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Gutt, 16
        </p>
      </div>
      <div className="bg-[#f5f5ff] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Psykisk helse og følelser
        </p>
      </div>
    </div>
  );
}

function QuestionCard34() {
  return (
    <div className="bg-[#5046e5] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative w-full">
        <Question34 />
        <Tags34 />
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 w-full z-[4]">
      <div className="content-stretch flex flex-col gap-[10px] items-start pb-[40px] pl-[12px] pr-[32px] pt-[20px] relative w-full">
        <QuestionCard30 />
        <QuestionCard31 />
        <QuestionCard32 />
        <QuestionCard33 />
        <QuestionCard34 />
      </div>
    </div>
  );
}

function Question35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Jeg er bekymret for hudkreft i føflekker på ryggen</p>
    </div>
  );
}

function Tags35() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#ecdfda] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          18 år
        </p>
      </div>
    </div>
  );
}

function QuestionCard35() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Question35 />
        <Tags35 />
      </div>
    </div>
  );
}

function Question36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Har fortsatt magesmerter et år etter operasjon. Hva gjør jeg?</p>
    </div>
  );
}

function Tags36() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#dbddff] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Gutt, 16
        </p>
      </div>
    </div>
  );
}

function QuestionCard36() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Question36 />
        <Tags36 />
      </div>
    </div>
  );
}

function Tags37() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jente, 16
        </p>
      </div>
    </div>
  );
}

function Question37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Tok dobbel dose ADHD piller, angrer skikkelig og vil snakke med mamma.</p>
    </div>
  );
}

function QuestionCard37() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Tags37 />
        <Question37 />
      </div>
    </div>
  );
}

function Tags38() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#ecdfda] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          16 år
        </p>
      </div>
    </div>
  );
}

function Question38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Redd for kreft fra armbånd fra Temu</p>
    </div>
  );
}

function QuestionCard38() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Tags38 />
        <Question38 />
      </div>
    </div>
  );
}

function Tags39() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jente, 16
        </p>
      </div>
    </div>
  );
}

function Question39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Er det farlig å drikke 2-3 energidrikker om dagen? Hvordan kan jeg slutte?</p>
    </div>
  );
}

function QuestionCard39() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Tags39 />
        <Question39 />
      </div>
    </div>
  );
}

function Tags40() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jente, 20
        </p>
      </div>
    </div>
  );
}

function Question40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Tips til hvitere tenner?</p>
    </div>
  );
}

function QuestionCard40() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Tags40 />
        <Question40 />
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <QuestionCard35 />
      <QuestionCard36 />
      <QuestionCard37 />
      <QuestionCard38 />
      <QuestionCard39 />
      <QuestionCard40 />
      <div className="shrink-0 size-0" data-name="Spacing" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Alle spørsmål om helse di
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

function CarouselMobile4() {
  return (
    <div className="bg-[#dbddff] content-stretch flex flex-col gap-[20px] items-start pl-[12px] py-[40px] relative shrink-0 w-[375px] z-[3]" data-name="Carousel Mobile">
      <div className="relative shrink-0 w-full" data-name="Heading">
        <div className="content-stretch flex flex-col items-start pr-[12px] relative w-full">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#0f0f0f] text-[24px] tracking-[-0.096px] w-full">Spørsmål om helsa di</p>
        </div>
      </div>
      <Content4 />
      <div className="content-stretch flex flex-col gap-[4px] items-center justify-center py-[8px] relative shrink-0" data-name="Link">
        <Frame9 />
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

function Component04ElementerKaraktererFlattenedGladMobil() {
  return (
    <div className="-translate-y-1/2 absolute aspect-[1519/1290] left-[2.5%] overflow-clip right-[4.72%] top-[calc(50%+2px)]" data-name="04-elementer-karakterer-FLATTENED_glad mobil">
      <div className="absolute inset-[2.25%_2.03%_2.84%_3.24%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154.685 131.604">
          <path d={svgPaths.peb4a000} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[5.28%_4.19%_5.63%_6.59%]" data-name="Union">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 145.689 123.535">
          <g id="Union">
            <path d={svgPaths.p3318b780} fill="var(--fill-0, black)" />
            <path d={svgPaths.p10471280} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1975cd80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p406f600} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPaths.p2c467300} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p17bb8d80} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p37c6ad80} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.p2f434440} fill="var(--fill-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex font-['Open_Sans:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[0] pb-[8px] relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full whitespace-nowrap" data-name="Label">
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Ditt spørsmål</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">&nbsp;</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-white h-[148px] mb-[-27px] relative rounded-bl-[8px] rounded-br-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px] rounded-tr-[8px]" />
      <div className="content-stretch flex items-start justify-between px-[12px] py-[8px] relative size-full">
        <div className="content-stretch flex flex-[1_0_0] h-full items-start min-h-px min-w-px relative" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal h-full leading-[24px] min-h-px min-w-px relative text-[#676767] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            &nbsp;
          </p>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[11px]">
      <div className="absolute inset-[0_-6.43%_-6.43%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7071 11.7071">
          <g id="Group 3307">
            <line id="Line 140" stroke="var(--stroke-0, #676767)" x1="11.3536" x2="0.353554" y1="0.353553" y2="11.3536" />
            <line id="Line 141" stroke="var(--stroke-0, #676767)" x1="11.3536" x2="4.35355" y1="4.35355" y2="11.3536" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-end mb-[-27px] p-[8px] relative shrink-0" data-name="Icon">
      <Group />
    </div>
  );
}

function TextArea1() {
  return (
    <div className="content-stretch flex flex-col items-end justify-end pb-[27px] relative shrink-0 w-full" data-name="Text area">
      <Text />
      <Icon />
    </div>
  );
}

function Counter() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative shrink-0 w-full" data-name="Counter">
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#0f0f0f] text-[14px] text-right tracking-[-0.056px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        1,000 av 1,000 tegn igjen
      </p>
    </div>
  );
}

function BaseTextArea() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-[351px]" data-name=".Base text area">
      <TextArea1 />
      <Counter />
    </div>
  );
}

function TextArea() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[351px]" data-name="Text area">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[351px]" data-name="Label">
        <Label6 />
      </div>
      <BaseTextArea />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#0f0f0f] text-[24px] tracking-[-0.096px] w-full">Spør oss!</p>
      </div>
      <div className="h-[141px] relative shrink-0 w-[176px]" data-name="Illustration">
        <div className="absolute inset-[1.39%_8.06%_24.31%_23.89%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119.778 104.771">
            <path d={svgPaths.p257b2e00} fill="var(--fill-0, #79FC9E)" id="Vector 1" />
          </svg>
        </div>
        <Component04ElementerKaraktererFlattenedGladMobil />
      </div>
      <div className="content-stretch flex items-start py-[16px] relative shrink-0 w-[351px]" data-name="Body">
        <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Finner du ikke svar på det du lurer på? Da kan du jo spørre oss! De fleste får svar innen tre dager.
        </p>
      </div>
      <TextArea />
    </div>
  );
}

function ButtonBase6() {
  return (
    <div className="bg-[#2b5944] content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Spør</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <Paragraph />
      <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
        <ButtonBase6 />
      </div>
    </div>
  );
}

function AskQuestionBanner() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[40px] relative shrink-0 w-[375px] z-[2]" data-name="Ask question banner">
      <Content5 />
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
      <Text1 />
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

function ButtonBase7() {
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
        <ButtonBase7 />
      </div>
    </div>
  );
}

export default function OssForside() {
  return (
    <div className="bg-[#f5f3f0] content-stretch flex flex-col isolate items-center relative size-full" data-name="OSS Forside">
      <div className="content-stretch flex flex-col items-start shrink-0 sticky top-0 w-[375px] z-[16]" data-name="Header">
        <Browser />
      </div>
      <Menu />
      <TopBannerAndSearch />
      <CarouselMobile />
      <SearchAndFilter />
      <QuestionList />
      <Frame26 />
      <CarouselMobile1 />
      <Frame16 />
      <CarouselMobile2 />
      <Frame19 />
      <CarouselMobile3 />
      <Frame21 />
      <CarouselMobile4 />
      <AskQuestionBanner />
      <div className="bg-[#2b5944] content-stretch flex flex-col items-start pb-[24px] pt-[40px] px-[20px] relative rounded-tl-[36px] rounded-tr-[36px] shrink-0 w-[375px] z-[1]" data-name="Footer">
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
  );
}