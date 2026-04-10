function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#2b5944] text-[16px] text-right tracking-[-0.064px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Link
      </p>
    </div>
  );
}

export default function Link() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center py-[8px] relative size-full" data-name="Link">
      <Frame />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 2">
            <line id="Line" stroke="var(--stroke-0, #2B5944)" strokeWidth="2" x2="33" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}