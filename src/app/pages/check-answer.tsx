import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowRightSmallIcon, ArrowLeftIcon } from "../components/shared";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CARD_IMG_1 as imgCard1, CARD_IMG_2 as imgCard2, CARD_IMG_3 as imgCard3, CARD_IMG_4 as imgCard4 } from "../data/images";
import svgPaths from "../../imports/svg-2eey3bky2c";
import Paragraph from "../../imports/Paragraph";
import YourQuestion from "../../imports/YourQuestion";
import WithdrawQuestion from "../../imports/WithdrawQuestion";

/* ─── Most-read question cards ─── */
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

export function CheckAnswer() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [isPending, setIsPending] = useState(false);

  const RANDOM_IDS = ["3", "5", "6", "7", "8", "9"];

  const handleSubmit = () => {
    if (!code.trim()) return;
    if (code.trim().toLowerCase() === "svar-ikke-klart") {
      setIsPending(true);
    } else {
      const randomId = RANDOM_IDS[Math.floor(Math.random() * RANDOM_IDS.length)];
      navigate(`/sporsmaal-og-svar/${randomId}`);
    }
  };

  return (
    <div className="font-['Open_Sans',sans-serif]">
      {/* ═══ Back link + Title + Ingress + Search ═══ */}
      <div className="w-full">
        <div className="flex flex-col gap-6 items-start pb-6 px-3">
          {/* Back link */}
          <div className="flex items-center w-full">
            <div className="flex flex-col items-start w-full pt-6">
              <Link
                to="/"
                className="inline-flex flex-col gap-1 items-start py-2 group"
              >
                <div className="flex gap-1 items-center btn-icon-inherit">
                  <ArrowLeftIcon />
                  <p
                    className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px] whitespace-nowrap"
                    style={{ fontWeight: 600 }}
                  >
                    Tilbake
                  </p>
                </div>
                <div className="h-[2px] w-full bg-[#0f0f0f]" />
              </Link>
            </div>
          </div>

          {/* Heading */}
          <div className="flex items-center w-full">
            <div className="flex flex-col items-start w-full">
              <h1
                className="font-['Borna',sans-serif] text-[30px] text-[#0f0f0f] leading-[36px] tracking-[-0.12px] w-full"
                style={{ fontWeight: 600 }}
              >
                Sjekk svaret ditt
              </h1>
            </div>
          </div>

          {/* Ingress */}
          <div className="flex items-start w-full">
            <p
              className="flex-1 font-['Open_Sans',sans-serif] text-[18px] text-[#0f0f0f] leading-[26px] tracking-[-0.072px] max-w-[351px]"
              style={{ fontWeight: 400 }}
            >
              Skriv inn din personlige kode for å se svaret på spørsmålet ditt.
            </p>
          </div>

          {/* Search input */}
          <div className="flex flex-col items-start pb-3 w-full">
            <div className="flex flex-col items-start w-full">
              {/* Label */}
              <div className="flex gap-1 items-start pb-2 w-full">
                <p
                  className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px] whitespace-nowrap"
                  style={{ fontWeight: 600 }}
                >
                  Din personlige kode
                </p>
              </div>
            </div>
            {/* Input + Button row */}
            <div className="flex gap-1.5 items-end w-full">
              <div className="flex-1 relative">
                <div
                  aria-hidden
                  className="absolute border border-[#0f0f0f] inset-0 pointer-events-none rounded-full"
                />
                <div className="flex items-start px-3 py-2.5 w-full relative">
                  <div className="flex flex-1 items-start justify-between min-h-px min-w-px">
                    <input
                      type="text"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleSubmit();
                      }}
                      placeholder="tre-norske-ord"
                      className="flex-1 font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px] bg-transparent outline-none placeholder:text-[#676767]"
                      style={{ fontWeight: 400 }}
                    />
                    {code && (
                      <button
                        type="button"
                        onClick={() => setCode("")}
                        className="shrink-0 size-6 flex items-center justify-center cursor-pointer"
                        aria-label="Tøm søkefelt"
                      >
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d={svgPaths.p2f9c6900}
                            fill="#676767"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-[#2b5944] flex gap-2 items-center min-h-[44px] px-5 py-2.5 rounded-full shrink-0 cursor-pointer hover:bg-[#3c7c5e] active:bg-[#1b372a] transition-colors"
              >
                <p
                  className="font-['Open_Sans',sans-serif] text-[16px] text-white leading-[24px] tracking-[-0.064px] whitespace-nowrap"
                  style={{ fontWeight: 600 }}
                >
                  Sjekk svar
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ Your Question + Withdraw (pending only) ═══ */}
      {isPending && (
        <>
          <YourQuestion />
          <WithdrawQuestion />
        </>
      )}

      {/* ═══ Waiting for Answer Banner ═══ */}
      {isPending && (
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
      )}

      {/* ═══ Most Read Questions Carousel ═══ */}
      {isPending ? (
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
                        d={svgPaths.p15970100}
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
      ) : (
        <div className="px-3">
          <Paragraph />
        </div>
      )}
    </div>
  );
}