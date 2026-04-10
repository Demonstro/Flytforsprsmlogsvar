export default function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] pt-[20px] relative size-full" data-name="Paragraph">
      <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Borna:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0f0f0f] text-[20px] tracking-[-0.08px] w-full">Har du glemt koden din?</p>
      </div>
      <div className="content-stretch flex items-start py-[12px] relative shrink-0 w-full" data-name="Body">
        <div className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[#0f0f0f] text-[0px] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[24px] mb-[20px]">Da du stilte spørsmålet ble du bedt om å ta vare på koden. Kanskje du tok en skjermdump? Har du et notat liggende?</p>
          <p className="mb-[20px]">
            <span className="leading-[24px]">{`Men om du virkelig har glemt koden din, kan du prøve å `}</span>
            <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] text-[#2b5944] tracking-[-0.064px] underline" href="https://www.ung.no/oss" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="[text-decoration-skip-ink:none] decoration-solid leading-[24px]" href="https://www.ung.no/oss" style={{ fontVariationSettings: "'wdth' 100" }}>
                søke opp spørsmålet ditt
              </span>
            </a>
            <span className="leading-[24px]">{` for å se om du finner svaret publisert på ung.no.`}</span>
          </p>
          <p className="leading-[24px]">Du må også gjerne sende inn spørsmålet ditt på nytt. Det gjør ikke noe.</p>
        </div>
      </div>
    </div>
  );
}