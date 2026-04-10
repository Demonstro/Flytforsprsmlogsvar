function ButtonBase() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[44px] px-[20px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button base">
      <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f0f0f] text-[16px] tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Trekk spørsmålet tilbake</p>
      </div>
    </div>
  );
}

export default function WithdrawQuestion() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[64px] px-[12px] relative rounded-tl-[16px] rounded-tr-[16px] size-full" data-name="Withdraw question">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
        <div className="content-stretch flex flex-col items-start pb-[4px] pt-[32px] relative shrink-0 w-full" data-name="Heading">
          <p className="font-['Borna:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#0f0f0f] text-[24px] tracking-[-0.096px] w-full">Trekk tilbake spørsmålet</p>
        </div>
        <div className="content-stretch flex items-start py-[12px] relative shrink-0 w-full" data-name="Body">
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#0f0f0f] text-[16px] tracking-[-0.064px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Ønsker du ikke svar på spørsmålet ditt kan du trekke det tilbake.
          </p>
        </div>
      </div>
      <div className="content-stretch flex items-start min-h-[44px] relative shrink-0" data-name="Button">
        <ButtonBase />
      </div>
    </div>
  );
}