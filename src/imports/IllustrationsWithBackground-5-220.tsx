import svgPaths from "./svg-sjpmhj56f8";

function Sticker() {
  return (
    <div className="absolute inset-[10%_2.5%_8.75%_2.5%]" data-name="Sticker">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.6 39">
        <g id="Sticker">
          <path d={svgPaths.p7622e80} fill="var(--fill-0, white)" id="Back" />
          <g id="Illustration">
            <path d={svgPaths.p32fcc200} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p1f56c380} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p265f5f80} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p4c29000} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p37896300} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p138f3480} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p1179500} fill="var(--fill-0, #0F0F0F)" />
            <path d={svgPaths.p2e86f80} fill="var(--fill-0, #0F0F0F)" />
            <path clipRule="evenodd" d={svgPaths.p26520d80} fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function IllustrationsWithBackground() {
  return (
    <div className="relative size-full" data-name="Illustrations with background">
      <div className="-translate-x-1/2 absolute aspect-[502.934326171875/633.8216552734375] bottom-[5%] left-[calc(50%-0.5px)] top-[3.75%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.7551 43.8">
          <path clipRule="evenodd" d={svgPaths.p3e368180} fill="var(--fill-0, #ABAEFF)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <Sticker />
    </div>
  );
}