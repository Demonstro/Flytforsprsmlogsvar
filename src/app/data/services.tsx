import { type ServiceCardProps } from "../components/service-card";
import {
  AsylbarnLogo, FinnJobbenLogo, FinnLarebedriftLogo, UtdanningOgYrkerLogo,
  HjelpSokeJobbLogo, GrubleLogoFigma, Ga10Logo, HjelpVelgeStudieLogo,
  HusleiekalkulatorLogo, HvaErInnaforLogo, JobbkartetLogo, JobbkompassetLogo,
  KarakterkalkulatorenLogo, KostholdsplanleggerenLogo, MuligheterYrkesfagLogo,
  SammenlignLogo, SkamlosLogo, SlettmegLogo, SluttaLogo, StudentersporLogo,
  TankevirusLogo, UngFaceItLogo, UngSpotlightLogo, UtdanningssystemetLogo,
  VeienTilFagbrevLogo, VeienTilStudiekompetanseLogo, VerktoyVelgeVgsLogo,
  YrkesfaghandbokaLogo, Logo113, AlarmtelefonenFigmaLogo, NavLogo, ForsvaretLogo,
  StatensVegvesenLogo, KirkensSosLogo, SpisfoFigmaLogo, SexOgSamfunnLogo,
  VoldOgOvergrepslinjenLogo, RustelefonenLogo, DigitalLeksehjelpLogo,
} from "../components/service-logos";

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
  }[];
  body: React.ReactNode;
  responsible: string;
  relatedTopics: string[];
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
    logo: <ColorLogo bg="#ee5335" text="VO" />,
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
  },
  {
    slug: "113-medisinsk-nodnummer",
    type: "snakk",
    title: "113 Medisinsk nødnummer",
    ingress: "Ring 113 ved akutt, livstruende sykdom eller skade. Ambulansetjenesten hjelper deg døgnet rundt.",
    logo: <Logo113 />,
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
  },
  {
    slug: "digital-leksehjelp",
    type: "snakk",
    title: "Digital leksehjelp (Røde Kors)",
    ingress: "Gratis leksehjelp på nett fra frivillige. Få hjelp med skolearbeid, lekser og eksamensforberedelser.",
    logo: <DigitalLeksehjelpLogo />,
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
  },
  {
    slug: "nav",
    type: "snakk",
    title: "Nav",
    ingress: "Nav hjelper deg med jobb, økonomi, bolig og rettigheter. Kontakt oss via chat eller telefon.",
    logo: <NavLogo />,
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
  },
  {
    slug: "forsvaret",
    type: "snakk",
    title: "Forsvaret",
    ingress: "Har du spørsmål om førstegangstjeneste, utdanning i Forsvaret eller verneplikt? Kontakt oss.",
    logo: <ForsvaretLogo />,
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
  },
  {
    slug: "statens-vegvesen",
    type: "snakk",
    title: "Statens Vegvesen",
    ingress: "Statens vegvesen svarer på spørsmål om førerkort, kjøretøy og trafikk.",
    logo: <StatensVegvesenLogo />,
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
  },
  {
    slug: "alarmtelefonen",
    type: "snakk",
    title: "Alarmtelefonen for barn og unge",
    ingress: "Alarmtelefonen er barnevernets døgnåpne svartjeneste for barn, ungdom og voksne som er bekymret for barn.",
    logo: <AlarmtelefonenFigmaLogo />,
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
  },
  {
    slug: "mental-helse",
    type: "snakk",
    title: "Mental Helses hjelpetelefon",
    ingress: "Mental Helse tilbyr døgnåpen hjelpetelefon og chat for deg som sliter psykisk eller bare trenger noen å snakke med.",
    logo: <ColorLogo bg="#1d4d8a" text="MH" />,
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
  },
  {
    slug: "kirkens-sos",
    type: "snakk",
    title: "Kirkens SOS",
    ingress: "Kirkens SOS er en døgnåpen krisetjeneste for deg som trenger noen å snakke med. Anonymt og gratis.",
    logo: <KirkensSosLogo />,
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
  },
  {
    slug: "ung-no-chat",
    type: "snakk",
    title: "ung.no chat",
    ingress: "Lurer du på noe? Chat med oss anonymt og gratis om alt som opptar deg som ung.",
    logo: <ColorLogo bg="#79FC9E" text="" />,
    metaType: "Chat",
    metaLanguage: "Norsk bokmål",
    tags: ["Psykisk helse og følelser", "Selvtillit og identitet", "Sex", "Kropp", "Familie", "Skolehverdag", "Mobbing"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://www.ung.no/chat" },
    ],
    body: (
      <p className="leading-[24px]">ung.no tilbyr gratis og anonym chat der du kan snakke med fagpersoner om alt som opptar deg. Vi er her for deg uansett hva du lurer på – følelser, kropp, sex, skole, familie, venner eller noe helt annet.</p>
    ),
    responsible: "Barne-, ungdoms- og familiedirektoratet (Bufdir)",
    relatedTopics: ["Psykisk helse og følelser", "Selvtillit og identitet", "Sex", "Kropp", "Familie", "Skolehverdag", "Mobbing"],
  },
  {
    slug: "spisfo",
    type: "snakk",
    title: "Spiseforstyrrelses­foreningen (SPISFO)",
    ingress: "SPISFO er et gratis tilbud for deg som sliter med mat og kropp, eller kjenner noen som gjør det.",
    logo: <SpisfoFigmaLogo />,
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
  },
  {
    slug: "rustelefonen",
    type: "snakk",
    title: "Rustelefonen",
    ingress: "Anonymt og gratis samtaletilbud om rus, doping og avhengighet for deg og dine pårørende.",
    logo: <RustelefonenLogo />,
    metaType: "Chat og telefon",
    metaLanguage: "Norsk bokmål",
    tags: ["Psykisk helse og følelser", "Helsa di", "Tobakk"],
    actionButtons: [
      { type: "chat", label: "Chat", href: "https://www.rustelefonen.no" },
      { type: "phone", label: "Ring", href: "tel:08588" },
    ],
    body: (
      <p className="leading-[24px]">Rustelefonen er et gratis og anonymt samtaletilbud for deg som har spørsmål om rus og avhengighet. Vi er her for deg uansett om det gjelder deg selv, en venn eller et familiemedlem.</p>
    ),
    responsible: "Oslo universitetssykehus",
    relatedTopics: ["Psykisk helse og følelser", "Helsa di", "Tobakk"],
  },
  {
    slug: "sex-og-samfunn",
    type: "snakk",
    title: "Sex og samfunn",
    ingress: "Rådgivning om sex, samliv og seksualitet – gratis og anonymt via chat eller telefon.",
    logo: <SexOgSamfunnLogo />,
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
    logo: <AsylbarnLogo />,
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
    logo: <FinnJobbenLogo />,
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
    logo: <FinnLarebedriftLogo />,
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
    logo: <UtdanningOgYrkerLogo />,
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
    logo: <HjelpSokeJobbLogo />,
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
    logo: <GrubleLogoFigma />,
    metaType: "Mobil-app",
    metaLanguage: "Norsk bokmål",
    tags: ["Psykisk helse og følelser", "Selvtillit og identitet", "Helsa di"],
    actionButtons: [
      { type: "download", label: "Last ned fra App Store", href: "#", icon: "apple" },
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
    logo: <SlettmegLogo />,
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
    logo: <HvaErInnaforLogo />,
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
    logo: <Ga10Logo />,
    metaType: "Mobil-app",
    metaLanguage: "Norsk bokmål",
    tags: ["Trening og idrett", "Helsa di"],
    actionButtons: [
      { type: "download", label: "Last ned fra App Store", href: "https://apps.apple.com/us/app/gå-10/id1447263129", icon: "apple" },
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
    logo: <HjelpVelgeStudieLogo />,
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
    logo: <HusleiekalkulatorLogo />,
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
    logo: <JobbkartetLogo />,
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
    logo: <JobbkompassetLogo />,
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
    logo: <KarakterkalkulatorenLogo />,
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
    logo: <KostholdsplanleggerenLogo />,
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
    logo: <MuligheterYrkesfagLogo />,
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
    logo: <ColorLogo bg="#6366f1" text="NO" />,
    metaType: "Mobil-app",
    metaLanguage: "Norsk bokmål",
    tags: ["Psykisk helse og følelser", "Nettvett og sosiale medier", "Helsa di"],
    actionButtons: [
      { type: "download", label: "Last ned fra App Store", href: "https://apps.apple.com/no/app/nettopp/id1478735947", icon: "apple" },
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
    logo: <ColorLogo bg="#6366f1" text="Opp" />,
    metaType: "Mobil-app",
    metaLanguage: "Norsk bokmål",
    tags: ["Psykisk helse og følelser", "Helsa di", "Psykiske vansker", "Selvtillit og identitet"],
    actionButtons: [
      { type: "download", label: "Last ned fra App Store", href: "https://apps.apple.com/no/app/opp/id1565803110", icon: "apple" },
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
    logo: <SammenlignLogo />,
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
    logo: <SkamlosLogo />,
    metaType: "Mobil-app",
    metaLanguage: "Norsk bokmål",
    tags: ["Sex", "Forelskelse", "Seksuelle overgrep"],
    actionButtons: [
      { type: "download", label: "Last ned fra App Store", href: "https://apps.apple.com/no/app/skamløs/id6739490403?l=nb", icon: "apple" },
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
    logo: <SluttaLogo />,
    metaType: "Mobil-app",
    metaLanguage: "Norsk bokmål",
    tags: ["Tobakk"],
    actionButtons: [
      { type: "download", label: "Last ned fra App Store", href: "https://apps.apple.com/us/app/id1514235393", icon: "apple" },
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
    logo: <StudentersporLogo />,
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
    logo: <TankevirusLogo />,
    metaType: "Mobil-app",
    metaLanguage: "Norsk bokmål",
    tags: ["Psykisk helse og følelser", "Helsa di", "Psykiske vansker"],
    actionButtons: [
      { type: "download", label: "Last ned fra App Store", href: "https://apps.apple.com/no/app/tankevirus/id1584631173?l=nb", icon: "apple" },
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
    logo: <UngFaceItLogo />,
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
    logo: <UngSpotlightLogo />,
    metaType: "Mobil-app",
    metaLanguage: "Norsk bokmål",
    tags: ["Psykisk helse og følelser", "Selvtillit og identitet", "Skolehverdag"],
    actionButtons: [
      { type: "download", label: "Last ned fra App Store", href: "https://apps.apple.com/no/app/ungspotlight/id1673711941?l=nb", icon: "apple" },
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
    logo: <UtdanningssystemetLogo />,
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
    logo: <VeienTilFagbrevLogo />,
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
    logo: <VeienTilStudiekompetanseLogo />,
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
    logo: <VerktoyVelgeVgsLogo />,
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
    logo: <YrkesfaghandbokaLogo />,
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
  return {
    title: s.title,
    description: s.ingress,
    logo: s.logo,
    status: s.actionButtons.some((b) => b.type === "chat" || b.type === "phone")
      ? { text: s.metaType, variant: "available" as const }
      : { text: "Selvhjelpsverktøy", variant: "tool" as const },
    buttons: s.actionButtons.map((b) => ({
      type: b.type === "web" ? ("download" as const) : b.type,
      label: b.label,
      href: b.href,
      icon: b.icon,
    })),
    detailLink: `/hjelpetjenester/${s.slug}`,
  };
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