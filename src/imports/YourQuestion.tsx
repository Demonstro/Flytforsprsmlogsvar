import { useState } from "react";
import svgPaths from "./svg-ndil3ig0hs";

const RANDOM_QUESTIONS = [
  "Jeg har hatt vondt i magen i over en uke nå, og jeg vet ikke om jeg burde gå til legen. Er det normalt?",
  "Foreldrene mine skal skilles og jeg vet ikke hvem jeg skal bo hos. Hva er rettighetene mine?",
  "Jeg føler meg ensom på skolen og har ingen å snakke med. Hva kan jeg gjøre?",
  "Kan arbeidsgiver tvinge meg til å jobbe overtid når jeg er under 18?",
  "Jeg er redd for å fortelle foreldrene mine at jeg liker noen av samme kjønn. Hvordan kan jeg håndtere det?",
  "Er det normalt å føle seg trist uten grunn? Jeg har ikke lyst til å gjøre noe lenger.",
];

const randomQuestion =
  RANDOM_QUESTIONS[Math.floor(Math.random() * RANDOM_QUESTIONS.length)];

export default function YourQuestion() {
  const [open, setOpen] = useState(false);

  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] px-[12px] relative size-full" data-name="Your question">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
        <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Heading">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#0f0f0f] text-[24px] tracking-[-0.096px] w-full">Hold ut ...</p>
        </div>
        <div className="content-stretch flex items-start py-[12px] relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Vi har ikke svart på spørsmålet ditt enda. Noen ganger trenger vi litt lengre tid for å kunne gi deg et godt svar.
          </p>
        </div>
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Accordion">
        <button
          type="button"
          className="flex gap-4 items-center p-3 w-full cursor-pointer"
          onClick={() => setOpen((v) => !v)}
        >
          <p className="flex-1 font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px] text-left" style={{ fontWeight: 600 }}>
            Spørsmålet ditt
          </p>
          <div
            className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          >
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
              <path
                clipRule="evenodd"
                d={svgPaths.p2b042d70}
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
        {open && (
          <div className="px-3 pb-3">
            <p
              className="font-['Open_Sans',sans-serif] text-[16px] text-[#0f0f0f] leading-[24px] tracking-[-0.064px]"
              style={{ fontWeight: 400 }}
            >
              {randomQuestion}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}