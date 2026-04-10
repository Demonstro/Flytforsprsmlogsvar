import { useState } from "react";
import { useLocation, Link } from "react-router";
import { ArrowRightSmallIcon } from "../components/shared";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import confirmSvgPaths from "../../imports/svg-9t1dmobbei";
import imgCard1 from "figma:asset/94badd35d44dd292aecf82e1041ee9b4fa8484c8.png";
import imgCard2 from "figma:asset/9ace3e9c006411cfde0d1fb6f41373bcaf19bec2.png";
import imgCard3 from "figma:asset/d9d46ca57210dba31b9d1ceed20995f95a661508.png";
import imgCard4 from "figma:asset/5fd5c2aab47c5d88c6eda0278ed510bb43f14577.png";

/* ─── Most-read question cards for confirmation carousel ─── */
const MOST_READ_QUESTIONS = [
  {
    id: "6",
    title: "Jeg sliter skikkelig sosialt og aner ikke hva jeg skal gjøre",
    img: imgCard1,
    gender: "Jente, 16",
    genderBg: "#cfe8dc",
    topic: "Psykisk helse og følelser",
    topicBg: "#f2f9f5",
  },
  {
    id: "7",
    title: "Kan jeg ha sex før jeg fyller 16 år?",
    img: imgCard2,
    gender: "Gutt, 14",
    genderBg: "#dbddff",
    topic: "Sex",
    topicBg: "#f5f5ff",
  },
  {
    id: "8",
    title: "Tatt angrepille og er redd for graviditet.",
    img: imgCard3,
    gender: "Jente, 17",
    genderBg: "#cfe8dc",
    topic: "Graviditet",
    topicBg: "#f2f9f5",
  },
  {
    id: "9",
    title: "Hvorfor kommer jeg aldri når jeg har orgasmer?",
    img: imgCard4,
    gender: "Jente, 18",
    genderBg: "#cfe8dc",
    topic: "Sex",
    topicBg: "#f2f9f5",
  },
];

const POPULAR_TOPICS = [
  { label: "Helsa di", slug: "kategori/kropp-helse-sex" },
  { label: "Forelskelse", slug: "kategori/folelser-identitet-forelskelse" },
  { label: "Sex", slug: "kategori/kropp-helse-sex" },
  { label: "Psykisk helse", slug: "kategori/folelser-identitet-forelskelse" },
  { label: "Utdanning", slug: "kategori/skole-utdanning-jobb" },
  { label: "Jobb", slug: "kategori/skole-utdanning-jobb" },
];

export function SubmitConfirmation() {
  const location = useLocation();

  /*
   * Read submitted-question data exactly ONCE on mount.
   * Priority: location.state (from navigate()) → sessionStorage (fallback).
   * Using lazy useState ensures the value survives React strict-mode remounts.
   */
  const [resolved] = useState<{
    personalCode: string;
    questionText: string;
  } | null>(() => {
    // 1. Try location.state first
    const locState = location.state as {
      personalCode?: string;
      questionText?: string;
    } | null;
    if (locState?.personalCode) {
      return {
        personalCode: locState.personalCode,
        questionText: locState.questionText ?? "",
      };
    }
    // 2. Fallback to sessionStorage
    try {
      const stored = sessionStorage.getItem("ung-submitted-question");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed?.personalCode) {
          return {
            personalCode: parsed.personalCode,
            questionText: parsed.questionText ?? "",
          };
        }
      }
    } catch {
      /* ignore */
    }
    return null;
  });

  if (!resolved) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 font-['Open_Sans',sans-serif]">
        <div className="text-center flex flex-col gap-4">
          <p className="text-[18px]" style={{ fontWeight: 600 }}>
            Ingen innsendt spørsmål funnet.
          </p>
          <Link
            to="/still-sporsmal"
            className="text-[#2b5944] underline text-[16px]"
            style={{ fontWeight: 600 }}
          >
            Gå til skjemaet
          </Link>
        </div>
      </div>
    );
  }

  const { personalCode, questionText } = resolved;

  return (
    <ConfirmationContent
      personalCode={personalCode}
      questionText={questionText}
    />
  );
}

function ConfirmationContent({
  personalCode,
  questionText,
}: {
  personalCode: string;
  questionText: string;
}) {
  const [questionAccordionOpen, setQuestionAccordionOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = personalCode;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* silent fail */
    }
  };

  return (
    <div className="font-['Open_Sans',sans-serif]">
      {/* ═══ Title + Ingress ═══ */}
      <div className="w-full">
        <div className="flex flex-col gap-6 items-start px-3">
          <div className="flex items-center w-full">
            <div className="flex flex-col items-start w-full pt-6">
              <h1
                className="font-['Borna',sans-serif] text-[30px] text-[#0f0f0f] leading-[36px] tracking-[-0.12px] w-full"
                style={{ fontWeight: 600 }}
              >
                Takk for spørsmålet ditt!
              </h1>
            </div>
          </div>
          <div className="flex items-start w-full">
            <p
              className="flex-1 font-['Open_Sans',sans-serif] text-[18px] text-[#0f0f0f] leading-[26px] tracking-[-0.072px] max-w-[351px]"
              style={{ fontWeight: 400 }}
            >
              Vi svarer deg så fort vi kan, vanligvis i løpet av et døgn. Men
              det kan hende du må vente opp til tre dager.
            </p>
          </div>
        </div>
      </div>

      {/* ═══ Personal Code ═══ */}
      <div className="w-full">
        <div className="flex flex-col items-start pb-6 px-3">
          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col items-start pb-1 pt-8 w-full">
              <p
                className="font-['Borna',sans-serif] text-[18px] text-[#0f0f0f] leading-[26px] tracking-[-0.072px] w-full"
                style={{ fontWeight: 600 }}
              >
                Din personlige kode
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start w-full">
            <div className="flex items-start py-3 w-full">
              <p
                className="flex-1 font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]"
                style={{ fontWeight: 400 }}
              >
                For å{" "}
                <Link
                  to="/sjekk-svar"
                  className="underline text-[#2b5944]"
                  style={{ fontWeight: 600 }}
                >
                  sjekke svaret ditt
                </Link>{" "}
                trenger du denne koden. Ta vare på den ved å skrive den ned, ta
                en skjermdump eller kopiere den til et sted du lett finner igjen.
              </p>
            </div>
          </div>
          {/* Code + Copy button */}
          <div className="flex flex-col gap-2 items-start py-4 w-full">
            <div className="bg-[#acd7c3] w-full rounded-[4px]">
              <div className="flex items-center justify-center px-4 py-2.5">
                <p
                  className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]"
                  style={{ fontWeight: 600 }}
                >
                  {personalCode}
                </p>
              </div>
            </div>
            <button
              type="button"
              className="flex gap-2 items-center min-h-[44px] px-5 py-2.5 rounded-full relative cursor-pointer"
              onClick={handleCopy}
            >
              <div
                aria-hidden
                className="absolute border border-[#0f0f0f] inset-0 pointer-events-none rounded-full"
              />
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                className="shrink-0"
              >
                <path
                  clipRule="evenodd"
                  d={confirmSvgPaths.p1b0e44d0}
                  fill="#0F0F0F"
                  fillRule="evenodd"
                />
                <path d={confirmSvgPaths.p38b87000} fill="#0F0F0F" />
              </svg>
              <p
                className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px] whitespace-nowrap"
                style={{ fontWeight: 600 }}
              >
                {copied ? "Kopiert!" : "Kopier"}
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* ═══ Your Question Accordion ═══ */}
      <div className="w-full">
        <div className="flex flex-col items-start pb-6 px-3">
          <div className="bg-white rounded-[12px] w-full">
            <button
              type="button"
              className="flex gap-4 items-center p-3 w-full cursor-pointer"
              onClick={() => setQuestionAccordionOpen((v) => !v)}
            >
              <p
                className="flex-1 font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px] text-left"
                style={{ fontWeight: 600 }}
              >
                Spørsmålet ditt
              </p>
              <div
                className={`shrink-0 transition-transform ${questionAccordionOpen ? "rotate-180" : ""}`}
              >
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path
                    clipRule="evenodd"
                    d={confirmSvgPaths.p2b042d70}
                    fill="#0F0F0F"
                    fillRule="evenodd"
                    stroke="#0F0F0F"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>
            </button>
            {questionAccordionOpen && (
              <div className="px-3 pb-3">
                <p
                  className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]"
                  style={{ fontWeight: 400 }}
                >
                  {questionText}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ═══ Waiting for Answer Banner ═══ */}
      <div className="w-full">
        <div className="flex flex-col items-start px-3">
          <div className="bg-[#dbddff] rounded-[8px] w-full overflow-clip">
            <div className="flex flex-col gap-5 items-start px-3 py-10">
              <div className="flex flex-col items-start w-full">
                <p
                  className="font-['Borna',sans-serif] text-[24px] text-[#0f0f0f] leading-[32px] tracking-[-0.096px] w-full"
                  style={{ fontWeight: 600 }}
                >
                  Mens du venter på svar
                </p>
              </div>
              {/* Links */}
              <div className="flex flex-col items-start">
                <Link
                  to="/sporsmaal-og-svar"
                  className="flex flex-col gap-1 items-center justify-center py-2 group"
                >
                  <div className="flex gap-1 items-center">
                    <p
                      className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]"
                      style={{ fontWeight: 600 }}
                    >
                      Se alle spørsmål og svar
                    </p>
                    <ArrowRightSmallIcon />
                  </div>
                  <div className="h-[2px] w-full bg-[#0f0f0f]" />
                </Link>
                <Link
                  to="/"
                  className="flex flex-col gap-1 items-center justify-center py-2 group"
                >
                  <div className="flex gap-1 items-center">
                    <p
                      className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]"
                      style={{ fontWeight: 600 }}
                    >
                      Sjekk ut forsiden
                    </p>
                    <ArrowRightSmallIcon />
                  </div>
                  <div className="h-[2px] w-full bg-[#0f0f0f]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ Most Read Questions Carousel ═══ */}
      <div className="flex flex-col gap-5 items-start pl-3 py-10 w-full">
        <div className="w-full pr-3">
          <p
            className="font-['Borna',sans-serif] text-[24px] text-[#0f0f0f] leading-[32px] tracking-[-0.096px] w-full"
            style={{ fontWeight: 600 }}
          >
            Mest leste spørsmål
          </p>
        </div>
        {/* Cards row */}
        <div className="flex gap-3 items-stretch w-[calc(100%+0.75rem)] -ml-3 pl-3 overflow-x-auto scrollbar-hide -my-2 py-2">
          {MOST_READ_QUESTIONS.map((q) => (
            <Link
              key={q.id}
              to={`/sporsmaal-og-svar/${q.id}`}
              className="shrink-0 w-[265px] group flex"
            >
              <div className="bg-white flex flex-col gap-4 items-start overflow-clip pb-5 rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] w-full h-full">
                <div className="h-[180px] relative w-full">
                  <ImageWithFallback
                    alt=""
                    className="absolute inset-0 object-cover size-full"
                    src={q.img}
                  />
                </div>
                <div className="w-full px-4">
                  <p
                    className="font-['Borna',sans-serif] text-[18px] text-[#0f0f0f] leading-[26px] tracking-[-0.072px] w-full group-hover:underline"
                    style={{ fontWeight: 600 }}
                  >
                    {q.title}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 items-center px-4">
                  <div
                    className="flex items-center justify-center px-3 py-1 rounded-[12px]"
                    style={{ backgroundColor: q.genderBg }}
                  >
                    <p
                      className="font-['Open_Sans',sans-serif] text-[14px] text-[#0f0f0f] leading-[20px] tracking-[-0.056px] whitespace-nowrap"
                      style={{ fontWeight: 600 }}
                    >
                      {q.gender}
                    </p>
                  </div>
                  <div
                    className="flex items-center justify-center px-3 py-1 rounded-[12px]"
                    style={{ backgroundColor: q.topicBg }}
                  >
                    <p
                      className="font-['Open_Sans',sans-serif] text-[14px] text-[#0f0f0f] leading-[20px] tracking-[-0.056px] whitespace-nowrap"
                      style={{ fontWeight: 600 }}
                    >
                      {q.topic}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          <div className="shrink-0 w-0" />
        </div>

        {/* ═══ Popular Topics ═══ */}
        <div className="flex flex-col gap-4 items-start py-4 w-full">
            <div className="flex flex-col items-start w-full">
              <p
                className="font-['Borna',sans-serif] text-[20px] text-[#0f0f0f] leading-[28px] tracking-[-0.08px] w-full"
                style={{ fontWeight: 600 }}
              >
                Populære tema
              </p>
            </div>
            {/* Chips row */}
            <div className="flex items-start w-full overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 items-center">
                {POPULAR_TOPICS.map((t) => (
                  <Link
                    key={t.label}
                    to={`/${t.slug}`}
                    className="bg-white flex gap-1 items-center px-3 py-2 rounded-full relative shrink-0"
                  >
                    <div
                      aria-hidden
                      className="absolute border border-[#0f0f0f] inset-0 pointer-events-none rounded-full"
                    />
                    <p
                      className="font-['Open_Sans',sans-serif] text-[14px] text-[#0f0f0f] leading-[20px] tracking-[-0.056px] whitespace-nowrap"
                      style={{ fontWeight: 600 }}
                    >
                      {t.label}
                    </p>
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      fill="none"
                      className="shrink-0"
                    >
                      <path
                        clipRule="evenodd"
                        d={confirmSvgPaths.p15970100}
                        fill="#0F0F0F"
                        fillRule="evenodd"
                      />
                    </svg>
                  </Link>
                ))}
                <div className="shrink-0 w-0" />
              </div>
            </div>
            {/* Alle tema link */}
            <Link
              to="/tema"
              className="inline-flex flex-col gap-1 items-start py-2 group"
            >
              <div className="flex gap-1 items-center">
                <p
                  className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]"
                  style={{ fontWeight: 600 }}
                >
                  Alle tema
                </p>
                <ArrowRightSmallIcon />
              </div>
              <div className="h-[2px] w-full bg-[#0f0f0f]" />
            </Link>
        </div>
      </div>
    </div>
  );
}