import { useParams, Link } from "react-router";
import {
  ArticleCard, Tag, CATEGORIES,
  IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6,
} from "../components/shared";

const CATEGORY_ARTICLES: Record<string, { image: string; heading: string; tags: string[] }[]> = {
  "familie-venner-fritid": [
    { image: IMG_1, heading: "Slik håndterer du konflikter med foreldre", tags: ["Familie", "Konflikter"] },
    { image: IMG_2, heading: "Hvordan finne nye venner på skolen", tags: ["Venner", "Sosialt"] },
    { image: IMG_6, heading: "Tips for å balansere fritid og skolearbeid", tags: ["Fritid", "Skole"] },
  ],
  "folelser-identitet-forelskelse": [
    { image: IMG_3, heading: "Hva gjør du når du er forelsket?", tags: ["Forelskelse", "Følelser"] },
    { image: IMG_4, heading: "Å finne sin egen identitet som ung", tags: ["Identitet", "Selvbilde"] },
    { image: IMG_5, heading: "Hvordan håndtere sjalusi i forholdet", tags: ["Forhold", "Følelser"] },
  ],
  "kropp-helse-sex": [
    { image: IMG_5, heading: "Alt du trenger å vite om puberteten", tags: ["Kropp", "Pubertet"] },
    { image: IMG_1, heading: "Hvordan ta vare på den psykiske helsen din", tags: ["Helse", "Psykisk helse"] },
    { image: IMG_3, heading: "Hva er samtykke og hvorfor er det viktig?", tags: ["Sex", "Samtykke"] },
  ],
  "samfunn-lover-rettigheter": [
    { image: IMG_4, heading: "Dine rettigheter som ung i Norge", tags: ["Rettigheter", "Lov"] },
    { image: IMG_6, heading: "Hva sier loven om mobbing?", tags: ["Lov", "Mobbing"] },
    { image: IMG_2, heading: "Slik engasjerer du deg politisk", tags: ["Samfunn", "Demokrati"] },
  ],
  "skole-jobb-framtid": [
    { image: IMG_4, heading: "Slik velger du riktig utdanning", tags: ["Utdanning", "Framtid"] },
    { image: IMG_6, heading: "Tips til din første jobbsøknad", tags: ["Jobb", "CV"] },
    { image: IMG_1, heading: "Eksamensangst: slik takler du det", tags: ["Skole", "Eksamen"] },
  ],
  "vold-overgrep": [
    { image: IMG_5, heading: "Hva gjør du hvis noen skader deg?", tags: ["Vold", "Hjelp"] },
    { image: IMG_2, heading: "Du er ikke alene – snakk med noen", tags: ["Overgrep", "Støtte"] },
    { image: IMG_3, heading: "Dine rettigheter og hvor du kan få hjelp", tags: ["Rettigheter", "Hjelp"] },
  ],
};

export function CategoryPage() {
  const { slug } = useParams();
  const category = CATEGORIES.find((c) => c.slug === slug);
  const articles = CATEGORY_ARTICLES[slug || ""] || [];

  if (!category) {
    return (
      <section className="px-4 py-10 text-center">
        <p className="font-['Open_Sans',sans-serif] text-[16px] text-[#454545]" style={{ fontWeight: 400 }}>
          Kategorien ble ikke funnet.
        </p>
        <Link to="/" className="text-[#2b5944] underline mt-4 inline-block">Gå til forsiden</Link>
      </section>
    );
  }

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="px-4 pt-6 pb-8" style={{ backgroundColor: category.blobColor + "33" }}>
        <div className="flex items-center gap-4 mb-4">
          <div className="relative size-16">
            <div className="absolute inset-2">
              <svg className="block size-full" viewBox="0 0 36 36" fill="none" preserveAspectRatio="xMidYMid meet">
                <path clipRule="evenodd" d={category.blobPath} fill={category.blobColor} fillRule="evenodd" />
              </svg>
            </div>
            <div className="absolute inset-1 flex items-center justify-center">
              <category.Sticker />
            </div>
          </div>
          <h1 className="font-['Borna',sans-serif] text-[24px] text-[#0f0f0f] leading-[32px] tracking-[-0.096px] flex-1" style={{ fontWeight: 600 }}>
            {category.label}
          </h1>
        </div>
        <p className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]" style={{ fontWeight: 400 }}>
          Her finner du artikler, spørsmål og svar om {category.label.toLowerCase()}.
        </p>
      </section>

      {/* ─── Articles ─── */}
      <section className="px-4 py-8 flex flex-col gap-5">
        <h2 className="font-['Borna',sans-serif] text-[20px] text-[#0f0f0f] leading-[28px] tracking-[-0.08px]" style={{ fontWeight: 600 }}>
          Artikler
        </h2>
        {articles.map((article, i) => (
          <ArticleCard
            key={i}
            image={article.image}
            tags={article.tags.map((t) => ({ label: t }))}
            heading={article.heading}
            body="Da bør du lese denne artikkelen, den handler om nettopp det."
          />
        ))}
      </section>

      {/* ─── Related Categories ─── */}
      <section className="px-4 pb-10">
        <h2 className="font-['Borna',sans-serif] text-[20px] text-[#0f0f0f] leading-[28px] tracking-[-0.08px] mb-4" style={{ fontWeight: 600 }}>
          Andre kategorier
        </h2>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.filter((c) => c.slug !== slug).map((cat) => (
            <Link key={cat.slug} to={`/kategori/${cat.slug}`}>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="size-3 rounded-full" style={{ backgroundColor: cat.blobColor }} />
                <span className="font-['Open_Sans',sans-serif] text-[14px] text-[#0f0f0f] leading-[20px] tracking-[-0.056px]" style={{ fontWeight: 600 }}>
                  {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
