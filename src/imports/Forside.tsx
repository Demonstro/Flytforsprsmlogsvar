import svgPaths from "./svg-cwur148zul";
import imgImage from "figma:asset/4f7a77b8e0d871d996c773ac17f9a466fc45d89d.png";
import imgImage1 from "figma:asset/1a1e37421ffeab460d5d4003a0352a3bbd57553c.png";
import imgImage2 from "figma:asset/9837d3300b97504f19a26a383eebe0528508f098.png";
import imgImage3 from "figma:asset/c6064b46eab5ed17df942e53aa268db8119bea96.png";
import imgImage4 from "figma:asset/7062ad4d42c57a3fe8c3d9b90d8227372f696375.png";
import imgFrame3856 from "figma:asset/9ace3e9c006411cfde0d1fb6f41373bcaf19bec2.png";
import imgImage5 from "figma:asset/953693dc477a922a8ff5aa6bab4c92a00e8225e0.png";
import imgImage6 from "figma:asset/807faab893df9f5510f7affedcaa2d3419aff2fd.png";
import imgImage7 from "figma:asset/30d83d025067f097328eb2868558a2722822e701.png";

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
    <div className="bg-[#f5f3f0] content-stretch flex items-start justify-between p-[12px] relative shrink-0 w-[375px] z-[7]" data-name="Menu">
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

function Sticker() {
  return (
    <div className="absolute inset-[10%_2.5%_8.75%_2.5%]" data-name="Sticker">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.6 39">
        <g id="Sticker">
          <path d={svgPaths.p7622e80} fill="var(--fill-0, white)" id="Back" />
          <g id="Illustration">
            <path d={svgPaths.p32fcc200} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p1f56c380} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p265f5f80} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p4c29000} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p37896300} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p138f3480} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p1179500} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p2e86f80} fill="var(--fill-0, #0F0F0F)" />
            <path clipRule="evenodd" d={svgPaths.p26520d80} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[44px] min-w-px relative rounded-[8px]" data-name="Card">
      <div className="flex flex-col items-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center min-h-[inherit] p-[8px] relative w-full">
          <div className="relative shrink-0 size-[48px]" data-name="Illustrations with background">
            <div className="-translate-x-1/2 absolute aspect-[502.934326171875/633.8216552734375] bottom-[5%] left-[calc(50%-0.5px)] top-[3.75%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.7551 43.8">
                <path clipRule="evenodd" d={svgPaths.p3e368180} fill="var(--fill-0, #ABAEFF)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
            <Sticker />
          </div>
          <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#0f0f0f] text-[14px] text-center tracking-[-0.056px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">Familie, venner og fritid</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sticker1() {
  return (
    <div className="absolute inset-[20%_2.5%]" data-name="Sticker">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.6 28.8">
        <g id="Sticker">
          <path d={svgPaths.p24a81600} fill="var(--fill-0, white)" id="Back" />
          <g id="Illustration">
            <path d={svgPaths.p3b23c500} fill="var(--fill-0, #0F0F0F)" />
            <path clipRule="evenodd" d={svgPaths.p320ac2c0} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" />
            <path d={svgPaths.p39fc6d00} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p14b60900} fill="var(--fill-0, #0F0F0F)" />
            <path clipRule="evenodd" d={svgPaths.p30fddd00} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[44px] min-w-px relative rounded-[8px]" data-name="Card">
      <div className="flex flex-col items-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center min-h-[inherit] p-[8px] relative w-full">
          <div className="relative shrink-0 size-[48px]" data-name="Illustrations with background">
            <div className="-translate-x-1/2 absolute aspect-[517.9622802734375/515.9254150390625] bottom-[13.75%] left-[calc(50%-0.5px)] top-[12.5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.5398 35.4">
                <path clipRule="evenodd" d={svgPaths.p1ca55900} fill="var(--fill-0, #EE6E6A)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
            <Sticker1 />
          </div>
          <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#0f0f0f] text-[14px] text-center tracking-[-0.056px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">Følelser, identitet og forelskelse</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sticker2() {
  return (
    <div className="absolute inset-[10%_1.25%_6.25%_2.5%]" data-name="Sticker">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.2 40.2">
        <g id="Sticker">
          <path d={svgPaths.p161dbb80} fill="var(--fill-0, white)" id="Back" />
          <g id="Illustration">
            <path d={svgPaths.p3ba9d3c0} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p24769580} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p303c0780} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p394e5190} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p2ea1d290} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p2d249b00} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p61d2100} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p2549f600} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p4b62400} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p33e823c0} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p14e46d80} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p39309b00} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p2ee61280} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p2eb30e80} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p37f3d580} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.pe10fd00} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p1e397460} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p2b5b8c70} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p378ca100} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p3201c700} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p11514d00} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p23ee6700} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.pfc67800} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p93eb440} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p227ead80} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p10bce580} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p3efc5f80} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.pf865580} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p9c6d0f2} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.pb86e200} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p3fcb780} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p2713a200} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p1afa5600} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p29290700} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p13936c80} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p3b2d4da0} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p2175ce80} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p2f2de880} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.pdf8500} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p17288400} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p2e4b1ff0} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p24a65800} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p3e278c00} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p27fdd600} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p1b732c80} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p9da7b40} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p17c78100} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p27124680} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p19ec8e80} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p16cc3100} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p1b317380} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.pf651580} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p3c985980} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p301aa980} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p7d48580} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p1b97ae70} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.peb86f00} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p32f5b670} fill="var(--fill-0, #0F0F0F)" />
            <path clipRule="evenodd" d={svgPaths.p3afbec70} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[44px] min-w-px relative rounded-[8px]" data-name="Card">
      <div className="flex flex-col items-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center min-h-[inherit] p-[8px] relative w-full">
          <div className="relative shrink-0 size-[48px]" data-name="Illustrations with background">
            <div className="-translate-x-1/2 absolute aspect-[557.7437744140625/558.4830322265625] bottom-[11.25%] left-[calc(50%-0.5px)] top-[10%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.75 37.8">
                <path clipRule="evenodd" d={svgPaths.p127ea200} fill="var(--fill-0, #89C6AA)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
            <Sticker2 />
          </div>
          <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#0f0f0f] text-[14px] text-center tracking-[-0.056px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">Kropp, helse og sex</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sticker3() {
  return (
    <div className="absolute inset-[5%_7.5%_3.75%_5%]" data-name="Sticker">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 43.8">
        <g id="Sticker">
          <path d={svgPaths.p113cc500} fill="var(--fill-0, white)" id="Back" />
          <g id="Illustration">
            <path d={svgPaths.pbe722b0} fill="var(--fill-0, #0F0F0F)" />
            <path clipRule="evenodd" d={svgPaths.p1ac78c80} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2044300} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[44px] min-w-px relative rounded-[8px]" data-name="Card">
      <div className="flex flex-col items-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center min-h-[inherit] p-[8px] relative w-full">
          <div className="relative shrink-0 size-[48px]" data-name="Illustrations with background">
            <div className="-translate-x-1/2 absolute aspect-[517.9622802734375/515.9254150390625] bottom-[13.75%] left-[calc(50%-0.5px)] top-[12.5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.5398 35.4">
                <path clipRule="evenodd" d={svgPaths.p1ca55900} fill="var(--fill-0, #C49A8C)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
            <Sticker3 />
          </div>
          <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#0f0f0f] text-[14px] text-center tracking-[-0.056px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">Samfunn, lover og rettigheter</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sticker4() {
  return (
    <div className="absolute inset-[6.25%_11.25%_1.25%_10%]" data-name="Sticker">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.8 44.4">
        <g id="Sticker">
          <path d={svgPaths.p10d7e600} fill="var(--fill-0, white)" id="Back" />
          <g id="Illustration">
            <path clipRule="evenodd" d={svgPaths.p13c8bef2} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p33cfaf70} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" />
            <path d={svgPaths.p32056800} fill="var(--fill-0, #0F0F0F)" />
            <path clipRule="evenodd" d={svgPaths.p38aa8a00} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[44px] min-w-px relative rounded-[8px]" data-name="Card">
      <div className="flex flex-col items-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center min-h-[inherit] p-[8px] relative w-full">
          <div className="relative shrink-0 size-[48px]" data-name="Illustrations with background">
            <div className="-translate-x-1/2 absolute aspect-[656.7822265625/510.9415588378906] bottom-[13.75%] left-[calc(50%-0.5px)] top-[12.5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.5044 35.4">
                <path clipRule="evenodd" d={svgPaths.ped13480} fill="var(--fill-0, #ACD7C3)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
            <Sticker4 />
          </div>
          <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#0f0f0f] text-[14px] text-center tracking-[-0.056px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">Skole, jobb og framtid</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sticker5() {
  return (
    <div className="-translate-y-1/2 absolute aspect-[49/81] left-[17.5%] right-[22.5%] top-1/2" data-name="Sticker">
      <div className="absolute inset-[0.69%_1.28%_1.17%_1.4%]" data-name="Back">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0281 46.7195">
          <path d={svgPaths.pef64e00} fill="var(--fill-0, white)" id="Back" />
        </svg>
      </div>
      <div className="absolute inset-[3.7%_6.13%_4.98%_8.16%]" data-name="Illustration">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6838 43.4721">
          <g id="Illustration">
            <path clipRule="evenodd" d={svgPaths.p19ad0290} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" />
            <path d={svgPaths.p18d07e00} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p1c429080} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p1ceb4d40} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p1fe92500} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p31396770} fill="var(--fill-0, #0F0F0F)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[44px] min-w-px relative rounded-[8px]" data-name="Card">
      <div className="flex flex-col items-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center min-h-[inherit] p-[8px] relative w-full">
          <div className="relative shrink-0 size-[48px]" data-name="Illustrations with background">
            <div className="absolute flex inset-0 items-center justify-center">
              <div className="-scale-y-100 flex-none size-[80px]">
                <div className="relative size-full" data-name="Blob">
                  <div className="-translate-x-1/2 absolute aspect-[70.23435974121094/68.98245239257812] bottom-[7.5%] left-[calc(50%-0.5px)] top-[6.29%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.1331 41.3821">
                      <path clipRule="evenodd" d={svgPaths.p4cae130} fill="var(--fill-0, #F2A2A0)" fillRule="evenodd" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Sticker5 />
          </div>
          <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#0f0f0f] text-[14px] text-center tracking-[-0.056px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">Vold og overgrep</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SuperCategories() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Super categories">
      <div className="bg-white content-stretch flex flex-[1_0_0] gap-[16px] items-start justify-center min-h-px min-w-[160px] relative rounded-[8px]" data-name="Entrance card">
        <Card />
      </div>
      <div className="bg-white content-stretch flex flex-[1_0_0] gap-[16px] items-start justify-center min-h-px min-w-[160px] relative rounded-[8px]" data-name="Entrance card">
        <Card1 />
      </div>
      <div className="bg-white content-stretch flex flex-[1_0_0] gap-[16px] h-[112px] items-start justify-center min-h-px min-w-[160px] relative rounded-[8px]" data-name="Entrance card">
        <Card2 />
      </div>
      <div className="bg-white content-stretch flex flex-[1_0_0] gap-[16px] items-start justify-center min-h-px min-w-[160px] relative rounded-[8px]" data-name="Entrance card">
        <Card3 />
      </div>
      <div className="bg-white content-stretch flex flex-[1_0_0] gap-[16px] items-start justify-center min-h-px min-w-[160px] relative rounded-[8px]" data-name="Entrance card">
        <Card4 />
      </div>
      <div className="bg-white content-stretch flex flex-[1_0_0] gap-[16px] items-start justify-center min-h-px min-w-[160px] relative rounded-[8px]" data-name="Entrance card">
        <Card5 />
      </div>
    </div>
  );
}

function ButtonBase2() {
  return (
    <div className="bg-[#2b5944] flex-[1_0_0] min-h-[44px] min-w-px relative rounded-[9999px]" data-name="Button base">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] px-[20px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[24px]">Spørsmål og svar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QAButton() {
  return (
    <div className="content-start flex flex-wrap gap-y-[12px] items-start relative shrink-0 w-full" data-name="Q&A button">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Button">
        <ButtonBase2 />
      </div>
    </div>
  );
}

function TopSection() {
  return (
    <div className="relative shrink-0 w-full z-[6]" data-name="Top section">
      <div className="content-stretch flex flex-col gap-[20px] items-start pb-[28px] pt-[12px] px-[12px] relative w-full">
        <SuperCategories />
        <QAButton />
      </div>
    </div>
  );
}

function CategoryTags() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Category tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Kropp
        </p>
      </div>
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Mensen
        </p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[40px] pt-[32px] px-[32px] relative w-full">
        <CategoryTags />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0f0f0f] text-[20px] tracking-[-0.08px] w-full">Har du slitsomme tanker, grubling og tankekjør?</p>
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Da bør du lese denne artikkelen, den handler om nettopp det.
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
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

function Question() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.072px] w-full">Tatt angrepille og er redd for graviditet.</p>
    </div>
  );
}

function Tags() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#f2f9f5] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jente, 16
        </p>
      </div>
    </div>
  );
}

function QuestionCard() {
  return (
    <div className="bg-[#3c7c5e] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative w-full">
        <Frame4 />
        <Question />
        <Tags />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pr-[20px] relative w-full">
        <QuestionCard />
      </div>
    </div>
  );
}

function CategoryTags1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Category tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Kropp
        </p>
      </div>
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Mensen
        </p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[40px] pt-[32px] px-[32px] relative w-full">
        <CategoryTags1 />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0f0f0f] text-[20px] tracking-[-0.08px] w-full">Har du morsomme tanker, grubling og tankekjør?</p>
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Da bør du lese denne artikkelen, den handler om nettopp det.
          </p>
        </div>
      </div>
    </div>
  );
}

function Sticker6() {
  return (
    <div className="absolute inset-[7.5%_18.75%_2.5%_17.5%]" data-name="Sticker">
      <div className="absolute inset-[0_0_0_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.8477 57.6">
          <g id="Sticker">
            <path d={svgPaths.p350ed7a0} fill="var(--fill-0, white)" id="Back" />
            <g id="Illustration">
              <path clipRule="evenodd" d={svgPaths.p2a49ce00} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3ae36d00} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Text">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Spørsmål og svar</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <Text />
      <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Icons/Arrows/Arrow-right">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <g id="arrow-right">
            <path clipRule="evenodd" d={svgPaths.p2ecd6cb0} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-[#89c6aa] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Card">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative w-full">
          <div className="relative shrink-0 size-[64px]" data-name="Illustrations with background">
            <div className="-translate-x-1/2 absolute aspect-[502.934326171875/633.8216552734375] bottom-[5%] left-[calc(50%-0.4px)] top-[3.75%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.3401 58.4">
                <path clipRule="evenodd" d={svgPaths.pc6f780} fill="var(--fill-0, #ACD7C3)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
            <Sticker6 />
          </div>
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Sticker7() {
  return (
    <div className="absolute inset-[32.5%_10%_27.5%_10%]" data-name="Sticker">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.2 25.6243">
        <g id="Sticker">
          <path d={svgPaths.p14cc2ac0} fill="var(--fill-0, white)" id="Back" />
          <g id="Illustration">
            <path d={svgPaths.p2cd63300} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p16f9db00} fill="var(--fill-0, #0F0F0F)" />
            <path clipRule="evenodd" d={svgPaths.p33e86980} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" />
            <path d={svgPaths.p3d48f800} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p35aee600} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p14b01a00} fill="var(--fill-0, #0F0F0F)" />
            <path clipRule="evenodd" d={svgPaths.pd6ce100} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Text">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Snakk med noen</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <Text1 />
      <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Icons/Arrows/Arrow-right">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <g id="arrow-right">
            <path clipRule="evenodd" d={svgPaths.p2ecd6cb0} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-[#abaeff] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Card">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative w-full">
          <div className="relative shrink-0 size-[64px]" data-name="Illustrations with background">
            <div className="-translate-x-1/2 absolute aspect-[656.7822265625/510.9415588378906] bottom-[13.75%] left-[calc(50%-0.4px)] top-[12.5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60.6725 47.2">
                <path clipRule="evenodd" d={svgPaths.p5241d80} fill="var(--fill-0, #7479FF)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
            <Sticker7 />
          </div>
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Sticker8() {
  return (
    <div className="absolute inset-[10%_18.75%_5%_18.75%]" data-name="Sticker">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 54.4">
        <g id="Sticker">
          <path d={svgPaths.p3cfa9000} fill="var(--fill-0, white)" id="Back" />
          <g id="Illustration">
            <path clipRule="evenodd" d={svgPaths.p36b28700} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pd7d6900} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Text">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Hjelp nær deg</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <Text2 />
      <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Icons/Arrows/Arrow-right">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <g id="arrow-right">
            <path clipRule="evenodd" d={svgPaths.p2ecd6cb0} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Card8() {
  return (
    <div className="bg-[#d2b2a7] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Card">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative w-full">
          <div className="relative shrink-0 size-[64px]" data-name="Illustrations with background">
            <div className="-translate-x-1/2 absolute aspect-[70.23435974121094/68.98245239257812] bottom-[7.5%] left-[calc(50%-0.4px)] top-[6.29%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.1775 55.1761">
                <path clipRule="evenodd" d={svgPaths.pad23c80} fill="var(--fill-0, #AF7664)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
            <Sticker8 />
          </div>
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function Sticker9() {
  return (
    <div className="absolute inset-[11.25%_17.5%_6.25%_22.5%]" data-name="Sticker">
      <div className="absolute inset-[0_0_0_-0.29%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.5129 52.8513">
          <g id="Sticker">
            <path d={svgPaths.p63f0f0} fill="var(--fill-0, white)" id="Back" />
            <g id="Illustration">
              <path clipRule="evenodd" d={svgPaths.p1e9c3d00} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p9343f00} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Text">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Selvhjelpsverktøy</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <Text3 />
      <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Icons/Arrows/Arrow-right">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <g id="arrow-right">
            <path clipRule="evenodd" d={svgPaths.p2ecd6cb0} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Card9() {
  return (
    <div className="bg-[#cfe8dc] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Card">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative w-full">
          <div className="relative shrink-0 size-[64px]" data-name="Illustrations with background">
            <div className="-translate-x-1/2 absolute aspect-[610.59521484375/577.9630737304688] bottom-[10%] left-[calc(50%-0.4px)] top-[8.75%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.936 52">
                <path clipRule="evenodd" d={svgPaths.p3ddba0f0} fill="var(--fill-0, #54AF84)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
            <Sticker9 />
          </div>
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Services">
      <div className="content-stretch flex gap-[16px] items-center relative rounded-[12px] shrink-0 w-full" data-name="Entrance card">
        <Card6 />
      </div>
      <div className="content-stretch flex gap-[16px] items-center relative rounded-[12px] shrink-0 w-full" data-name="Entrance card">
        <Card7 />
      </div>
      <div className="content-stretch flex gap-[16px] items-center relative rounded-[12px] shrink-0 w-full" data-name="Entrance card">
        <Card8 />
      </div>
      <div className="content-stretch flex gap-[16px] items-center relative rounded-[12px] shrink-0 w-full" data-name="Entrance card">
        <Card9 />
      </div>
    </div>
  );
}

function CategoryTags2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Category tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Kropp
        </p>
      </div>
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Mensen
        </p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[40px] pt-[32px] px-[32px] relative w-full">
        <CategoryTags2 />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0f0f0f] text-[20px] tracking-[-0.08px] w-full">Har du interessante tanker, grubling og tankekjør?</p>
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Da bør du lese denne artikkelen, den handler om nettopp det.
          </p>
        </div>
      </div>
    </div>
  );
}

function CategoryTags3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Category tags">
      <div className="bg-white content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Kropp
        </p>
      </div>
      <div className="bg-white content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Mensen
        </p>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="bg-[#cfe8dc] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[40px] pt-[32px] px-[32px] relative w-full">
        <CategoryTags3 />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0f0f0f] text-[20px] tracking-[-0.08px] w-full">Har du morsomme tanker, grubling og tankekjør?</p>
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Da bør du lese denne artikkelen, den handler om nettopp det.
          </p>
        </div>
      </div>
    </div>
  );
}

function CategoryTags4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Category tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Kropp
        </p>
      </div>
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Mensen
        </p>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[40px] pt-[32px] px-[32px] relative w-full">
        <CategoryTags4 />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0f0f0f] text-[20px] tracking-[-0.08px] w-full">Har du store tanker, grubling og tankekjør?</p>
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Da bør du lese denne artikkelen, den handler om nettopp det.
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
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
        </div>
      </div>
    </div>
  );
}

function QuestionCard1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[20px] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Question card">
      <Frame3 />
      <Question1 />
      <Tags1 />
    </div>
  );
}

function Question2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Hvorfor kommer jeg aldri når jeg har orgasmer?</p>
    </div>
  );
}

function Tags2() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#acd7c3] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jente, 16
        </p>
      </div>
    </div>
  );
}

function QuestionCard2() {
  return (
    <div className="bg-[#deefe7] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative w-full">
        <Question2 />
        <Tags2 />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[20px] items-start pr-[20px] relative w-full">
        <QuestionCard1 />
        <QuestionCard2 />
      </div>
    </div>
  );
}

function CategoryTags5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Category tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Kropp
        </p>
      </div>
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Mensen
        </p>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[40px] pt-[32px] px-[32px] relative w-full">
        <CategoryTags5 />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0f0f0f] text-[20px] tracking-[-0.08px] w-full">Har du små tanker, grubling og tankekjør?</p>
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Da bør du lese denne artikkelen, den handler om nettopp det.
          </p>
        </div>
      </div>
    </div>
  );
}

function CategoryTags6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Category tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Kropp
        </p>
      </div>
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Mensen
        </p>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[40px] pt-[32px] px-[32px] relative w-full">
        <CategoryTags6 />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0f0f0f] text-[20px] tracking-[-0.08px] w-full">Har du få tanker, grubling og tankekjør?</p>
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Da bør du lese denne artikkelen, den handler om nettopp det.
          </p>
        </div>
      </div>
    </div>
  );
}

function CategoryTags7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Category tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Kropp
        </p>
      </div>
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Mensen
        </p>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[40px] pt-[32px] px-[32px] relative w-full">
        <CategoryTags7 />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0f0f0f] text-[20px] tracking-[-0.08px] w-full">Har du få tanker?</p>
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Da bør du lese denne artikkelen, den handler om nettopp det.
          </p>
        </div>
      </div>
    </div>
  );
}

function Articles() {
  return (
    <div className="relative shrink-0 w-full z-[5]" data-name="Articles">
      <div className="content-stretch flex flex-col gap-[20px] items-start pb-[40px] px-[16px] relative w-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[342px]" data-name="Article card - reskin">
          <div className="aspect-[342/162] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Image">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[12px] rounded-tr-[12px]">
              <img alt="" className="absolute h-[141.56%] left-[-0.44%] max-w-none top-[-38.45%] w-[100.58%]" src={imgImage} />
            </div>
          </div>
          <Content />
        </div>
        <Frame12 />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[342px]" data-name="Article card - reskin">
          <div className="aspect-[342/162] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Image">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[12px] rounded-tr-[12px]">
              <img alt="" className="absolute h-[141.56%] left-[-0.44%] max-w-none top-[-19.74%] w-[100.58%]" src={imgImage1} />
            </div>
          </div>
          <Content1 />
        </div>
        <Services />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[342px]" data-name="Article card - reskin">
          <div className="aspect-[342/162] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Image">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[12px] rounded-tr-[12px]">
              <img alt="" className="absolute h-[141.56%] left-[-0.44%] max-w-none top-[-4.29%] w-[100.58%]" src={imgImage2} />
            </div>
          </div>
          <Content6 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[342px]" data-name="Article card - reskin">
          <div className="aspect-[342/162] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Image">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[12px] rounded-tr-[12px]">
              <img alt="" className="absolute h-[141.56%] left-[-0.44%] max-w-none top-[-19.74%] w-[100.58%]" src={imgImage3} />
            </div>
          </div>
          <Content7 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[342px]" data-name="Article card - reskin">
          <div className="aspect-[342/162] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Image">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[12px] rounded-tr-[12px]">
              <img alt="" className="absolute h-[141.56%] left-[-0.44%] max-w-none top-[-19.74%] w-[100.58%]" src={imgImage4} />
            </div>
          </div>
          <Content8 />
        </div>
        <Frame11 />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[342px]" data-name="Article card - reskin">
          <div className="aspect-[342/162] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Image">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[12px] rounded-tr-[12px]">
              <img alt="" className="absolute h-[315.52%] left-0 max-w-none top-[-55.63%] w-full" src={imgImage5} />
            </div>
          </div>
          <Content9 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[342px]" data-name="Article card - reskin">
          <div className="aspect-[342/162] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Image">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[12px] rounded-tr-[12px]">
              <img alt="" className="absolute h-[315.52%] left-0 max-w-none top-[-116.13%] w-full" src={imgImage6} />
            </div>
          </div>
          <Content10 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[342px]" data-name="Article card - reskin">
          <div className="aspect-[342/162] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Image">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[12px] rounded-tr-[12px]">
              <img alt="" className="absolute h-[141.56%] left-[-0.44%] max-w-none top-[-30.03%] w-[100.58%]" src={imgImage} />
            </div>
          </div>
          <Content11 />
        </div>
      </div>
    </div>
  );
}

function Component04ElementerKaraktererFlattenedGladMobil() {
  return (
    <div className="-translate-y-1/2 absolute aspect-[1519/1290] left-[2.5%] overflow-clip right-[4.72%] top-[calc(50%+2px)]" data-name="04-elementer-karakterer-FLATTENED_glad mobil">
      <div className="absolute inset-[2.25%_2.03%_2.84%_3.24%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 175.779 149.549">
          <path d={svgPaths.p35724500} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[5.63%_4.19%_5.63%_6.59%]" data-name="Union">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 165.556 139.826">
          <g id="Union">
            <path d={svgPaths.p1dd2bef0} fill="var(--fill-0, black)" />
            <path d={svgPaths.pd592a00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p298b7300} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPaths.p361c5280} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p25950b00} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.p1f222400} fill="var(--fill-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[4px] items-start pb-[8px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Søk i spørsmål og svar</p>
      </div>
    </div>
  );
}

function PlaceholderText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="Placeholder text">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icons/Navigation/Search">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="search 1">
            <path clipRule="evenodd" d={svgPaths.p3272e580} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Union" />
          </g>
        </svg>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#676767] text-[16px] text-justify tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Skriv et spørsmål, ord eller tema</p>
      </div>
    </div>
  );
}

function SearchField() {
  return (
    <div className="bg-white h-[44px] relative rounded-[99px] shrink-0 w-full" data-name="Search field">
      <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[10px] relative size-full">
          <PlaceholderText />
        </div>
      </div>
    </div>
  );
}

function SearchInput() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Search input">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Search input auto">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
          <Label />
        </div>
        <SearchField />
      </div>
    </div>
  );
}

function ButtonBase3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/Navigation/Plus">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="plus 1">
            <path d={svgPaths.p83dad00} fill="var(--fill-0, #0F0F0F)" id="Union" />
          </g>
        </svg>
      </div>
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Filtrer</p>
      </div>
    </div>
  );
}

function Filter() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start py-[12px] relative shrink-0 w-full" data-name="Filter">
      <div className="content-stretch flex items-start justify-center min-h-[44px] relative shrink-0" data-name="Button">
        <ButtonBase3 />
      </div>
    </div>
  );
}

function SearchAndFilter() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Search and filter">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#0f0f0f] text-[24px] tracking-[-0.096px] w-full">Se hva andre lurer på</p>
      </div>
      <SearchInput />
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
        Man
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
        Man
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
        Man
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
        Jente, 17
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
        Man
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
        Man
      </p>
    </div>
  );
}

function QuestionList() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pb-[8px] relative shrink-0 w-[343px]" data-name="Question list">
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
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0f0f0f] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Alle spørsmål og svar
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
      <ButtonBase4 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 187 2">
            <line id="Line" stroke="var(--stroke-0, #0F0F0F)" strokeWidth="2" x2="187" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <SearchAndFilter />
      <QuestionList />
      <div className="content-stretch flex flex-col items-center min-h-[44px] relative shrink-0" data-name="Button">
        <Frame />
      </div>
    </div>
  );
}

function QASection() {
  return (
    <div className="bg-[#dbddff] content-stretch flex flex-col gap-[8px] items-start px-[12px] py-[40px] relative shrink-0 w-[375px] z-[4]" data-name="Q&A Section">
      <div className="h-[160px] relative shrink-0 w-[200px]" data-name="Illustration">
        <div className="absolute inset-[1.39%_8.06%_24.31%_23.89%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136.111 118.889">
            <path d={svgPaths.p3e088780} fill="var(--fill-0, #79FC9E)" id="Vector 1" />
          </svg>
        </div>
        <Component04ElementerKaraktererFlattenedGladMobil />
      </div>
      <Content12 />
    </div>
  );
}

function CategoryTags8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Category tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Kropp
        </p>
      </div>
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Mensen
        </p>
      </div>
    </div>
  );
}

function Content13() {
  return (
    <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[40px] pt-[32px] px-[32px] relative w-full">
        <CategoryTags8 />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0f0f0f] text-[20px] tracking-[-0.08px] w-full">Har du slitsomme tanker, grubling og tankekjør?</p>
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Da bør du lese denne artikkelen, den handler om nettopp det.
          </p>
        </div>
      </div>
    </div>
  );
}

function CategoryTags9() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Category tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Kropp
        </p>
      </div>
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Mensen
        </p>
      </div>
    </div>
  );
}

function Content14() {
  return (
    <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[40px] pt-[32px] px-[32px] relative w-full">
        <CategoryTags9 />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0f0f0f] text-[20px] tracking-[-0.08px] w-full">Har du morsomme tanker, grubling og tankekjør?</p>
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Da bør du lese denne artikkelen, den handler om nettopp det.
          </p>
        </div>
      </div>
    </div>
  );
}

function CategoryTags10() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Category tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Kropp
        </p>
      </div>
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Mensen
        </p>
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[40px] pt-[32px] px-[32px] relative w-full">
        <CategoryTags10 />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0f0f0f] text-[20px] tracking-[-0.08px] w-full">Har du interessante tanker, grubling og tankekjør?</p>
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Da bør du lese denne artikkelen, den handler om nettopp det.
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[168px] relative shrink-0 w-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[138px] left-[calc(50%-2.02px)] top-[calc(50%+1.26px)] w-[160px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 138">
          <path d={svgPaths.p2baffe00} fill="var(--fill-0, #DEEFE7)" id="Vector 3" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-[calc(50%-1.52px)] top-[calc(50%-0.24px)] w-[149px]" data-name="Union">
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

function Question3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Jeg sliter skikkelig sosialt og aner ikke hva jeg skal gjøre</p>
    </div>
  );
}

function Tags3() {
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

function QuestionCard3() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative w-full">
        <Frame6 />
        <Question3 />
        <Tags3 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[168px] relative shrink-0 w-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[164px] left-[calc(50%+3px)] top-[calc(50%+2px)] w-[100px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 164">
          <path d={svgPaths.p6f662c0} fill="var(--fill-0, white)" id="Vector 3" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[155px] left-[calc(50%+3px)] top-[calc(50%+0.5px)] w-[88px]" data-name="Union">
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

function Question4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.072px] w-full">Tatt angrepille og er redd for graviditet.</p>
    </div>
  );
}

function Tags4() {
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

function QuestionCard4() {
  return (
    <div className="bg-[#3c7c5e] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative w-full">
        <Frame7 />
        <Question4 />
        <Tags4 />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start pr-[20px] relative w-full">
        <QuestionCard3 />
        <QuestionCard4 />
      </div>
    </div>
  );
}

function CategoryTags11() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Category tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Kropp
        </p>
      </div>
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Mensen
        </p>
      </div>
    </div>
  );
}

function Content16() {
  return (
    <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[40px] pt-[32px] px-[32px] relative w-full">
        <CategoryTags11 />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0f0f0f] text-[20px] tracking-[-0.08px] w-full">Har du kjedelige tanker, grubling og tankekjør?</p>
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Da bør du lese denne artikkelen, den handler om nettopp det.
          </p>
        </div>
      </div>
    </div>
  );
}

function CategoryTags12() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Category tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Kropp
        </p>
      </div>
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Mensen
        </p>
      </div>
    </div>
  );
}

function Content17() {
  return (
    <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[40px] pt-[32px] px-[32px] relative w-full">
        <CategoryTags12 />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0f0f0f] text-[20px] tracking-[-0.08px] w-full">Har du store tanker, grubling og tankekjør?</p>
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Da bør du lese denne artikkelen, den handler om nettopp det.
          </p>
        </div>
      </div>
    </div>
  );
}

function CategoryTags13() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Category tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Kropp
        </p>
      </div>
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Mensen
        </p>
      </div>
    </div>
  );
}

function Content18() {
  return (
    <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[40px] pt-[32px] px-[32px] relative w-full">
        <CategoryTags13 />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0f0f0f] text-[20px] tracking-[-0.08px] w-full">Har du små tanker, grubling og tankekjør?</p>
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Da bør du lese denne artikkelen, den handler om nettopp det.
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[168px] relative shrink-0 w-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[128.692px] left-[calc(50%+0.57px)] top-[calc(50%-1.18px)] w-[207.214px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207.214 128.692">
          <path d={svgPaths.p30f1fcc0} fill="var(--fill-0, white)" id="Vector 3" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[119px] left-1/2 top-[calc(50%-2.5px)] w-[194px]" data-name="Union">
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

function Question5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Hvorfor kommer jeg aldri når jeg har orgasmer?</p>
    </div>
  );
}

function Tags5() {
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

function QuestionCard5() {
  return (
    <div className="bg-[#deefe7] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative w-full">
        <Frame9 />
        <Question5 />
        <Tags5 />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[168px] relative shrink-0 w-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[162px] left-[calc(50%-3.03px)] top-[calc(50%-0.57px)] w-[155px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 162">
          <path d={svgPaths.pc35d600} fill="var(--fill-0, white)" id="Vector 3" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[148px] left-[calc(50%-3.03px)] top-[calc(50%-2.57px)] w-[139px]" data-name="Union">
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

function Question6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full">Hvorfor kommer jeg aldri når jeg har orgasmer?</p>
    </div>
  );
}

function Tags6() {
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

function QuestionCard6() {
  return (
    <div className="bg-[#ebebff] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative w-full">
        <Frame10 />
        <Question6 />
        <Tags6 />
      </div>
    </div>
  );
}

function Question7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['Borna:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.072px] w-full">Kan jeg ha sex før jeg fyller 16 år?</p>
    </div>
  );
}

function Tags7() {
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

function QuestionCard7() {
  return (
    <div className="bg-[#5046e5] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Question card">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[16px] px-[16px] relative w-full">
        <Question7 />
        <Tags7 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start pr-[20px] relative w-full">
        <QuestionCard5 />
        <QuestionCard6 />
        <QuestionCard7 />
      </div>
    </div>
  );
}

function CategoryTags14() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Category tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Kropp
        </p>
      </div>
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Mensen
        </p>
      </div>
    </div>
  );
}

function Content19() {
  return (
    <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[40px] pt-[32px] px-[32px] relative w-full">
        <CategoryTags14 />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0f0f0f] text-[20px] tracking-[-0.08px] w-full">Har du få tanker, grubling og tankekjør?</p>
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Da bør du lese denne artikkelen, den handler om nettopp det.
          </p>
        </div>
      </div>
    </div>
  );
}

function CategoryTags15() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Category tags">
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Kropp
        </p>
      </div>
      <div className="bg-[#cfe8dc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[-0.056px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Mensen
        </p>
      </div>
    </div>
  );
}

function Content20() {
  return (
    <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[40px] pt-[32px] px-[32px] relative w-full">
        <CategoryTags15 />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0f0f0f] text-[20px] tracking-[-0.08px] w-full">Har du få tanker?</p>
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Da bør du lese denne artikkelen, den handler om nettopp det.
          </p>
        </div>
      </div>
    </div>
  );
}

function Articles1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start pb-[16px] pt-[40px] px-[16px] relative shrink-0 z-[3]" data-name="Articles">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[342px]" data-name="Article card - reskin">
        <div className="aspect-[342/162] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[12px] rounded-tr-[12px]">
            <img alt="" className="absolute h-[141.56%] left-[-0.44%] max-w-none top-[-19.74%] w-[100.58%]" src={imgImage7} />
          </div>
        </div>
        <Content13 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[342px]" data-name="Article card - reskin">
        <div className="aspect-[342/162] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[12px] rounded-tr-[12px]">
            <img alt="" className="absolute h-[141.56%] left-[-0.44%] max-w-none top-[-19.74%] w-[100.58%]" src={imgImage1} />
          </div>
        </div>
        <Content14 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[342px]" data-name="Article card - reskin">
        <div className="aspect-[342/162] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[12px] rounded-tr-[12px]">
            <img alt="" className="absolute h-[141.56%] left-[-0.44%] max-w-none top-[-4.29%] w-[100.58%]" src={imgImage2} />
          </div>
        </div>
        <Content15 />
      </div>
      <Frame5 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[342px]" data-name="Article card - reskin">
        <div className="aspect-[342/162] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[12px] rounded-tr-[12px]">
            <img alt="" className="absolute h-[141.56%] left-[-0.44%] max-w-none top-[-19.74%] w-[100.58%]" src={imgImage3} />
          </div>
        </div>
        <Content16 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[342px]" data-name="Article card - reskin">
        <div className="aspect-[342/162] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[12px] rounded-tr-[12px]">
            <img alt="" className="absolute h-[141.56%] left-[-0.44%] max-w-none top-[-19.74%] w-[100.58%]" src={imgImage4} />
          </div>
        </div>
        <Content17 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[342px]" data-name="Article card - reskin">
        <div className="aspect-[342/162] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[12px] rounded-tr-[12px]">
            <img alt="" className="absolute h-[315.52%] left-0 max-w-none top-[-55.63%] w-full" src={imgImage5} />
          </div>
        </div>
        <Content18 />
      </div>
      <Frame8 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[342px]" data-name="Article card - reskin">
        <div className="aspect-[342/162] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[12px] rounded-tr-[12px]">
            <img alt="" className="absolute h-[315.52%] left-0 max-w-none top-[-116.13%] w-full" src={imgImage6} />
          </div>
        </div>
        <Content19 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[342px]" data-name="Article card - reskin">
        <div className="aspect-[342/162] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[12px] rounded-tr-[12px]">
            <img alt="" className="absolute h-[141.56%] left-[-0.44%] max-w-none top-[-30.03%] w-[100.58%]" src={imgImage} />
          </div>
        </div>
        <Content20 />
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
        Last inn mer
      </p>
    </div>
  );
}

function Frame2() {
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

function LoadMoreArticlesButton() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Load more articles button">
      <div className="content-stretch flex flex-col items-start pb-[40px] px-[12px] relative w-full">
        <div className="content-stretch flex flex-col h-[44px] items-center min-h-[44px] relative shrink-0 w-[351px]" data-name="Button">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Text4() {
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
      <Text4 />
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

function ButtonBase6() {
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
        <ButtonBase6 />
      </div>
    </div>
  );
}

export default function Forside() {
  return (
    <div className="bg-[#f5f3f0] content-stretch flex flex-col isolate items-start relative size-full" data-name="Forside">
      <div className="content-stretch flex flex-col items-start shrink-0 sticky top-0 w-[375px] z-[8]" data-name="Header">
        <Browser />
      </div>
      <Menu />
      <TopSection />
      <Articles />
      <QASection />
      <Articles1 />
      <LoadMoreArticlesButton />
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