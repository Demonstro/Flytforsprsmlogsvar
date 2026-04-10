import svgPaths from "./svg-9a2j5szz9x";
import imgFrame3857 from "figma:asset/7c31f9877102d8a0e324fd0916815a59a5f7cdda.png";
import imgFrame3858 from "figma:asset/04514592b3563280fbfc4a497a5ff71ee3e69e74.png";
import imgFrame3859 from "figma:asset/d338ae8f0c0c14f3b5465a9cec2e6fd169191012.png";
import imgFrame3860 from "figma:asset/956a705c56285f348fd3106a58fe3c0fbd2aa9a9.png";
import imgFrame3861 from "figma:asset/76d5b0b60fe89c3cf83e5ca65c56dca72d9e829e.png";
import imgFrame3862 from "figma:asset/cb44f70d6f0098db5ff62a490a1d7b33f0b46022.png";
import imgFrame3863 from "figma:asset/0486c8b4b11093a86fa8d0883cb25a2a93f92d86.png";
import imgFrame3864 from "figma:asset/d4c442ea27fd8056a0ab2b29aeefd8a593383871.png";
import imgFrame3865 from "figma:asset/765fe870e154b72e08fedd82ff17c5f4e60e8bde.png";
import imgFrame3866 from "figma:asset/c171415e85e0f3821e6878ad7140dc29fd771a53.png";
import imgFrame3867 from "figma:asset/08f9babd7cb41419fa08798046a020cf36716c2a.png";
import imgFrame3868 from "figma:asset/0d38ce98b91ea0024cd5942ff610be912265fb91.png";
import imgFrame3869 from "figma:asset/7bbc2f28cb3ff3ec689acc456b65185b341231d9.png";
import imgFrame3870 from "figma:asset/51bbcb5f2e7f2c9cdfa8a396f45a98d08c0c14dd.png";
import imgFrame3871 from "figma:asset/a5cb5956cfb91b509727f72778a785783b53515e.png";
import imgFrame3872 from "figma:asset/872515fe42b8a1fa971b05304057602cae23193d.png";
import imgFrame3873 from "figma:asset/ef698f9836d89cb2440cd2d74f1e8e05f896ec9e.png";

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
      <p className="font-['Helvetica:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#262626] text-[18px] whitespace-nowrap">ung.no/tema</p>
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
    <div className="bg-[#f5f3f0] content-stretch flex items-start justify-between p-[12px] relative shrink-0 w-[375px] z-[11]" data-name="Menu">
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
        <p className="font-['Borna:SemiBold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#0f0f0f] text-[30px] tracking-[-0.12px] w-full">Alle tema</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[600px] relative shrink-0 w-full">
      <Title />
    </div>
  );
}

function TopBannerAndSearch() {
  return (
    <div className="relative shrink-0 w-full z-[10]" data-name="Top banner and search">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[12px] py-[24px] relative w-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Kropp, helse og sex</p>
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
        <p className="leading-[20px]">Følelser, identitet og forelskelse</p>
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
        <p className="leading-[20px]">Skole, utdanning og jobb</p>
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
        <p className="leading-[20px]">Samfunn, lover og rettigheter</p>
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
      <div className="flex flex-col font-['Borna:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] whitespace-nowrap">
        <p className="leading-[24px]">Familie, venner og fritid</p>
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

function ThemesMobile() {
  return (
    <div className="relative shrink-0 w-full z-[9]" data-name="Themes Mobile">
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[12px] relative w-full">
        <SubCategories />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[180px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3857} />
    </div>
  );
}

function Question() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative w-full">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Sex</p>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Alt om sex, prevensjon, kjønnssykdommer og graviditet.
          </p>
        </div>
      </div>
    </div>
  );
}

function QuestionCard() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[20px] relative rounded-[12px] shrink-0 w-[265px]" data-name="Question card">
      <Frame4 />
      <Question />
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[180px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3858} />
    </div>
  );
}

function Question1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative w-full">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Kropp</p>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Spørsmål om kuk og fitte, mensen, pubertet, tannhelse og alt mulig annet kroppslig.
          </p>
        </div>
      </div>
    </div>
  );
}

function QuestionCard1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[20px] relative rounded-[12px] shrink-0 w-[265px]" data-name="Question card">
      <Frame5 />
      <Question1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[180px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3859} />
    </div>
  );
}

function Question2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative w-full">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Rusmidler</p>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Fylla, dop, snus og røyk og andre ting som gir rus.
          </p>
        </div>
      </div>
    </div>
  );
}

function QuestionCard2() {
  return (
    <div className="bg-white relative rounded-[12px] self-stretch shrink-0 w-[265px]" data-name="Question card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] relative size-full">
          <Frame6 />
          <Question2 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[180px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3860} />
    </div>
  );
}

function Question3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative w-full">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Helsa di</p>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Trening, kosthold, søvn, sykdom og andre ting som har med helsa di å gjøre.
          </p>
        </div>
      </div>
    </div>
  );
}

function QuestionCard3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[20px] relative rounded-[12px] shrink-0 w-[265px]" data-name="Question card">
      <Frame7 />
      <Question3 />
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

function CarouselMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start pl-[12px] py-[20px] relative shrink-0 w-[375px] z-[8]" data-name="Carousel Mobile">
      <div className="relative shrink-0 w-full" data-name="Heading">
        <div className="content-stretch flex flex-col items-start pr-[12px] relative w-full">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#0f0f0f] text-[24px] tracking-[-0.096px] w-full">Kropp, helse og sex</p>
        </div>
      </div>
      <Content />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[180px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3861} />
    </div>
  );
}

function Question4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative w-full">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Psykisk helse og følelser</p>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Spørsmål om mental helse, psykiske vansker, mobbing og ting som foregår i hodet.
          </p>
        </div>
      </div>
    </div>
  );
}

function QuestionCard4() {
  return (
    <div className="bg-white relative rounded-[12px] self-stretch shrink-0 w-[265px]" data-name="Question card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] relative size-full">
          <Frame8 />
          <Question4 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[180px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3862} />
    </div>
  );
}

function Question5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative w-full">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Selvtillit og identitet</p>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Hvem er du? Spørsmål om å være homo, krysskulturell, i feil kropp eller bare litt annerledes.
          </p>
        </div>
      </div>
    </div>
  );
}

function QuestionCard5() {
  return (
    <div className="bg-white relative rounded-[12px] self-stretch shrink-0 w-[265px]" data-name="Question card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] relative size-full">
          <Frame9 />
          <Question5 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[180px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3863} />
    </div>
  );
}

function Question6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative w-full">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Forelskelse</p>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Alt du lurer på om den første forelskelsen, sjalusi, kjærlighet og det å være i et forhold.
          </p>
        </div>
      </div>
    </div>
  );
}

function QuestionCard6() {
  return (
    <div className="bg-white relative rounded-[12px] self-stretch shrink-0 w-[265px]" data-name="Question card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] relative size-full">
          <Frame10 />
          <Question6 />
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <QuestionCard4 />
      <QuestionCard5 />
      <QuestionCard6 />
      <div className="shrink-0 size-0" data-name="Spacing" />
    </div>
  );
}

function CarouselMobile1() {
  return (
    <div className="bg-[#cfe8dc] content-stretch flex flex-col gap-[20px] items-start pl-[12px] py-[20px] relative shrink-0 w-[375px] z-[7]" data-name="Carousel Mobile">
      <div className="relative shrink-0 w-full" data-name="Heading">
        <div className="content-stretch flex flex-col items-start pr-[12px] relative w-full">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#0f0f0f] text-[24px] tracking-[-0.096px] w-full">Følelser, identitet og forelskelse</p>
        </div>
      </div>
      <Content1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[180px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3864} />
    </div>
  );
}

function Question7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative w-full">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Utdanning</p>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Skolevalg og veien videre, stipend og alt som har med utdanningen din å gjøre.
          </p>
        </div>
      </div>
    </div>
  );
}

function QuestionCard7() {
  return (
    <div className="bg-white relative rounded-[12px] self-stretch shrink-0 w-[265px]" data-name="Question card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] relative size-full">
          <Frame11 />
          <Question7 />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[180px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3865} />
    </div>
  );
}

function Question8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative w-full">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Skolehverdag</p>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Hjelp til lekser, eksamen og alt annet i skolehverdagen din.
          </p>
        </div>
      </div>
    </div>
  );
}

function QuestionCard8() {
  return (
    <div className="bg-white relative rounded-[12px] self-stretch shrink-0 w-[265px]" data-name="Question card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] relative size-full">
          <Frame12 />
          <Question8 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[180px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3866} />
    </div>
  );
}

function Question9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative w-full">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Jobb</p>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Spørsmål om å finne seg  jobb, lønn, rettigheter og karrieren videre.`}</p>
        </div>
      </div>
    </div>
  );
}

function QuestionCard9() {
  return (
    <div className="bg-white relative rounded-[12px] self-stretch shrink-0 w-[265px]" data-name="Question card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] relative size-full">
          <Frame13 />
          <Question9 />
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <QuestionCard7 />
      <QuestionCard8 />
      <QuestionCard9 />
      <div className="shrink-0 size-0" data-name="Spacing" />
    </div>
  );
}

function CarouselMobile2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start pl-[12px] py-[20px] relative shrink-0 w-[375px] z-[6]" data-name="Carousel Mobile">
      <div className="relative shrink-0 w-full" data-name="Heading">
        <div className="content-stretch flex flex-col items-start pr-[12px] relative w-full">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#0f0f0f] text-[24px] tracking-[-0.096px] w-full">Skole, utdanning og jobb</p>
        </div>
      </div>
      <Content2 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[180px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3867} />
    </div>
  );
}

function Question10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative w-full">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Kriminalitet</p>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Spørsmål om overgrep, vold og andre kriminelle handlinger.
          </p>
        </div>
      </div>
    </div>
  );
}

function QuestionCard10() {
  return (
    <div className="bg-white relative rounded-[12px] self-stretch shrink-0 w-[265px]" data-name="Question card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] relative size-full">
          <Frame14 />
          <Question10 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="h-[180px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3868} />
    </div>
  );
}

function Question11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative w-full">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Demokrati og valg</p>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Alt om politikk, det å være førstegangsvelger og samfunnet vårt.
          </p>
        </div>
      </div>
    </div>
  );
}

function QuestionCard11() {
  return (
    <div className="bg-white relative rounded-[12px] self-stretch shrink-0 w-[265px]" data-name="Question card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] relative size-full">
          <Frame15 />
          <Question11 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="h-[180px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3869} />
    </div>
  );
}

function Question12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative w-full">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Klima og miljø</p>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Miljøvern, bærekraft og hvordan bidra til en bedre fremtid.
          </p>
        </div>
      </div>
    </div>
  );
}

function QuestionCard12() {
  return (
    <div className="bg-white relative rounded-[12px] self-stretch shrink-0 w-[265px]" data-name="Question card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] relative size-full">
          <Frame16 />
          <Question12 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="h-[180px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3870} />
    </div>
  );
}

function Question13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative w-full">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Lov og rett</p>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Hva du har lov til og ikke, konfliktløsing, likestilling og rettighetene dine.
          </p>
        </div>
      </div>
    </div>
  );
}

function QuestionCard13() {
  return (
    <div className="bg-white relative rounded-[12px] self-stretch shrink-0 w-[265px]" data-name="Question card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] relative size-full">
          <Frame17 />
          <Question13 />
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <QuestionCard10 />
      <QuestionCard11 />
      <QuestionCard12 />
      <QuestionCard13 />
      <div className="shrink-0 size-0" data-name="Spacing" />
    </div>
  );
}

function CarouselMobile3() {
  return (
    <div className="bg-[#ecdfda] content-stretch flex flex-col gap-[20px] items-start pl-[12px] py-[20px] relative shrink-0 w-[375px] z-[5]" data-name="Carousel Mobile">
      <div className="relative shrink-0 w-full" data-name="Heading">
        <div className="content-stretch flex flex-col items-start pr-[12px] relative w-full">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#0f0f0f] text-[24px] tracking-[-0.096px] w-full">Samfunn, lover og rettigheter</p>
        </div>
      </div>
      <Content3 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-[180px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3871} />
    </div>
  );
}

function Question14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative w-full">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Familie</p>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Søsken, foreldre, oppdragelse, skilsmisse, krangling og alt som hører familielivet til.
          </p>
        </div>
      </div>
    </div>
  );
}

function QuestionCard14() {
  return (
    <div className="bg-white relative rounded-[12px] self-stretch shrink-0 w-[265px]" data-name="Question card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] relative size-full">
          <Frame18 />
          <Question14 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="h-[180px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3872} />
    </div>
  );
}

function Question15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative w-full">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Fritid</p>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Aktiviteter, hobbyer, interesser og hvordan du tilbringer tiden din.
          </p>
        </div>
      </div>
    </div>
  );
}

function QuestionCard15() {
  return (
    <div className="bg-white relative rounded-[12px] self-stretch shrink-0 w-[265px]" data-name="Question card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] relative size-full">
          <Frame19 />
          <Question15 />
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="h-[180px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame3873} />
    </div>
  );
}

function Question16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative w-full">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Økonomien din</p>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Alt om å tjene penger, spare dem, bruke dem, skatte av dem eller å ikke ha dem.
          </p>
        </div>
      </div>
    </div>
  );
}

function QuestionCard16() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[20px] relative rounded-[12px] shrink-0 w-[265px]" data-name="Question card">
      <Frame20 />
      <Question16 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <QuestionCard14 />
      <QuestionCard15 />
      <QuestionCard16 />
      <div className="shrink-0 size-0" data-name="Spacing" />
    </div>
  );
}

function CarouselMobile4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start pl-[12px] py-[20px] relative shrink-0 w-[375px] z-[4]" data-name="Carousel Mobile">
      <div className="relative shrink-0 w-full" data-name="Heading">
        <div className="content-stretch flex flex-col items-start pr-[12px] relative w-full">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#0f0f0f] text-[24px] tracking-[-0.096px] w-full">Familie, venner og fritid</p>
        </div>
      </div>
      <Content4 />
    </div>
  );
}

function PlaceholderText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Placeholder text">
      <div className="flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#676767] text-[16px] text-justify tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Søk i spørsmål og svar</p>
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

function ButtonBase3() {
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
        <ButtonBase3 />
      </div>
    </div>
  );
}

function SearchAndFilter() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-[24px] px-[12px] relative shrink-0 w-[375px] z-[3]" data-name="Search and filter">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#0f0f0f] text-[24px] tracking-[-0.096px] w-full">Siste spørsmål</p>
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

function ButtonBase4() {
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

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[44px] py-[8px] relative rounded-[50px] shrink-0" data-name="Frame">
      <ButtonBase4 />
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
    <div className="content-stretch flex flex-col items-start pb-[40px] px-[12px] relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-[375px] z-[2]" data-name="Question list">
      <Questions />
      <div className="content-stretch flex flex-col items-center min-h-[44px] relative shrink-0" data-name="Button">
        <Frame2 />
      </div>
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

function QALandingPageMobile() {
  return (
    <div className="bg-[#f5f3f0] content-stretch flex flex-col isolate items-center relative shrink-0 w-[375px]" data-name="Q&A Landing page/Mobile">
      <div className="content-stretch flex flex-col items-start shrink-0 sticky top-0 w-[375px] z-[12]" data-name="Header">
        <Browser />
      </div>
      <Menu />
      <TopBannerAndSearch />
      <ThemesMobile />
      <CarouselMobile />
      <CarouselMobile1 />
      <CarouselMobile2 />
      <CarouselMobile3 />
      <CarouselMobile4 />
      <SearchAndFilter />
      <QuestionList />
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

export default function OssTemaForside() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="OSS Tema Forside">
      <QALandingPageMobile />
    </div>
  );
}