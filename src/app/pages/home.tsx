import { Link, useNavigate } from "react-router";
import { CategoryGrid } from "../components/category-cards";
import { ServiceCards } from "../components/service-cards";
import {
  ArticleCard, QuestionCard, QAListItem,
  SearchIcon, ArrowRightSmallIcon, PlusIcon, HappyCharacter, ThermometerIllustration,
  IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6, IMG_7, IMG_8,
  MOCK_QUESTIONS,
} from "../components/shared";
import { Button } from "../components/button";

export function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* ─── Category Grid + Q&A Button ─── */}
      <section className="px-3 pt-3 pb-7">
        <CategoryGrid />
        <div className="mt-5 w-full">
          <Link to="/sporsmaal-og-svar">
            <Button variant="primary" fullWidth>Spørsmål og svar</Button>
          </Link>
        </div>
      </section>

      {/* ─── Articles Section 1 ─── */}
      <section className="px-4 flex flex-col gap-5 pb-10">
        <ArticleCard image={IMG_1} tags={[{ label: "Kropp" }, { label: "Mensen" }]} heading="Har du slitsomme tanker, grubling og tankekjør?" body="Da bør du lese denne artikkelen, den handler om nettopp det." />

        <div className="pr-5">
          <Link to="/sporsmaal-og-svar/6">
            <QuestionCard bgColor="#3c7c5e" question="Tatt angrepille og er redd for graviditet." tagLabel="Jente, 16" tagBg="#f2f9f5" illustration={<ThermometerIllustration />} />
          </Link>
        </div>

        <ArticleCard image={IMG_2} tags={[{ label: "Kropp" }, { label: "Mensen" }]} heading="Slik takler du eksamensangst og nervøsitet" body="Da bør du lese denne artikkelen, den handler om nettopp det." />

        {/* Service Cards */}
        <ServiceCards />

        <ArticleCard image={IMG_3} tags={[{ label: "Kropp" }, { label: "Mensen" }]} heading="Hva er egentlig samtykke – og hvorfor er det viktig?" body="Da bør du lese denne artikkelen, den handler om nettopp det." />
        <ArticleCard image={IMG_4} tags={[{ label: "Kropp", bg: "white" }, { label: "Mensen", bg: "white" }]} heading="Slik håndterer du konflikter med foreldre" body="Da bør du lese denne artikkelen, den handler om nettopp det." bgContent="#cfe8dc" />
        <ArticleCard image={IMG_5} tags={[{ label: "Kropp" }, { label: "Mensen" }]} heading="Har du store tanker, grubling og tankekjør?" body="Da bør du lese denne artikkelen, den handler om nettopp det." />

        <div className="pr-5 flex flex-col gap-5">
          <Link to="/sporsmaal-og-svar/7"><QuestionCard bgColor="white" question="Kan jeg ha sex før jeg fyller 16 år?" tagLabel="Gutt, 14" tagBg="#dbddff" textColor="#0f0f0f" /></Link>
          <Link to="/sporsmaal-og-svar/8"><QuestionCard bgColor="#deefe7" question="Hvorfor kommer jeg aldri når jeg har orgasmer?" tagLabel="Jente, 16" tagBg="#acd7c3" textColor="#0f0f0f" /></Link>
        </div>

        <ArticleCard image={IMG_6} tags={[{ label: "Kropp" }, { label: "Mensen" }]} heading="Har du små tanker, grubling og tankekjør?" body="Da bør du lese denne artikkelen, den handler om nettopp det." />
        <ArticleCard image={IMG_7} tags={[{ label: "Kropp" }, { label: "Mensen" }]} heading="Har du få tanker, grubling og tankekjør?" body="Da bør du lese denne artikkelen, den handler om nettopp det." />
        <ArticleCard image={IMG_8} tags={[{ label: "Kropp" }, { label: "Mensen" }]} heading="Har du få tanker?" body="Da bør du lese denne artikkelen, den handler om nettopp det." />
      </section>

      {/* ─── Q&A Preview Section ─── */}
      <section className="bg-[#dbddff] px-3 py-10 w-full">
        <HappyCharacter />
        <div className="flex flex-col gap-2 mt-2">
          <h2 className="font-['Borna',sans-serif] text-[24px] text-[#0f0f0f] leading-[32px] tracking-[-0.096px]" style={{ fontWeight: 600 }}>
            Se hva andre lurer på
          </h2>

          <div className="pt-4">
            <label className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px] pb-2 block" style={{ fontWeight: 600 }}>
              Søk i spørsmål og svar
            </label>
            <div className="bg-white rounded-full border border-[#0f0f0f] flex items-center px-3 py-2.5 gap-2 h-11 cursor-pointer" onClick={() => navigate("/sporsmaal-og-svar")}>
              <SearchIcon size={24} />
              <span className="font-['Open_Sans',sans-serif] text-[16px] text-[#676767] leading-[24px] tracking-[-0.064px]" style={{ fontWeight: 400 }}>
                Skriv et spørsmål, ord eller tema
              </span>
            </div>
          </div>

          <div className="py-3">
            <Button variant="outline" icon={<PlusIcon />}>Filtrer</Button>
          </div>

          <div className="flex flex-col gap-3 pb-2">
            {MOCK_QUESTIONS.slice(0, 5).map((q) => (
              <QAListItem key={q.id} question={q.question} gender={q.gender} topic={q.topic} day={q.day} onClick={() => navigate(`/sporsmaal-og-svar/${q.id}`)} />
            ))}
          </div>

          <div className="flex flex-col items-center py-2">
            <Link to="/sporsmaal-og-svar" className="flex items-center gap-1">
              <span className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]" style={{ fontWeight: 600 }}>Alle spørsmål og svar</span>
              <ArrowRightSmallIcon />
            </Link>
            <div className="h-0.5 w-[187px] bg-[#0f0f0f] mt-1" />
          </div>
        </div>
      </section>

      {/* ─── Load More ─── */}
      <section className="px-3 py-10 flex flex-col items-center">
        <Button variant="link" icon={<PlusIcon />}>Last inn mer</Button>
      </section>
    </>
  );
}