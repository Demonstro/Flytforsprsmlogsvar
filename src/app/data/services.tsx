import { type ServiceCardProps } from "../components/service-card";

const base = import.meta.env.BASE_URL;

/* ─── Image-based logo component ─── */
export function ImgLogo({ src, bg = "white" }: { src: string; bg?: string }) {
  return (
    <div
      className="overflow-hidden rounded-[12px] shrink-0 size-[48px] p-[6px]"
      style={{ backgroundColor: bg }}
    >
      <img src={`${base}logos/${src}`} alt="" className="block size-full object-contain" />
    </div>
  );
}

/* ─── Generic colored logo for services without custom SVG logos ─── */
export function ColorLogo({ bg, text }: { bg: string; text: string }) {
  return (
    <div
      className="overflow-clip rounded-[12px] shrink-0 size-[48px] flex items-center justify-center"
      style={{ backgroundColor: bg }}
    >
      <span className="font-['Borna',sans-serif] text-white text-[14px] leading-none text-center" style={{ fontWeight: 700 }}>
        {text}
      </span>
    </div>
  );
}

/* ─── Service type enum ─── */
export type ServiceType = "snakk" | "selvhjelp";

/* ─── Opening hours status helpers ─── */
export type ServiceStatus = "Døgnåpen" | "Åpen" | "Stengt";

/** Check if all 7 days are 00:00 - 24:00 */
export function isDognapen(hours: WeeklyHours): boolean {
  const allDays: (keyof WeeklyHours)[] = ["mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lordag", "sondag"];
  return allDays.every((d) => {
    const v = hours[d];
    return Array.isArray(v) && v.length === 1 && v[0].replace(/\s/g, "") === "00:00-24:00";
  });
}

/** Get current open/closed status for a service based on its opening hours */
export function getOpenStatus(hours?: WeeklyHours): ServiceStatus {
  if (!hours) return "Stengt";
  if (isDognapen(hours)) return "Døgnåpen";

  const now = new Date();
  const dayIndex = now.getDay(); // 0=Sun, 1=Mon...
  const dayMap: (keyof WeeklyHours)[] = ["sondag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lordag"];
  const todayKey = dayMap[dayIndex];
  const todayHours = hours[todayKey];

  if (todayHours === "Stengt") return "Stengt";

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  for (const slot of todayHours) {
    const parts = slot.replace(/\s/g, "").split("-");
    if (parts.length !== 2) continue;
    const [startH, startM] = parts[0].split(":").map(Number);
    const [endH, endM] = parts[1].split(":").map(Number);
    const start = startH * 60 + (startM || 0);
    const end = endH * 60 + (endM || 0);
    if (currentMinutes >= start && currentMinutes < end) return "Åpen";
  }
  return "Stengt";
}

/** Get the overall status for a snakk service (best of all channels) */
export function getSnakkServiceStatus(service: ServiceData): ServiceStatus {
  if (service.type !== "snakk" || !service.openingHours) return "Stengt";
  return getOpenStatus(service.openingHours);
}

/* ─── Opening hours for a single day ─── */
export type DayHours = string[] | "Stengt"; // e.g. ["09:00 - 15:00"] or ["11:00 - 14:30", "15:00 - 18:00"]

export interface WeeklyHours {
  mandag: DayHours;
  tirsdag: DayHours;
  onsdag: DayHours;
  torsdag: DayHours;
  fredag: DayHours;
  lordag: DayHours;
  sondag: DayHours;
}

/* ─── Full service data for detail pages ─── */
export interface ServiceData {
  slug: string;
  type: ServiceType;
  title: string;
  ingress: string;
  logo: React.ReactNode;
  metaType: string;
  metaLanguage: string;
  tags: string[];
  actionButtons: {
    type: "chat" | "phone" | "download" | "web";
    label: string;
    href: string;
    icon?: "apple";
    hrefAndroid?: string;
    disabled?: boolean;
  }[];
  body: React.ReactNode;
  responsible: string;
  relatedTopics: string[];
  openingHours?: WeeklyHours;
}

/* ─── All services ─── */
export const ALL_SERVICES: ServiceData[] = [
  // ══════════════════════════════════════
  //  SNAKK MED NOEN (chat / phone)
  // ══════════════════════════════════════
  {
    slug: "vold-og-overgrepslinjen",
    type: "snakk",
    title: "Vold- og overgrepslinjen 116 006",
    ingress: "Vold- og overgrepslinjen er en hjelpelinje for deg som opplever vold eller overgrep, eller kjenner noen som gjør det.",
    logo: <ImgLogo src="vold-og-overgrepslinjen.svg" bg="#f4f4f3" />,
    metaType: "Chat og telefon",
    metaLanguage: "Norsk bokmål",
    tags: ["Seksuelle overgrep", "Vold"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://www.volinjen.no/?action=open" },
      { type: "phone", label: "Ring", href: "tel:116006" },
    ],
    body: (
      <>
        <p className="leading-[24px] mb-[20px]">Vold- og overgrepslinjen er en nasjonal hjelpelinje for alle som opplever vold i nære relasjoner, voldtekt og seksuelle overgrep.</p>
        <p className="leading-[24px] mb-[20px]">Du kan ta kontakt om:</p>
        <ul>
          <li className="mb-[12px] ms-[24px]"><span className="leading-[24px]">Du er utsatt for vold eller overgrep</span></li>
          <li className="mb-[12px] ms-[24px]"><span className="leading-[24px]">Du utøver vold og ønsker hjelp til å stoppe</span></li>
          <li className="mb-[12px] ms-[24px]"><span className="leading-[24px]">Du er bekymret for noen du kjenner</span></li>
          <li className="ms-[24px]"><span className="leading-[24px]">Du er pårørende eller fagperson</span></li>
        </ul>
      </>
    ),
    responsible: "Barne-, ungdoms- og familiedirektoratet (Bufdir)",
    relatedTopics: ["Seksuelle overgrep", "Vold", "Psykisk helse og følelser", "Rettighetene dine"],
    openingHours: {
      mandag: ["09:00 - 15:00"],
      tirsdag: ["09:00 - 15:00"],
      onsdag: ["09:00 - 15:00"],
      torsdag: ["09:00 - 15:00"],
      fredag: ["09:00 - 15:00"],
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "113-medisinsk-nodnummer",
    type: "snakk",
    title: "113 Medisinsk nødnummer",
    ingress: "Ring 113 ved akutt, livstruende sykdom eller skade. Ambulansetjenesten hjelper deg døgnet rundt.",
    logo: <ImgLogo src="113.svg" bg="#fef35d" />,
    metaType: "Telefon",
    metaLanguage: "Norsk bokmål",
    tags: ["Helsa di", "Sykdom"],
    actionButtons: [
      { type: "phone", label: "Ring", href: "tel:113" },
    ],
    body: (
      <>
        <p className="leading-[24px] mb-[20px]">113 er det medisinske nødnummeret i Norge. Ring 113 når du trenger akutt medisinsk hjelp.</p>
        <p className="leading-[24px] mb-[20px]">Ring 113 hvis:</p>
        <ul>
          <li className="mb-[12px] ms-[24px]"><span className="leading-[24px]">Noen er bevisstløs eller ikke puster normalt</span></li>
          <li className="mb-[12px] ms-[24px]"><span className="leading-[24px]">Noen har sterke brystsmerter</span></li>
          <li className="mb-[12px] ms-[24px]"><span className="leading-[24px]">Noen har alvorlige skader etter ulykke</span></li>
          <li className="ms-[24px]"><span className="leading-[24px]">Du er usikker på om situasjonen er alvorlig</span></li>
        </ul>
      </>
    ),
    responsible: "Helsedirektoratet",
    relatedTopics: ["Helsa di", "Sykdom"],
    openingHours: {
      mandag: ["00:00 - 24:00"],
      tirsdag: ["00:00 - 24:00"],
      onsdag: ["00:00 - 24:00"],
      torsdag: ["00:00 - 24:00"],
      fredag: ["00:00 - 24:00"],
      lordag: ["00:00 - 24:00"],
      sondag: ["00:00 - 24:00"],
    },
  },
  {
    slug: "digital-leksehjelp",
    type: "snakk",
    title: "Digital leksehjelp (Røde Kors)",
    ingress: "Gratis leksehjelp på nett fra frivillige. Få hjelp med skolearbeid, lekser og eksamensforberedelser.",
    logo: <ImgLogo src="digital-leksehjelp.svg" />,
    metaType: "Chat",
    metaLanguage: "Norsk bokmål",
    tags: ["Leksehjelp", "Ungdomsskole", "Videregående skole", "Eksamen", "Utdanning", "Lærling", "Skolehverdag"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://www.digitalleksehjelp.no/digital_leksehjelp" },
    ],
    body: (
      <>
        <p className="leading-[24px] mb-[20px]">Digital leksehjelp er en gratis chattetjeneste der du kan få hjelp med lekser og skolearbeid av frivillige i Røde Kors.</p>
        <p className="leading-[24px]">Tjenesten er tilgjengelig for elever i ungdomsskolen og videregående skole, og kan hjelpe med de fleste fag.</p>
      </>
    ),
    responsible: "Røde Kors",
    relatedTopics: ["Utdanning", "Skolehverdag", "Lærling", "Videregående skole"],
    openingHours: {
      mandag: ["17:00 - 21:00"],
      tirsdag: ["17:00 - 21:00"],
      onsdag: ["17:00 - 21:00"],
      torsdag: ["17:00 - 21:00"],
      fredag: "Stengt",
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "nav",
    type: "snakk",
    title: "Nav",
    ingress: "Nav hjelper deg med jobb, økonomi, bolig og rettigheter. Kontakt oss via chat eller telefon.",
    logo: <ImgLogo src="nav.svg" bg="#c30000" />,
    metaType: "Chat og telefon",
    metaLanguage: "Norsk bokmål",
    tags: ["Jobb", "Økonomien din", "Funksjonsnedsettelser", "Sommerjobb", "Rettighetene dine", "Bolig / flytte hjemmefra"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://www.nav.no/kontaktoss" },
      { type: "phone", label: "Ring", href: "tel:55553333" },
    ],
    body: (
      <>
        <p className="leading-[24px] mb-[20px]">Nav tilbyr tjenester og veiledning innenfor arbeid, økonomi og sosiale tjenester for alle i Norge.</p>
        <p className="leading-[24px] mb-[20px]">Du kan kontakte Nav om:</p>
        <ul>
          <li className="mb-[12px] ms-[24px]"><span className="leading-[24px]">Jobbsøking og karriereveiledning</span></li>
          <li className="mb-[12px] ms-[24px]"><span className="leading-[24px]">Økonomisk støtte og ytelser</span></li>
          <li className="mb-[12px] ms-[24px]"><span className="leading-[24px]">Bolig og bosituasjon</span></li>
          <li className="ms-[24px]"><span className="leading-[24px]">Rettigheter og plikter</span></li>
        </ul>
      </>
    ),
    responsible: "Nav",
    relatedTopics: ["Jobb", "Økonomien din", "Rettighetene dine", "Bolig / flytte hjemmefra", "Sommerjobb"],
    openingHours: {
      mandag: ["09:00 - 15:00"],
      tirsdag: ["09:00 - 15:00"],
      onsdag: ["09:00 - 15:00"],
      torsdag: ["09:00 - 15:00"],
      fredag: ["09:00 - 15:00"],
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "forsvaret",
    type: "snakk",
    title: "Forsvaret",
    ingress: "Har du spørsmål om førstegangstjeneste, utdanning i Forsvaret eller verneplikt? Kontakt oss.",
    logo: <ImgLogo src="forsvaret.svg" />,
    metaType: "Chat og telefon",
    metaLanguage: "Norsk bokmål",
    tags: ["Verneplikt / Forsvaret", "Rettighetene dine", "Høyere utdanning", "Utdanning"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://www.forsvaret.no/kontakt" },
      { type: "phone", label: "Ring", href: "tel:91503003" },
    ],
    body: (
      <p className="leading-[24px]">Forsvaret kan svare på spørsmål om førstegangstjeneste, sesjon, utdanning i Forsvaret og karrieremuligheter. Kontakt oss via chat eller telefon.</p>
    ),
    responsible: "Forsvaret",
    relatedTopics: ["Verneplikt / Forsvaret", "Utdanning", "Høyere utdanning", "Rettighetene dine"],
    openingHours: {
      mandag: ["10:00 - 14:00"],
      tirsdag: ["10:00 - 14:00"],
      onsdag: ["10:00 - 14:00"],
      torsdag: ["10:00 - 14:00"],
      fredag: ["10:00 - 14:00"],
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "statens-vegvesen",
    type: "snakk",
    title: "Statens Vegvesen",
    ingress: "Statens vegvesen svarer på spørsmål om førerkort, kjøretøy og trafikk.",
    logo: <ImgLogo src="statens-vegvesen.svg" />,
    metaType: "Chat og telefon",
    metaLanguage: "Norsk bokmål",
    tags: ["Førerkort", "Rettighetene dine", "Lov og rett"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://www.vegvesen.no/om-oss/kontakt-oss/chat/?action=open" },
      { type: "phone", label: "Ring", href: "tel:22073000" },
    ],
    body: (
      <p className="leading-[24px]">Statens vegvesen kan hjelpe deg med spørsmål om førerkort, oppkjøring, kjøretøyregistrering og trafikkregler. Ta kontakt via chat eller telefon.</p>
    ),
    responsible: "Statens vegvesen",
    relatedTopics: ["Førerkort", "Rettighetene dine", "Lov og rett"],
    openingHours: {
      mandag: ["08:00 - 15:00"],
      tirsdag: ["08:00 - 15:00"],
      onsdag: ["08:00 - 15:00"],
      torsdag: ["08:00 - 15:00"],
      fredag: ["08:00 - 15:00"],
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "alarmtelefonen",
    type: "snakk",
    title: "Alarmtelefonen for barn og unge",
    ingress: "Alarmtelefonen er barnevernets døgnåpne svartjeneste for barn, ungdom og voksne som er bekymret for barn.",
    logo: <ImgLogo src="alarmtelefonen.svg" bg="#d04620" />,
    metaType: "Chat og telefon",
    metaLanguage: "Norsk bokmål",
    tags: ["Psykisk helse og følelser", "Vold", "Familie", "Selvskading"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "#" },
      { type: "phone", label: "Ring", href: "tel:116111" },
    ],
    body: (
      <>
        <p className="leading-[24px] mb-[20px]">Alarmtelefonen for barn og unge (116 111) er en døgnåpen telefontjeneste for barn og unge som er utsatt for vold, overgrep og omsorgssvikt.</p>
        <p className="leading-[24px] mb-[20px]">Du kan ringe til oss om:</p>
        <ul>
          <li className="mb-[12px] ms-[24px]"><span className="leading-[24px]">Du er redd for noen hjemme</span></li>
          <li className="mb-[12px] ms-[24px]"><span className="leading-[24px]">Noen gjør ting med deg som du ikke liker</span></li>
          <li className="mb-[12px] ms-[24px]"><span className="leading-[24px]">Du kjenner noen som har det vanskelig</span></li>
          <li className="ms-[24px]"><span className="leading-[24px]">Du trenger noen å snakke med</span></li>
        </ul>
      </>
    ),
    responsible: "Barne-, ungdoms- og familiedirektoratet (Bufdir)",
    relatedTopics: ["Psykisk helse og følelser", "Vold", "Familie", "Selvskading"],
    openingHours: {
      mandag: ["00:00 - 24:00"],
      tirsdag: ["00:00 - 24:00"],
      onsdag: ["00:00 - 24:00"],
      torsdag: ["00:00 - 24:00"],
      fredag: ["00:00 - 24:00"],
      lordag: ["00:00 - 24:00"],
      sondag: ["00:00 - 24:00"],
    },
  },
  {
    slug: "mental-helse",
    type: "snakk",
    title: "Mental Helses hjelpetelefon",
    ingress: "Mental Helse tilbyr døgnåpen hjelpetelefon og chat for deg som sliter psykisk eller bare trenger noen å snakke med.",
    logo: <ImgLogo src="mental-helse-ungdom.svg" bg="#fffee8" />,
    metaType: "Chat og telefon",
    metaLanguage: "Norsk bokmål",
    tags: ["Psykisk helse og følelser", "Psykiske vansker", "Selvtillit og identitet", "Hva kan hjelpe", "Sorg og krise"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://www.mentalhelse.no" },
      { type: "phone", label: "Ring", href: "tel:116123" },
    ],
    body: (
      <>
        <p className="leading-[24px] mb-[20px]">Mental Helses hjelpetelefon (116 123) er en døgnåpen telefontjeneste for alle som trenger noen å snakke med om psykisk helse.</p>
        <p className="leading-[24px]">Tjenesten er gratis, anonym og betjent av frivillige med opplæring. Du kan også nå oss via chat og SMS.</p>
      </>
    ),
    responsible: "Mental Helse",
    relatedTopics: ["Psykisk helse og følelser", "Psykiske vansker", "Selvtillit og identitet", "Hva kan hjelpe", "Sorg og krise"],
    openingHours: {
      mandag: ["18:00 - 21:00"],
      tirsdag: ["18:00 - 21:00"],
      onsdag: ["18:00 - 21:00"],
      torsdag: ["18:00 - 24:00"],
      fredag: ["18:00 - 24:00"],
      lordag: ["18:00 - 24:00"],
      sondag: ["18:00 - 24:00"],
    },
  },
  {
    slug: "kirkens-sos",
    type: "snakk",
    title: "Kirkens SOS",
    ingress: "Kirkens SOS er en døgnåpen krisetjeneste for deg som trenger noen å snakke med. Anonymt og gratis.",
    logo: <ImgLogo src="kirkens-sos.svg" bg="#312959" />,
    metaType: "Chat og telefon",
    metaLanguage: "Norsk bokmål",
    tags: ["Psykisk helse og følelser", "Psykiske vansker", "Selvskading", "Sorg og krise"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://www.telefonforetterladte.no" },
      { type: "phone", label: "Ring", href: "tel:22400040" },
    ],
    body: (
      <p className="leading-[24px]">Kirkens SOS er en landsdekkende krisetjeneste. Vi er her for deg som opplever ensomhet, krise, selvmordstanker, eller bare trenger noen å snakke med. Tjenesten er døgnåpen, gratis og anonym.</p>
    ),
    responsible: "Kirkens SOS",
    relatedTopics: ["Psykisk helse og følelser", "Psykiske vansker", "Selvskading", "Sorg og krise"],
    openingHours: {
      mandag: ["00:00 - 01:30", "18:30 - 22:30"],
      tirsdag: ["18:30 - 22:30"],
      onsdag: ["18:30 - 24:00"],
      torsdag: ["00:00 - 01:30", "18:30 - 24:00"],
      fredag: ["00:00 - 01:30", "18:30 - 24:00"],
      lordag: ["00:00 - 01:30", "14:30 - 24:00"],
      sondag: ["00:00 - 01:30", "14:30 - 24:00"],
    },
  },
  {
    slug: "spisfo",
    type: "snakk",
    title: "Spiseforstyrrelses­foreningen (SPISFO)",
    ingress: "SPISFO er et gratis tilbud for deg som sliter med mat og kropp, eller kjenner noen som gjør det.",
    logo: <ImgLogo src="spisfo.svg" bg="#f9f2ea" />,
    metaType: "Chat og telefon",
    metaLanguage: "Norsk bokmål",
    tags: ["Psykisk helse og følelser", "Helsa di", "Kropp", "Mat og kosthold", "Spiseforstyrrelser"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "#" },
      { type: "phone", label: "Ring", href: "tel:22944500" },
    ],
    body: (
      <>
        <p className="leading-[24px] mb-[20px]">Spiseforstyrrelses­foreningen (SPISFO) tilbyr rådgivning og støtte til deg som sliter med spiseforstyrrelser, eller kjenner noen som gjør det.</p>
        <p className="leading-[24px] mb-[20px]">Vi tilbyr:</p>
        <ul>
          <li className="mb-[12px] ms-[24px]"><span className="leading-[24px]">Chat med rådgivere som har erfaring med spiseforstyrrelser</span></li>
          <li className="mb-[12px] ms-[24px]"><span className="leading-[24px]">Telefonrådgivning</span></li>
          <li className="ms-[24px]"><span className="leading-[24px]">Informasjon og veiledning til pårørende</span></li>
        </ul>
      </>
    ),
    responsible: "Spiseforstyrrelses­foreningen",
    relatedTopics: ["Psykisk helse og følelser", "Helsa di", "Kropp", "Mat og kosthold", "Spiseforstyrrelser"],
    openingHours: {
      mandag: ["10:00 - 16:00"],
      tirsdag: ["10:00 - 16:00"],
      onsdag: ["10:00 - 16:00"],
      torsdag: "Stengt",
      fredag: ["10:00 - 16:00"],
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "sex-og-samfunn",
    type: "snakk",
    title: "Sex og samfunn",
    ingress: "Rådgivning om sex, samliv og seksualitet – gratis og anonymt via chat eller telefon.",
    logo: <ImgLogo src="sex-og-samfunn.svg" />,
    metaType: "Chat og telefon",
    metaLanguage: "Norsk bokmål",
    tags: ["Sex", "Kropp", "Helsa di", "Forelskelse", "Prevensjon", "Kjønnssykdommer", "P-piller", "Graviditet"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://www.sexogsamfunn.no" },
      { type: "phone", label: "Ring", href: "tel:21600333" },
    ],
    body: (
      <p className="leading-[24px]">Sex og samfunn er Norges største senter for seksuell og reproduktiv helse og rettigheter. Vi tilbyr gratis rådgivning via chat og telefon om alt fra prevensjon til seksuell identitet.</p>
    ),
    responsible: "Sex og samfunn",
    relatedTopics: ["Sex", "Kropp", "Helsa di", "Forelskelse", "Prevensjon", "Kjønnssykdommer", "P-piller", "Graviditet"],
    openingHours: {
      mandag: ["12:00 - 16:00"],
      tirsdag: ["12:00 - 16:00"],
      onsdag: ["12:00 - 16:00"],
      torsdag: ["12:00 - 16:00"],
      fredag: ["11:00 - 15:00"],
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "ung-rettshjelp",
    type: "snakk",
    title: "Ung rettshjelp",
    ingress: "Ung rettshjelp er et landsdekkende tilbud for deg som trenger hjelp med å finne ut av rettighetene dine.",
    logo: <ImgLogo src="ung-rettshjelp.svg" bg="#fc4c02" />,
    metaType: "Telefon",
    metaLanguage: "Norsk",
    tags: ["Lov og rett", "Rettighetene dine"],
    actionButtons: [
      { type: "phone", label: "Ring oss", href: "tel:22412240" },
    ],
    body: (
      <p className="leading-[24px]">Ung rettshjelp er et landsdekkende tilbud for deg som trenger hjelp med å finne ut av rettighetene dine, eller kreve noe du har rett på. Du kan ta kontakt på telefon hvis du har spørsmål, vil snakke om en bestemt sak eller ønsker å avtale et møte med Ung rettshjelp.</p>
    ),
    responsible: "Kirkens Bymisjon",
    relatedTopics: ["Lov og rett"],
    openingHours: {
      mandag: ["10:00 - 11:30", "12:00 - 15:00"],
      tirsdag: ["10:00 - 11:30", "12:00 - 15:00"],
      onsdag: ["10:00 - 11:30", "12:00 - 15:00"],
      torsdag: ["10:00 - 11:30", "12:00 - 15:00"],
      fredag: "Stengt",
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "giftinformasjonen",
    type: "snakk",
    title: "Giftinformasjonen",
    ingress: "Trenger du hjelp og råd ved akutte forgiftninger og forgiftningsfare?",
    logo: <ImgLogo src="giftinformasjonen.svg" />,
    metaType: "Telefon",
    metaLanguage: "Norsk",
    tags: ["Helsa di", "Mat og kosthold", "Rusmidler"],
    actionButtons: [
      { type: "phone", label: "Ring oss", href: "tel:22591300" },
    ],
    body: (
      <p className="leading-[24px]">Trenger du hjelp og råd ved akutte forgiftninger og forgiftningsfare? Giftinformasjonen er en døgnåpen telefon du kan kontakte. De besvarer ikke bare akutte henvendelser, men er også behjelpelige med å gi god og kvalitetssikret informasjon, fakta og råd om forgiftninger generelt.</p>
    ),
    responsible: "Folkehelseinstituttet",
    relatedTopics: ["Helsa di"],
    openingHours: {
      mandag: ["00:00 - 24:00"],
      tirsdag: ["00:00 - 24:00"],
      onsdag: ["00:00 - 24:00"],
      torsdag: ["00:00 - 24:00"],
      fredag: ["00:00 - 24:00"],
      lordag: ["00:00 - 24:00"],
      sondag: ["00:00 - 24:00"],
    },
  },
  {
    slug: "unge-parorende",
    type: "snakk",
    title: "Unge pårørende",
    ingress: "Bekymrer du deg for noen som har det vanskelig?",
    logo: <ImgLogo src="unge-parorende.svg" />,
    metaType: "Chat og telefon",
    metaLanguage: "Norsk",
    tags: ["Sykdom", "Problemer hjemme", "Rusmidler", "Psykisk helse og følelser"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://ungeparorende.no/" },
      { type: "phone", label: "Ring oss", href: "tel:90904848" },
    ],
    body: (
      <p className="leading-[24px]">Bekymrer du deg for noen som har det vanskelig? Har du en mor eller far som er syk, eller kanskje noen du kjenner som ruser seg? Da kan du kontakte Unge Pårørende over telefon eller chat.</p>
    ),
    responsible: "Unge pårørende",
    relatedTopics: ["Psykisk helse og følelser", "Problemer hjemme"],
    openingHours: {
      mandag: ["10:00 - 17:00"],
      tirsdag: ["10:00 - 17:00"],
      onsdag: ["10:00 - 17:00"],
      torsdag: ["10:00 - 17:00"],
      fredag: ["10:00 - 17:00"],
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "arbeidstilsynet",
    type: "snakk",
    title: "Arbeidstilsynet",
    ingress: "Mangler du arbeidskontrakt? Får du ikke utbetalt lønn?",
    logo: <ImgLogo src="arbeidstilsynet.svg" />,
    metaType: "Chat og telefon",
    metaLanguage: "Norsk",
    tags: ["Jobb", "Rettighetene dine", "Sommerjobb"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://www.arbeidstilsynet.no/kontakt-oss/telefon-chat/?action=open" },
      { type: "phone", label: "Ring oss", href: "tel:73199700" },
    ],
    body: (
      <p className="leading-[24px]">Mangler du arbeidskontrakt? Får du ikke utbetalt lønn, eller har dårlige arbeidsforhold? Da kan du ta kontakt med Arbeidstilsynet på telefon eller chat.</p>
    ),
    responsible: "Arbeidstilsynet",
    relatedTopics: ["Jobb", "Rettighetene dine"],
    openingHours: {
      mandag: ["09:00 - 11:00", "12:00 - 14:00"],
      tirsdag: ["09:00 - 11:00", "12:00 - 14:00"],
      onsdag: ["09:00 - 11:00", "12:00 - 14:00"],
      torsdag: ["09:00 - 11:00", "12:00 - 14:00"],
      fredag: ["09:00 - 11:00", "12:00 - 14:00"],
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "arbeidslivstelefonen",
    type: "snakk",
    title: "Arbeidslivstelefonen",
    ingress: "Trenger du noen å snakke med om spørsmål knyttet til arbeid?",
    logo: <ImgLogo src="arbeidslivstelefonen.svg" />,
    metaType: "Chat og telefon",
    metaLanguage: "Norsk",
    tags: ["Jobb", "Sommerjobb", "Rettighetene dine"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://mentalhelse.no/fa-hjelp/arbeidslivstelefonen/?action=open" },
      { type: "phone", label: "Ring oss", href: "tel:22566700" },
    ],
    body: (
      <p className="leading-[24px]">Trenger du noen å snakke med om spørsmål knyttet til arbeid? Er du permittert, eller har du mista jobben? Eller har du vansker på jobben, eller andre spørsmål? Da kan du kontakte Arbeidslivstelefonen på telefon eller chat.</p>
    ),
    responsible: "Mental Helse",
    relatedTopics: ["Jobb"],
    openingHours: {
      mandag: ["08:30 - 16:00"],
      tirsdag: ["08:30 - 16:00"],
      onsdag: ["08:30 - 16:00"],
      torsdag: ["08:30 - 18:00"],
      fredag: ["08:30 - 16:00"],
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "spillavhengighet-norge",
    type: "snakk",
    title: "Spillavhengighet Norge",
    ingress: "Er du spilleavhengig eller kjenner du noen som er det?",
    logo: <ImgLogo src="spillavhengighet-norge.svg" bg="#fffff8" />,
    metaType: "Telefon",
    metaLanguage: "Norsk",
    tags: ["Spill og gaming"],
    actionButtons: [
      { type: "phone", label: "Ring oss", href: "tel:47700200" },
    ],
    body: (
      <p className="leading-[24px]">Er du spilleavhengig eller kjenner du noen som er det? Spilleavhengighet Norge er en frivillig organisasjon som jobber for å forebygge spilleavhengighet. Tilbudet består blant annet av hjelpetelefon, mulighet for individuelle møter og nettverksgrupper.</p>
    ),
    responsible: "Spillavhengighet Norge",
    relatedTopics: ["Spill og gaming"],
    openingHours: {
      mandag: ["09:00 - 15:00"],
      tirsdag: ["09:00 - 15:00"],
      onsdag: ["09:00 - 15:00"],
      torsdag: ["09:00 - 15:00"],
      fredag: "Stengt",
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "lanekassen",
    type: "snakk",
    title: "Lånekassen",
    ingress: "Har du spørsmål om stipend og studiestøtte?",
    logo: <ImgLogo src="lanekassen.svg" />,
    metaType: "Telefon",
    metaLanguage: "Norsk",
    tags: ["Høyere utdanning", "Videregående skole", "Utdanning"],
    actionButtons: [
      { type: "phone", label: "Ring oss", href: "tel:21496000" },
    ],
    body: (
      <p className="leading-[24px]">Har du spørsmål om stipend og studiestøtte? Eller trenger du å snakke med noen om gjeld, renter og nedbetaling av studielån? Du kan kontakte Lånekassen over telefon.</p>
    ),
    responsible: "Lånekassen",
    relatedTopics: ["Utdanning"],
    openingHours: {
      mandag: ["09:00 - 15:00"],
      tirsdag: ["09:00 - 15:00"],
      onsdag: ["09:00 - 15:00"],
      torsdag: ["09:00 - 15:00"],
      fredag: ["09:00 - 15:00"],
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "elevorganisasjonen",
    type: "snakk",
    title: "Elevorganisasjonen",
    ingress: "Lurer du på hvilke rettigheter og plikter du har som elev eller lærling?",
    logo: <ImgLogo src="elevorganisasjonen.svg" bg="#f5f3ee" />,
    metaType: "Chat og telefon",
    metaLanguage: "Norsk",
    tags: ["Rettighetene dine", "Skolehverdag", "Lærling", "Videregående skole", "Ungdomsskole"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://elev.no/vi-tilbyr/rettighetshjelpen/" },
      { type: "phone", label: "Ring oss", href: "tel:22993700" },
    ],
    body: (
      <p className="leading-[24px]">Lurer du på hvilke rettigheter og plikter du har som elev eller lærling, eller om skolen bryter loven? Da kan du kontakte Elevorganisasjonen via chat, kontaktskjema, telefon eller e-post.</p>
    ),
    responsible: "Elevorganisasjonen",
    relatedTopics: ["Skolehverdag", "Rettighetene dine"],
    openingHours: {
      mandag: ["09:00 - 16:00"],
      tirsdag: ["09:00 - 16:00"],
      onsdag: ["09:00 - 16:00"],
      torsdag: ["09:00 - 16:00"],
      fredag: ["09:00 - 16:00"],
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "pasient-og-brukerombudet",
    type: "snakk",
    title: "Pasient- og brukerombudet",
    ingress: "Trenger du hjelp i møte med helsetjenesten?",
    logo: <ImgLogo src="pasient-og-brukerombudet.svg" bg="#212529" />,
    metaType: "Telefon",
    metaLanguage: "Norsk",
    tags: ["Sykdom", "Rettighetene dine"],
    actionButtons: [
      { type: "phone", label: "Ring oss", href: "tel:40501600" },
    ],
    body: (
      <p className="leading-[24px]">Trenger du hjelp i møte med helsetjenesten? Pasient- og brukerombudet kjenner dine rettigheter og kan hjelpe deg med generelle spørsmål og klager, bistå i saksbehandling og følge opp svar.</p>
    ),
    responsible: "Pasient- og brukerombudet",
    relatedTopics: ["Rettighetene dine", "Helsa di"],
    openingHours: {
      mandag: ["09:00 - 14:30"],
      tirsdag: ["09:00 - 14:30"],
      onsdag: ["09:00 - 14:30"],
      torsdag: ["09:00 - 14:30"],
      fredag: ["09:00 - 14:30"],
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "norges-ambassade",
    type: "snakk",
    title: "Norges ambassade",
    ingress: "Er du i utlandet og trenger hjelp?",
    logo: <ImgLogo src="norges-ambassade.svg" />,
    metaType: "Telefon",
    metaLanguage: "Norsk",
    tags: ["Rettighetene dine", "Reise"],
    actionButtons: [
      { type: "phone", label: "Ring oss", href: "tel:+4723950000" },
    ],
    body: (
      <p className="leading-[24px]">Er du i utlandet og trenger hjelp? Kontakt den norske ambassaden hvis du frykter tvangsekteskap eller andre handlinger mot din vilje. De kan gi råd og veiledning, og hjelpe deg hjem til Norge.</p>
    ),
    responsible: "Utenriksdepartementet",
    relatedTopics: ["Rettighetene dine"],
  },
  {
    slug: "ffo",
    type: "snakk",
    title: "Funksjonshemmedes Fellesorganisasjon (FFO)",
    ingress: "Har du spørsmål om velferdsrettigheter eller diskriminering?",
    logo: <ImgLogo src="ffo.svg" />,
    metaType: "Telefon",
    metaLanguage: "Norsk",
    tags: ["Funksjonsnedsettelser", "Rettighetene dine"],
    actionButtons: [
      { type: "phone", label: "Ring oss", href: "tel:23905155" },
    ],
    body: (
      <p className="leading-[24px]">Har du spørsmål om velferdsrettigheter eller diskriminering som gjelder personer med funksjonshemning, eller som er kronisk syke? Da kan du kontakte FFOs Rettighetssenter på telefon eller e-post.</p>
    ),
    responsible: "FFO",
    relatedTopics: ["Rettighetene dine", "Funksjonsnedsettelser"],
    openingHours: {
      mandag: ["10:00 - 14:00"],
      tirsdag: ["10:00 - 14:00"],
      onsdag: ["10:00 - 14:00"],
      torsdag: ["10:00 - 14:00"],
      fredag: "Stengt",
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "stottesenter-kriminalutsatte",
    type: "snakk",
    title: "Støttesenter for kriminalutsatte",
    ingress: "Har du vært utsatt for vold, seksuelle overgrep eller krenkelser?",
    logo: <ImgLogo src="stottesenter-kriminalutsatte.svg" bg="#e7e8e9" />,
    metaType: "Telefon",
    metaLanguage: "Norsk",
    tags: ["Vold", "Seksuelle overgrep"],
    actionButtons: [
      { type: "phone", label: "Ring oss", href: "tel:80040008" },
    ],
    body: (
      <p className="leading-[24px]">Politiets støttesenter for kriminalitetsutsatte kan hjelpe deg som har vært utsatt for vold, seksuelle overgrep eller krenkelser av din personlige frihet. Du kan få informasjon og veiledning om det å anmelde, samt støtte hele veien fra anmeldelse til avgjort sak.</p>
    ),
    responsible: "Politiet",
    relatedTopics: ["Vold", "Seksuelle overgrep"],
    openingHours: {
      mandag: ["09:00 - 15:30"],
      tirsdag: ["09:00 - 15:30"],
      onsdag: ["09:00 - 15:30"],
      torsdag: ["09:00 - 15:30"],
      fredag: ["09:00 - 15:30"],
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "karriereveiledning",
    type: "snakk",
    title: "Karriereveiledning.no",
    ingress: "Vil du snakke med noen om utdanning eller jobb?",
    logo: <ImgLogo src="karriereveiledning.svg" bg="#f07c14" />,
    metaType: "Chat og telefon",
    metaLanguage: "Norsk",
    tags: ["Utdanning", "Høyere utdanning", "Videregående skole"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://karriereveiledning.no" },
      { type: "phone", label: "Ring oss", href: "tel:23506195" },
    ],
    body: (
      <p className="leading-[24px]">Vil du snakke med noen om utdanning eller jobb? På Karriereveiledning kan du chatte med, eller ringe til, en karriereveileder. Du kan snakke om alt mulig knyttet til utdanning og jobb, også hvis du ikke vet hvilken utdanning du skal velge.</p>
    ),
    responsible: "Kompetanse Norge",
    relatedTopics: ["Utdanning", "Jobb"],
    openingHours: {
      mandag: ["09:00 - 18:00"],
      tirsdag: ["09:00 - 18:00"],
      onsdag: ["09:00 - 18:00"],
      torsdag: ["09:00 - 17:00"],
      fredag: ["09:00 - 12:00"],
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "ivareta",
    type: "snakk",
    title: "Ivareta",
    ingress: "Kjenner du noen som sliter med rus, eller er du bekymret for noen?",
    logo: <ImgLogo src="ivareta.svg" />,
    metaType: "Telefon",
    metaLanguage: "Norsk",
    tags: ["Rusmidler", "Psykiske vansker", "Problemer hjemme"],
    actionButtons: [
      { type: "phone", label: "Ring oss", href: "tel:80040567" },
    ],
    body: (
      <p className="leading-[24px]">Kjenner du noen som sliter med rus, eller er du bekymret for noen med psykiske helseutfordringer? Ivareta er en organisasjon av og for etterlatte og pårørende. Du kan ringe Ivareta sin Pårørendetelefonen om du har konkrete spørsmål, eller om du bare trenger noen å snakke med.</p>
    ),
    responsible: "Ivareta",
    relatedTopics: ["Rusmidler", "Psykisk helse og følelser"],
    openingHours: {
      mandag: ["09:00 - 15:00"],
      tirsdag: ["09:00 - 15:00"],
      onsdag: ["09:00 - 15:00"],
      torsdag: ["09:00 - 15:00"],
      fredag: ["09:00 - 15:00"],
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "mental-helse-ungdom",
    type: "snakk",
    title: "Mental Helse Ungdom",
    ingress: "Hjelpechat for ungdom og unge voksne, 18-35 år.",
    logo: <ImgLogo src="mental-helse-ungdom.svg" bg="#fffee8" />,
    metaType: "Chat",
    metaLanguage: "Norsk",
    tags: ["Psykisk helse og følelser", "Psykiske vansker", "Selvtillit og identitet"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://mentalhelseungdom.no/chat-med-oss" },
    ],
    body: (
      <p className="leading-[24px]">Mental Helse Ungdoms Hjelpechat er for ungdom og unge voksne, i alderen 18-35 år. Her kan du snakke med en av våre frivillige chatverter, som er her for å lytte til deg. Ingen problemer er for små, og det er du selv som bestemmer hva dere skal snakke om.</p>
    ),
    responsible: "Mental Helse Ungdom",
    relatedTopics: ["Psykisk helse og følelser"],
    openingHours: {
      mandag: ["18:00 - 21:00"],
      tirsdag: ["18:00 - 21:00"],
      onsdag: ["18:00 - 21:00"],
      torsdag: ["18:00 - 24:00"],
      fredag: ["18:00 - 24:00"],
      lordag: ["18:00 - 24:00"],
      sondag: ["18:00 - 24:00"],
    },
  },
  {
    slug: "amathea",
    type: "snakk",
    title: "Amathea",
    ingress: "Veiledning ved uplanlagt graviditet.",
    logo: <ImgLogo src="amathea.svg" bg="#341221" />,
    metaType: "Chat og telefon",
    metaLanguage: "Norsk",
    tags: ["Graviditet", "Kropp", "Prevensjon", "P-piller"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://www.amathea.no/?action2=open" },
      { type: "phone", label: "Ring oss", href: "tel:90659060" },
    ],
    body: (
      <p className="leading-[24px]">En uplanlagt graviditet kan oppleves utfordrende og vanskelig uavhengig av alder og livssituasjon. Derfor tilbyr Amathea samtale med veileder slik at du kan få mulighet til å kjenne etter hva som blir et rett valg for deg. Vi tilbyr også veiledning til gutter.</p>
    ),
    responsible: "Amathea",
    relatedTopics: ["Graviditet", "Kropp"],
    openingHours: {
      mandag: ["08:30 - 15:30"],
      tirsdag: ["08:30 - 11:00"],
      onsdag: ["08:30 - 15:30"],
      torsdag: ["08:30 - 15:30"],
      fredag: ["08:30 - 15:30"],
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "ungdomstelefonen",
    type: "snakk",
    title: "Ungdomstelefonen",
    ingress: "For unge som trenger noen å snakke med om seksualitet, kjønn og identitet.",
    logo: <ImgLogo src="ungdomstelefonen.svg" />,
    metaType: "Chat og telefon",
    metaLanguage: "Norsk",
    tags: ["Kjønnsidentitet", "Skeiv", "Forelskelse"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://ungdomstelefonen.no/" },
      { type: "phone", label: "Ring oss", href: "tel:40000777" },
    ],
    body: (
      <p className="leading-[24px]">Ungdomstelefonen er et tilbud til unge som trenger noen å snakke med om seksualitet, kjønn, identitet, legning, forelskelse, aktivitetstilbud eller sikrere sex.</p>
    ),
    responsible: "Skeiv Ungdom",
    relatedTopics: ["Kjønnsidentitet", "Forelskelse"],
    openingHours: {
      mandag: ["18:00 - 22:00"],
      tirsdag: ["18:00 - 22:00"],
      onsdag: ["18:00 - 22:00"],
      torsdag: ["18:00 - 22:00"],
      fredag: "Stengt",
      lordag: "Stengt",
      sondag: ["18:00 - 22:00"],
    },
  },
  {
    slug: "snakkommobbing",
    type: "snakk",
    title: "Snakkommobbing.no",
    ingress: "Et tilbud fra Blå Kors til barn og unge som opplever mobbing.",
    logo: <ImgLogo src="snakkommobbing.svg" />,
    metaType: "Chat og telefon",
    metaLanguage: "Norsk",
    tags: ["Mobbing", "Vennskap", "Skolehverdag", "Likestilling og diskriminering"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "http://www.snakkommobbing.no/?action=open" },
      { type: "phone", label: "Ring oss", href: "tel:+4738020273" },
    ],
    body: (
      <p className="leading-[24px]">Snakkommobbing er et tilbud fra Blå Kors til barn og unge i hele Norge. Her kan du chatte dersom du har opplevd mobbing, kjenner noen som har blitt mobbet eller om du har mobbet noen selv.</p>
    ),
    responsible: "Blå Kors",
    relatedTopics: ["Mobbing", "Skolehverdag"],
    openingHours: {
      mandag: ["14:30 - 21:00"],
      tirsdag: ["14:30 - 21:00"],
      onsdag: ["14:30 - 21:00"],
      torsdag: ["14:30 - 21:00"],
      fredag: ["14:30 - 21:00"],
      lordag: ["15:00 - 21:00"],
      sondag: ["15:00 - 21:00"],
    },
  },
  {
    slug: "hjelpetelefonen-seksuelt-misbrukte",
    type: "snakk",
    title: "Hjelpetelefonen for seksuelt misbrukte",
    ingress: "Døgnåpen telefon for incest- og seksuelt misbrukte.",
    logo: <ImgLogo src="hjelpetelefonen-seksuelt-misbrukte.svg" />,
    metaType: "Telefon",
    metaLanguage: "Norsk",
    tags: ["Seksuelle overgrep"],
    actionButtons: [
      { type: "phone", label: "Ring oss", href: "tel:80057000" },
    ],
    body: (
      <p className="leading-[24px]">Incestsenteret i Vestfold gir tilbud til incest- og seksuelt misbrukte jenter, gutter, kvinner, menn, deres pårørende og overgripere. Du kan ringe døgnet rundt, alle dager i året. Det er helt gratis å ringe, og du er anonym om du ønsker det.</p>
    ),
    responsible: "Incestsenteret i Vestfold",
    relatedTopics: ["Seksuelle overgrep"],
    openingHours: {
      mandag: ["00:00 - 24:00"],
      tirsdag: ["00:00 - 24:00"],
      onsdag: ["00:00 - 24:00"],
      torsdag: ["00:00 - 24:00"],
      fredag: ["00:00 - 24:00"],
      lordag: ["00:00 - 24:00"],
      sondag: ["00:00 - 24:00"],
    },
  },
  {
    slug: "ros",
    type: "snakk",
    title: "ROS (Rådgivning om spiseforstyrrelser)",
    ingress: "For deg som synes forholdet til mat, kropp eller trening har blitt vanskelig.",
    logo: <ImgLogo src="ros.svg" bg="#f47b40" />,
    metaType: "Chat og telefon",
    metaLanguage: "Norsk",
    tags: ["Spiseforstyrrelser", "Mat og kosthold", "Psykisk helse og følelser", "Psykiske vansker"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://nettros.no/chat/" },
      { type: "phone", label: "Ring oss", href: "tel:94817818" },
    ],
    body: (
      <p className="leading-[24px]">Synes du forholdet til mat, kropp eller trening har blitt vanskelig? Eller står du nær noen med en spiseproblematikk? Hos ROS chat kan du snakke anonymt med frivillige og ansatte som har både kunnskap og erfaring med spiseforstyrrelser.</p>
    ),
    responsible: "ROS",
    relatedTopics: ["Spiseforstyrrelser", "Psykisk helse og følelser"],
    openingHours: {
      mandag: ["10:00 - 16:00", "17:00 - 21:00"],
      tirsdag: ["10:00 - 16:00", "17:00 - 21:00"],
      onsdag: ["10:00 - 16:00", "17:00 - 21:00"],
      torsdag: ["10:00 - 16:00", "17:00 - 21:00"],
      fredag: ["10:00 - 16:00"],
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "rode-kors-telefonen",
    type: "snakk",
    title: "Røde Kors-telefonen",
    ingress: "For personer utsatt for negativ sosial kontroll og æresrelatert vold.",
    logo: <ImgLogo src="rode-kors-telefonen.svg" />,
    metaType: "Chat og telefon",
    metaLanguage: "Norsk",
    tags: ["Vold", "Krysskulturell", "Problemer hjemme", "Selvtillit og identitet"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://rodekorstelefonen.no/" },
      { type: "phone", label: "Ring oss", href: "tel:81555201" },
    ],
    body: (
      <p className="leading-[24px]">Røde kors-telefonen gir informasjon og veiledning til personer som er utsatt for negativ sosial kontroll og æresrelatert vold, samt tvangsekteskap, etterlatt i utlandet eller kjønnslemlestelse.</p>
    ),
    responsible: "Røde Kors",
    relatedTopics: ["Vold", "Krysskulturell"],
    openingHours: {
      mandag: ["09:00 - 16:00"],
      tirsdag: ["09:00 - 16:00"],
      onsdag: ["09:00 - 16:00"],
      torsdag: ["09:00 - 16:00"],
      fredag: ["09:00 - 16:00"],
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "unge-relasjoner",
    type: "snakk",
    title: "Unge Relasjoner",
    ingress: "Er du i en usunn relasjon, og lurer på om du blir utsatt for vold?",
    logo: <ImgLogo src="unge-relasjoner.svg" bg="#f5f3f0" />,
    metaType: "Chat",
    metaLanguage: "Norsk",
    tags: ["Vold", "Forelskelse", "Nettvett og sosiale medier"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://www.ungerelasjoner.no/" },
    ],
    body: (
      <p className="leading-[24px]">Er du i en usunn relasjon, og lurer på om du blir utsatt for vold? Eller har du en venn du er bekymret for? Da kan du kontakte Unge Relasjoner på chat, og få svar på spørsmål, råd og veiledning.</p>
    ),
    responsible: "Stine Sofies Stiftelse",
    relatedTopics: ["Vold", "Forelskelse"],
    openingHours: {
      mandag: "Stengt",
      tirsdag: ["12:00 - 20:00"],
      onsdag: "Stengt",
      torsdag: "Stengt",
      fredag: ["12:00 - 15:00"],
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "barn-av-rusmisbrukere",
    type: "snakk",
    title: "Barn av Rusmisbrukere",
    ingress: "For deg som har foreldre eller nære som drikker mye eller ruser seg.",
    logo: <ImgLogo src="barn-av-rusmisbrukere.svg" />,
    metaType: "Chat",
    metaLanguage: "Norsk",
    tags: ["Problemer hjemme", "Rusmidler", "Familie"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "http://www.barsnakk.no/" },
    ],
    body: (
      <p className="leading-[24px]">Har du foreldre eller andre nære som drikker mye, eller ruser seg på andre rusmidler? Hos Barn av Rusmisbrukere kan du snakke helt fritt og helt anonymt. Enten du vil snakke om vanskelige ting, eller bare trenger et pusterom.</p>
    ),
    responsible: "Barn av Rusmisbrukere",
    relatedTopics: ["Rusmidler", "Familie"],
    openingHours: {
      mandag: ["17:00 - 20:00"],
      tirsdag: ["17:00 - 20:00"],
      onsdag: ["17:00 - 20:00"],
      torsdag: ["17:00 - 20:00"],
      fredag: "Stengt",
      lordag: "Stengt",
      sondag: ["17:00 - 20:00"],
    },
  },
  {
    slug: "hjelpelinjen-spilleavhengige",
    type: "snakk",
    title: "Hjelpelinjen for spilleavhengige",
    ingress: "Råd og hjelp om pengespill og dataspill.",
    logo: <ImgLogo src="hjelpelinjen-spillavhengige.svg" bg="#f8f4ec" />,
    metaType: "Chat og telefon",
    metaLanguage: "Norsk",
    tags: ["Spill og gaming"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://hjelpelinjen.no/?action=open" },
      { type: "phone", label: "Ring oss", href: "tel:80080040" },
    ],
    body: (
      <p className="leading-[24px]">Hjelpelinjen for spilleavhengige gir råd og hjelp om du eller en i familien har et problem med pengespill eller dataspill.</p>
    ),
    responsible: "Lotteri- og stiftelsestilsynet",
    relatedTopics: ["Spill og gaming"],
    openingHours: {
      mandag: ["11:00 - 15:00"],
      tirsdag: ["11:00 - 15:00"],
      onsdag: ["11:00 - 15:00"],
      torsdag: ["11:00 - 15:00"],
      fredag: ["11:00 - 15:00"],
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "skeivchat",
    type: "snakk",
    title: "Skeivchat",
    ingress: "Chat med frivillige skeive om det å føle seg litt annerledes.",
    logo: <ImgLogo src="skeivchat.svg" bg="#edf9f9" />,
    metaType: "Chat",
    metaLanguage: "Norsk",
    tags: ["Skeiv", "Sex", "Forelskelse", "Kjønnsidentitet"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://www.helseutvalget.no/skeivchat" },
    ],
    body: (
      <p className="leading-[24px]">På Skeivchat kan du chatte med frivillige skeive, lesbiske, bifile og homofile og transpersoner som har egenerfaring med det å forelske seg i noen av samme kjønn, komme ut og det å føle seg litt annerledes.</p>
    ),
    responsible: "Helseutvalget",
    relatedTopics: ["Skeiv", "Kjønnsidentitet"],
    openingHours: {
      mandag: ["17:30 - 20:30"],
      tirsdag: "Stengt",
      onsdag: ["16:00 - 20:00"],
      torsdag: ["16:00 - 20:00"],
      fredag: "Stengt",
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "hks-chatten",
    type: "snakk",
    title: "HKS-chatten",
    ingress: "Chat med fagpersoner om kropp, seksualitet og kjønnsidentitet.",
    logo: <ImgLogo src="hks-chatten.svg" />,
    metaType: "Chat og telefon",
    metaLanguage: "Norsk",
    tags: ["Kjønnsidentitet", "Sex", "Kropp"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://www.ichatten.no/?action=open" },
      { type: "phone", label: "Ring oss", href: "tel:48113013" },
    ],
    body: (
      <p className="leading-[24px]">Hos ichatten kan du chatte med fagpersoner med sexologisk videreutdanning eller transkompetanse. De svarer på spørsmål om ulike temaer knyttet til for eksempel kropp, seksualitet og kjønnsidentitet.</p>
    ),
    responsible: "Helseutvalget",
    relatedTopics: ["Kjønnsidentitet", "Sex"],
    openingHours: {
      mandag: ["17:00 - 20:00"],
      tirsdag: "Stengt",
      onsdag: "Stengt",
      torsdag: ["17:00 - 20:00"],
      fredag: "Stengt",
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "kors-pa-halsen",
    type: "snakk",
    title: "Kors på halsen",
    ingress: "Røde Kors samtaletilbud for barn og unge opp til 18 år.",
    logo: <ImgLogo src="kors-pa-halsen.svg" />,
    metaType: "Chat og telefon",
    metaLanguage: "Norsk",
    tags: ["Mobbing", "Vennskap", "Familie", "Kropp", "Psykisk helse og følelser"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://korspaahalsen.rodekors.no/?action=open" },
      { type: "phone", label: "Ring oss", href: "tel:80033321" },
    ],
    body: (
      <p className="leading-[24px]">Kors på halsen er Røde Kors samtaletilbud for barn og unge opp til 18 år. Her kan du dele dine tanker, følelser og opplevelser. De du snakker med er frivillige og lytter gjerne til det du har på hjertet.</p>
    ),
    responsible: "Røde Kors",
    relatedTopics: ["Psykisk helse og følelser", "Mobbing"],
    openingHours: {
      mandag: ["14:00 - 22:00"],
      tirsdag: ["14:00 - 24:00"],
      onsdag: ["14:00 - 22:00"],
      torsdag: ["14:00 - 24:00"],
      fredag: ["14:00 - 22:00"],
      lordag: ["14:00 - 22:00"],
      sondag: ["14:00 - 22:00"],
    },
  },
  {
    slug: "dopingkontakten",
    type: "snakk",
    title: "Dopingkontakten",
    ingress: "Spørsmål om doping, trening og kropp.",
    logo: <ImgLogo src="dopingkontakten.svg" bg="#2ebef0" />,
    metaType: "Chat",
    metaLanguage: "Norsk",
    tags: ["Trening og idrett", "Kropp", "Tobakk"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://dopingkontakten.no/" },
    ],
    body: (
      <p className="leading-[24px]">Sitter du med spørsmål om dopingmidler, trening eller kropp? På tjenesten sitter personer med psykologisk- og idrettsfaglig kompetanse. Vi kan hjelpe deg med å sortere tankene, og reflektere over doping, trening og kropp.</p>
    ),
    responsible: "Antidoping Norge",
    relatedTopics: ["Trening og idrett", "Kropp"],
    openingHours: {
      mandag: ["11:00 - 20:00"],
      tirsdag: ["11:00 - 20:00"],
      onsdag: "Stengt",
      torsdag: ["11:00 - 20:00"],
      fredag: "Stengt",
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "tips-politiet",
    type: "snakk",
    title: "Tips politiet",
    ingress: "Tips politiet om kriminelle hendelser.",
    logo: <ImgLogo src="tips-politiet.svg" />,
    metaType: "Telefon",
    metaLanguage: "Norsk",
    tags: ["Kriminalitet"],
    actionButtons: [
      { type: "phone", label: "Ring oss", href: "tel:02800" },
    ],
    body: (
      <p className="leading-[24px]">Du kan tipse politiet om kriminelle hendelser. Du kan også sende dem opplysninger som kan forhindre en kriminell handling.</p>
    ),
    responsible: "Politiet",
    relatedTopics: ["Kriminalitet"],
    openingHours: {
      mandag: ["00:00 - 24:00"],
      tirsdag: ["00:00 - 24:00"],
      onsdag: ["00:00 - 24:00"],
      torsdag: ["00:00 - 24:00"],
      fredag: ["00:00 - 24:00"],
      lordag: ["00:00 - 24:00"],
      sondag: ["00:00 - 24:00"],
    },
  },
  {
    slug: "for-fangers-parorende",
    type: "snakk",
    title: "For Fangers Pårørende (FFP)",
    ingress: "For deg som har noen som sitter i fengsel.",
    logo: <ImgLogo src="fangers-parorende.svg" />,
    metaType: "Chat og telefon",
    metaLanguage: "Norsk",
    tags: ["Kriminalitet", "Problemer hjemme"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://ffp.no/?action=open" },
      { type: "phone", label: "Ring oss", href: "tel:22114130" },
    ],
    body: (
      <p className="leading-[24px]">Sitter en av foreldrene dine, eller en annen som står deg nær, i fengsel eller soner hjemme med fotlenke? Ta kontakt med For Fangers Pårørende (FFP) hvis du har lyst til å snakke om det, eller hvis det er noe du lurer på!</p>
    ),
    responsible: "For Fangers Pårørende",
    relatedTopics: ["Kriminalitet", "Problemer hjemme"],
    openingHours: {
      mandag: ["12:00 - 15:30"],
      tirsdag: ["09:00 - 15:30"],
      onsdag: ["09:00 - 15:30"],
      torsdag: ["09:00 - 15:30"],
      fredag: ["09:00 - 15:30"],
      lordag: "Stengt",
      sondag: "Stengt",
    },
  },
  {
    slug: "sidetmedord",
    type: "snakk",
    title: "Sidetmedord.no",
    ingress: "Døgnåpen chattetjeneste der alle kan ta kontakt anonymt.",
    logo: <ImgLogo src="sidetmedord.svg" />,
    metaType: "Chat og telefon",
    metaLanguage: "Norsk",
    tags: ["Problemer hjemme", "Psykisk helse og følelser", "Sorg og krise", "Selvskading", "Selvtillit og identitet"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://sidetmedord.mentalhelse.no/?action=open" },
      { type: "phone", label: "Ring oss", href: "tel:116123" },
    ],
    body: (
      <p className="leading-[24px]">Sidetmedord er en døgnåpen chattetjeneste der alle kan ta kontakt anonymt, uansett hva man ønsker å skrive om. Tjenesten driftes av Mental helse, og det er faste ansatte som besvarer chattene. Mental helse har også en døgnåpen telefon man kan ringe til.</p>
    ),
    responsible: "Mental Helse",
    relatedTopics: ["Psykisk helse og følelser", "Problemer hjemme"],
    openingHours: {
      mandag: ["00:00 - 24:00"],
      tirsdag: ["00:00 - 24:00"],
      onsdag: ["00:00 - 24:00"],
      torsdag: ["00:00 - 24:00"],
      fredag: ["00:00 - 24:00"],
      lordag: ["00:00 - 24:00"],
      sondag: ["00:00 - 24:00"],
    },
  },

  // ══════════════════════════════════════
  //  SELVHJELP (tools / websites / apps)
  //  Source: ung.no/selvhjelp (30 services)
  // ══════════════════════════════════════
  {
    slug: "asylbarn",
    type: "selvhjelp",
    title: "Asylbarn.no",
    ingress: "På asylbarn.no kan du få informasjon om asylprosessen fra A-Å.",
    logo: <ImgLogo src="asylbarn.svg" />,
    metaType: "Nettside",
    metaLanguage: "Norsk",
    tags: ["Krysskulturell", "Familie", "Rettighetene dine"],

    actionButtons: [
      { type: "web", label: "Vis i nettleser", href: "https://asylbarn.no/" },
    ],
    body: (
      <p className="leading-[24px]">Asylbarn.no gir informasjon om asylprosessen tilpasset barn og unge. Her finner du informasjon om dine rettigheter, hva som skjer under asylprosessen, og hvor du kan få hjelp.</p>
    ),
    responsible: "NOAS (Norsk organisasjon for asylsøkere)",
    relatedTopics: ["Krysskulturell", "Familie", "Rettighetene dine"],
  },
  {
    slug: "finn-jobben",
    type: "selvhjelp",
    title: "Finn jobben på arbeidsplassen.no",
    ingress: "Er du på jakt etter din første jobb eller kanskje en deltidsjobb ved siden av skolen? På arbeidsplassen.no kan du enkelt finne stillinger som passer akkurat deg!",
    logo: <ImgLogo src="arbeidsplassen.svg" />,
    metaType: "Nettside",
    metaLanguage: "Norsk",
    tags: ["Jobb", "Sommerjobb"],
    actionButtons: [
      { type: "web", label: "Vis i nettleser", href: "https://arbeidsplassen.nav.no/stillinger" },
    ],
    body: (
      <p className="leading-[24px]">Arbeidsplassen.no er Nav sin jobbportal der du kan søke etter ledige stillinger over hele Norge. Filtrer på bransje, sted og stillingstype for å finne jobben som passer for deg.</p>
    ),
    responsible: "Nav",
    relatedTopics: ["Jobb", "Sommerjobb"],
  },
  {
    slug: "finn-larebedrift",
    type: "selvhjelp",
    title: "Finn lærebedrift",
    ingress: "Finn godkjente lærebedrifter og ledige læreplasser i hele Norge.",
    logo: <ImgLogo src="finn-larebedrift.svg" />,
    metaType: "Nettside",
    metaLanguage: "Norsk bokmål",
    tags: ["Utdanning", "Lærling"],
    actionButtons: [
      { type: "web", label: "Vis i nettleser", href: "https://finnlarebedrift.no" },
    ],
    body: (
      <p className="leading-[24px]">Finn lærebedrift er et verktøy der du kan søke etter godkjente lærebedrifter og ledige læreplasser. Filtrer på fylke og fagområde for å finne den rette læreplassen.</p>
    ),
    responsible: "HK-dir (Direktoratet for høyere utdanning og kompetanse)",
    relatedTopics: ["Utdanning", "Lærling"],
  },
  {
    slug: "utdanning-og-yrker",
    type: "selvhjelp",
    title: "Få forslag til utdanninger og yrker",
    ingress: "Et verktøy for ungdom som ønsker å finne en utdanning basert på interesser.",
    logo: <ImgLogo src="utdanning-og-yrker.svg" bg="#ffe9b6" />,
    metaType: "Nettside",
    metaLanguage: "Norsk bokmål",
    tags: ["Utdanning", "Jobb", "Høyere utdanning"],
    actionButtons: [
      { type: "web", label: "Vis i nettleser", href: "https://karriereveiledning.no/karrierevalg/fa-forslag-til-utdanninger-yrker?tema=57" },
    ],
    body: (
      <p className="leading-[24px]">Karriereveiledningstjenesten tilbyr et verktøy der du kan utforske utdanninger og yrker basert på dine interesser og styrker. Svar på noen enkle spørsmål og få personlige forslag.</p>
    ),
    responsible: "Karriereveiledningstjenesten / HK-dir",
    relatedTopics: ["Utdanning", "Jobb", "Høyere utdanning"],
  },
  {
    slug: "hjelp-soke-jobb",
    type: "selvhjelp",
    title: "Få hjelp til å søke jobb",
    ingress: "Verktøy du kan bruke når du skal søke jobb – CV, søknad og intervjuforberedelser.",
    logo: <ImgLogo src="hjelp-soke-jobb.svg" />,
    metaType: "Nettside",
    metaLanguage: "Norsk bokmål",
    tags: ["Jobb", "Sommerjobb"],
    actionButtons: [
      { type: "web", label: "Vis i nettleser", href: "https://karriereveiledning.no/karrierevalg/verktoy-soke-jobb" },
    ],
    body: (
      <p className="leading-[24px]">Karriereveiledningstjenesten hjelper deg med praktiske verktøy for jobbsøking: skriv CV, lag søknad, forbered deg til intervju og finn ut hva du er god til.</p>
    ),
    responsible: "Karriereveiledningstjenesten / HK-dir",
    relatedTopics: ["Jobb", "Sommerjobb"],
  },
  {
    slug: "grubl",
    type: "selvhjelp",
    title: "Grubl",
    ingress: "Grubl er en app som kan hjelpe deg å gruble mindre. Du får se en serie om stress, oppmerksomhet og grubling, og du får øvelser som kan gi deg bedre kontroll over grublingen.",
    logo: <ImgLogo src="grubl.svg" bg="black" />,
    metaType: "Mobil-app",
    metaLanguage: "Norsk bokmål",
    tags: ["Psykisk helse og følelser", "Selvtillit og identitet", "Helsa di"],
    actionButtons: [
      { type: "download", label: "Last ned fra App Store", href: "#", icon: "apple", hrefAndroid: "https://play.google.com/store/apps/details?id=no.youwell.grubl" },
    ],
    body: (
      <>
        <p className="leading-[24px] mb-[20px]">«Grubl» er en helt ny populærvitenskapelig helseapp laget for deg som ønsker å gruble mindre. Å bruke «Grubl» er enkelt og trygt:</p>
        <ol>
          <li className="mb-[12px] ms-[24px]"><span className="leading-[24px]">Du starter med en kort sjekk av helse og humør.</span></li>
          <li className="mb-[12px] ms-[24px]"><span className="leading-[24px]">Du ser en programserie om hvordan stressystemet settes i gang av grubling.</span></li>
          <li className="mb-[12px] ms-[24px]"><span className="leading-[24px]">Du får tilgang til øvelser som gir deg bedre kontroll over grubling i 12 dager.</span></li>
          <li className="ms-[24px]"><span className="leading-[24px]">Du svarer en gang til på spørsmål om helse og humør. Har du fått det bedre?</span></li>
        </ol>
      </>
    ),
    responsible: "Brorson og Sande AS",
    relatedTopics: ["Psykisk helse og følelser", "Selvtillit og identitet", "Helsa di", "Hva kan hjelpe"],
  },


  {
    slug: "slettmeg",
    type: "selvhjelp",
    title: "Slettmeg.no",
    ingress: "Føler du deg krenket på nett? Slettmeg.no er her for å hjelpe.",
    logo: <ImgLogo src="slettmeg.svg" />,
    metaType: "Nettside",
    metaLanguage: "Norsk bokmål",
    tags: ["Nettvett og sosiale medier", "Lovbrudd"],
    actionButtons: [
      { type: "web", label: "Vis i nettleser", href: "https://www.slettmeg.no" },
    ],
    body: (
      <p className="leading-[24px]">Slettmeg.no er en gratis rådgivningstjeneste som hjelper deg med å fjerne uønsket innhold på internett. Har noen publisert bilder, videoer eller tekst om deg uten tillatelse? Vi kan hjelpe.</p>
    ),
    responsible: "Datatilsynet / NorSIS",
    relatedTopics: ["Nettvett og sosiale medier", "Rettighetene dine"],
  },

  {
    slug: "hva-er-innafor",
    type: "selvhjelp",
    title: "Hva er innafor?",
    ingress: "Er du usikker på hva som er greit når det gjelder sex, porno, onani, samtykke eller deling av bilder? I dette verktøyet kan du lære mer om temaene, og få konkrete råd og veiledning om seksuell atferd.",
    logo: <ImgLogo src="hva-er-innafor.svg" bg="#2e0a52" />,
    metaType: "Nettside",
    metaLanguage: "Norsk bokmål",
    tags: ["Sex", "Seksuelle overgrep"],
    actionButtons: [
      { type: "web", label: "Vis i nettleser", href: "https://www.helsenorge.no/sex-og-samliv/hvaerinnafor/" },
    ],
    body: (
      <p className="leading-[24px]">Er du usikker på hva som er greit når det gjelder sex, porno, onani, samtykke eller deling av bilder? I dette verktøyet kan du lære mer om temaene, og få konkrete råd og veiledning om seksuell atferd.</p>
    ),
    responsible: "Helsedirektoratet",
    relatedTopics: ["Sex", "Seksuelle overgrep"],
  },
  {
    slug: "ga10",
    type: "selvhjelp",
    title: "Gå10 - Gå 10 minutter hver dag",
    ingress: "Gå10 er en app for deg som trenger motivasjon for å komme i gang med mer bevegelse. Appen registrerer tiden du går, og gir ekstrapoeng for tempo.",
    logo: <ImgLogo src="ga10.svg" bg="#ee5335" />,
    metaType: "Mobil-app",
    metaLanguage: "Norsk bokmål",
    tags: ["Trening og idrett", "Helsa di"],
    actionButtons: [
      { type: "download", label: "Last ned fra App Store", href: "https://apps.apple.com/us/app/gå-10/id1447263129", icon: "apple", hrefAndroid: "https://play.google.com/store/apps/details?id=no.helsedirektoratet.ga10" },
    ],
    body: (<p className="leading-[24px]">Gå10 er en app for deg som trenger motivasjon for å komme i gang med mer bevegelse. Appen registrerer tiden du går, og gir ekstrapoeng for tempo.</p>),
    responsible: "Helsedirektoratet",
    relatedTopics: ["Trening og idrett", "Helsa di"],
  },
  {
    slug: "hjelp-velge-studie",
    type: "selvhjelp",
    title: "Hjelp til å velge studie",
    ingress: "Er du usikker på hvilken utdanning du skal ta?",
    logo: <ImgLogo src="hjelp-velge-studie.svg" />,
    metaType: "Nettside",
    metaLanguage: "Norsk bokmål",
    tags: ["Utdanning", "Høyere utdanning"],
    actionButtons: [
      { type: "web", label: "Vis i nettleser", href: "https://karriereveiledning.no/karrierevalg/aner-ikke-hva-jeg-vil-studere" },
    ],
    body: (<p className="leading-[24px]">Karriereveiledningstjenesten hjelper deg med å utforske ulike studieretninger og finne ut hva som passer for deg.</p>),
    responsible: "Karriereveiledningstjenesten / HK-dir",
    relatedTopics: ["Utdanning", "Høyere utdanning"],
  },
  {
    slug: "husleiekalkulator",
    type: "selvhjelp",
    title: "Husleiekalkulator",
    ingress: "Er du usikker på om husleien der du bor blir riktig justert og om dine rettigheter som leietaker er ivaretatt?",
    logo: <ImgLogo src="husleiekalkulator.svg" />,
    metaType: "Nettside",
    metaLanguage: "Norsk bokmål",
    tags: ["Økonomien din", "Bolig / flytte hjemmefra"],
    actionButtons: [
      { type: "web", label: "Vis i nettleser", href: "https://www.ssb.no/kalkulatorer/husleiekalkulator" },
    ],
    body: (<p className="leading-[24px]">Husleiekalkulatoren fra SSB hjelper deg med å sjekke om husleien din er justert riktig i henhold til konsumprisindeksen.</p>),
    responsible: "Statistisk sentralbyrå (SSB)",
    relatedTopics: ["Økonomien din", "Bolig / flytte hjemmefra"],
  },
  {
    slug: "jobbkartet",
    type: "selvhjelp",
    title: "Jobbkartet",
    ingress: "Se hvor jobbene er, og hvordan arbeidsmarkedet utvikler seg.",
    logo: <ImgLogo src="jobbkartet.svg" bg="#fbd7b8" />,
    metaType: "Nettside",
    metaLanguage: "Norsk bokmål",
    tags: ["Jobb"],
    actionButtons: [
      { type: "web", label: "Vis i nettleser", href: "https://utdanning.no/jobbkartet" },
    ],
    body: (<p className="leading-[24px]">Jobbkartet viser hvor jobbene er i Norge, og hvordan arbeidsmarkedet utvikler seg i ulike regioner og bransjer.</p>),
    responsible: "Utdanning.no / HK-dir",
    relatedTopics: ["Jobb"],
  },
  {
    slug: "jobbkompasset",
    type: "selvhjelp",
    title: "Jobbkompasset",
    ingress: "Få inspirasjon til hva du kan bli.",
    logo: <ImgLogo src="jobbkompasset.svg" />,
    metaType: "Nettside",
    metaLanguage: "Norsk bokmål",
    tags: ["Jobb", "Utdanning"],
    actionButtons: [
      { type: "web", label: "Vis i nettleser", href: "https://utdanning.no/jobbkompasset" },
    ],
    body: (<p className="leading-[24px]">Jobbkompasset gir deg inspirasjon til hva du kan bli basert på dine interesser og styrker.</p>),
    responsible: "Utdanning.no / HK-dir",
    relatedTopics: ["Jobb", "Utdanning"],
  },
  {
    slug: "karakterkalkulatoren",
    type: "selvhjelp",
    title: "Karakterkalkulatoren",
    ingress: "Regn ut hvor mange poeng du har, og se hva du kan komme inn på.",
    logo: <ImgLogo src="karakterkalkulatoren.svg" />,
    metaType: "Nettside",
    metaLanguage: "Norsk bokmål",
    tags: ["Utdanning"],
    actionButtons: [
      { type: "web", label: "Vis i nettleser", href: "https://utdanning.no/karakterkalkulator" },
    ],
    body: (<p className="leading-[24px]">Karakterkalkulatoren lar deg regne ut poengene dine og se hva du kan komme inn på av høyere utdanning.</p>),
    responsible: "Utdanning.no / HK-dir",
    relatedTopics: ["Utdanning"],
  },
  {
    slug: "kostholdsplanleggeren-ung",
    type: "selvhjelp",
    title: "Kostholdsplanleggeren ung",
    ingress: "Kostholdsplanleggeren ung er et verktøy som gir ungdom enkel og kvalitetssikret informasjon om kosthold.",
    logo: <ImgLogo src="kostholdsplanleggeren.svg" bg="#0e4e7a" />,
    metaType: "Nettside",
    metaLanguage: "Norsk bokmål",
    tags: ["Helsa di", "Mat og kosthold", "Trening og idrett"],
    actionButtons: [
      { type: "web", label: "Vis i nettleser", href: "https://www.kostholdsplanleggeren.no/ung" },
    ],
    body: (<p className="leading-[24px]">Kostholdsplanleggeren ung gir deg enkel og kvalitetssikret informasjon om kosthold, tilpasset unge.</p>),
    responsible: "Helsedirektoratet / Mattilsynet",
    relatedTopics: ["Helsa di", "Mat og kosthold", "Trening og idrett"],
  },
  {
    slug: "muligheter-med-yrkesfag",
    type: "selvhjelp",
    title: "Muligheter med yrkesfag",
    ingress: "Se mulige yrker med ditt utdanningsprogram, der du bor.",
    logo: <ImgLogo src="muligheter-med-yrkesfag.svg" />,
    metaType: "Nettside",
    metaLanguage: "Norsk bokmål",
    tags: ["Utdanning", "Jobb", "Lærling"],
    actionButtons: [
      { type: "web", label: "Vis i nettleser", href: "https://utdanning.no/muligheter-med-yrkesfag" },
    ],
    body: (<p className="leading-[24px]">Se mulige yrker med ditt utdanningsprogram, der du bor. Utforsk hvilke karrieremuligheter som finnes med yrkesfag.</p>),
    responsible: "Utdanning.no / HK-dir",
    relatedTopics: ["Utdanning", "Jobb", "Lærling"],
  },
  {
    slug: "nettopp",
    type: "selvhjelp",
    title: "NettOpp",
    ingress: "NettOpp lærer deg hvordan du kan håndtere negative hendelser på nett.",
    logo: <ImgLogo src="nettopp.svg" />,
    metaType: "Mobil-app",
    metaLanguage: "Norsk bokmål",
    tags: ["Psykisk helse og følelser", "Nettvett og sosiale medier", "Helsa di"],
    actionButtons: [
      { type: "download", label: "Last ned fra App Store", href: "https://apps.apple.com/no/app/nettopp/id1478735947", icon: "apple", hrefAndroid: "https://play.google.com/store/apps/details?id=no.uit.rkbu.nettopp" },
    ],
    body: (<p className="leading-[24px]">NettOpp lærer deg hvordan du kan håndtere negative hendelser på nett. I appen får du informasjon om følelser som det er vanlig å få dersom du opplever noe vondt på nett.</p>),
    responsible: "UiT / RKBU Nord",
    relatedTopics: ["Psykisk helse og følelser", "Nettvett og sosiale medier", "Helsa di"],
  },
  {
    slug: "opp",
    type: "selvhjelp",
    title: "Opp",
    ingress: "Opp gir deg informasjon om psykisk helse, tanker og følelser. Du får råd om hvor og hvordan du kan be om hjelp hvis du trenger det.",
    logo: <ImgLogo src="opp.svg" />,
    metaType: "Mobil-app",
    metaLanguage: "Norsk bokmål",
    tags: ["Psykisk helse og følelser", "Helsa di", "Psykiske vansker", "Selvtillit og identitet"],
    actionButtons: [
      { type: "download", label: "Last ned fra App Store", href: "https://apps.apple.com/no/app/opp/id1565803110", icon: "apple", hrefAndroid: "https://play.google.com/store/apps/details?id=no.uit.rkbu.opp" },
    ],
    body: (<p className="leading-[24px]">Opp gir deg informasjon om psykisk helse, tanker og følelser. Du får råd om hvor og hvordan du kan be om hjelp hvis du trenger det.</p>),
    responsible: "UiT / RKBU Nord",
    relatedTopics: ["Psykisk helse og følelser", "Helsa di", "Psykiske vansker", "Selvtillit og identitet"],
  },
  {
    slug: "sammenlign",
    type: "selvhjelp",
    title: "Sammenlign",
    ingress: "Sammenlign lønn, arbeidsledighet og mer mellom yrker og utdanninger.",
    logo: <ImgLogo src="sammenlign.svg" />,
    metaType: "Nettside",
    metaLanguage: "Norsk bokmål",
    tags: ["Jobb", "Utdanning"],
    actionButtons: [
      { type: "web", label: "Vis i nettleser", href: "https://sammenlign.utdanning.no/" },
    ],
    body: (<p className="leading-[24px]">Sammenlign lønn, arbeidsledighet og mer mellom yrker og utdanninger for å ta informerte valg om karrieren din.</p>),
    responsible: "Utdanning.no / HK-dir",
    relatedTopics: ["Jobb", "Utdanning"],
  },
  {
    slug: "skamloes",
    type: "selvhjelp",
    title: "Skamløs",
    ingress: "Skamløs er et spill der du kan følge historien til seks ungdommer i deres møte med livet, sex og kjærligheten.",
    logo: <ImgLogo src="skamloes.svg" />,
    metaType: "Mobil-app",
    metaLanguage: "Norsk bokmål",
    tags: ["Sex", "Forelskelse", "Seksuelle overgrep"],
    actionButtons: [
      { type: "download", label: "Last ned fra App Store", href: "https://apps.apple.com/no/app/skamløs/id6739490403?l=nb", icon: "apple", hrefAndroid: "https://play.google.com/store/apps/details?id=com.megapop.skamlos" },
    ],
    body: (<p className="leading-[24px]">Skamløs er et spill der du kan følge historien til seks ungdommer i deres møte med livet, sex og kjærligheten. Det er du som tar valgene og påvirker hvilken vei historien tar.</p>),
    responsible: "Helsedirektoratet",
    relatedTopics: ["Sex", "Forelskelse", "Seksuelle overgrep"],
  },
  {
    slug: "slutta-app",
    type: "selvhjelp",
    title: "Slutta-app",
    ingress: "Slutta er en app som kan gjøre det lettere for deg å slutte med røyk og snus.",
    logo: <ImgLogo src="slutta.svg" bg="#f5ccb3" />,
    metaType: "Mobil-app",
    metaLanguage: "Norsk bokmål",
    tags: ["Tobakk"],
    actionButtons: [
      { type: "download", label: "Last ned fra App Store", href: "https://apps.apple.com/us/app/id1514235393", icon: "apple", hrefAndroid: "https://play.google.com/store/apps/details?id=no.helsedir.slutta2020" },
    ],
    body: (<p className="leading-[24px]">Slutta er en app som kan gjøre det lettere for deg å slutte med røyk og snus. Gjennom appen får du gode råd og tips, og daglige motivasjonsmeldinger.</p>),
    responsible: "Helsedirektoratet",
    relatedTopics: ["Tobakk", "Helsa di"],
  },
  {
    slug: "studenterspor",
    type: "selvhjelp",
    title: "Studenterspør.no",
    ingress: "På studenterspør.no svarer helsepersonell og fagpersoner på spørsmål om helse og studielivet. Det er anonymt og gratis.",
    logo: <ImgLogo src="studenter-spor.svg" bg="#0b6a62" />,
    metaType: "Nettside",
    metaLanguage: "Norsk bokmål",
    tags: ["Helsa di"],
    actionButtons: [
      { type: "web", label: "Vis i nettleser", href: "https://www.studenterspor.no/" },
    ],
    body: (<p className="leading-[24px]">På studenterspør.no svarer helsepersonell og fagpersoner på spørsmål om helse og studielivet. Det er anonymt og gratis.</p>),
    responsible: "SiO Helse",
    relatedTopics: ["Helsa di"],
  },
  {
    slug: "tankevirus",
    type: "selvhjelp",
    title: "Tankevirus",
    ingress: "Tankevirus er en app som kan hjelpe deg hvis du har negative tanker.",
    logo: <ImgLogo src="tankevirus.svg" />,
    metaType: "Mobil-app",
    metaLanguage: "Norsk bokmål",
    tags: ["Psykisk helse og følelser", "Helsa di", "Psykiske vansker"],
    actionButtons: [
      { type: "download", label: "Last ned fra App Store", href: "https://apps.apple.com/no/app/tankevirus/id1584631173?l=nb", icon: "apple", hrefAndroid: "https://play.google.com/store/apps/details?id=com.tankevirus" },
    ],
    body: (<p className="leading-[24px]">Tankevirus er en app som kan hjelpe deg hvis du har negative tanker. Gjennom daglige videoer og små morsomme oppgaver får du hjelp til å håndtere disse tankene.</p>),
    responsible: "Helsedirektoratet",
    relatedTopics: ["Psykisk helse og følelser", "Helsa di", "Psykiske vansker"],
  },
  {
    slug: "ung-face-it",
    type: "selvhjelp",
    title: "Ung Face It",
    ingress: "Ung Face It er et selvhjelpsverktøy på nett for deg som er ung og synes det er vanskelig å leve med en tilstand eller skade som påvirker utseendet.",
    logo: <ImgLogo src="ung-face-it.svg" bg="#ebf0ed" />,
    metaType: "Nettside",
    metaLanguage: "Norsk bokmål",
    tags: ["Kropp", "Selvtillit og identitet"],
    actionButtons: [
      { type: "web", label: "Vis i nettleser", href: "https://www.ungfaceit.no/" },
    ],
    body: (<p className="leading-[24px]">Ung Face It er et selvhjelpsverktøy på nett for deg som er ung og synes det er vanskelig å leve med en tilstand eller skade som påvirker utseendet.</p>),
    responsible: "Helsedirektoratet",
    relatedTopics: ["Kropp", "Selvtillit og identitet"],
  },
  {
    slug: "ungspotlight",
    type: "selvhjelp",
    title: "UngSpotlight",
    ingress: "UngSpotlight er et selvhjelpsprogram for deg som er redd for å snakke foran klassen.",
    logo: <ImgLogo src="ungspotlight.svg" />,
    metaType: "Mobil-app",
    metaLanguage: "Norsk bokmål",
    tags: ["Psykisk helse og følelser", "Selvtillit og identitet", "Skolehverdag"],
    actionButtons: [
      { type: "download", label: "Last ned fra App Store", href: "https://apps.apple.com/no/app/ungspotlight/id1673711941?l=nb", icon: "apple", hrefAndroid: "https://play.google.com/store/apps/details?id=no.youwell.ungSpotlight" },
    ],
    body: (<p className="leading-[24px]">UngSpotlight er et selvhjelpsprogram for deg som er redd for å snakke foran klassen. I programmet lærer du teknikker som kan hjelpe deg i slike situasjoner.</p>),
    responsible: "UiT / RKBU Nord",
    relatedTopics: ["Psykisk helse og følelser", "Selvtillit og identitet", "Skolehverdag"],
  },
  {
    slug: "utdanningssystemet",
    type: "selvhjelp",
    title: "Utdanningssystemet",
    ingress: "Finn frem i det norske utdanningssystemet.",
    logo: <ImgLogo src="utdanning-no.svg" bg="#ee7c22" />,
    metaType: "Nettside",
    metaLanguage: "Norsk bokmål",
    tags: ["Utdanning", "Høyere utdanning", "Videregående skole"],
    actionButtons: [
      { type: "web", label: "Vis i nettleser", href: "https://utdanning.no/utdanningssystemet/#/" },
    ],
    body: (<p className="leading-[24px]">Finn frem i det norske utdanningssystemet. Se hvilke veier du kan ta fra grunnskole til høyere utdanning.</p>),
    responsible: "Utdanning.no / HK-dir",
    relatedTopics: ["Utdanning", "Høyere utdanning", "Videregående skole"],
  },
  {
    slug: "veien-til-fagbrev",
    type: "selvhjelp",
    title: "Veien til fagbrev",
    ingress: "Se hvordan du kan få fag- eller svennebrev, der du bor.",
    logo: <ImgLogo src="veien-til-fagbrev.svg" />,
    metaType: "Nettside",
    metaLanguage: "Norsk bokmål",
    tags: ["Utdanning", "Videregående skole"],
    actionButtons: [
      { type: "web", label: "Vis i nettleser", href: "https://veientilfagbrev.no" },
    ],
    body: (<p className="leading-[24px]">Se hvordan du kan få fag- eller svennebrev, der du bor.</p>),
    responsible: "Utdanning.no / HK-dir",
    relatedTopics: ["Utdanning", "Videregående skole"],
  },
  {
    slug: "veien-til-studiekompetanse",
    type: "selvhjelp",
    title: "Veien til studiekompetanse",
    ingress: "Se mulighetene dine for å ta høyere utdanning.",
    logo: <ImgLogo src="veien-til-studiekompetanse.svg" />,
    metaType: "Nettside",
    metaLanguage: "Norsk bokmål",
    tags: ["Utdanning", "Videregående skole", "Høyere utdanning"],
    actionButtons: [
      { type: "web", label: "Vis i nettleser", href: "https://utdanning.no/studiekompetanse" },
    ],
    body: (<p className="leading-[24px]">Se mulighetene dine for å ta høyere utdanning. Utforsk ulike veier til studiekompetanse.</p>),
    responsible: "Utdanning.no / HK-dir",
    relatedTopics: ["Utdanning", "Videregående skole", "Høyere utdanning"],
  },
  {
    slug: "verktoy-velge-vgs",
    type: "selvhjelp",
    title: "Verktøy for å velge videregående",
    ingress: "Quiz, film og informasjon som kan være til hjelp når du skal velge videregående utdanningsprogram.",
    logo: <ImgLogo src="verktoy-velge-vgs.svg" />,
    metaType: "Nettside",
    metaLanguage: "Norsk bokmål",
    tags: ["Utdanning", "Videregående skole"],
    actionButtons: [
      { type: "web", label: "Vis i nettleser", href: "https://karriereveiledning.no/karrierevalg/vet-ikke-hva-jeg-skal-velge" },
    ],
    body: (<p className="leading-[24px]">Quiz, film og informasjon som kan være til hjelp når du skal velge videregående utdanningsprogram.</p>),
    responsible: "Karriereveiledningstjenesten / HK-dir",
    relatedTopics: ["Utdanning", "Videregående skole"],
  },
  {
    slug: "yrkesfaghandboka",
    type: "selvhjelp",
    title: "Yrkesfaghåndboka",
    ingress: "For deg som går yrkesfag, eller vurderer å velge det.",
    logo: <ImgLogo src="yrkesfaghandboka.svg" bg="#ee7c22" />,
    metaType: "Nettside",
    metaLanguage: "Norsk bokmål",
    tags: ["Utdanning", "Videregående skole"],
    actionButtons: [
      { type: "web", label: "Vis i nettleser", href: "https://utdanning.no/yrkesfag" },
    ],
    body: (<p className="leading-[24px]">Yrkesfaghåndboka gir deg alt du trenger å vite om yrkesfag – fra utdanningsprogram til lærlingplass og fagbrev.</p>),
    responsible: "Utdanning.no / HK-dir",
    relatedTopics: ["Utdanning", "Videregående skole"],
  },
];

/* ─── Helper to get service by slug ─── */
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return ALL_SERVICES.find((s) => s.slug === slug);
}

/* ─── Convert ServiceData to ServiceCardProps for the card carousel ─── */
export function toCardProps(s: ServiceData): ServiceCardProps {
  let statusObj: ServiceCardProps["status"];

  if (s.type === "snakk") {
    const status = getOpenStatus(s.openingHours);
    if (status === "Døgnåpen") {
      statusObj = { text: "Døgnåpen", variant: "open" as const };
    } else if (status === "Åpen") {
      statusObj = { text: "Åpen", variant: "open" as const };
    } else {
      statusObj = { text: "Stengt", variant: "closed" as const };
    }
  } else {
    statusObj = { text: "Selvhjelpsverktøy", variant: "tool" as const };
  }

  const isClosed = s.type === "snakk" && statusObj?.variant === "closed";

  return {
    title: s.title,
    description: s.ingress,
    logo: s.logo,
    status: statusObj,
    buttons: s.actionButtons.map((b) => ({
      type: b.type === "web" ? ("download" as const) : b.type,
      label: b.label,
      href: b.href,
      icon: b.icon,
      hrefAndroid: b.hrefAndroid,
      disabled: isClosed && (b.type === "chat" || b.type === "phone"),
    })),
    detailLink: `/hjelpetjenester/${s.slug}`,
  };
}

/** Sort services: open/døgnåpen first, then closed */
export function sortByOpenStatus(services: ServiceData[]): ServiceData[] {
  return [...services].sort((a, b) => {
    const statusA = a.type === "snakk" ? getOpenStatus(a.openingHours) : "Åpen";
    const statusB = b.type === "snakk" ? getOpenStatus(b.openingHours) : "Åpen";
    const rank = (s: ServiceStatus | "Åpen") => s === "Stengt" ? 1 : 0;
    return rank(statusA) - rank(statusB);
  });
}

/* ─── Filter services by tag ─── */
export function servicesByTag(tag: string): ServiceData[] {
  return ALL_SERVICES.filter((s) => s.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase())));
}

/* ─── Get all unique tags ─── */
export function getAllTags(): string[] {
  const tags = new Set<string>();
  ALL_SERVICES.forEach((s) => s.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}