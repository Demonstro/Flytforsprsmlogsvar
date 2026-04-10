import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { Button } from "../components/button";
import svgPaths from "../../imports/svg-94nf5gmavs";

const MAX_CHARS = 1000;

/* ─── Random code generator ─── */
const CODE_WORDS = [
  "hvalross", "kake", "fiolin", "bjørn", "snøfnugg", "trombone", "regnbue",
  "elefant", "blyant", "sjokolade", "parasoll", "frosk", "ildflue", "sommerfugl",
  "appelsin", "guitar", "papegøye", "ballong", "kanin", "isbjørn", "magnet",
  "flamingo", "kokosnøtt", "pannekake", "pingvin", "solsikke", "tordenvær",
];
function generateCode() {
  const pick = () => CODE_WORDS[Math.floor(Math.random() * CODE_WORDS.length)];
  let a = pick(), b = pick(), c = pick();
  while (b === a) b = pick();
  while (c === a || c === b) c = pick();
  return `${a}-${b}-${c}`;
}

const AGE_OPTIONS = Array.from({ length: 8 }, (_, i) => `${13 + i}`);

const GENDER_OPTIONS = ["Jente", "Gutt", "Annet"];

/* ─── Hierarchical topic data ─── */
type TopicItem =
  | { type: "super"; label: string }
  | { type: "category"; label: string }
  | { type: "sub"; label: string };

const TOPIC_ITEMS: TopicItem[] = [
  { type: "super", label: "Kropp, helse og sex" },
  { type: "category", label: "Kropp" },
  { type: "sub", label: "Vulva og vagina" },
  { type: "sub", label: "Penis og pung" },
  { type: "sub", label: "Pubertet" },
  { type: "sub", label: "Mensen" },
  { type: "sub", label: "Funksjonsnedsettelser" },
  { type: "sub", label: "Tannhelse" },
  { type: "category", label: "Helsa di" },
  { type: "sub", label: "Sykdom" },
  { type: "sub", label: "Mat og kosthold" },
  { type: "sub", label: "Trening og idrett" },
  { type: "sub", label: "Doping" },
  { type: "sub", label: "Korona" },
  { type: "category", label: "Sex" },
  { type: "sub", label: "Onanering" },
  { type: "sub", label: "Prevensjon" },
  { type: "sub", label: "Kjønnssykdommer" },
  { type: "sub", label: "P-piller" },
  { type: "sub", label: "Graviditet" },
  { type: "category", label: "Rusmidler" },
  { type: "sub", label: "Alkohol" },
  { type: "sub", label: "Tobakk" },
  { type: "sub", label: "Cannabis" },
  { type: "super", label: "Skole, utdanning og jobb" },
  { type: "category", label: "Skolehverdag" },
  { type: "sub", label: "Leksehjelp" },
  { type: "sub", label: "Eksamen" },
  { type: "sub", label: "Russetid" },
  { type: "category", label: "Utdanning" },
  { type: "sub", label: "Ungdomsskole" },
  { type: "sub", label: "Videregående skole" },
  { type: "sub", label: "Høyere utdanning" },
  { type: "sub", label: "Studier i utlandet" },
  { type: "sub", label: "Stipend og støtte" },
  { type: "sub", label: "Verneplikt / Forsvaret" },
  { type: "category", label: "Jobb" },
  { type: "sub", label: "Sommerjobb" },
  { type: "sub", label: "Lærling" },
  { type: "sub", label: "Frivillig arbeid" },
  { type: "super", label: "Følelser, identitet og forelskelse" },
  { type: "category", label: "Forelskelse" },
  { type: "sub", label: "Forhold" },
  { type: "category", label: "Psykisk helse og følelser" },
  { type: "sub", label: "Psykiske vansker" },
  { type: "sub", label: "Selvtillit og identitet" },
  { type: "sub", label: "Mobbing" },
  { type: "sub", label: "Spiseforstyrrelser" },
  { type: "sub", label: "Selvskading" },
  { type: "sub", label: "Sorg og krise" },
  { type: "sub", label: "Hva kan hjelpe" },
  { type: "category", label: "Selvtillit og identitet" },
  { type: "sub", label: "Skeiv" },
  { type: "sub", label: "Krysskulturell" },
  { type: "sub", label: "Kjønnsidentitet" },
  { type: "sub", label: "Konfirmasjon" },
  { type: "super", label: "Kriminalitet, rettigheter og samfunn" },
  { type: "category", label: "Kriminalitet" },
  { type: "sub", label: "Seksuelle overgrep" },
  { type: "sub", label: "Vold" },
  { type: "sub", label: "Kjønnslemlestelse" },
  { type: "category", label: "Lov og rett" },
  { type: "sub", label: "Aldersgrenser" },
  { type: "sub", label: "Lovbrudd" },
  { type: "sub", label: "Rettighetene dine" },
  { type: "sub", label: "Konfliktløsning" },
  { type: "sub", label: "Likestilling og diskriminering" },
  { type: "category", label: "Demokrati og valg" },
  { type: "sub", label: "Førestegangsvelger" },
  { type: "category", label: "Klima og miljø" },
  { type: "super", label: "Familie, venner og fritid" },
  { type: "category", label: "Familie" },
  { type: "sub", label: "Barnevern" },
  { type: "sub", label: "Fosterhjem" },
  { type: "sub", label: "Problemer hjemme" },
  { type: "sub", label: "Skilsmisse" },
  { type: "category", label: "Fritid" },
  { type: "sub", label: "Spill og gaming" },
  { type: "sub", label: "Vennskap" },
  { type: "sub", label: "Nettvett og sosiale medier" },
  { type: "category", label: "Økonomien din" },
  { type: "sub", label: "Forbruker" },
  { type: "sub", label: "Førerkort" },
  { type: "sub", label: "Bolig / flytte hjemmefra" },
  { type: "sub", label: "Reise" },
  { type: "sub", label: "Toll" },
];

/* ─── Checkmark SVG path ─── */
const CHECK_PATH = "M17.2559 4.41074C17.5814 4.73618 17.5814 5.26382 17.2559 5.58925L8.08925 14.7559C7.76382 15.0814 7.23618 15.0814 6.91074 14.7559L2.74408 10.5893C2.41864 10.2638 2.41864 9.73618 2.74408 9.41074C3.06951 9.08531 3.59715 9.08531 3.92259 9.41074L7.5 12.9882L16.0774 4.41074C16.4028 4.08531 16.9305 4.08531 17.2559 4.41074Z";

/* ─── SVG Icons ─── */
function ArrowLeftIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <path clipRule="evenodd" d={svgPaths.p12cd1d80} fill="currentColor" fillRule="evenodd" />
      <path clipRule="evenodd" d={svgPaths.p9576200} fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <path clipRule="evenodd" d={svgPaths.p34b75100} fill="#0F0F0F" fillRule="evenodd" />
    </svg>
  );
}

/* ─── Decorative background SVG ─── */
function DecorSvg() {
  return (
    <div className="absolute h-[578px] left-[-45px] top-0 w-[387px] pointer-events-none">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 386.542 578.393">
        <path clipRule="evenodd" d={svgPaths.p3b47ed00} fill="#DEEFE7" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p3713de80} fill="#DEEFE7" fillRule="evenodd" />
        <path d={svgPaths.p1b898b00} fill="#DEEFE7" />
        <path clipRule="evenodd" d={svgPaths.p3095480} fill="#DEEFE7" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p14472580} fill="#DEEFE7" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p116e5a60} fill="#DEEFE7" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p413d800} fill="#DEEFE7" fillRule="evenodd" />
      </svg>
    </div>
  );
}

/* ─── Custom Select ─── */
function SelectField({
  label,
  placeholder,
  value,
  options,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (val: string) => void;
}) {
  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex gap-1 items-start pb-2 w-full">
        <p
          className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]"
          style={{ fontWeight: 600 }}
        >
          {label}
        </p>
      </div>
      <div className="bg-white relative rounded-[8px] w-full">
        <div
          aria-hidden
          className="absolute border border-[#0f0f0f] inset-0 pointer-events-none rounded-[8px]"
        />
        <div className="flex items-center justify-between px-3 py-2.5 w-full">
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="appearance-none bg-transparent flex-1 font-['Open_Sans',sans-serif] text-[16px] leading-[24px] tracking-[-0.064px] outline-none cursor-pointer pr-6"
            style={{
              fontWeight: 400,
              color: value ? "#0f0f0f" : "#676767",
            }}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <ChevronDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Radio Button ─── */
function RadioOption({
  label,
  selected,
  onSelect,
}: {
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      className="flex gap-2 items-center cursor-pointer"
      onClick={onSelect}
    >
      <div className="relative shrink-0 size-5">
        <svg className="block size-full" viewBox="0 0 20 20" fill="none">
          <circle
            cx="10"
            cy="10"
            r="9"
            fill="white"
            stroke="#0F0F0F"
            strokeWidth="2"
          />
          {selected && <circle cx="10" cy="10" r="5" fill="#0F0F0F" />}
        </svg>
      </div>
      <p
        className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]"
        style={{ fontWeight: 400 }}
      >
        {label}
      </p>
    </button>
  );
}

/* ─── Checkbox ─── */
function Checkbox({
  checked,
  onChange,
  children,
}: {
  checked: boolean;
  onChange: (val: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className="flex gap-2 items-center cursor-pointer text-left"
      onClick={() => onChange(!checked)}
    >
      <div className="relative shrink-0 size-5">
        {checked ? (
          <div className="bg-[#0f0f0f] border-2 border-[#0f0f0f] rounded-[2px] size-full flex items-center justify-center">
            <svg width={12} height={12} viewBox="0 0 12 12" fill="none">
              <path
                d="M2.5 6L5 8.5L9.5 4"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ) : (
          <div className="bg-white border-2 border-[#0f0f0f] rounded-[2px] size-full" />
        )}
      </div>
      <div className="flex-1">{children}</div>
    </button>
  );
}

/* ─── Topic Dropdown ─── */
function TopicDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const handleSelect = (label: string) => {
    onChange(label);
    setOpen(false);
  };

  return (
    <div className="flex flex-col items-start w-full" ref={containerRef}>
      <div className="flex gap-1 items-start pb-2 w-full">
        <p
          className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]"
          style={{ fontWeight: 600 }}
        >
          Hva handler spørsmålet ditt om?
        </p>
      </div>

      {/* Trigger */}
      <div className="bg-white relative rounded-[8px] w-full">
        <div
          aria-hidden
          className="absolute border border-[#0f0f0f] inset-0 pointer-events-none rounded-[8px]"
        />
        <button
          type="button"
          className="flex items-center justify-between px-3 py-2.5 w-full text-left cursor-pointer"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className="font-['Open_Sans',sans-serif] text-[16px] leading-[24px] tracking-[-0.064px]"
            style={{
              fontWeight: 400,
              color: value ? "#0f0f0f" : "#676767",
            }}
          >
            {value || "Velg et tema"}
          </span>
          <div
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          >
            <ChevronDownIcon />
          </div>
        </button>
      </div>

      {/* Dropdown overlay */}
      {open && (
        <div className="bg-white relative rounded-[8px] w-full mt-1 z-20">
          <div
            aria-hidden
            className="absolute border border-[#0f0f0f] inset-0 pointer-events-none rounded-[8px]"
          />
          <div className="flex flex-col items-start max-h-[400px] overflow-y-auto overflow-x-clip pb-1 w-full">
            {TOPIC_ITEMS.map((item, i) => {
              const isSelected = item.label === value;

              if (item.type === "super") {
                const isFirst = i === 0;
                return (
                  <button
                    key={`${item.label}-${i}`}
                    type="button"
                    className={`relative flex items-center w-full cursor-pointer hover:bg-[#deefe7] ${isFirst ? "py-2" : "pb-2 pt-5"} px-[36px] mx-px`}
                    onClick={() => handleSelect(item.label)}
                  >
                    {isSelected && (
                      <svg className="absolute left-[8px] shrink-0 size-5" viewBox="0 0 20 20" fill="none">
                        <path clipRule="evenodd" d={CHECK_PATH} fill="#0F0F0F" fillRule="evenodd" />
                      </svg>
                    )}
                    <p
                      className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]"
                      style={{ fontWeight: 600 }}
                    >
                      {item.label}
                    </p>
                  </button>
                );
              }

              if (item.type === "category") {
                const prevItem = i > 0 ? TOPIC_ITEMS[i - 1] : null;
                const isFirstUnderSuper = prevItem?.type === "super";
                return (
                  <button
                    key={`${item.label}-${i}`}
                    type="button"
                    className={`relative flex items-center w-full cursor-pointer hover:bg-[#deefe7] ${isFirstUnderSuper ? "py-2" : "pb-2 pt-4"} px-[44px] mx-px`}
                    onClick={() => handleSelect(item.label)}
                  >
                    {isSelected && (
                      <svg className="absolute left-[8px] shrink-0 size-5" viewBox="0 0 20 20" fill="none">
                        <path clipRule="evenodd" d={CHECK_PATH} fill="#0F0F0F" fillRule="evenodd" />
                      </svg>
                    )}
                    <p
                      className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]"
                      style={{ fontWeight: 400 }}
                    >
                      {item.label}
                    </p>
                  </button>
                );
              }

              // sub items
              return (
                <button
                  key={`${item.label}-${i}`}
                  type="button"
                  className="relative flex items-center w-full cursor-pointer hover:bg-[#deefe7] py-2 pl-[56px] pr-[36px]"
                  onClick={() => handleSelect(item.label)}
                >
                  {isSelected && (
                    <svg className="absolute left-[20px] shrink-0 size-5" viewBox="0 0 20 20" fill="none">
                      <path clipRule="evenodd" d={CHECK_PATH} fill="#0F0F0F" fillRule="evenodd" />
                    </svg>
                  )}
                  <p
                    className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]"
                    style={{ fontWeight: 400 }}
                  >
                    {item.label}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════ MAIN PAGE ═══════════════ */
export function SubmitQuestion() {
  const navigate = useNavigate();
  const location = useLocation();
  const [question, setQuestion] = useState("");
  const [topic, setTopic] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [personalCode] = useState(() => generateCode());

  /* Pre-fill question from navigation state (e.g. from question detail "Spør" button) */
  useEffect(() => {
    const state = location.state as { prefillQuestion?: string } | null;
    if (state?.prefillQuestion) {
      setQuestion(state.prefillQuestion.slice(0, MAX_CHARS));
    }
  }, [location.state]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const charsRemaining = MAX_CHARS - question.length;
  const canSubmit =
    question.trim().length > 0 &&
    topic !== "" &&
    age !== "" &&
    gender !== "" &&
    privacyAccepted;

  const handleSubmit = () => {
    if (!canSubmit) return;
    sessionStorage.setItem(
      "ung-submitted-question",
      JSON.stringify({ personalCode, questionText: question })
    );
    navigate("/still-sporsmal/bekreftelse", {
      state: { personalCode, questionText: question },
    });
  };

  return (
    <div className="bg-[#f2f9f5] min-h-screen flex flex-col items-center font-['Open_Sans',sans-serif]">
      <div className="w-full max-w-[375px] flex flex-col min-h-screen relative overflow-hidden">
        

        {/* ═══ Top Banner ═══ */}
        <div className="relative z-10 flex flex-col gap-6 items-center px-3 py-6 w-full">
          <div className="flex flex-col gap-6 items-start w-full">
            {/* Back button */}
            <Button
              variant="link"
              icon={<ArrowLeftIcon />}
              onClick={() => navigate(-1)}
            >
              Tilbake
            </Button>

            {/* Heading */}
            <h1
              className="font-['Borna',sans-serif] text-[30px] text-[#0f0f0f] leading-[36px] tracking-[-0.12px] pt-6 w-full"
              style={{ fontWeight: 600 }}
            >
              Hva lurer du på?
            </h1>

            {/* Ingress */}
            <p
              className="font-['Open_Sans',sans-serif] text-[18px] text-[#0f0f0f] leading-[26px] tracking-[-0.072px] max-w-[351px]"
              style={{ fontWeight: 400 }}
            >
              Her kan du som er{" "}
              <span className="underline" style={{ fontWeight: 700 }}>
                mellom 13 og 20 år
              </span>
              , stille spørsmål anonymt til oss i ung.no. Vi har mange
              fagpersoner og ungdommer som kan svare deg på det du lurer på.
            </p>
          </div>
        </div>

        {/* ═══ Form Content ═══ */}
        <div className="relative z-10 flex flex-col gap-8 items-start px-3 pt-5 pb-16 w-full">
          {/* Instruction */}
          <p
            className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]"
            style={{ fontWeight: 400 }}
          >
            Du må fylle ut alt før du sender inn.
          </p>

          {/* ─── Textarea: Ditt spørsmål ─── */}
          <div className="flex flex-col items-start w-full">
            <div className="flex gap-1 items-start pb-2 w-full">
              <p
                className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]"
                style={{ fontWeight: 600 }}
              >
                Ditt spørsmål
              </p>
            </div>
            <div className="flex flex-col items-end w-full">
              <div className="bg-white relative rounded-tr-[8px] rounded-bl-[8px] rounded-br-[8px] w-full">
                <div
                  aria-hidden
                  className="absolute border border-[#0f0f0f] inset-0 pointer-events-none rounded-tr-[8px] rounded-bl-[8px] rounded-br-[8px]"
                />
                <textarea
                  value={question}
                  onChange={(e) => {
                    if (e.target.value.length <= MAX_CHARS)
                      setQuestion(e.target.value);
                  }}
                  className="w-full h-[384px] px-3 py-2 bg-transparent font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px] placeholder:text-[#676767] outline-none resize-none rounded-tr-[8px] rounded-bl-[8px] rounded-br-[8px]"
                  style={{ fontWeight: 400 }}
                />
              </div>
              <p
                className="font-['Open_Sans',sans-serif] text-[14px] text-[#0f0f0f] leading-[20px] tracking-[-0.056px] pt-1 text-right w-full"
                style={{ fontWeight: 400 }}
              >
                {charsRemaining.toLocaleString("nb-NO")} av{" "}
                {MAX_CHARS.toLocaleString("nb-NO")} tegn igjen
              </p>
            </div>
          </div>

          {/* ─── Topic dropdown ─── */}
          <TopicDropdown
            value={topic}
            onChange={setTopic}
          />

          {/* ─── Age select ─── */}
          <SelectField
            label="Hvor gammel er du?"
            placeholder="Velg din alder"
            value={age}
            options={AGE_OPTIONS.map((a) => ({ value: a, label: `${a} år` }))}
            onChange={setAge}
          />

          {/* ─── Gender radio ─── */}
          <div className="flex flex-col items-start w-full">
            <div className="flex gap-1 items-start pb-2 w-full">
              <p
                className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]"
                style={{ fontWeight: 600 }}
              >
                Kjønn{" "}
              </p>
            </div>
            <div className="flex flex-col gap-4 items-start">
              {GENDER_OPTIONS.map((g) => (
                <RadioOption
                  key={g}
                  label={g}
                  selected={gender === g}
                  onSelect={() => setGender(g)}
                />
              ))}
            </div>
          </div>

          {/* ─── Privacy info ─── */}
          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col items-start pb-1 pt-5 w-full">
              <p
                className="font-['Borna',sans-serif] text-[18px] text-[#0f0f0f] leading-[26px] tracking-[-0.072px] w-full"
                style={{ fontWeight: 600 }}
              >
                Spørsmålet ditt kobles ikke til deg
              </p>
            </div>
            <div className="flex items-start py-3 w-full">
              <div
                className="flex-1 font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]"
                style={{ fontWeight: 400 }}
              >
                <p className="mb-5">
                  Du er anonym både når du sender inn spørsmål og når du sjekker
                  svaret ditt.
                </p>
                <p className="mb-5">
                  Men hvis vi får inn spørsmål der vi vurderer at det er akutt
                  fare for liv og helse, må vi varsle politiet som kan finne din
                  IP-adresse og prøve å hjelpe deg. Dette gjelder også når vi
                  har plikt til å varsle av andre grunner. På{" "}
                  <span className="underline">plikt.no</span> kan du lese mer om
                  denne avvergingsplikten.
                </p>
                <p>
                  Du får også nyttig informasjon i videoen{" "}
                  <span className="underline">Er jeg anonym på ung.no</span>?
                </p>
              </div>
            </div>
          </div>

          {/* ─── Privacy checkbox ─── */}
          <div className="flex flex-col items-start py-3 w-full">
            <Checkbox
              checked={privacyAccepted}
              onChange={setPrivacyAccepted}
            >
              <p
                className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]"
                style={{ fontWeight: 400 }}
              >
                Jeg godkjenner{" "}
                <span className="underline">personvernerklæringen</span>.
              </p>
            </Checkbox>
          </div>

          {/* ─── Buttons ─── */}
          <div className="flex gap-5 items-center">
            <Button
              variant="primary"
              disabled={!canSubmit}
              onClick={handleSubmit}
            >
              Send inn
            </Button>
            <Button variant="link" onClick={() => navigate(-1)}>
              Avbryt
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}