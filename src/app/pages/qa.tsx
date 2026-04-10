import { useState } from "react";
import type { ReactNode } from "react";
import { Link, useNavigate } from "react-router";
import newSvg from "../../imports/svg-qw0ft7gxmf";
import imgFrame3857 from "figma:asset/94badd35d44dd292aecf82e1041ee9b4fa8484c8.png";
import imgFrame3856 from "figma:asset/9ace3e9c006411cfde0d1fb6f41373bcaf19bec2.png";
import imgFrame3858 from "figma:asset/d9d46ca57210dba31b9d1ceed20995f95a661508.png";
import imgFrame3859 from "figma:asset/5fd5c2aab47c5d88c6eda0278ed510bb43f14577.png";
import { MOCK_QUESTIONS } from "../components/shared";
import { Button } from "../components/button";

/* ─── Decorative background SVG for top banner ─── */
function DecorSvg() {
  return (
    <div className="absolute h-[578px] left-[-45px] top-[1px] w-[387px] pointer-events-none">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 386.542 578.393">
        <path clipRule="evenodd" d={newSvg.p3b47ed00} fill="#DEEFE7" fillRule="evenodd" />
        <path clipRule="evenodd" d={newSvg.p3713de80} fill="#DEEFE7" fillRule="evenodd" />
        <path d={newSvg.p1b898b00} fill="#DEEFE7" />
        <path clipRule="evenodd" d={newSvg.p3095480} fill="#DEEFE7" fillRule="evenodd" />
        <path clipRule="evenodd" d={newSvg.p14472580} fill="#DEEFE7" fillRule="evenodd" />
        <path clipRule="evenodd" d={newSvg.p116e5a60} fill="#DEEFE7" fillRule="evenodd" />
        <path clipRule="evenodd" d={newSvg.p413d800} fill="#DEEFE7" fillRule="evenodd" />
      </svg>
    </div>
  );
}

/* ─── Arrow Left icon ─── */
function ArrowLeftIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <path clipRule="evenodd" d={newSvg.p12cd1d80} fill="#0F0F0F" fillRule="evenodd" />
      <path clipRule="evenodd" d={newSvg.p9576200} fill="#0F0F0F" fillRule="evenodd" />
    </svg>
  );
}

/* ─── Arrow Right icon ─── */
function ArrowRightSmall() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <path clipRule="evenodd" d={newSvg.p29ff4d00} fill="#0F0F0F" fillRule="evenodd" />
    </svg>
  );
}

function ArrowRightSmallWhite() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <path clipRule="evenodd" d={newSvg.p29ff4d00} fill="white" fillRule="evenodd" />
    </svg>
  );
}

/* ─── Chip arrow (14px) ─── */
function ChipArrow() {
  return (
    <svg width={14} height={14} viewBox="0 0 14 14" fill="none">
      <path clipRule="evenodd" d={newSvg.p15970100} fill="#0F0F0F" fillRule="evenodd" />
    </svg>
  );
}

/* ─── Message circle icon ─── */
function MessageCircleIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <path clipRule="evenodd" d={newSvg.p11034f00} fill="white" fillRule="evenodd" />
    </svg>
  );
}

/* ─── Filter icon ─── */
function FilterIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <g transform="translate(0, 3.38)">
        <path clipRule="evenodd" d={newSvg.p3cf83b00} fill="#0F0F0F" fillRule="evenodd" />
        <path clipRule="evenodd" d={newSvg.p1fc4a4c0} fill="#0F0F0F" fillRule="evenodd" />
      </g>
    </svg>
  );
}

/* ─── Plus icon ─── */
function PlusIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <path d={newSvg.p83dad00} fill="#0F0F0F" />
    </svg>
  );
}

/* ─── Illustration for purple question card ─── */
function StickerIllustration() {
  return (
    <div className="h-[168px] relative w-full">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[162px] w-[155px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 162">
          <path d={newSvg.pc35d600} fill="white" />
        </svg>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[148px] w-[139px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139 148">
          <path d={newSvg.p30982400} fill="black" />
          <path d={newSvg.p19a11600} fill="black" />
          <path d={newSvg.p3bf22840} fill="black" />
          <path d={newSvg.p1026f200} fill="black" />
          <path d={newSvg.pd6a8800} fill="black" />
          <path d={newSvg.p3deed080} fill="black" />
          <path d={newSvg.p1c0cba00} fill="black" />
          <path d={newSvg.p22546e00} fill="black" />
          <path d={newSvg.p3f669400} fill="black" />
          <path clipRule="evenodd" d={newSvg.p2b027900} fill="black" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

/* ─── Tag component ─── */
function QTag({ label, bg = "#cfe8dc" }: { label: string; bg?: string }) {
  return (
    <div className="flex items-center justify-center px-3 py-1 rounded-xl" style={{ backgroundColor: bg }}>
      <span className="font-['Open_Sans',sans-serif] text-[14px] text-[#0f0f0f] tracking-[-0.056px] leading-[20px] whitespace-nowrap" style={{ fontWeight: 600 }}>
        {label}
      </span>
    </div>
  );
}

/* ─── Image question card for carousels ─── */
function CarouselImageCard({
  image,
  question,
  tags,
  onClick,
}: {
  image: string;
  question: string;
  tags: { label: string; bg?: string }[];
  onClick?: () => void;
}) {
  return (
    <div
      className="bg-white flex flex-col gap-4 items-start overflow-hidden pb-5 rounded-bl-3xl rounded-br-3xl rounded-tr-3xl shrink-0 w-[265px] cursor-pointer group"
      onClick={onClick}
    >
      <div className="h-[180px] w-full relative shrink-0">
        <img alt="" className="absolute inset-0 w-full h-full object-cover" src={image} />
      </div>
      <div className="px-4 w-full">
        <p className="font-['Borna',sans-serif] text-[18px] text-[#0f0f0f] leading-[26px] tracking-[-0.072px] group-hover:underline" style={{ fontWeight: 600 }}>
          {question}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 px-4 w-full">
        {tags.map((t, i) => (
          <QTag key={i} label={t.label} bg={t.bg} />
        ))}
      </div>
    </div>
  );
}

/* ─── Text-only question card for carousels ─── */
function CarouselTextCard({
  question,
  tags,
  bgColor = "white",
  textColor = "#0f0f0f",
  illustration,
  onClick,
}: {
  question: string;
  tags: { label: string; bg?: string }[];
  bgColor?: string;
  textColor?: string;
  illustration?: ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      className="flex flex-col gap-4 items-start pb-5 pt-4 px-4 rounded-bl-3xl rounded-br-3xl rounded-tr-3xl shrink-0 w-[289px] cursor-pointer group"
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      {illustration}
      <p className="font-['Borna',sans-serif] text-[18px] leading-[26px] tracking-[-0.072px] w-full group-hover:underline" style={{ fontWeight: 600, color: textColor }}>
        {question}
      </p>
      <div className="flex flex-wrap gap-2 w-full">
        {tags.map((t, i) => (
          <QTag key={i} label={t.label} bg={t.bg} />
        ))}
      </div>
    </div>
  );
}

/* ─── Full-width featured card ─── */
function FeaturedCard({
  question,
  tags,
  bgColor = "white",
  textColor = "#0f0f0f",
  image,
  illustration,
  onClick,
}: {
  question: string;
  tags: { label: string; bg?: string }[];
  bgColor?: string;
  textColor?: string;
  image?: string;
  illustration?: ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      className="rounded-bl-3xl rounded-br-3xl rounded-tr-3xl w-full overflow-hidden cursor-pointer group"
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      {image && (
        <div className="h-[180px] w-full relative">
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={image} />
        </div>
      )}
      <div className="flex flex-col gap-4 items-start pb-5 pt-4 px-4">
        {illustration}
        <p className="font-['Borna',sans-serif] text-[18px] leading-[26px] tracking-[-0.072px] w-full group-hover:underline" style={{ fontWeight: 600, color: textColor }}>
          {question}
        </p>
        <div className="flex flex-wrap gap-2 w-full">
          {tags.map((t, i) => (
            <QTag key={i} label={t.label} bg={t.bg} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Question list item ─── */
function QuestionListItem({
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
      className="bg-white rounded-tr-xl rounded-bl-xl rounded-br-xl w-full cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex flex-col gap-2 p-3">
        <p className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px] group-hover:underline" style={{ fontWeight: 600 }}>
          {question}
        </p>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <span className="font-['Open_Sans',sans-serif] text-[14px] text-[#454545] leading-[20px] tracking-[-0.056px]" style={{ fontWeight: 400 }}>
              {gender}
            </span>
            <div className="h-[13px] w-0 flex items-center justify-center">
              <div className="rotate-90 w-[13px] h-0">
                <svg className="block w-full" viewBox="0 0 13 1" fill="none" preserveAspectRatio="none">
                  <line stroke="#AFAFAF" x2="13" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
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

/* ─── Topic chip ─── */
function TopicChip({ label }: { label: string }) {
  return (
    <button className="bg-white flex gap-1 items-center px-3 py-2 rounded-full shrink-0 relative">
      <div aria-hidden className="absolute border border-[#0f0f0f] inset-0 pointer-events-none rounded-full" />
      <span className="font-['Open_Sans',sans-serif] text-[14px] text-[#0f0f0f] tracking-[-0.056px] leading-[20px] whitespace-nowrap" style={{ fontWeight: 600 }}>
        {label}
      </span>
      <ChipArrow />
    </button>
  );
}

/* ─── Underline Link component ─── */
function UnderlineLink({ label, to, white = false }: { label: string; to?: string; white?: boolean }) {
  const inner = (
    <div className="flex flex-col gap-1 items-center justify-center py-2">
      <div className="flex gap-1 items-center">
        <span
          className={`font-['Open_Sans',sans-serif] text-[16px] leading-[24px] tracking-[-0.064px] whitespace-nowrap ${white ? "text-white" : "text-[#0f0f0f]"}`}
          style={{ fontWeight: 600 }}
        >
          {label}
        </span>
        {white ? <ArrowRightSmallWhite /> : <ArrowRightSmall />}
      </div>
      <div className="h-0 w-full relative">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 2">
            <line stroke={white ? "white" : "#0F0F0F"} strokeWidth="2" x2="80" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );

  if (to) {
    return <Link to={to}>{inner}</Link>;
  }
  return inner;
}

/* ═══════════════ MAIN PAGE ═══════════════ */
export function QAPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showMore, setShowMore] = useState(false);

  const visibleQuestions = showMore ? MOCK_QUESTIONS : MOCK_QUESTIONS.slice(0, 5);

  const handleSearch = () => {
    // Search is handled inline
  };

  const filtered = search
    ? MOCK_QUESTIONS.filter((q) => q.question.toLowerCase().includes(search.toLowerCase()))
    : visibleQuestions;

  return (
    <>
      {/* ═══ 1. Top Banner ═══ */}
      <section className="bg-[#f2f9f5] relative w-full overflow-hidden">
        
        <div className="relative flex flex-col gap-6 px-3 py-6 z-10">
          <div className="flex flex-col gap-6 items-start w-full">
            {/* Back button */}
            <Button variant="link" icon={<ArrowLeftIcon />} onClick={() => navigate(-1)}>
              Tilbake
            </Button>

            {/* Heading */}
            <h1 className="font-['Borna',sans-serif] text-[30px] text-[#0f0f0f] leading-[36px] tracking-[-0.12px] pt-6 w-full" style={{ fontWeight: 600 }}>
              Spørsmål og svar
            </h1>

            {/* Subheading */}
            <div className="flex flex-col gap-2 w-full">
              <p className="font-['Open_Sans',sans-serif] text-[18px] text-[#0f0f0f] leading-[26px] tracking-[-0.072px]" style={{ fontWeight: 400 }}>
                Spør et ekte menneske som bryr seg.
              </p>
            </div>

            {/* CTA button */}
            <Link to="/still-sporsmal" className="w-full">
              <Button variant="primary" fullWidth icon={<MessageCircleIcon />}>
                Send inn ditt spørsmål
              </Button>
            </Link>
          </div>

          {/* "Sjekk ditt svar" link */}
          <div className="flex flex-col items-start pt-3 w-full">
            <p className="font-['Open_Sans',sans-serif] text-[18px] text-[#0f0f0f] leading-[26px] tracking-[-0.072px]" style={{ fontWeight: 400 }}>
              For deg som allerede har sendt inn et spørsmål:
            </p>
            <Link to="/sjekk-svar">
              <Button variant="link" iconRight={<ArrowRightSmall />}>
                Sjekk ditt svar
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 2. Mest leste spørsmål (Carousel) ═══ */}
      <section className="bg-[#deefe7] flex flex-col gap-5 items-start pl-3 py-10 w-full">
        <div className="pr-3 w-full">
          <h2 className="font-['Borna',sans-serif] text-[24px] text-[#0f0f0f] leading-[32px] tracking-[-0.096px]" style={{ fontWeight: 600 }}>
            Mest leste spørsmål{" "}
          </h2>
        </div>

        {/* Horizontal scroll carousel */}
        <div className="flex gap-3 items-stretch overflow-x-auto -ml-3 pl-3 w-[calc(100%+0.75rem)] -my-2 py-2 pb-2 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <CarouselImageCard
            image={imgFrame3857}
            question="Jeg sliter skikkelig sosialt og aner ikke hva jeg skal gjøre"
            tags={[{ label: "Jente, 16", bg: "#cfe8dc" }, { label: "Psykisk helse og følelser", bg: "#f2f9f5" }]}
            onClick={() => navigate("/sporsmaal-og-svar/9")}
          />
          <CarouselImageCard
            image={imgFrame3856}
            question="Kan jeg ha sex før jeg fyller 16 år?"
            tags={[{ label: "Gutt, 14", bg: "#dbddff" }, { label: "Sex", bg: "#f5f5ff" }]}
            onClick={() => navigate("/sporsmaal-og-svar/7")}
          />
          <CarouselImageCard
            image={imgFrame3858}
            question="Tatt angrepille og er redd for graviditet."
            tags={[{ label: "Jente, 17", bg: "#cfe8dc" }, { label: "Graviditet", bg: "#f2f9f5" }]}
            onClick={() => navigate("/sporsmaal-og-svar/6")}
          />
          <CarouselImageCard
            image={imgFrame3859}
            question="Hvorfor kommer jeg aldri når jeg har orgasmer?"
            tags={[{ label: "Jente, 18", bg: "#cfe8dc" }, { label: "Sex", bg: "#f2f9f5" }]}
            onClick={() => navigate("/sporsmaal-og-svar/8")}
          />
          <div className="shrink-0 w-0" />
        </div>

        {/* Populære tema */}
        <div className="flex flex-col gap-2 items-start pt-4 w-full">
          <h3 className="font-['Borna',sans-serif] text-[20px] text-[#0f0f0f] leading-[28px] tracking-[-0.08px]" style={{ fontWeight: 600 }}>
            Populære tema
          </h3>

          {/* Horizontal topic chips */}
          <div className="flex gap-2 items-center overflow-x-auto w-full pb-1 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <TopicChip label="Helsa di" />
            <TopicChip label="Forelskelse" />
            <TopicChip label="Sex" />
            <TopicChip label="Psykisk helse" />
            <TopicChip label="Utdanning" />
            <TopicChip label="Jobb" />
            <div className="shrink-0 w-0" />
          </div>

          <UnderlineLink label="Alle tema" to="/tema" />
        </div>
      </section>

      {/* ═══ 3. Siste spørsmål (Search & Filter) ═══ */}
      <section className="flex flex-col gap-4 items-start pb-4 pt-6 px-3 w-full">
        <h2 className="font-['Borna',sans-serif] text-[24px] text-[#0f0f0f] leading-[32px] tracking-[-0.096px]" style={{ fontWeight: 600 }}>
          Siste spørsmål
        </h2>
        <p className="font-['Open_Sans',sans-serif] text-[18px] text-[#0f0f0f] leading-[26px] tracking-[-0.072px] max-w-[351px]" style={{ fontWeight: 400 }}>
          Søk i tidligere stilte spørsmål. Eller bruk filteret til å vise kun det som du syns er interessant.
        </p>

        {/* Search field */}
        <div className="flex gap-1.5 items-end w-full">
          <div className="bg-white flex-1 rounded-full relative">
            <div aria-hidden className="absolute border border-[#0f0f0f] inset-0 pointer-events-none rounded-full" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Søk på hva som helst ..."
              className="w-full px-3 py-2.5 bg-transparent rounded-full font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px] placeholder:text-[#676767] outline-none"
              style={{ fontWeight: 400 }}
            />
          </div>
          <Button variant="primary" onClick={handleSearch}>Søk</Button>
        </div>

        {/* Filter button */}
        <Button variant="outline" icon={<FilterIcon />}>Filtrer</Button>
      </section>

      {/* ═══ 4. Question list ═══ */}
      <section className="flex flex-col items-start pb-10 px-3 rounded-t-3xl w-full">
        <div className="flex flex-col gap-3 items-start pb-2 w-full">
          {filtered.map((q) => (
            <QuestionListItem
              key={q.id}
              question={q.question}
              gender={q.gender}
              topic={q.topic}
              day={q.day}
              onClick={() => navigate(`/sporsmaal-og-svar/${q.id}`)}
            />
          ))}
        </div>
        {!search && !showMore && (
          <Button variant="link" icon={<PlusIcon />} onClick={() => setShowMore(true)}>
            Flere spørsmål og svar
          </Button>
        )}
      </section>

      {/* ═══ 5. Featured cards between sections ═══ */}
      <section className="w-full pl-3 pr-8 pb-10 pt-5">
        <div className="flex flex-col gap-2.5">
          <FeaturedCard
            image={imgFrame3859}
            question="Hvorfor kommer jeg aldri når jeg har orgasmer?"
            tags={[{ label: "Jente, 18", bg: "#cfe8dc" }, { label: "Sex", bg: "#f2f9f5" }]}
            onClick={() => navigate("/sporsmaal-og-svar/8")}
          />
          <FeaturedCard
            bgColor="#3c7c5e"
            textColor="white"
            question="Tatt angrepille og er redd for graviditet."
            tags={[{ label: "Jente, 16", bg: "#cfe8dc" }, { label: "Psykisk helse og følelser", bg: "#f2f9f5" }]}
            onClick={() => navigate("/sporsmaal-og-svar/6")}
          />
        </div>
      </section>

      {/* ═══ 6. Spørsmål om sex (Carousel) ═══ */}
      <section className="bg-[#acd7c3] flex flex-col gap-5 items-start pl-3 py-10 w-full">
        <div className="pr-3 w-full">
          <h2 className="font-['Borna',sans-serif] text-[24px] text-[#0f0f0f] leading-[32px] tracking-[-0.096px]" style={{ fontWeight: 600 }}>
            Spørsmål om sex
          </h2>
        </div>

        <div className="flex gap-3 items-stretch overflow-x-auto -ml-3 pl-3 w-[calc(100%+0.75rem)] -my-2 py-2 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <CarouselTextCard
            bgColor="white"
            question="Får ikke penis inn i skjeden, hva gjør vi?"
            tags={[{ label: "Gutt, 16", bg: "#dbddff" }]}
            onClick={() => navigate("/sporsmaal-og-svar/7")}
          />
          <CarouselTextCard
            bgColor="white"
            question="Er det mulig å bli befruktet når man har ubeskyttet sex etter eggløsning?"
            tags={[{ label: "Jente, 16", bg: "#cfe8dc" }]}
            onClick={() => navigate("/sporsmaal-og-svar/6")}
          />
          <CarouselTextCard
            bgColor="white"
            question="Har jeg gjort noe galt når jeg sendte nudes?"
            tags={[{ label: "Gutt, 16", bg: "#dbddff" }]}
            onClick={() => navigate("/sporsmaal-og-svar/5")}
          />
          <CarouselTextCard
            bgColor="white"
            question="Hvordan kan jeg starte med sex? Både jeg og kjæresten vil!"
            tags={[{ label: "Gutt, 17", bg: "#dbddff" }]}
            onClick={() => navigate("/sporsmaal-og-svar/7")}
          />
          <CarouselTextCard
            bgColor="white"
            question="Hvorfor har jeg så vondt under samleie?"
            tags={[{ label: "Jente, 18", bg: "#cfe8dc" }]}
            onClick={() => navigate("/sporsmaal-og-svar/8")}
          />
          <CarouselTextCard
            bgColor="white"
            question="Kjæresten driver og vil ha sex med meg, hva gjør jeg?"
            tags={[{ label: "Gutt, 17", bg: "#dbddff" }]}
            onClick={() => navigate("/sporsmaal-og-svar/7")}
          />
          <div className="shrink-0 w-0" />
        </div>

        <UnderlineLink label="Alle spørsmål om sex" />
      </section>

      {/* ═══ 7. More featured cards ═══ */}
      <section className="w-full pl-3 pr-8 pb-10 pt-5">
        <div className="flex flex-col gap-2.5">
          <FeaturedCard
            bgColor="white"
            question="Jeg sliter skikkelig sosialt og aner ikke hva jeg skal gjøre"
            tags={[{ label: "Jente, 16", bg: "#cfe8dc" }, { label: "Psykisk helse og følelser", bg: "#f2f9f5" }]}
            onClick={() => navigate("/sporsmaal-og-svar/9")}
          />
          <FeaturedCard
            bgColor="#5046e5"
            textColor="white"
            question="Kan jeg ha sex før jeg fyller 16 år?"
            illustration={<StickerIllustration />}
            tags={[{ label: "Gutt, 14", bg: "#f5f5ff" }, { label: "Sex", bg: "#dbddff" }]}
            onClick={() => navigate("/sporsmaal-og-svar/7")}
          />
          <FeaturedCard
            bgColor="#f5f5ff"
            question="Hvorfor kommer jeg aldri når jeg har orgasmer?"
            tags={[{ label: "Gutt, 14", bg: "#d1d3ff" }, { label: "Sex", bg: "#ebebff" }]}
            onClick={() => navigate("/sporsmaal-og-svar/8")}
          />
          <FeaturedCard
            image={imgFrame3858}
            question="Tatt angrepille og er redd for graviditet."
            tags={[{ label: "Jente, 17", bg: "#cfe8dc" }, { label: "Graviditet", bg: "#f2f9f5" }]}
            onClick={() => navigate("/sporsmaal-og-svar/6")}
          />
        </div>
      </section>

      {/* ═══ 8. Spørsmål om kropp (Dark carousel) ═══ */}
      <section className="bg-[#2b5944] flex flex-col gap-5 items-start pl-3 py-10 w-full">
        <div className="pr-3 w-full">
          <h2 className="font-['Borna',sans-serif] text-[24px] text-white leading-[32px] tracking-[-0.096px]" style={{ fontWeight: 600 }}>
            Spørsmål om kropp
          </h2>
        </div>

        <div className="flex gap-3 items-stretch overflow-x-auto -ml-3 pl-3 w-[calc(100%+0.75rem)] -my-2 py-2 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <CarouselTextCard
            bgColor="white"
            question="Renser skjeden seg selv eller må jeg vaske?"
            tags={[{ label: "Jente, 16", bg: "#cfe8dc" }]}
            onClick={() => navigate("/sporsmaal-og-svar/8")}
          />
          <CarouselTextCard
            bgColor="white"
            question="Bør jeg starte med Isotretinoin?"
            tags={[{ label: "Jente, 20", bg: "#cfe8dc" }]}
            onClick={() => navigate("/sporsmaal-og-svar/5")}
          />
          <CarouselTextCard
            bgColor="white"
            question="Er det noe annet eg kan gjøre for å fikse overbitt?"
            tags={[{ label: "14 år", bg: "#ecdfda" }]}
            onClick={() => navigate("/sporsmaal-og-svar/3")}
          />
          <CarouselTextCard
            bgColor="white"
            question="Klumper bak der jeg har hull i ørene"
            tags={[{ label: "Jente, 16", bg: "#cfe8dc" }]}
            onClick={() => navigate("/sporsmaal-og-svar/8")}
          />
          <CarouselTextCard
            bgColor="white"
            question="Jeg var syk og gikk ned i vekt, vil jeg gå opp igjen?"
            tags={[{ label: "Gutt, 16", bg: "#dbddff" }]}
            onClick={() => navigate("/sporsmaal-og-svar/3")}
          />
          <CarouselTextCard
            bgColor="white"
            question="Får alle jenter mennes?"
            tags={[{ label: "Jente, 14", bg: "#cfe8dc" }]}
            onClick={() => navigate("/sporsmaal-og-svar/6")}
          />
          <div className="shrink-0 w-0" />
        </div>

        <UnderlineLink label="Alle spørsmål om kropp" white />
      </section>

      {/* ═══ 9. More featured cards ═══ */}
      <section className="w-full pl-3 pr-8 pb-10 pt-5">
        <div className="flex flex-col gap-2.5">
          <FeaturedCard
            image={imgFrame3856}
            question="Kan jeg ha sex før jeg fyller 16 år?"
            tags={[{ label: "Gutt, 14", bg: "#dbddff" }, { label: "Sex", bg: "#f5f5ff" }]}
            onClick={() => navigate("/sporsmaal-og-svar/7")}
          />
          <FeaturedCard
            bgColor="#deefe7"
            question="Hvorfor kommer jeg aldri når jeg har orgasmer?"
            tags={[{ label: "Jente, 16", bg: "#89c6aa" }, { label: "Psykisk helse og følelser", bg: "#cfe8dc" }]}
            onClick={() => navigate("/sporsmaal-og-svar/8")}
          />
        </div>
      </section>
    </>
  );
}