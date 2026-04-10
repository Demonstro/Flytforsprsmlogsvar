import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "../components/button";
import { MOCK_QUESTIONS } from "../components/shared";

/* ─── Figma-imported images ─── */
import imgFrame3857 from "figma:asset/bc70480499797737329ee7a80c9c41a57782ed55.png";
import imgFrame3858 from "figma:asset/cec9e257a1a9e2bbe14b8ec0364e2116565fc240.png";
import imgFrame3859 from "figma:asset/714070cf21165cf8e24cbc1b46666049709d698d.png";
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

import svgPaths from "../../imports/svg-9a2j5szz9x";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

/* ─── SVG Icons ─── */
function ArrowLeftIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <path clipRule="evenodd" d={svgPaths.p12cd1d80} fill="#0F0F0F" fillRule="evenodd" />
      <path clipRule="evenodd" d={svgPaths.p9576200} fill="#0F0F0F" fillRule="evenodd" />
    </svg>
  );
}

function ChipArrow() {
  return (
    <svg width={14} height={14} viewBox="0 0 14 14" fill="none">
      <path clipRule="evenodd" d={svgPaths.p15970100} fill="#0F0F0F" fillRule="evenodd" />
    </svg>
  );
}

function ArrowRightSmall() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <path clipRule="evenodd" d={svgPaths.p29ff4d00} fill="#0F0F0F" fillRule="evenodd" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <g transform="translate(0, 3.38)">
        <path clipRule="evenodd" d={svgPaths.p3cf83b00} fill="#0F0F0F" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p1fc4a4c0} fill="#0F0F0F" fillRule="evenodd" />
      </g>
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <path d={svgPaths.p83dad00} fill="#0F0F0F" />
    </svg>
  );
}

/* ─── Topic Card (image + title + description) ─── */
function TopicCard({
  image,
  title,
  description,
  onClick,
}: {
  image: string;
  title: string;
  description: string;
  onClick?: () => void;
}) {
  return (
    <div
      className="bg-white flex flex-col gap-4 items-start overflow-hidden pb-5 rounded-xl shrink-0 w-[265px] cursor-pointer group"
      onClick={onClick}
    >
      <div className="h-[180px] w-full relative shrink-0">
        <ImageWithFallback alt="" className="absolute inset-0 w-full h-full object-cover" src={image} />
      </div>
      <div className="flex flex-col gap-4 px-4 w-full">
        <p className="font-['Borna',sans-serif] text-[18px] text-[#0f0f0f] leading-[26px] tracking-[-0.072px] group-hover:underline" style={{ fontWeight: 600 }}>
          {title}
        </p>
        <p className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]" style={{ fontWeight: 400 }}>
          {description}
        </p>
      </div>
    </div>
  );
}

/* ─── Carousel Section ─── */
function CarouselSection({
  heading,
  bgColor = "transparent",
  cards,
}: {
  heading: string;
  bgColor?: string;
  cards: { image: string; title: string; description: string; slug?: string }[];
}) {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col gap-5 items-start pl-3 py-5 w-full" style={{ backgroundColor: bgColor }}>
      <div className="pr-3 w-full">
        <h2 className="font-['Borna',sans-serif] text-[24px] text-[#0f0f0f] leading-[32px] tracking-[-0.096px]" style={{ fontWeight: 600 }}>
          {heading}
        </h2>
      </div>
      <div
        className="flex gap-3 items-stretch overflow-x-auto -ml-3 pl-3 w-[calc(100%+0.75rem)] -my-2 py-2 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {cards.map((card, i) => (
          <TopicCard
            key={i}
            image={card.image}
            title={card.title}
            description={card.description}
            onClick={() => navigate(card.slug ? `/kategori/${card.slug}` : "#")}
          />
        ))}
        <div className="shrink-0 w-0" />
      </div>
    </section>
  );
}

/* ─── Breadcrumb Chip ─── */
function BreadcrumbChip({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button
      className="bg-white flex gap-1 items-center px-3 py-2 rounded-full shrink-0 relative"
      onClick={onClick}
    >
      <div aria-hidden className="absolute border border-[#0f0f0f] inset-0 pointer-events-none rounded-full" />
      <span className="font-['Open_Sans',sans-serif] text-[14px] text-[#0f0f0f] tracking-[-0.056px] leading-[20px] whitespace-nowrap" style={{ fontWeight: 600 }}>
        {label}
      </span>
      <ChipArrow />
    </button>
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

/* ─── Carousel data ─── */
const CAROUSEL_SECTIONS = [
  {
    heading: "Kropp, helse og sex",
    bgColor: "transparent",
    cards: [
      { image: imgFrame3857, title: "Sex", description: "Alt om sex, prevensjon, kjønnssykdommer og graviditet.", slug: "sex" },
      { image: imgFrame3858, title: "Kropp", description: "Spørsmål om kuk og fitte, mensen, pubertet, tannhelse og alt mulig annet kroppslig.", slug: "kropp" },
      { image: imgFrame3859, title: "Rusmidler", description: "Fylla, dop, snus og røyk og andre ting som gir rus.", slug: "rusmidler" },
      { image: imgFrame3860, title: "Helsa di", description: "Trening, kosthold, søvn, sykdom og andre ting som har med helsa di å gjøre.", slug: "helsa-di" },
    ],
  },
  {
    heading: "Følelser, identitet og forelskelse",
    bgColor: "#cfe8dc",
    cards: [
      { image: imgFrame3861, title: "Psykisk helse og følelser", description: "Spørsmål om mental helse, psykiske vansker, mobbing og ting som foregår i hodet.", slug: "psykisk-helse" },
      { image: imgFrame3862, title: "Selvtillit og identitet", description: "Hvem er du? Spørsmål om å være homo, krysskulturell, i feil kropp eller bare litt annerledes.", slug: "selvtillit-identitet" },
      { image: imgFrame3863, title: "Forelskelse", description: "Alt du lurer på om den første forelskelsen, sjalusi, kjærlighet og det å være i et forhold.", slug: "forelskelse" },
    ],
  },
  {
    heading: "Skole, utdanning og jobb",
    bgColor: "transparent",
    cards: [
      { image: imgFrame3864, title: "Utdanning", description: "Skolevalg og veien videre, stipend og alt som har med utdanningen din å gjøre.", slug: "utdanning" },
      { image: imgFrame3865, title: "Skolehverdag", description: "Hjelp til lekser, eksamen og alt annet i skolehverdagen din.", slug: "skolehverdag" },
      { image: imgFrame3866, title: "Jobb", description: "Spørsmål om å finne seg jobb, lønn, rettigheter og karrieren videre.", slug: "jobb" },
    ],
  },
  {
    heading: "Samfunn, lover og rettigheter",
    bgColor: "#ecdfda",
    cards: [
      { image: imgFrame3867, title: "Kriminalitet", description: "Spørsmål om overgrep, vold og andre kriminelle handlinger.", slug: "kriminalitet" },
      { image: imgFrame3868, title: "Demokrati og valg", description: "Alt om politikk, det å være førstegangsvelger og samfunnet vårt.", slug: "demokrati-valg" },
      { image: imgFrame3869, title: "Klima og miljø", description: "Miljøvern, bærekraft og hvordan bidra til en bedre fremtid.", slug: "klima-miljo" },
      { image: imgFrame3870, title: "Lov og rett", description: "Hva du har lov til og ikke, konfliktløsing, likestilling og rettighetene dine.", slug: "lov-og-rett" },
    ],
  },
  {
    heading: "Familie, venner og fritid",
    bgColor: "transparent",
    cards: [
      { image: imgFrame3871, title: "Familie", description: "Søsken, foreldre, oppdragelse, skilsmisse, krangling og alt som hører familielivet til.", slug: "familie" },
      { image: imgFrame3872, title: "Fritid", description: "Aktiviteter, hobbyer, interesser og hvordan du tilbringer tiden din.", slug: "fritid" },
      { image: imgFrame3873, title: "Økonomien din", description: "Alt om å tjene penger, spare dem, bruke dem, skatte av dem eller å ikke ha dem.", slug: "okonomi" },
    ],
  },
];

const BREADCRUMB_CHIPS = [
  "Kropp, helse og sex",
  "Følelser, identitet og forelskelse",
  "Skole, utdanning og jobb",
  "Samfunn, lover og rettigheter",
  "Familie, venner og fritid",
];

/* ═══════════════ MAIN PAGE ═══════════════ */
export function AlleTemaPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const visibleQuestions = showMore ? MOCK_QUESTIONS : MOCK_QUESTIONS.slice(0, 5);
  const filtered = search
    ? MOCK_QUESTIONS.filter((q) => q.question.toLowerCase().includes(search.toLowerCase()))
    : visibleQuestions;

  return (
    <>
      {/* ═══ 1. Title Section ═══ */}
      <section className="w-full">
        <div className="flex flex-col items-center px-3 pt-2 pb-4">
          <div className="flex flex-col items-start max-w-[600px] w-full">
            <Button variant="link" icon={<ArrowLeftIcon />} onClick={() => navigate(-1)}>
              Tilbake
            </Button>
            <h1 className="font-['Borna',sans-serif] text-[30px] text-[#0f0f0f] leading-[36px] tracking-[-0.12px] pt-6 w-full" style={{ fontWeight: 600 }}>
              Alle tema
            </h1>
          </div>
        </div>
      </section>

      {/* ═══ 2. Breadcrumb Chips ═══ */}
      <section className="w-full pl-3">
        <div
          className="flex gap-2 items-center overflow-x-auto w-full pb-1 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {BREADCRUMB_CHIPS.map((label, i) => (
            <BreadcrumbChip key={i} label={label} />
          ))}
          <div className="shrink-0 w-0" />
        </div>
      </section>

      {/* ═══ 3. Carousel Sections ═══ */}
      {CAROUSEL_SECTIONS.map((section, i) => (
        <CarouselSection
          key={i}
          heading={section.heading}
          bgColor={section.bgColor}
          cards={section.cards}
        />
      ))}

      {/* ═══ 4. Siste spørsmål (Search & Filter) ═══ */}
      <section className="flex flex-col gap-4 items-start pb-4 pt-6 px-3 w-full">
        <h2 className="font-['Borna',sans-serif] text-[24px] text-[#0f0f0f] leading-[32px] tracking-[-0.096px]" style={{ fontWeight: 600 }}>
          Siste spørsmål
        </h2>

        <div className="flex gap-1.5 items-end w-full">
          <div className="bg-white flex-1 rounded-full relative">
            <div aria-hidden className="absolute border border-[#0f0f0f] inset-0 pointer-events-none rounded-full" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Søk i spørsmål og svar"
              className="w-full px-3 py-2.5 bg-transparent rounded-full font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px] placeholder:text-[#676767] outline-none"
              style={{ fontWeight: 400 }}
            />
          </div>
          <Button variant="primary">Søk</Button>
        </div>

        <Button variant="outline" icon={<FilterIcon />}>Filtrer</Button>
      </section>

      {/* ═══ 5. Question list ═══ */}
      <section className="flex flex-col items-start pb-10 px-3 w-full">
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
          <Link to="/sporsmaal-og-svar" className="inline-flex flex-col gap-1 items-center justify-center py-2">
            <div className="flex gap-1 items-center">
              <ArrowRightSmall />
              <span className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px] whitespace-nowrap" style={{ fontWeight: 600 }}>
                Alle spørsmål og svar
              </span>
            </div>
            <div className="h-0 w-full relative">
              <div className="absolute inset-[-2px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 2">
                  <line stroke="#0F0F0F" strokeWidth="2" x2="120" y1="1" y2="1" />
                </svg>
              </div>
            </div>
          </Link>
        )}
      </section>
    </>
  );
}