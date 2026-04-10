import svgPaths from "./svg-hy6koidlvz";
import imgFrame3856 from "figma:asset/9ace3e9c006411cfde0d1fb6f41373bcaf19bec2.png";
import imgImage1 from "figma:asset/d54656827cae3eeb160e6aeaa64e51ec049eaf75.png";
import imgScreencaptureQaUngNo2024082608223332 from "figma:asset/f7ce7085dfdacdffe405a765657520942a206311.png";
import imgImage from "figma:asset/30d83d025067f097328eb2868558a2722822e701.png";
import imgImage2 from "figma:asset/76cda5686fa6c6cb880fdf101e99a805979c8707.png";

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
      <p className="font-['Helvetica:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#262626] text-[18px] whitespace-nowrap">ung.no/oss/lQ6Icb680GkeUSie</p>
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
    <div className="content-stretch flex items-start justify-between p-[12px] relative shrink-0 w-[375px] z-[6]" data-name="Menu">
      <div className="h-[48px] relative shrink-0 w-[66.098px]" data-name="Logo-sticker-variants">
        <div className="absolute inset-[0.32%_0.32%_0.19%_0.16%]" data-name="Outline">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65.7817 47.7544">
            <path clipRule="evenodd" d={svgPaths.p3226d2f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Outline" />
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[351px]" data-name="Content">
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

function Frame4() {
  return (
    <div className="h-[180px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3856} />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-center overflow-clip relative shrink-0 w-full">
      <div className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-[20px]">{`Hei. Jeg har bursdag veldig sent på året (8 november) og i 2025 fyller jeg 16. Jeg har kjæreste på samme alder, bare at han har bursdag i starten av januar. Vi har jo så klart lyst til å ha sex. `}</p>
        <p className="mb-[20px]">{`Er det sånn at det er det året jeg fyller 16 at jeg kan ha sex, eller må jeg ha fylt 16? Siden hvis jeg må fylle 16, er det jo litt dumt, siden hun snart blit 16 :( og litt uretferdig siden jeg da må vente. `}</p>
        <p>Så, kan jeg ha sex det året jeg fyller 16, selv om jeg er 15, altså i 2025?</p>
      </div>
    </div>
  );
}

function QuestionText() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Question text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center pb-[24px] pt-[16px] px-[16px] relative w-full">
          <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Styled heading">
            <p className="font-['Borna:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] whitespace-nowrap">Jente, 14</p>
          </div>
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-full">
      <Frame4 />
      <div className="relative shrink-0 w-full" data-name="Heading">
        <div className="content-stretch flex flex-col items-start pb-[4px] pt-[12px] px-[12px] relative w-full">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#0f0f0f] text-[30px] tracking-[-0.12px] w-full">Kan jeg ha sex før jeg fyller 16 år?</p>
        </div>
      </div>
      <QuestionText />
    </div>
  );
}

function QuestionCard() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question card">
      <div className="content-stretch flex flex-col items-start pr-[24px] relative w-full">
        <Frame5 />
      </div>
    </div>
  );
}

function Group() {
  return (
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
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative text-[#0f0f0f] text-left">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] tracking-[-0.064px] w-full">Helsesykepleier</p>
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] tracking-[-0.056px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        I dag
      </p>
    </div>
  );
}

function Circle() {
  return (
    <div className="h-[62.478px] relative shrink-0 w-[61.516px]" data-name="Circle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.5164 62.4776">
        <g id="Circle">
          <rect fill="var(--fill-0, #0F0F0F)" fillOpacity="0.8" height="62.4776" rx="30.7582" width="61.5164" />
          <path d={svgPaths.p12328280} fill="var(--fill-0, white)" id="Polygon 1" />
        </g>
      </svg>
    </div>
  );
}

function PlayButton() {
  return (
    <div className="flex-[1_0_0] mb-[-9611.94px] min-h-px min-w-px relative w-full" data-name="Play button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8.651px] relative size-full">
          <Circle />
        </div>
      </div>
    </div>
  );
}

function Video() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center mb-[-41.331px] min-h-px min-w-px pb-[9611.94px] relative w-full" data-name="Video">
      <div className="flex-[1_0_0] mb-[-9611.94px] min-h-px min-w-px relative w-full" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <PlayButton />
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] h-[12.496px] min-h-px min-w-px relative" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex isolate items-center pl-[19.224px] pr-[31.348px] relative size-full">
          <div className="h-[12.496px] mr-[-12.124px] relative shrink-0 w-[12.124px] z-[2]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1236 12.4955">
              <ellipse cx="6.06182" cy="6.24776" fill="var(--fill-0, white)" id="Ellipse 1" rx="6.06182" ry="6.24776" />
            </svg>
          </div>
          <div className="bg-[#7e7c7c] flex-[1_0_0] h-[4.806px] min-h-px min-w-px mr-[-12.124px] rounded-[95.158px] z-[1]" />
        </div>
      </div>
    </div>
  );
}

function Controls() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Controls">
      <div className="h-[25.952px] relative shrink-0 w-[118.227px]" data-name="screencapture-qa-ung-no-2024-08-26-08_22_33 3 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-41.46%] max-w-none top-0 w-[282.11%]" src={imgScreencaptureQaUngNo2024082608223332} />
        </div>
      </div>
      <div className="h-[25.952px] relative shrink-0 w-[59.594px]" data-name="screencapture-qa-ung-no-2024-08-26-08_22_33 3 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-346.77%] max-w-none top-0 w-[559.68%]" src={imgScreencaptureQaUngNo2024082608223332} />
        </div>
      </div>
      <div className="relative shrink-0 size-[25.952px]" data-name="screencapture-qa-ung-no-2024-08-26-08_22_33 3 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-1177.78%] max-w-none top-0 w-[1285.19%]" src={imgScreencaptureQaUngNo2024082608223332} />
        </div>
      </div>
    </div>
  );
}

function Bar() {
  return (
    <div className="bg-[#0f0f0f] mb-[-41.331px] relative shrink-0 w-full" data-name="Bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[7.69px] relative w-full">
          <div className="flex items-center justify-center relative shrink-0 size-[18.263px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "18" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="relative size-[18.263px]">
                <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.816 13.697">
                    <path d={svgPaths.p1c9fcf70} fill="var(--fill-0, white)" id="Polygon 2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Frame2 />
          <Controls />
        </div>
      </div>
    </div>
  );
}

function VideoMediaflow() {
  return (
    <div className="aspect-[416/739.9999389648438] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px overflow-clip pb-[41.331px] relative rounded-[16px]" data-name="Video Mediaflow">
      <Video />
      <Bar />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] relative w-full">
          <VideoMediaflow />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="bg-[#f5f3f0] flex-[1_0_0] min-h-px min-w-px relative rounded-br-[12px] rounded-tr-[12px] self-stretch" data-name="Heading">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[20px] pt-[16px] px-[16px] relative size-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
            <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Sex og aldersgrenser - hva er lov?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="bg-[#f5f3f0] flex-[1_0_0] min-h-px min-w-px relative rounded-br-[12px] rounded-tr-[12px] self-stretch" data-name="Heading">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[20px] pt-[16px] px-[16px] relative size-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
            <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Hva er samtykke til sex?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex h-[92px] items-start min-h-[92px] relative rounded-[12px] shrink-0 w-full" data-name="Article card">
        <div className="relative rounded-bl-[12px] rounded-tl-[12px] self-stretch shrink-0 w-[80px]" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[12px] rounded-tl-[12px] size-full" src={imgImage} />
        </div>
        <Heading />
      </div>
      <div className="content-stretch flex h-[92px] items-start min-h-[92px] relative rounded-[12px] shrink-0 w-full" data-name="Article card">
        <div className="relative rounded-bl-[12px] rounded-tl-[12px] self-stretch shrink-0 w-[80px]" data-name="Image">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-bl-[12px] rounded-tl-[12px]">
            <img alt="" className="absolute max-w-none object-cover rounded-bl-[12px] rounded-tl-[12px] size-full" src={imgImage} />
            <img alt="" className="absolute max-w-none object-cover rounded-bl-[12px] rounded-tl-[12px] size-full" src={imgImage2} />
          </div>
        </div>
        <Heading1 />
      </div>
    </div>
  );
}

function RelatedContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Related content">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[16px] px-[16px] relative w-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[235px]" data-name="Heading">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] w-full">Jeg har valg ut dette for deg</p>
        </div>
        <Content1 />
      </div>
    </div>
  );
}

function ButtonBase2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Ja</p>
      </div>
    </div>
  );
}

function ButtonBase3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Nei</p>
      </div>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Buttons">
      <div className="content-stretch flex items-start min-h-[44px] relative shrink-0" data-name="Button">
        <ButtonBase2 />
      </div>
      <div className="content-stretch flex items-start min-h-[44px] relative shrink-0" data-name="Button">
        <ButtonBase3 />
      </div>
    </div>
  );
}

function AnswerContent() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start py-[16px] relative rounded-bl-[24px] rounded-br-[24px] rounded-tl-[24px] shrink-0 w-full" data-name="Answer content">
      <button className="cursor-pointer relative shrink-0 w-full" data-name="Component 1">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center pb-[8px] px-[16px] relative w-full">
            <Group />
            <Frame6 />
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Arrows/Chevron-down">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="chevron-down 1">
                  <path clipRule="evenodd" d={svgPaths.p11bb02f2} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Vector (Stroke)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </button>
      <div className="relative shrink-0 w-full" data-name="Body">
        <div className="content-stretch flex items-start px-[16px] relative w-full">
          <div className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-[20px]">Hei!</p>
            <p>Så fint at du skriver til oss om dette! Det er viktig å sette seg inn i hva den seksuelle lavalderen er og hva den innebærer før man bestemmer seg for å ha sex.</p>
          </div>
        </div>
      </div>
      <Frame8 />
      <div className="relative shrink-0 w-full" data-name="Body">
        <div className="content-stretch flex items-start px-[16px] relative w-full">
          <div className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-[20px]">Du har rett i at den seksuelle lavalderen i Norge er 16 år. Denne loven skal først og fremst beskytte barn og unge mot seksuelle overgrep fra voksne. I prinsippet betyr det at dersom en person over 16 år har sex med en person under 16 år, kan han/hun straffes for det.</p>
            <p className="mb-[20px]">Det er likevel sånn at det finnes en tilleggsregel som sier at straffen kan falle bort dersom de som har sex er ca like i alder og utvikling. Politiet må også få kjennskap til forholdet dersom en straff skal vurderes. Det må altså forekomme en anmeldelse. Det er dermed ikke sånn at det nødvendigvis blir sett på som et lovbrudd dersom et par som er 15 og 16 år har frivillig sex.</p>
            <p className="mb-[20px]">Jeg legger ved et par artikler om seksuell lavalder som jeg håper du vil lese.</p>
            <p>Ønsker deg alt godt!</p>
          </div>
        </div>
      </div>
      <RelatedContent />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[12px] shrink-0 w-[319px]" data-name="Page survey">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Fikk du svar på det du lurte på?</p>
        </div>
        <Buttons1 />
      </div>
    </div>
  );
}

function AnswerCard() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[24px] relative rounded-[16px] shrink-0 w-[351px]" data-name="Answer card">
      <AnswerContent />
    </div>
  );
}

function QuestionAndAnswer() {
  return (
    <div className="relative rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full z-[4]" data-name="Question and answer">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[32px] pt-[20px] px-[12px] relative w-full">
        <QuestionCard />
        <AnswerCard />
      </div>
    </div>
  );
}

function Question() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Får ikke penis inn i skjeden, hva gjør vi?</p>
    </div>
  );
}

function Tags() {
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

function QuestionCard1() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Question />
        <Tags />
      </div>
    </div>
  );
}

function Question1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Er det mulig å bli befruktet når man har ubeskyttet sex etter eggløsning?</p>
    </div>
  );
}

function Tags1() {
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

function QuestionCard2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-[289px]" data-name="Question card">
      <Question1 />
      <Tags1 />
    </div>
  );
}

function Question2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Har jeg gjort noe galt når jeg sendte nudes?</p>
    </div>
  );
}

function Tags2() {
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

function QuestionCard3() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Question2 />
        <Tags2 />
      </div>
    </div>
  );
}

function Question3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Hvordan kan jeg starte med sex? Både jeg og kjæresten vil!</p>
    </div>
  );
}

function Tags3() {
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

function QuestionCard4() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Question3 />
        <Tags3 />
      </div>
    </div>
  );
}

function Question4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Hvorfor har jeg så vondt under samleie?</p>
    </div>
  );
}

function Tags4() {
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

function QuestionCard5() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Question4 />
        <Tags4 />
      </div>
    </div>
  );
}

function Question5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Kjæresten driver og vil ha sex med meg, hva gjør jeg?</p>
    </div>
  );
}

function Tags5() {
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

function QuestionCard6() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] self-stretch shrink-0 w-[289px]" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative size-full">
        <Question5 />
        <Tags5 />
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <QuestionCard1 />
      <QuestionCard2 />
      <QuestionCard3 />
      <QuestionCard4 />
      <QuestionCard5 />
      <QuestionCard6 />
      <div className="shrink-0 size-0" data-name="Spacing" />
    </div>
  );
}

function Frame3() {
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

function CarouselMobile() {
  return (
    <div className="bg-[#deefe7] content-stretch flex flex-col gap-[20px] items-start pl-[12px] py-[40px] relative shrink-0 w-[375px] z-[3]" data-name="Carousel Mobile">
      <div className="relative shrink-0 w-full" data-name="Heading">
        <div className="content-stretch flex flex-col items-start pr-[12px] relative w-full">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#0f0f0f] text-[24px] tracking-[-0.096px] w-full">Spørsmål og svar som ligner</p>
        </div>
      </div>
      <Content2 />
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

function Group1() {
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
      <Group1 />
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
        <Label />
      </div>
      <BaseTextArea />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#0f0f0f] text-[24px] tracking-[-0.096px] w-full">Lurer du på noe mer?</p>
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
          Fikk du ikke helt svar på det du lurte på? Eller har du nye spørsmål? Spør oss, da vel!
        </p>
      </div>
      <TextArea />
    </div>
  );
}

function ButtonBase4() {
  return (
    <div className="bg-[#2b5944] content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Spør</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <Paragraph />
      <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
        <ButtonBase4 />
      </div>
    </div>
  );
}

function AskQuestionBanner() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[40px] relative shrink-0 w-[375px] z-[2]" data-name="Ask question banner">
      <Content3 />
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

function Links1() {
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
      <Links1 />
    </div>
  );
}

function Links2() {
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
      <Links2 />
    </div>
  );
}

function Links3() {
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

function ButtonBase5() {
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
        <ButtonBase5 />
      </div>
    </div>
  );
}

export default function OssSvarside() {
  return (
    <div className="bg-[#acd7c3] content-stretch flex flex-col isolate items-center relative size-full" data-name="OSS Svarside">
      <div className="content-stretch flex flex-col items-start shrink-0 sticky top-0 w-[375px] z-[7]" data-name="Header">
        <Browser />
      </div>
      <Menu />
      <div className="relative shrink-0 w-full z-[5]" data-name="Page header">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] relative w-full">
            <Content />
          </div>
        </div>
      </div>
      <QuestionAndAnswer />
      <CarouselMobile />
      <AskQuestionBanner />
      <div className="bg-[#2b5944] content-stretch flex flex-col items-start pb-[24px] pt-[40px] px-[20px] relative rounded-tl-[36px] rounded-tr-[36px] shrink-0 w-[375px] z-[1]" data-name="Footer">
        <Logo />
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