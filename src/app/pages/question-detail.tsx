import { useParams, Link, useNavigate } from "react-router";
import { useState, useRef, useEffect } from "react";
import { ArrowLeftIcon, MOCK_QUESTIONS } from "../components/shared";
import { Button } from "../components/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import svgPaths from "../../imports/svg-hy6koidlvz";

/* ─── Extended question data for detail view ─── */
const DETAIL_DATA: Record<
  string,
  {
    heroImage?: string;
    fullQuestion: string[];
    answerer: string;
    answerDate: string;
    answerParagraphs: string[];
    relatedArticles: { title: string; image: string }[];
  }
> = {
  "7": {
    heroImage:
      "https://images.unsplash.com/photo-1623869111118-0d09e74fe9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuYWdlJTIwY291cGxlJTIwcm9tYW50aWMlMjByZWxhdGlvbnNoaXB8ZW58MXx8fHwxNzczMDY2MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    fullQuestion: [
      "Hei. Jeg har bursdag veldig sent på året (8 november) og i 2025 fyller jeg 16. Jeg har kjæreste på samme alder, bare at han har bursdag i starten av januar. Vi har jo så klart lyst til å ha sex. ",
      "Er det sånn at det er det året jeg fyller 16 at jeg kan ha sex, eller må jeg ha fylt 16? Siden hvis jeg må fylle 16, er det jo litt dumt, siden hun snart blit 16 :( og litt uretferdig siden jeg da må vente. ",
      "Så, kan jeg ha sex det året jeg fyller 16, selv om jeg er 15, altså i 2025?",
    ],
    answerer: "Helsesykepleier",
    answerDate: "I dag",
    answerParagraphs: [
      "Hei!",
      "Så fint at du skriver til oss om dette! Det er viktig å sette seg inn i hva den seksuelle lavalderen er og hva den innebærer før man bestemmer seg for å ha sex.",
      "Du har rett i at den seksuelle lavalderen i Norge er 16 år. Denne loven skal først og fremst beskytte barn og unge mot seksuelle overgrep fra voksne. I prinsippet betyr det at dersom en person over 16 år har sex med en person under 16 år, kan han/hun straffes for det.",
      "Det er likevel sånn at det finnes en tilleggsregel som sier at straffen kan falle bort dersom de som har sex er ca like i alder og utvikling. Politiet må også få kjennskap til forholdet dersom en straff skal vurderes. Det må altså forekomme en anmeldelse. Det er dermed ikke sånn at det nødvendigvis blir sett på som et lovbrudd dersom et par som er 15 og 16 år har frivillig sex.",
      "Jeg legger ved et par artikler om seksuell lavalder som jeg håper du vil lese.",
      "Ønsker deg alt godt!",
    ],
    relatedArticles: [
      {
        title: "Sex og aldersgrenser - hva er lov?",
        image:
          "https://images.unsplash.com/photo-1615852761522-0c5a1bacd15e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXglMjBlZHVjYXRpb24lMjBhZ2UlMjBjb25zZW50JTIweY91dGg8ZW58MXx8fHwxNzczMDY2Mzg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        title: "Hva er samtykke til sex?",
        image:
          "https://images.unsplash.com/photo-1530901809547-7998f0297312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGNvdXBsZSUyMGhvbGRpbmclMjBoYW5kcyUyMGNvbnNlbnR8ZW58MXx8fHwxNzczMDY2Mzg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
  },
};

/* Fallback detail data for questions without specific detail */
const DEFAULT_DETAIL = {
  fullQuestion: [] as string[],
  answerer: "Ung.no svarer",
  answerDate: "I dag",
  answerParagraphs: [] as string[],
  relatedArticles: [] as { title: string; image: string }[],
};

/* ─── Tag colors by gender ─── */
function tagColor(gender: string) {
  if (gender.toLowerCase().startsWith("jente")) return "#cfe8dc";
  if (gender.toLowerCase().startsWith("gutt")) return "#dbddff";
  return "#f5f3f0";
}

/* ─── Answerer descriptions (teenager-friendly) ─── */
const ANSWERER_DESCRIPTIONS: Record<string, string> = {
  "Spørretjenesten, ung.no":
    "Vi som jobber med å administrere spørretjenesten i ung.no.",
  Adopsjonsrådgiver:
    "Rådgivere som jobber med adopsjonsspørsmål i Bufdir.",
  Alarmtelefonen:
    "Fagpersoner som ellers jobber med å ta imot henvendelser på Alarmtelefonen.",
  Amathea:
    "Fagpersoner som ellers jobber med å svare på spørsmål om graviditet og abort i Amathea.",
  Arbeidstilsynet:
    "Fagpersoner som ellers jobber med arbeidsrettigheter, -plikter og -kontrakter i Arbeidstilsynet.",
  "Dopingkontakten eller Steroideprosjektet":
    "Fagpersoner som ellers jobber i Dopingkontakten eller Steroideprosjektet med spørsmål om trening og virkning og bivirkning av ulike prestasjonsfremmende preparater.",
  Ernæringsfysiolog:
    "Ernæringsfysiologer gir råd om kosthold og levevaner.",
  Mangfoldsrådgiver:
    "Fagpersoner som ellers jobber i IMDi med minoritetsspørsmål, negativ sosial kontroll, samt æresrelatert vold, kjønnslemlestelse og tvangsekteskap.",
  Kompetanseteamet:
    "Fagpersoner i Bufdir, Kompetanseteamet mot tvangsekteskap, kjønnslemlestelse og negativ sosial kontroll.",
  Familieterapeut:
    "Fagpersoner med kompetanse i å veilede ved samlivsbrudd og andre problemer i familien. Gir også råd for andre nære relasjoner.",
  Forbrukerrådet:
    "Fagpersoner som ellers jobber i Forbrukerrådet og gir råd om rettigheter ved kjøp av varer og klager på varer og tjenester.",
  "Statens vegvesen":
    "Fagpersoner som ellers jobber ved Statens vegvesen og svarer på spørsmål om førerkort og kjøretøy.",
  Helsejurist:
    "Jurist i Hdir som svarer på spørsmål om helselovgivning og helserettigheter.",
  Helsesykepleier:
    "Helsesykepleiere gir råd om kropp og helse, følelser, pubertet og seksualitet. Kan også svare på spørsmål om ulike problemer med skole, venner, kjæreste eller familie.",
  Jurist:
    "Jurister som svarer på det meste om lov og rett.",
  Jordmor:
    "Jordmødre svarer på alt om graviditet. Svarer også på spørsmål om kvinnekroppen, prevensjon og abort.",
  Konfliktrådet:
    "Fagpersoner som ellers jobber i Konfliktrådet og svarer på spørsmål om konflikter og lovbrudd som kan løses på annet vis enn ved politianmeldelse.",
  Politiet:
    "Ansatte i politiet som gir råd og informasjon om ulovlige forhold på nett og i virkeligheten. Gir også råd om ungdommens rettigheter og plikter i saker hvor politiet er eller kan bli involvert.",
  Lege:
    "Leger gir informasjon og råd om helse og sykdom. Kan ikke stille diagnose eller gi behandling.",
  Leieboerforeningen:
    "Fagpersoner som ellers jobber i Leieboerforeningen og gir råd om leiekontrakter, rettigheter og plikter ved leie av bolig.",
  Lærer:
    "Lærere svarer på ulike spørsmål om skole og skolehverdag.",
  Medietilsynet:
    "Fagpersoner som ellers jobber i Medietilsynet svarer på ulike spørsmål om sosiale medier og spill, samt aldersgrenser.",
  NAV:
    "Fagpersoner som ellers jobber i NAV og gir råd ved arbeidsledighet, sykdom og økonomiske problemer.",
  "Fagsvarer i psykisk helse":
    "Psykologer og andre med helsefaglig utdanning og videreutdanning innen psykisk helse svarer på ulike spørsmål om følelser og psykisk helse. Kan ikke stille diagnose eller gi behandling.",
  "PPT-rådgiver":
    "Fagpersoner som ellers jobber i Pedagogisk psykologisk tjeneste og gir råd i spørsmål om ulike skole- og lære-vansker.",
  Pasientombudet:
    "Fagpersoner som ellers jobber i Pasientombudet og svarer på spørsmål om helserettigheter. Kan gi råd ved klager på helsevesenet, og veiledning i etiske problemstillinger.",
  RUSInfo:
    "Fagpersoner som ellers jobber i RUSInfo svarer på ulike spørsmål om rusmidler og avhengighet.",
  "Antirasistisk senter":
    "Fagpersoner som ellers jobber i Antirasistisk senter og svarer på spørsmål om rasisme og diskriminering.",
  "Blåkors Kompasset":
    "Fagpersoner som ellers jobber i Blåkors Kompasset og svarer på spørsmål om rus i familien.",
  Overgrepsmottaket:
    "Fagpersoner som ellers jobber ved Overgrepsmottaket i Oslo og gir veiledning i ulike spørsmål om seksuelle overgrep.",
  Sexolog:
    "Helsepersonell med videreutdanning i sexologi og NACS-godkjenning svarer på det meste om seksualitet.",
  Spleiselaget:
    "Fagpersoner som ellers jobber med spleiselaget.no. De svarer på spørsmål om skatt og arbeidsliv for ungdom.",
  "Slettmeg.no":
    "Fagpersoner som ellers jobber i Slettmeg.no. Gir veiledning for de som har opplevd krenkelser eller andre negative hendelser med bildedeling og lignende på nett. Gir også råd om sikkerhet på nett.",
  "Fagsvarer om sex og grenser":
    "Fagpersoner som ellers jobber på nettjenesten TryggPrat og gir råd om problematisk og skadelig seksuell aktivitet. Gir også råd om vanskelige seksuelle tanker og følelser.",
  Tobakksrådgiver:
    "Fagpersoner som ellers jobber i Helsedirektoratet med rådgivning om snus, vape og røyk.",
  "Fagsvarer, spiseforstyrrelser":
    "Fagpersoner som ellers jobber på Regional seksjon spiseforstyrrelser på Oslo universitetssykehus. Gir råd og veiledning i ulike spørsmål om spiseforstyrrelser.",
};

/* List of answerer names for deterministic assignment */
const ANSWERER_NAMES = Object.keys(ANSWERER_DESCRIPTIONS);

/** Pick an answerer deterministically from a question id */
function answererForId(id: string): string {
  const num = parseInt(id, 10) || id.length;
  return ANSWERER_NAMES[num % ANSWERER_NAMES.length];
}

/* ─── SVG Components ─── */
function ArrowRightSmallIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <path
        clipRule="evenodd"
        d={svgPaths.p29ff4d00}
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

function AnswererAvatar() {
  return (
    <div className="relative shrink-0 size-12">
      <svg
        className="block size-full"
        fill="none"
        viewBox="0 0 48 48"
      >
        <circle cx="24" cy="24" fill="#DEEFE7" r="24" />
        <rect
          height="5.278"
          rx="2.639"
          stroke="black"
          strokeWidth="1.19"
          width="5.278"
          x="11"
          y="18.625"
        />
        <path
          d={svgPaths.p2811ec00}
          stroke="black"
          strokeLinecap="round"
          strokeWidth="1.19"
        />
        <rect
          height="5.278"
          rx="2.639"
          stroke="black"
          strokeWidth="1.19"
          transform="matrix(-1 0 0 1 36.554 18.625)"
          width="5.278"
        />
        <path
          d={svgPaths.pc13b4c0}
          stroke="black"
          strokeLinecap="round"
          strokeWidth="1.19"
        />
        <path
          d={svgPaths.p2c25c600}
          fill="#F5F5F5"
          stroke="black"
          strokeWidth="1.19"
        />
      </svg>
    </div>
  );
}

function HappyCharacterIllustration() {
  return (
    <div className="relative w-[176px] h-[141px]">
      {/* Green blob */}
      <div
        className="absolute"
        style={{
          inset: "1.39% 8.06% 24.31% 23.89%",
        }}
      >
        <svg
          className="absolute block size-full"
          fill="none"
          viewBox="0 0 119.778 104.771"
        >
          <path d={svgPaths.p257b2e00} fill="#79FC9E" />
        </svg>
      </div>
      {/* Character white outline */}
      <div
        className="absolute"
        style={{
          left: "2.5%",
          right: "4.72%",
          top: "calc(50% + 2px)",
          transform: "translateY(-50%)",
          aspectRatio: "1519/1290",
        }}
      >
        <div
          className="absolute"
          style={{ inset: "2.25% 2.03% 2.84% 3.24%" }}
        >
          <svg
            className="absolute block size-full"
            fill="none"
            viewBox="0 0 154.685 131.604"
          >
            <path d={svgPaths.peb4a000} fill="white" />
          </svg>
        </div>
        {/* Character black details */}
        <div
          className="absolute"
          style={{ inset: "5.28% 4.19% 5.63% 6.59%" }}
        >
          <svg
            className="absolute block size-full"
            fill="none"
            viewBox="0 0 145.689 123.535"
          >
            <path d={svgPaths.p3318b780} fill="black" />
            <path d={svgPaths.p10471280} fill="black" />
            <path d={svgPaths.p1975cd80} fill="black" />
            <path d={svgPaths.p406f600} fill="black" />
            <path
              clipRule="evenodd"
              d={svgPaths.p2c467300}
              fill="black"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p17bb8d80}
              fill="black"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p37c6ad80}
              fill="black"
              fillRule="evenodd"
            />
            <path d={svgPaths.p2f434440} fill="black" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChevronDownIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <path
        clipRule="evenodd"
        d={svgPaths.p11bb02f2}
        fill="#0F0F0F"
        fillRule="evenodd"
      />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════ */
/*                    MAIN PAGE COMPONENT                     */
/* ═══════════════════════════════════════════════════════════ */
export function QuestionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  /* Scroll to top on navigation */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const question = MOCK_QUESTIONS.find((q) => q.id === id);

  if (!question) {
    return (
      <section className="px-4 py-10 text-center">
        <p
          className="font-['Open_Sans',sans-serif] text-[16px] text-[#454545]"
          style={{ fontWeight: 400 }}
        >
          Spørsmålet ble ikke funnet.
        </p>
        <Link
          to="/sporsmaal-og-svar"
          className="text-[#2b5944] underline mt-4 inline-block"
        >
          Tilbake til alle spørsmål
        </Link>
      </section>
    );
  }

  const detail = DETAIL_DATA[question.id] ?? DEFAULT_DETAIL;
  const questionParagraphs =
    detail.fullQuestion.length > 0
      ? detail.fullQuestion
      : [question.answer]; // fallback to answer text as body

  const answerParagraphs =
    detail.answerParagraphs.length > 0
      ? detail.answerParagraphs
      : [question.answer];

  /* Use the detail's answerer if explicitly set, otherwise pick from the pool */
  const resolvedAnswerer =
    DETAIL_DATA[question.id]?.answerer ?? answererForId(question.id);

  const relatedQuestions = MOCK_QUESTIONS.filter(
    (q) => q.id !== id
  ).slice(0, 6);

  return (
    <>
      {/* ═══ Green background zone ═══ */}
      <div className="bg-[#acd7c3]">
        {/* ─── Page header: Tilbake ─── */}
        <div className="px-3 py-3">
          <Button
            variant="link"
            icon={<ArrowLeftIcon />}
            onClick={() => navigate(-1)}
          >
            Tilbake
          </Button>
        </div>

        {/* ─── Question + Answer ─── */}
        <div className="flex flex-col gap-4 px-3 pt-5 pb-8">
          {/* ── Question Card ── */}
          <div className="pr-6">
            <div className="bg-white rounded-tr-[24px] rounded-bl-[24px] rounded-br-[24px] overflow-hidden">
              {/* Hero image */}
              {detail.heroImage && (
                <div className="h-[180px] relative w-full">
                  <ImageWithFallback
                    alt=""
                    className="absolute inset-0 size-full object-cover"
                    src={detail.heroImage}
                  />
                </div>
              )}
              {/* Heading */}
              <div className="px-3 pt-3 pb-1">
                <h1
                  className="font-['Borna',sans-serif] text-[30px] text-[#0f0f0f] leading-[36px] tracking-[-0.12px]"
                  style={{ fontWeight: 600 }}
                >
                  {question.question}
                </h1>
              </div>
              {/* Question body */}
              <div className="px-4 pt-4 pb-6">
                <div
                  className="flex items-center justify-center px-3 py-1 rounded-2xl w-fit mb-3"
                  style={{ backgroundColor: tagColor(question.gender) }}
                >
                  <p
                    className="font-['Borna',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px] whitespace-nowrap"
                    style={{ fontWeight: 600 }}
                  >
                    {question.gender}
                  </p>
                </div>
                <div
                  className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]"
                  style={{ fontWeight: 400 }}
                >
                  {questionParagraphs.map((p, i) => (
                    <p
                      key={i}
                      className={
                        i < questionParagraphs.length - 1 ? "mb-5" : ""
                      }
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Answer Card ── */}
          <div className="pl-6">
            <AnswerCard
              answerer={resolvedAnswerer}
              answerDate={detail.answerDate}
              answerParagraphs={answerParagraphs}
              relatedArticles={detail.relatedArticles}
            />
          </div>
        </div>
      </div>

      {/* ═══ Similar Questions Carousel ═══ */}
      <div className="bg-[#deefe7] pl-3 py-10">
        <div className="pr-3 pb-5">
          <h2
            className="font-['Borna',sans-serif] text-[24px] text-[#0f0f0f] leading-[32px] tracking-[-0.096px]"
            style={{ fontWeight: 600 }}
          >
            Spørsmål og svar som ligner
          </h2>
        </div>
        {/* Scrollable row */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide -my-2 py-2">
          {relatedQuestions.map((q) => (
            <Link
              key={q.id}
              to={`/sporsmaal-og-svar/${q.id}`}
              className="group shrink-0 w-[289px]"
            >
              <div className="bg-white rounded-tr-[24px] rounded-bl-[24px] rounded-br-[24px] h-full">
                <div className="flex flex-col gap-4 px-4 pt-4 pb-5">
                  <p
                    className="font-['Borna',sans-serif] text-[18px] text-[#0f0f0f] leading-[26px] tracking-[-0.072px] group-hover:underline"
                    style={{ fontWeight: 600 }}
                  >
                    {q.question}
                  </p>
                  <div className="flex flex-wrap gap-2 items-center">
                    <div
                      className="flex items-center justify-center px-3 py-1 rounded-xl"
                      style={{ backgroundColor: tagColor(q.gender) }}
                    >
                      <p
                        className="font-['Open_Sans',sans-serif] text-[14px] text-[#0f0f0f] leading-[20px] tracking-[-0.056px] whitespace-nowrap"
                        style={{ fontWeight: 600 }}
                      >
                        {q.gender}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          <div className="shrink-0 w-3" />
        </div>
        {/* "Alle spørsmål" link */}
        <div className="pt-5">
          <Link
            to="/sporsmaal-og-svar"
            className="group inline-flex flex-col gap-1 items-center justify-center py-2 text-[#0f0f0f] hover:text-[#2b5944] transition-colors"
          >
            <div className="flex gap-1 items-center">
              <span
                className="font-['Open_Sans',sans-serif] text-[16px] leading-[24px] tracking-[-0.064px] whitespace-nowrap"
                style={{ fontWeight: 600 }}
              >
                Alle spørsmål om {question.topic.toLowerCase()}
              </span>
              <ArrowRightSmallIcon />
            </div>
            <div className="h-0.5 w-full bg-current" />
          </Link>
        </div>
      </div>

      {/* ═══ Ask Question Banner ═══ */}
      <AskQuestionBanner />
    </>
  );
}

/* ────────────────────────────────���────────────────────────── */
/*                       ANSWER CARD                          */
/* ─────────────────────────────────────────────────────────── */
function AnswerCard({
  answerer,
  answerDate,
  answerParagraphs,
  relatedArticles,
}: {
  answerer: string;
  answerDate: string;
  answerParagraphs: string[];
  relatedArticles: { title: string; image: string }[];
}) {
  const [surveyAnswer, setSurveyAnswer] = useState<"ja" | "nei" | null>(null);
  const [answererOpen, setAnswererOpen] = useState(false);

  return (
    <div className="bg-white rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px] overflow-hidden">
      {/* Answerer info row */}
      <button
        className="flex flex-col items-start w-full cursor-pointer"
        onClick={() => setAnswererOpen((v) => !v)}
      >
        <div className="flex items-start gap-3 px-4 pt-4 pb-2 w-full">
          <AnswererAvatar />
          <div className="flex-1 text-left min-w-0">
            <p
              className="font-['Borna',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]"
              style={{ fontWeight: 600 }}
            >
              {answerer}
            </p>
            <p
              className="font-['Open_Sans',sans-serif] text-[14px] text-[#0f0f0f] leading-[20px] tracking-[-0.056px]"
              style={{ fontWeight: 600 }}
            >
              {answerDate}
            </p>
          </div>
          <div
            className="shrink-0 self-stretch pt-3"
          >
            <div className={`transition-transform ${answererOpen ? "rotate-180" : ""}`}>
              <ChevronDownIcon />
            </div>
          </div>
        </div>
        {answererOpen && (
          <div className="bg-[#f2f9f5] w-full text-left">
            <div className="px-4 py-6">
              <p
                className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]"
                style={{ fontWeight: 400 }}
              >
                {ANSWERER_DESCRIPTIONS[answerer] ??
                  "En fagperson som svarer på spørsmål fra ungdom på ung.no."}
              </p>
            </div>
          </div>
        )}
      </button>

      {/* Answer body */}
      <div className="px-4 pt-4">
        <div
          className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]"
          style={{ fontWeight: 400 }}
        >
          {answerParagraphs.map((p, i) => (
            <p
              key={i}
              className={i < answerParagraphs.length - 1 ? "mb-5" : ""}
            >
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <div className="px-4 pt-4">
          <p
            className="font-['Borna',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px] pb-4"
            style={{ fontWeight: 600 }}
          >
            Jeg har valgt ut dette for deg
          </p>
          <div className="flex flex-col gap-3">
            {relatedArticles.map((article, i) => (
              <a
                key={i}
                href="#"
                className="group flex items-start rounded-xl h-[92px] min-h-[92px] overflow-hidden"
              >
                <div className="relative rounded-l-xl shrink-0 w-20 self-stretch">
                  <ImageWithFallback
                    alt=""
                    className="absolute inset-0 size-full object-cover rounded-l-xl"
                    src={article.image}
                  />
                </div>
                <div className="bg-[#f5f3f0] flex-1 rounded-r-xl self-stretch">
                  <div className="flex flex-col justify-center px-4 pt-4 pb-5 h-full">
                    <p
                      className="font-['Borna',sans-serif] text-[18px] text-[#0f0f0f] leading-[26px] tracking-[-0.072px] group-hover:underline"
                      style={{ fontWeight: 600 }}
                    >
                      {article.title}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Survey */}
      <div className="px-4 pt-6 pb-4">
        <p
          className="font-['Borna',sans-serif] text-[18px] text-[#0f0f0f] leading-[26px] tracking-[-0.072px] pb-4"
          style={{ fontWeight: 600 }}
        >
          Fikk du svar på det du lurte på?
        </p>
        <div className="flex gap-3">
          <Button
            variant={surveyAnswer === "ja" ? "primary" : "outline"}
            onClick={() => setSurveyAnswer("ja")}
          >
            Ja
          </Button>
          <Button
            variant={surveyAnswer === "nei" ? "primary" : "outline"}
            onClick={() => setSurveyAnswer("nei")}
          >
            Nei
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*                   ASK QUESTION BANNER                      */
/* ─────────────────────────────────────────────────────────── */
function AskQuestionBanner() {
  const navigate = useNavigate();
  const [askText, setAskText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const MAX_CHARS = 1000;

  return (
    <div className="px-3 py-10">
      <div className="flex flex-col gap-2">
        {/* Heading */}
        <div className="pb-3">
          <h2
            className="font-['Borna',sans-serif] text-[24px] text-[#0f0f0f] leading-[32px] tracking-[-0.096px]"
            style={{ fontWeight: 600 }}
          >
            Lurer du på noe mer?
          </h2>
        </div>

        {/* Illustration */}
        <HappyCharacterIllustration />

        {/* Body text */}
        <div className="py-4">
          <p
            className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]"
            style={{ fontWeight: 400 }}
          >
            Fikk du ikke helt svar på det du lurte på? Eller har du nye
            spørsmål? Spør oss, da vel!
          </p>
        </div>

        {/* Textarea */}
        <div className="flex flex-col items-start w-full">
          <p
            className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px] pb-2"
            style={{ fontWeight: 600 }}
          >
            Ditt spørsmål
          </p>
          <div className="bg-white relative rounded-tr-[8px] rounded-bl-[8px] rounded-br-[8px] w-full">
            <div
              aria-hidden
              className="absolute border border-[#0f0f0f] inset-0 pointer-events-none rounded-tr-[8px] rounded-bl-[8px] rounded-br-[8px] z-[-1]"
            />
            <textarea
              ref={textareaRef}
              value={askText}
              onChange={(e) => {
                if (e.target.value.length <= MAX_CHARS)
                  setAskText(e.target.value);
              }}
              className="w-full h-[148px] px-3 py-2 bg-transparent font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px] placeholder:text-[#676767] outline-none resize-none rounded-tr-[8px] rounded-bl-[8px] rounded-br-[8px]"
              style={{ fontWeight: 400 }}
            />
          </div>
          <p
            className="font-['Open_Sans',sans-serif] text-[14px] text-[#0f0f0f] leading-[20px] tracking-[-0.056px] pt-1 text-right w-full"
            style={{ fontWeight: 400 }}
          >
            {(MAX_CHARS - askText.length).toLocaleString("nb-NO")} av{" "}
            {MAX_CHARS.toLocaleString("nb-NO")} tegn igjen
          </p>
        </div>

        {/* Submit button */}
        <div className="pt-2">
          <Button
            variant="primary"
            onClick={() => navigate("/still-sporsmal", { state: { prefillQuestion: askText } })}
          >
            Spør
          </Button>
        </div>
      </div>
    </div>
  );
}