import { Link } from "react-router";
import svgPaths from "../../imports/svg-aikcj65a2f";

/* ─── Arrow Icon ─── */

function ArrowRight() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path clipRule="evenodd" d={svgPaths.p2ecd6cb0} fill="#0F0F0F" fillRule="evenodd" />
      </svg>
    </div>
  );
}

/* ─── Sticker: Spørsmål og svar ─── */

function SporsmaalSticker() {
  return (
    <div className="absolute inset-[7.5%_18.75%_2.5%_17.5%]">
      <div className="absolute inset-[0_0_0_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.8477 57.6">
          <path d={svgPaths.p350ed7a0} fill="white" />
          <path clipRule="evenodd" d={svgPaths.p2a49ce00} fill="#0F0F0F" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p3ae36d00} fill="#0F0F0F" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

/* ─── Sticker: Snakk med noen ─── */

function SnakkSticker() {
  return (
    <div className="absolute inset-[32.5%_10%_27.5%_10%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.2 25.6243">
        <path d={svgPaths.p14cc2ac0} fill="white" />
        <path d={svgPaths.p2cd63300} fill="#0F0F0F" />
        <path d={svgPaths.p16f9db00} fill="#0F0F0F" />
        <path clipRule="evenodd" d={svgPaths.p33e86980} fill="#0F0F0F" fillRule="evenodd" />
        <path d={svgPaths.p3d48f800} fill="#0F0F0F" />
        <path d={svgPaths.p35aee600} fill="#0F0F0F" />
        <path d={svgPaths.p14b01a00} fill="#0F0F0F" />
        <path clipRule="evenodd" d={svgPaths.pd6ce100} fill="#0F0F0F" fillRule="evenodd" />
      </svg>
    </div>
  );
}

/* ─── Sticker: Hjelp nær deg ─── */

function HjelpSticker() {
  return (
    <div className="absolute inset-[10%_18.75%_5%_18.75%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 54.4">
        <path d={svgPaths.p3cfa9000} fill="white" />
        <path clipRule="evenodd" d={svgPaths.p36b28700} fill="#0F0F0F" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.pd7d6900} fill="#0F0F0F" fillRule="evenodd" />
      </svg>
    </div>
  );
}

/* ─── Sticker: Selvhjelpsverktøy ─── */

function SelvhjelpSticker() {
  return (
    <div className="absolute inset-[11.25%_17.5%_6.25%_22.5%]">
      <div className="absolute inset-[0_0_0_-0.29%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.5129 52.8513">
          <path d={svgPaths.p63f0f0} fill="white" />
          <path clipRule="evenodd" d={svgPaths.p1e9c3d00} fill="#0F0F0F" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p9343f00} fill="#0F0F0F" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

/* ─── Service Card ─── */

function ServiceCardItem({
  bgColor,
  title,
  blobAspect,
  blobViewBox,
  blobPath,
  blobColor,
  blobTop,
  blobBottom,
  sticker,
  to,
}: {
  bgColor: string;
  title: string;
  blobAspect: string;
  blobViewBox: string;
  blobPath: string;
  blobColor: string;
  blobTop: string;
  blobBottom: string;
  sticker: React.ReactNode;
  to?: string;
}) {
  const content = (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] w-full">
        <div className="relative shrink-0 size-[64px]">
          <div
            className={`-translate-x-1/2 absolute left-[calc(50%-0.4px)]`}
            style={{ aspectRatio: blobAspect, top: blobTop, bottom: blobBottom }}
          >
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={blobViewBox}>
              <path clipRule="evenodd" d={blobPath} fill={blobColor} fillRule="evenodd" />
            </svg>
          </div>
          {sticker}
        </div>
        <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px">
            <p className="font-['Borna',sans-serif] leading-[26px] text-[#0f0f0f] text-[18px] tracking-[-0.072px] w-full" style={{ fontWeight: 600 }}>
              {title}
            </p>
          </div>
          <ArrowRight />
        </div>
      </div>
    </div>
  );

  const cardClass = `min-h-px min-w-px rounded-[12px]`;

  if (to) {
    return (
      <Link to={to} className={cardClass} style={{ background: bgColor }}>
        {content}
      </Link>
    );
  }

  return (
    <div className={cardClass} style={{ background: bgColor }}>
      {content}
    </div>
  );
}

/* ─── Exported Services List ─── */

export function ServiceCards() {
  return (
    <div className="flex flex-col gap-3">
      <ServiceCardItem
        to="/sporsmaal-og-svar"
        bgColor="#89c6aa"
        title="Spørsmål og svar"
        blobAspect="502.934326171875/633.8216552734375"
        blobViewBox="0 0 46.3401 58.4"
        blobPath={svgPaths.pc6f780}
        blobColor="#ACD7C3"
        blobTop="3.75%"
        blobBottom="5%"
        sticker={<SporsmaalSticker />}
      />
      <ServiceCardItem
        bgColor="#abaeff"
        title="Snakk med noen"
        blobAspect="656.7822265625/510.9415588378906"
        blobViewBox="0 0 60.6725 47.2"
        blobPath={svgPaths.p5241d80}
        blobColor="#7479FF"
        blobTop="12.5%"
        blobBottom="13.75%"
        sticker={<SnakkSticker />}
      />
      <ServiceCardItem
        bgColor="#d2b2a7"
        title="Hjelp nær deg"
        blobAspect="70.23435974121094/68.98245239257812"
        blobViewBox="0 0 56.1775 55.1761"
        blobPath={svgPaths.pad23c80}
        blobColor="#AF7664"
        blobTop="6.29%"
        blobBottom="7.5%"
        sticker={<HjelpSticker />}
      />
      <ServiceCardItem
        bgColor="#cfe8dc"
        title="Selvhjelpsverktøy"
        blobAspect="610.59521484375/577.9630737304688"
        blobViewBox="0 0 54.936 52"
        blobPath={svgPaths.p3ddba0f0}
        blobColor="#54AF84"
        blobTop="8.75%"
        blobBottom="10%"
        sticker={<SelvhjelpSticker />}
      />
    </div>
  );
}
