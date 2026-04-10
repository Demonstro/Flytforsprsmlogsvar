import svgPaths from "./svg-94nf5gmavs";

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
      <p className="font-['Helvetica:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#262626] text-[18px] whitespace-nowrap">ung.no/still-sporsmal</p>
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
        <p className="font-['Borna:SemiBold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#0f0f0f] text-[30px] tracking-[-0.12px] w-full">Hva lurer du på?</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[600px] relative shrink-0 w-full">
      <Title />
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Ingress">
        <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] max-w-[351px] min-h-px min-w-px relative text-[#0f0f0f] text-[0px] text-[18px] tracking-[-0.072px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <span className="leading-[26px]">{`Her kan du som er `}</span>
          <span className="decoration-solid font-['Open_Sans:Bold',sans-serif] font-bold leading-[26px] underline" style={{ fontVariationSettings: "'wdth' 100" }}>
            mellom 13 og 20 år
          </span>
          <span className="leading-[26px]">, stille spørsmål anonymt til oss i ung.no. Vi har mange fagpersoner og ungdommer som kan svare deg på det du lurer på.</span>
        </p>
      </div>
    </div>
  );
}

function TopBannerAndSearch() {
  return (
    <div className="relative shrink-0 w-full z-[3]" data-name="Top banner and search">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center px-[12px] py-[24px] relative w-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Label() {
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
    <div className="bg-white h-[384px] mb-[-27px] relative rounded-bl-[8px] rounded-br-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Text">
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

function TextArea() {
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

function Label1() {
  return (
    <div className="content-stretch flex font-['Open_Sans:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[0] pb-[8px] relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full whitespace-nowrap" data-name="Label">
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Hva handler spørsmålet ditt om?</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">&nbsp;</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#676767] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Velg et tema
      </p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Arrows/Chevron-down">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="chevron-down 1">
            <path clipRule="evenodd" d={svgPaths.p34b75100} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Vector (Stroke)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex font-['Open_Sans:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[0] pb-[8px] relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full whitespace-nowrap" data-name="Label">
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Hvor gammel er du?</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">&nbsp;</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#676767] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Velg din alder
      </p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Arrows/Chevron-down">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="chevron-down 1">
            <path clipRule="evenodd" d={svgPaths.p3dc17000} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Vector (Stroke)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex font-['Open_Sans:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[0] pb-[8px] relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full whitespace-nowrap" data-name="Label">
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">{`Kjønn `}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">&nbsp;</p>
      </div>
    </div>
  );
}

function RadioButtons() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Radio buttons">
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Radio button">
        <div className="relative shrink-0 size-[20px]" data-name=".Base circle">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, white)" id="circle" r="9" stroke="var(--stroke-0, #0F0F0F)" strokeWidth="2" />
          </svg>
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Jente
          </p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Radio button">
        <div className="relative shrink-0 size-[20px]" data-name=".Base circle">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, white)" id="circle" r="9" stroke="var(--stroke-0, #0F0F0F)" strokeWidth="2" />
          </svg>
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Gutt
          </p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Radio button">
        <div className="relative shrink-0 size-[20px]" data-name=".Base circle">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, white)" id="circle" r="9" stroke="var(--stroke-0, #0F0F0F)" strokeWidth="2" />
          </svg>
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Annet
          </p>
        </div>
      </div>
    </div>
  );
}

function Checkboxes() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Checkboxes">
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
        <div className="relative shrink-0 size-[20px]" data-name=".Base checkbox">
          <div className="absolute bg-white border-2 border-[#0f0f0f] border-solid inset-0 rounded-[2px]" data-name="box" />
        </div>
        <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Label">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[#0f0f0f] text-[0px] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="leading-[24px]">{`Jeg godkjenner `}</span>
            <span className="decoration-[6%] decoration-solid leading-[24px] underline" style={{ fontVariationSettings: "'wdth' 100" }}>
              personvernerklæringen
            </span>
            <span className="leading-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              .
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="bg-[#dfdfdf] content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#888] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Send inn</p>
      </div>
    </div>
  );
}

function ButtonBase1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button base">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Avbryt
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[44px] py-[8px] relative rounded-[50px] shrink-0" data-name="Frame">
      <ButtonBase1 />
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

function Buttons() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Buttons">
      <div className="content-stretch flex items-center min-h-[44px] relative shrink-0" data-name="Button">
        <ButtonBase />
      </div>
      <button className="content-stretch cursor-pointer flex flex-col items-center min-h-[44px] relative shrink-0" data-name="Button">
        <Frame4 />
      </button>
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Content">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[64px] pt-[20px] px-[12px] relative w-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[351px]" data-name="Paragraph">
          <div className="content-stretch flex items-start py-[12px] relative shrink-0 w-full" data-name="Body">
            <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Du må fylle ut alt før du sender inn.
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[351px]" data-name="Text area">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[351px]" data-name="Label">
            <Label />
          </div>
          <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-[351px]" data-name=".Base text area">
            <TextArea />
            <Counter />
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[350px]" data-name="Combobox">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[351px]" data-name="Label">
            <Label1 />
          </div>
          <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name=".Base field">
            <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[10px] relative w-full">
                <Frame2 />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[351px]" data-name="Select">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[351px]" data-name="Label">
            <Label2 />
          </div>
          <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name=".Base field">
            <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[10px] relative w-full">
                <Frame3 />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Radio group">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
            <Label3 />
          </div>
          <RadioButtons />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
          <div className="content-stretch flex flex-col items-start pb-[4px] pt-[20px] relative shrink-0 w-full" data-name="Heading">
            <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Spørsmålet ditt kobles ikke til deg</p>
          </div>
          <div className="content-stretch flex items-start py-[12px] relative shrink-0 w-full" data-name="Body">
            <div className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[#0f0f0f] text-[0px] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[24px] mb-[20px]">Du er anonym både når du sender inn spørsmål og når du sjekker svaret ditt.</p>
              <p className="mb-[20px]">
                <span className="leading-[24px]">{`Men hvis vi får inn spørsmål der vi vurderer at det er akutt fare for liv og helse, må vi varsle politiet som kan finne din IP-adresse og prøve å hjelpe deg. Dette gjelder også når vi har plikt til å varsle av andre grunner. På `}</span>
                <span className="decoration-solid font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] tracking-[-0.064px] underline" style={{ fontVariationSettings: "'wdth' 100" }}>
                  plikt.no
                </span>
                <span className="leading-[24px]">{` kan du lese mer om denne avvergingsplikten.`}</span>
              </p>
              <p>
                <span className="leading-[24px]">{`Du får også nyttig informasjon i videoen `}</span>
                <span className="decoration-solid font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] tracking-[-0.064px] underline" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Er jeg anonym på ung.no
                </span>
                <span className="leading-[24px]">?</span>
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full" data-name="Checkbox group">
          <Checkboxes />
        </div>
        <Buttons />
      </div>
    </div>
  );
}

function Decor() {
  return (
    <div className="absolute h-[578.393px] left-[-45px] top-[93.62px] w-[386.542px] z-[1]" data-name="Decor">
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

export default function OssSporsmalsside() {
  return (
    <div className="bg-[#f2f9f5] content-stretch flex flex-col isolate items-center relative size-full" data-name="OSS Spørsmålsside">
      <div className="bg-[#f5f3f0] content-stretch flex flex-col items-start shrink-0 sticky top-0 w-[375px] z-[4]" data-name="Header">
        <Browser />
      </div>
      <TopBannerAndSearch />
      <Content />
      <Decor />
    </div>
  );
}