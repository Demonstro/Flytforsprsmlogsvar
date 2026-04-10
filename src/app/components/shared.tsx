import svgPaths from "../../imports/svg-cwur148zul";
import familieSvg from "../../imports/svg-sjpmhj56f8";
import pencilSvg from "../../imports/svg-wij1yfqjgw";
import { ImageWithFallback } from "./figma/ImageWithFallback";

/* ─── Image constants ─── */
export const IMG_1 = "https://images.unsplash.com/photo-1592976370975-dcc9e764374f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG5hdHVyZSUyMHN1bnNldCUyMGNhbG18ZW58MXx8fHwxNzczMTQxNTM4fDA&ixlib=rb-4.1.0&q=80&w=1080";
export const IMG_2 = "https://images.unsplash.com/photo-1553917739-39b2d25cc6b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwaGF2aW5nJTIwY29mZmVlJTIwY29udmVyc2F0aW9ufGVufDF8fHx8MTc3MzE0MTUwNXww&ixlib=rb-4.1.0&q=80&w=1080";
export const IMG_3 = "https://images.unsplash.com/photo-1609075066652-213f4f1016c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xkaW5nJTIwaGFuZHMlMjByb21hbnRpYyUyMGxvdmV8ZW58MXx8fHwxNzczMTQxNTA2fDA&ixlib=rb-4.1.0&q=80&w=1080";
export const IMG_4 = "https://images.unsplash.com/photo-1567787387614-b0ae86dc7d6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcmVhZGluZyUyMGxpYnJhcnklMjBib29rc3xlbnwxfHx8fDE3NzMxNDE1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080";
export const IMG_5 = "https://images.unsplash.com/photo-1661953029179-e1b0dc900490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdmVzJTIwYmVhY2h8ZW58MXx8fHwxNzczMDg4MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080";
export const IMG_6 = "https://images.unsplash.com/photo-1713860052825-4798abffb5b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjB0cmFpbCUyMG1vdW50YWlufGVufDF8fHx8MTc3MzA4MDUwOHww&ixlib=rb-4.1.0&q=80&w=1080";
export const IMG_7 = "https://images.unsplash.com/photo-1602335504052-9074521c4b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGpvdXJuYWxpbmclMjByZWZsZWN0aXZlJTIwd3JpdGluZ3xlbnwxfHx8fDE3NzMxNDE1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080";
export const IMG_8 = "https://images.unsplash.com/photo-1604065786939-7628d10f5afd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwcmVhZGluZyUyMGJvb2slMjBibGFua2V0fGVufDF8fHx8MTc3MzE0MTU0M3ww&ixlib=rb-4.1.0&q=80&w=1080";

/* ─── SVG Icons ─── */
export function SearchIcon({ size = 20, color = "#0F0F0F" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path clipRule="evenodd" d={svgPaths.p237f08c0} fill={color} fillRule="evenodd" />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <path d={svgPaths.p6b68900} fill="#0F0F0F" />
      <path d={svgPaths.p11ec2900} fill="#0F0F0F" />
      <path d={svgPaths.p31f7f500} fill="#0F0F0F" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 28, color = "#0F0F0F" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <path clipRule="evenodd" d={svgPaths.p2ecd6cb0} fill={color} fillRule="evenodd" />
    </svg>
  );
}

export function ArrowRightSmallIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <path clipRule="evenodd" d={svgPaths.pad10300} fill="#0F0F0F" fillRule="evenodd" />
    </svg>
  );
}

export function PlusIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <path d={svgPaths.p83dad00} fill="#0F0F0F" />
    </svg>
  );
}

export function ArrowUpIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <path d={svgPaths.p22f37080} stroke="#0F0F0F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

export function ArrowLeftIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{ transform: "rotate(180deg)" }}>
      <path clipRule="evenodd" d={svgPaths.pad10300} fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

/* ─── Logo ─── */
export function UngLogo({ color = "#0F0F0F", blobColor = "#79FC9E" }: { color?: string; blobColor?: string }) {
  return (
    <div className="relative" style={{ width: 66, height: 48 }}>
      {color === "#0F0F0F" && (
        <div className="absolute inset-0">
          <svg className="block size-full" fill="none" viewBox="0 0 65.78 47.75">
            <path clipRule="evenodd" d={svgPaths.p3226d2f0} fill={blobColor} fillRule="evenodd" />
          </svg>
        </div>
      )}
      <div className="absolute" style={{ inset: "7% 5.5% 7% 5.8%" }}>
        <svg className="block size-full" fill="none" viewBox="0 0 58.66 40.97">
          <path d={svgPaths.p233f4600} fill={color} />
          <path d={svgPaths.p2eafdb00} fill={color} />
          <path d={svgPaths.p7acb900} fill={color} />
          <path d={svgPaths.p29a2b380} fill={color} />
          <path d={svgPaths.pad8f400} fill={color} />
          <path d={svgPaths.p72a8800} fill={color} />
        </svg>
      </div>
    </div>
  );
}

/* ─── Stickers ─── */
export function FamilieSticker() {
  return (
    <svg width={46} height={39} viewBox="0 0 45.6 39" fill="none">
      <path d={familieSvg.p7622e80} fill="var(--fill-0, white)" />
      <path d={familieSvg.p32fcc200} fill="var(--fill-0, #0F0F0F)" />
      <path d={familieSvg.p1f56c380} fill="var(--fill-0, #0F0F0F)" />
      <path d={familieSvg.p265f5f80} fill="var(--fill-0, #0F0F0F)" />
      <path d={familieSvg.p4c29000} fill="var(--fill-0, #0F0F0F)" />
      <path d={familieSvg.p37896300} fill="var(--fill-0, #0F0F0F)" />
      <path d={familieSvg.p138f3480} fill="var(--fill-0, #0F0F0F)" />
      <path d={familieSvg.p1179500} fill="var(--fill-0, #0F0F0F)" />
      <path d={familieSvg.p2e86f80} fill="var(--fill-0, #0F0F0F)" />
      <path clipRule="evenodd" d={familieSvg.p26520d80} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" />
    </svg>
  );
}

export function FolelserSticker() {
  return (
    <svg width={46} height={29} viewBox="0 0 45.6 28.8" fill="none">
      <path d={svgPaths.p24a81600} fill="white" />
      <path d={svgPaths.p3b23c500} fill="#0F0F0F" />
      <path clipRule="evenodd" d={svgPaths.p320ac2c0} fill="#0F0F0F" fillRule="evenodd" />
      <path d={svgPaths.p39fc6d00} fill="#0F0F0F" />
      <path d={svgPaths.p14b60900} fill="#0F0F0F" />
      <path clipRule="evenodd" d={svgPaths.p30fddd00} fill="#0F0F0F" fillRule="evenodd" />
    </svg>
  );
}

export function SamfunnSticker() {
  return (
    <svg width={42} height={44} viewBox="0 0 42 43.8" fill="none">
      <path d={svgPaths.p113cc500} fill="white" />
      <path d={svgPaths.pbe722b0} fill="#0F0F0F" />
      <path clipRule="evenodd" d={svgPaths.p1ac78c80} fill="#0F0F0F" fillRule="evenodd" />
      <path clipRule="evenodd" d={svgPaths.p2044300} fill="#0F0F0F" fillRule="evenodd" />
    </svg>
  );
}

export function KroppSticker() {
  return (
    <svg width={40} height={40} viewBox="0 0 46.2 40.2" fill="none">
      <path d={svgPaths.p161dbb80} fill="white" />
      <path d={svgPaths.p3ba9d3c0} fill="#0F0F0F" />
      <path d={svgPaths.p24769580} fill="#0F0F0F" />
      <path d={svgPaths.p303c0780} fill="#0F0F0F" />
      <path d={svgPaths.p394e5190} fill="#0F0F0F" />
      <path d={svgPaths.p2ea1d290} fill="#0F0F0F" />
      <path d={svgPaths.p2d249b00} fill="#0F0F0F" />
      <path d={svgPaths.p61d2100} fill="#0F0F0F" />
      <path d={svgPaths.p2549f600} fill="#0F0F0F" />
      <path d={svgPaths.p4b62400} fill="#0F0F0F" />
      <path d={svgPaths.p33e823c0} fill="#0F0F0F" />
      <path d={svgPaths.p14e46d80} fill="#0F0F0F" />
      <path d={svgPaths.p39309b00} fill="#0F0F0F" />
      <path d={svgPaths.p2ee61280} fill="#0F0F0F" />
      <path d={svgPaths.p2eb30e80} fill="#0F0F0F" />
      <path d={svgPaths.p37f3d580} fill="#0F0F0F" />
      <path d={svgPaths.pe10fd00} fill="#0F0F0F" />
      <path d={svgPaths.p1e397460} fill="#0F0F0F" />
      <path d={svgPaths.p2b5b8c70} fill="#0F0F0F" />
      <path d={svgPaths.p378ca100} fill="#0F0F0F" />
      <path d={svgPaths.p3201c700} fill="#0F0F0F" />
      <path d={svgPaths.p11514d00} fill="#0F0F0F" />
      <path d={svgPaths.p23ee6700} fill="#0F0F0F" />
      <path d={svgPaths.pfc67800} fill="#0F0F0F" />
      <path d={svgPaths.p93eb440} fill="#0F0F0F" />
      <path d={svgPaths.p227ead80} fill="#0F0F0F" />
      <path d={svgPaths.p10bce580} fill="#0F0F0F" />
      <path d={svgPaths.p3efc5f80} fill="#0F0F0F" />
      <path d={svgPaths.pf865580} fill="#0F0F0F" />
      <path d={svgPaths.p9c6d0f2} fill="#0F0F0F" />
      <path d={svgPaths.pb86e200} fill="#0F0F0F" />
      <path d={svgPaths.p3fcb780} fill="#0F0F0F" />
      <path d={svgPaths.p2713a200} fill="#0F0F0F" />
      <path d={svgPaths.p1afa5600} fill="#0F0F0F" />
      <path d={svgPaths.p29290700} fill="#0F0F0F" />
      <path d={svgPaths.p13936c80} fill="#0F0F0F" />
      <path d={svgPaths.p3b2d4da0} fill="#0F0F0F" />
      <path d={svgPaths.p2175ce80} fill="#0F0F0F" />
      <path d={svgPaths.p2f2de880} fill="#0F0F0F" />
      <path d={svgPaths.pdf8500} fill="#0F0F0F" />
      <path d={svgPaths.p17288400} fill="#0F0F0F" />
      <path d={svgPaths.p2e4b1ff0} fill="#0F0F0F" />
      <path d={svgPaths.p24a65800} fill="#0F0F0F" />
      <path d={svgPaths.p3e278c00} fill="#0F0F0F" />
      <path d={svgPaths.p27fdd600} fill="#0F0F0F" />
      <path d={svgPaths.p1b732c80} fill="#0F0F0F" />
      <path d={svgPaths.p9da7b40} fill="#0F0F0F" />
      <path d={svgPaths.p17c78100} fill="#0F0F0F" />
      <path d={svgPaths.p27124680} fill="#0F0F0F" />
      <path d={svgPaths.p19ec8e80} fill="#0F0F0F" />
      <path d={svgPaths.p16cc3100} fill="#0F0F0F" />
      <path d={svgPaths.p1b317380} fill="#0F0F0F" />
      <path d={svgPaths.pf651580} fill="#0F0F0F" />
      <path d={svgPaths.p3c985980} fill="#0F0F0F" />
      <path d={svgPaths.p301aa980} fill="#0F0F0F" />
      <path d={svgPaths.p7d48580} fill="#0F0F0F" />
      <path d={svgPaths.p1b97ae70} fill="#0F0F0F" />
      <path d={svgPaths.peb86f00} fill="#0F0F0F" />
      <path d={svgPaths.p32f5b670} fill="#0F0F0F" />
      <path clipRule="evenodd" d={svgPaths.p3afbec70} fill="#0F0F0F" fillRule="evenodd" />
    </svg>
  );
}

export function SkoleSticker() {
  return (
    <svg width={38} height={44} viewBox="0 0 37.8 44.4" fill="none">
      <path d={svgPaths.p10d7e600} fill="white" />
    </svg>
  );
}

export function VoldSticker() {
  return (
    <svg width={25} height={44} viewBox="0 0 24.68 43.47" fill="none">
      <path clipRule="evenodd" d={svgPaths.p19ad0290} fill="#0F0F0F" fillRule="evenodd" />
      <path d={svgPaths.p18d07e00} fill="#0F0F0F" />
      <path d={svgPaths.p1c429080} fill="#0F0F0F" />
    </svg>
  );
}

/* ─── Category Card ─── */
export function CategoryCard({
  label,
  blobPath,
  blobColor,
  sticker,
}: {
  label: string;
  blobPath: string;
  blobColor: string;
  sticker: React.ReactNode;
}) {
  return (
    <div className="bg-white flex-1 min-w-[calc(50%-6px)] rounded-lg">
      <div className="flex flex-col items-center gap-2 p-2">
        <div className="relative size-12">
          <div className="absolute inset-2">
            <svg className="block size-full" viewBox="0 0 36 36" fill="none" preserveAspectRatio="xMidYMid meet">
              <path clipRule="evenodd" d={blobPath} fill={blobColor} fillRule="evenodd" />
            </svg>
          </div>
          <div className="absolute inset-1 flex items-center justify-center">{sticker}</div>
        </div>
        <p
          className="font-['Open_Sans',sans-serif] text-[14px] text-[#0f0f0f] text-center tracking-[-0.056px] leading-[20px]"
          style={{ fontWeight: 600 }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

/* ─── Tag ─── */
export function Tag({
  label,
  bgColor = "#cfe8dc",
  isFirst = false,
}: {
  label: string;
  bgColor?: string;
  isFirst?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center px-3 py-1 ${isFirst ? "rounded-tl-xl rounded-tr-xl rounded-br-xl" : "rounded-xl"}`}
      style={{ backgroundColor: bgColor }}
    >
      <p
        className="font-['Open_Sans',sans-serif] text-[14px] text-[#0f0f0f] tracking-[-0.056px] leading-[20px] whitespace-nowrap"
        style={{ fontWeight: 600 }}
      >
        {label}
      </p>
    </div>
  );
}

/* ─── Article Card ─── */
export function ArticleCard({
  image,
  tags,
  heading,
  body,
  bgContent = "white",
}: {
  image: string;
  tags: { label: string; bg?: string }[];
  heading: string;
  body: string;
  bgContent?: string;
}) {
  return (
    <div className="flex flex-col w-full">
      <div className="aspect-[342/162] relative rounded-t-xl overflow-hidden w-full">
        <ImageWithFallback alt="Worried girl" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1613368963702-c65d83bcabf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JyaWVkJTIwZ2lybCUyMHRlZW5hZ2VyfGVufDF8fHx8MTc3MzM5NDQ4NHww&ixlib=rb-4.1.0&q=80&w=1080" />
      </div>
      <div className="rounded-b-xl w-full" style={{ backgroundColor: bgContent }}>
        <div className="flex flex-col gap-4 items-start pb-10 pt-8 px-8">
          <div className="flex gap-2 items-start">
            {tags.map((t, i) => (
              <Tag key={i} label={t.label} bgColor={t.bg} isFirst={i === 0} />
            ))}
          </div>
          <p className="font-['Borna',sans-serif] text-[20px] text-[#0f0f0f] leading-[28px] tracking-[-0.08px] w-full" style={{ fontWeight: 600 }}>
            {heading}
          </p>
          <p className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]" style={{ fontWeight: 400 }}>
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Question Card ─── */
export function QuestionCard({
  bgColor,
  question,
  tagLabel,
  tagBg,
  textColor = "white",
  illustration,
}: {
  bgColor: string;
  question: string;
  tagLabel: string;
  tagBg: string;
  textColor?: string;
  illustration?: React.ReactNode;
}) {
  return (
    <div className="rounded-tr-3xl rounded-bl-3xl rounded-br-3xl w-full" style={{ backgroundColor: bgColor }}>
      <div className="flex flex-col gap-4 items-start pb-5 pt-4 px-4">
        {illustration && <div className="h-[168px] w-full flex items-center justify-center">
          <div className="relative w-[299px] h-[168px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 299 168">
              <path d={pencilSvg.p1477400} fill="white" />
              <path d={pencilSvg.p3428cb00} fill="black" />
              <path clipRule="evenodd" d={pencilSvg.p20c03400} fill="black" fillRule="evenodd" />
              <path clipRule="evenodd" d={pencilSvg.p3e9d5280} fill="black" fillRule="evenodd" />
              <path clipRule="evenodd" d={pencilSvg.p23904700} fill="black" fillRule="evenodd" />
            </svg>
          </div>
        </div>}
        <p className="font-['Borna',sans-serif] text-[18px] leading-[26px] tracking-[-0.072px] w-full" style={{ fontWeight: 600, color: textColor }}>
          {question}
        </p>
        <div className="flex flex-wrap gap-2 items-center">
          <Tag label={tagLabel} bgColor={tagBg} />
        </div>
      </div>
    </div>
  );
}

/* ─── Service Entrance Card ─── */
export function ServiceCard({
  bgColor,
  title,
  blobColor,
  blobPath,
  sticker,
}: {
  bgColor: string;
  title: string;
  blobColor: string;
  blobPath: string;
  sticker: React.ReactNode;
}) {
  return (
    <div className="rounded-xl w-full" style={{ backgroundColor: bgColor }}>
      <div className="flex items-center gap-4 px-4 py-2">
        <div className="relative shrink-0 size-16">
          <div className="absolute inset-1">
            <svg className="block size-full" viewBox="0 0 50 50" fill="none" preserveAspectRatio="xMidYMid meet">
              <path clipRule="evenodd" d={blobPath} fill={blobColor} fillRule="evenodd" />
            </svg>
          </div>
          <div className="absolute inset-2 flex items-center justify-center">{sticker}</div>
        </div>
        <div className="flex-1 flex items-center gap-3">
          <p className="flex-1 font-['Borna',sans-serif] text-[18px] text-[#0f0f0f] leading-[26px] tracking-[-0.072px]" style={{ fontWeight: 600 }}>
            {title}
          </p>
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  );
}

/* ─── Q&A List Item ─── */
export function QAListItem({
  question,
  gender,
  topic,
  day,
  onClick,
}: {
  question: string;
  gender: string;
  topic: string;
  day: string;
  onClick?: () => void;
}) {
  return (
    <div
      className="bg-white rounded-tr-xl rounded-bl-xl rounded-br-xl w-full cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <div className="flex flex-col gap-2 p-3">
        <p className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]" style={{ fontWeight: 600 }}>
          {question}
        </p>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <span className="font-['Open_Sans',sans-serif] text-[14px] text-[#454545] leading-[20px] tracking-[-0.056px]" style={{ fontWeight: 400 }}>
              {gender}
            </span>
            <span className="text-[#AFAFAF]">|</span>
            <span className="font-['Open_Sans',sans-serif] text-[14px] text-[#454545] leading-[20px] tracking-[-0.056px]" style={{ fontWeight: 400 }}>
              {topic}
            </span>
          </div>
          <span className="font-['Open_Sans',sans-serif] text-[14px] text-[#454545] leading-[20px] tracking-[-0.056px]" style={{ fontWeight: 400 }}>
            {day}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Illustrations ─── */
export function ThermometerIllustration() {
  return (
    <div className="relative w-[88px] h-[155px]">
      <svg className="absolute block size-full" viewBox="0 0 100 164" fill="none">
        <path d={svgPaths.p6f662c0} fill="white" />
      </svg>
      <svg className="absolute block" style={{ left: 6, top: 4.5, width: 88, height: 155 }} viewBox="0 0 88 155" fill="none">
        <path d={svgPaths.p22b916b0} fill="black" />
        <path clipRule="evenodd" d={svgPaths.p905e100} fill="black" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p7e98400} fill="black" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p11149f80} fill="black" fillRule="evenodd" />
      </svg>
    </div>
  );
}

export function HappyCharacter() {
  return (
    <div className="relative w-[200px] h-[160px]">
      <svg className="absolute" style={{ left: "16px", top: "2px", width: 136, height: 119 }} viewBox="0 0 136.111 118.889" fill="none">
        <path d={svgPaths.p3e088780} fill="#79FC9E" />
      </svg>
      <div className="absolute" style={{ left: "5px", top: "4px", width: 185, height: 152 }}>
        <svg className="block size-full" viewBox="0 0 175.779 149.549" fill="none">
          <path d={svgPaths.p35724500} fill="white" />
        </svg>
      </div>
      <div className="absolute" style={{ left: "13px", top: "9px", width: 166, height: 140 }}>
        <svg className="block size-full" viewBox="0 0 165.556 139.826" fill="none">
          <path d={svgPaths.p1dd2bef0} fill="black" />
          <path d={svgPaths.pd592a00} fill="black" />
          <path d={svgPaths.p298b7300} fill="black" />
          <path clipRule="evenodd" d={svgPaths.p361c5280} fill="black" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p25950b00} fill="black" fillRule="evenodd" />
          <path d={svgPaths.p1f222400} fill="black" />
        </svg>
      </div>
    </div>
  );
}

export function SocialIcons() {
  return (
    <div className="flex gap-3 items-center">
      <svg width={30} height={30} viewBox="0 0 30 30" fill="none"><path d={svgPaths.pd46da40} fill="white" /></svg>
      <svg width={30} height={30} viewBox="0 0 30 30" fill="none"><path d={svgPaths.p37997b70} fill="white" /><path clipRule="evenodd" d={svgPaths.p12cce080} fill="white" fillRule="evenodd" /></svg>
      <svg width={30} height={30} viewBox="0 0 30 30" fill="none"><path d={svgPaths.p12aa52e0} fill="white" /><path clipRule="evenodd" d={svgPaths.p12cce080} fill="white" fillRule="evenodd" /></svg>
      <svg width={30} height={30} viewBox="0 0 30 30" fill="none"><path d={svgPaths.p178e7e00} fill="white" /><path clipRule="evenodd" d={svgPaths.p31d5f700} fill="white" fillRule="evenodd" /></svg>
    </div>
  );
}

/* ─── Service card sticker SVGs ─── */
export function SporsmaalSticker() {
  return (
    <svg width={41} height={58} viewBox="0 0 40.85 57.6" fill="none">
      <path d={svgPaths.p350ed7a0} fill="white" />
      <path clipRule="evenodd" d={svgPaths.p2a49ce00} fill="#0F0F0F" fillRule="evenodd" />
      <path clipRule="evenodd" d={svgPaths.p3ae36d00} fill="#0F0F0F" fillRule="evenodd" />
    </svg>
  );
}

export function SnakkSticker() {
  return (
    <svg width={51} height={26} viewBox="0 0 51.2 25.62" fill="none">
      <path d={svgPaths.p14cc2ac0} fill="white" />
      <path d={svgPaths.p2cd63300} fill="#0F0F0F" />
    </svg>
  );
}

export function HjelpSticker() {
  return (
    <svg width={40} height={54} viewBox="0 0 40 54.4" fill="none">
      <path d={svgPaths.p3cfa9000} fill="white" />
      <path clipRule="evenodd" d={svgPaths.p36b28700} fill="#0F0F0F" fillRule="evenodd" />
      <path clipRule="evenodd" d={svgPaths.pd7d6900} fill="#0F0F0F" fillRule="evenodd" />
    </svg>
  );
}

export function SelvhjelpSticker() {
  return (
    <svg width={39} height={53} viewBox="0 0 38.51 52.85" fill="none">
      <path d={svgPaths.p63f0f0} fill="white" />
      <path clipRule="evenodd" d={svgPaths.p1e9c3d00} fill="#0F0F0F" fillRule="evenodd" />
      <path clipRule="evenodd" d={svgPaths.p9343f00} fill="#0F0F0F" fillRule="evenodd" />
    </svg>
  );
}

/* ─── Blob paths export ─── */
export const BLOB_PATHS = svgPaths;

/* ─── Category data ─── */
export const CATEGORIES = [
  { slug: "familie-venner-fritid", label: "Familie, venner og fritid", blobPath: svgPaths.p3e368180, blobColor: "#ABAEFF", Sticker: FamilieSticker },
  { slug: "folelser-identitet-forelskelse", label: "Følelser, identitet og forelskelse", blobPath: svgPaths.p1ca55900, blobColor: "#EE6E6A", Sticker: FolelserSticker },
  { slug: "kropp-helse-sex", label: "Kropp, helse og sex", blobPath: svgPaths.p127ea200, blobColor: "#89C6AA", Sticker: KroppSticker },
  { slug: "samfunn-lover-rettigheter", label: "Samfunn, lover og rettigheter", blobPath: svgPaths.p1ca55900, blobColor: "#C49A8C", Sticker: SamfunnSticker },
  { slug: "skole-jobb-framtid", label: "Skole, jobb og framtid", blobPath: svgPaths.ped13480, blobColor: "#ACD7C3", Sticker: SkoleSticker },
  { slug: "vold-overgrep", label: "Vold og overgrep", blobPath: svgPaths.p4cae130, blobColor: "#F2A2A0", Sticker: VoldSticker },
];

/* ─── Mock Q&A data ─── */
export const MOCK_QUESTIONS = [
  { id: "1", question: "Jeg overtenker alt, hva kan jeg gjøre?", gender: "Jente, 16", topic: "Psykisk helse og følelser", day: "Man", answer: "Det er helt normalt å overtenke ting, spesielt når man er ung. Her er noen strategier som kan hjelpe deg: Prøv å skrive ned tankene dine, det kan hjelpe deg å sortere dem. Snakk med noen du stoler på. Øv deg på å være til stede i øyeblikket. Husk at tanker ikke er fakta, de er bare tanker." },
  { id: "2", question: "Jeg vet ikke hvordan jeg skal prate med henne.", gender: "Gutt, 14", topic: "Forelskelse", day: "Man", answer: "Det er mange som synes det er vanskelig å snakke med noen de liker. Start med å være deg selv, still spørsmål og vis at du er interessert i hva hun sier. Ikke legg for mye press på deg selv – de beste samtalene skjer naturlig." },
  { id: "3", question: "Hvordan finner jeg ut hvor jeg har blitt trukket penger fra?", gender: "Gutt, 16", topic: "Lov og rett", day: "Man", answer: "Du kan sjekke kontoutskriften din i nettbanken eller mobilbanken. Der vil du se alle transaksjoner. Hvis du oppdager noe mistenkelig, kontakt banken din med en gang. Du kan også sperre kortet ditt midlertidig gjennom appen." },
  { id: "4", question: "Vet ikke hva jeg kan studere", gender: "Jente, 17", topic: "Videregående skole", day: "Man", answer: "Det er helt normalt å være usikker på hva man vil studere. Prøv å tenke på hva du liker å gjøre, hva du er nysgjerrig på, og hva du er god til. Du kan også ta karrieretester på utdanning.no eller snakke med en rådgiver på skolen." },
  { id: "5", question: "Jeg har lyst til å kjøpe sexleketøy, er jeg gammel nok?", gender: "Jente, 15", topic: "Sex", day: "Man", answer: "Det finnes ingen aldersgrense for å kjøpe sexleketøy i Norge, men mange butikker har egne regler om alder. Det viktigste er at du føler deg komfortabel og trygg. Husk at det er helt normalt å være nysgjerrig på kroppen sin." },
  { id: "6", question: "Tatt angrepille og er redd for graviditet.", gender: "Jente, 16", topic: "Kropp og helse", day: "Tir", answer: "Angrepillen er mest effektiv jo raskere du tar den etter ubeskyttet samleie. Hvis du har tatt den innen anbefalt tid, er sjansen for graviditet veldig lav. Hvis du er bekymret, kan du ta en graviditetstest etter 2-3 uker eller kontakte helsesykepleier." },
  { id: "7", question: "Kan jeg ha sex før jeg fyller 16 år?", gender: "Gutt, 14", topic: "Sex og samliv", day: "Ons", answer: "Den seksuelle lavalderen i Norge er 16 år. Det betyr at det er ulovlig for noen å ha seksuell omgang med en person under 16 år. Men hvis dere er jevnaldrende og begge ønsker det, er det viktig å snakke sammen og respektere hverandres grenser." },
  { id: "8", question: "Hvorfor kommer jeg aldri når jeg har orgasmer?", gender: "Jente, 16", topic: "Kropp og helse", day: "Tor", answer: "Orgasmer og utløsning er ikke det samme. Det er vanlig at jenter ikke opplever utløsning. Orgasmer kan oppleves forskjellig fra person til person, og det kan ta tid å bli kjent med sin egen kropp. Det viktigste er at det føles godt for deg." },
  { id: "9", question: "Jeg sliter skikkelig sosialt og aner ikke hva jeg skal gjøre", gender: "Jente, 16", topic: "Psykisk helse og følelser", day: "Fre", answer: "Mange unge opplever sosiale utfordringer. Du er ikke alene. Prøv å starte med små steg, som å hilse på noen i klassen eller bli med på en aktivitet. Snakk med helsesykepleier på skolen – de har god erfaring med å hjelpe unge i akkurat din situasjon." },
  { id: "10", question: "Moren min leser meldingene mine, er det lov?", gender: "Gutt, 13", topic: "Lov og rett", day: "Lør", answer: "Foreldre har et ansvar for å passe på barna sine, men du har også rett til privatliv. Det beste er å snakke med moren din om hvorfor det er viktig for deg å ha privatliv. Kanskje dere kan finne en løsning som fungerer for begge." },
];