import svgPaths from "../../imports/Logos-2/svg-3ed40lgcjz";

/* ─── Wrapper for all service logos ─── */
function W({ bg, children }: { bg: string; children: React.ReactNode }) {
  return (
    <div className="overflow-clip rounded-[12px] shrink-0 size-[48px] relative" style={{ backgroundColor: bg }}>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════
   SELVHJELP LOGOS
   ═══════════════════════════════════════════ */

/* Asylbarn → Logo35 */
export function AsylbarnLogo() {
  return (
    <W bg="white">
      <div className="absolute inset-[10%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
          <path d={svgPaths.p26405600} fill="#F7931E" />
          <path d={svgPaths.p1934fc0} fill="#526EA7" />
          <path d={svgPaths.p16d54280} fill="#C69C6D" />
          <path d={svgPaths.p210e7a80} fill="#A67C52" />
          <path d={svgPaths.pf838300} fill="white" />
          <path d={svgPaths.p25d77400} fill="#A67C52" />
          <path d={svgPaths.p20c18680} fill="#A67C52" />
          <path d={svgPaths.p24836a3a} fill="#00A99D" />
          <path d={svgPaths.p3c9ac400} fill="black" />
          <path d={svgPaths.p1e70db00} fill="black" />
          <path d={svgPaths.p1a6c3400} fill="black" />
          <path d={svgPaths.p25d79d00} fill="black" />
          <path d={svgPaths.p4f358f0} fill="black" />
          <path d={svgPaths.p1b33e600} fill="#736357" />
        </svg>
      </div>
    </W>
  );
}

/* arbeidsplassen.nav.no → Logo36 (Finn jobben) */
export function FinnJobbenLogo() {
  return (
    <W bg="white">
      <div className="absolute inset-[12.5%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <path d={svgPaths.p383e500} fill="#003141" />
          <path d={svgPaths.p1710b880} fill="#C1F3DB" />
        </svg>
      </div>
    </W>
  );
}

/* Finn Lærebedrift - uses utdanning.no logo */
export function FinnLarebedriftLogo() {
  return (
    <W bg="white">
      <div className="absolute inset-[21.18%_22.64%_11.41%_22.64%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.7778 53.9285">
          <path d={svgPaths.p3d1fe360} fill="#EE7C22" />
        </svg>
      </div>
    </W>
  );
}

/* Forslag til utdanninger og yrker → Illustration1 + Logo32 */
export function UtdanningOgYrkerLogo() {
  return (
    <W bg="#ffe9b6">
      <div className="absolute inset-[12.2%_0_0_0]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80.0002 70.2395">
          <path d={svgPaths.p3183fb00} fill="#F2EAFE" />
          <path d={svgPaths.p12b03800} fill="#333333" />
          <path d={svgPaths.p2012a870} fill="#D9BFFB" />
          <path d={svgPaths.p2de9ac80} fill="#B9876F" />
          <path d={svgPaths.p17ff1c00} fill="black" />
          <path clipRule="evenodd" d={svgPaths.p237dbe40} fill="#61A5B4" fillRule="evenodd" />
          <path d={svgPaths.p2a483e00} fill="#333333" />
          <path d={svgPaths.p112a1a00} fill="#333333" />
          <path d={svgPaths.p3cfbb500} fill="#B9876F" />
          <path d={svgPaths.p21eb7300} fill="black" />
          <path d={svgPaths.p308f1200} fill="black" />
          <path d={svgPaths.p3fb38100} fill="black" />
          <path d={svgPaths.p7092e80} fill="black" />
          <path d={svgPaths.p3e60eb00} fill="black" />
          <path d={svgPaths.p7252400} fill="#161E26" />
        </svg>
      </div>
      <div className="absolute inset-[10%_70%_70%_10%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p3b61700} fill="#F07C14" />
          <path d={svgPaths.p3d882600} fill="white" />
        </svg>
      </div>
    </W>
  );
}

/* Få hjelp til å søke jobb - karriereveiledning.no logo */
export function HjelpSokeJobbLogo() {
  return (
    <W bg="white">
      <div className="absolute inset-[15.6%_26.35%_15.6%_25.6%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.44 55.04">
          <path d={svgPaths.p35f94600} fill="#F07C14" />
        </svg>
      </div>
    </W>
  );
}

/* Grubl */
export function GrubleLogoFigma() {
  return (
    <W bg="black">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <path d={svgPaths.p29a5e100} fill="white" />
        <path clipRule="evenodd" d={svgPaths.p6c46d80} fill="white" fillRule="evenodd" />
        <path d={svgPaths.p13ab2500} fill="white" />
        <path d={svgPaths.pf24ca00} fill="white" />
        <path d={svgPaths.p316c2e00} fill="white" />
        <rect fill="#FF8C31" height="3.70833" width="3.75" x="67.625" y="43.875" />
        <rect fill="#FF8AFD" height="18.1667" width="18.1667" x="61.8333" />
        <rect fill="#007DF9" height="7" width="7" x="54.8333" />
        <rect fill="#007DF9" height="7.83333" width="7.83333" x="16.375" y="72.1667" />
        <rect fill="#FF8C31" height="16.375" width="16.375" y="63.625" />
      </svg>
    </W>
  );
}

/* Gå 10 → Logo30 */
export function Ga10Logo() {
  return (
    <W bg="#ee5335">
      <div className="absolute inset-[19.05%_12.57%_19.05%_12.7%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.7881 49.5234">
          <path d={svgPaths.p2388af00} fill="black" />
          <path clipRule="evenodd" d={svgPaths.pbe6dc80} fill="black" fillRule="evenodd" />
          <path d={svgPaths.p25a9900} fill="black" />
          <path clipRule="evenodd" d={svgPaths.p2e892a80} fill="black" fillRule="evenodd" />
          <path d={svgPaths.p20a75f00} fill="black" />
          <path d={svgPaths.p13a88e00} fill="white" />
          <path d={svgPaths.p191d8200} fill="white" />
          <path d={svgPaths.p299b0380} fill="white" />
          <path d={svgPaths.p17e54a80} fill="white" />
          <path d={svgPaths.p10bb9ef2} fill="white" />
          <path d={svgPaths.p38ee5c00} fill="white" />
          <path d={svgPaths.p2f4fa700} fill="white" />
          <path d={svgPaths.p6f43f00} fill="white" />
          <path d={svgPaths.p55f1100} fill="white" />
          <path d={svgPaths.p6caf5c0} fill="white" />
        </svg>
      </div>
    </W>
  );
}

/* Hjelp til å velge studie → Illustration + Logo29 */
export function HjelpVelgeStudieLogo() {
  return (
    <W bg="white">
      <div className="absolute inset-[27.5%_0_0_0]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 58">
          <path d={svgPaths.p39449f00} fill="#FFEAB6" />
          <path d={svgPaths.p1b984f0} fill="#343435" />
          <path d={svgPaths.pc4242c0} fill="#343435" />
          <path d={svgPaths.p226ba600} fill="#343435" />
          <ellipse cx="49.5859" cy="41.8359" fill="#DBBEFF" rx="7.85156" ry="4.33594" />
          <path d={svgPaths.p28e0abc0} fill="#FECA47" />
          <path d={svgPaths.p256bbb00} fill="#FECA47" />
          <path d={svgPaths.p1eba8100} fill="#F07C14" />
        </svg>
      </div>
      <div className="absolute inset-[10%_70%_70%_10%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p3b61700} fill="#F07C14" />
          <path d={svgPaths.p3d882600} fill="white" />
        </svg>
      </div>
    </W>
  );
}

/* Husleiekalkulator */
export function HusleiekalkulatorLogo() {
  return (
    <W bg="white">
      <div className="absolute inset-[12.5%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60.0004 60.0003">
          <path d={svgPaths.p30773880} fill="#274247" />
          <path d={svgPaths.pd364b80} fill="#274247" />
        </svg>
      </div>
    </W>
  );
}

/* Hva er innafor? → Logo26 */
export function HvaErInnaforLogo() {
  return (
    <W bg="#2e0a52">
      <div className="absolute inset-[17.5%_10%_23.94%_15%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 46.85">
          <path d={svgPaths.p2dc2db00} fill="#FFB350" fillOpacity="0.24" />
          <path d={svgPaths.p2c538380} fill="#FFB350" fillOpacity="0.65" />
          <path d={svgPaths.p27bd1f00} fill="white" />
        </svg>
      </div>
    </W>
  );
}

/* Jobbkartet → Illustrasjon5 + Logo24 */
export function JobbkartetLogo() {
  return (
    <W bg="#fbd7b8">
      <div className="absolute inset-[12.18%_10.54%_12.37%_11.63%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.262 60.3614">
          <path d={svgPaths.p9739a80} fill="black" />
          <path d={svgPaths.pc97400} fill="#FAF8F6" />
          <path d={svgPaths.pd430170} fill="#FAF8F6" />
          <path d={svgPaths.p1142fe80} fill="#FAF8F6" />
          <path d={svgPaths.p49cc400} fill="#ED7F17" />
          <path d={svgPaths.p38260400} fill="#ED7F17" />
          <path d={svgPaths.p26150a80} fill="#ED7F17" />
        </svg>
      </div>
      <div className="absolute inset-[70%_10%_10%_70%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <rect fill="white" height="16" rx="2" width="16" />
          <path d={svgPaths.p127dfa00} fill="#EE7C22" />
        </svg>
      </div>
    </W>
  );
}

/* Jobbkompasset → Illustrasjon4 + Logo23 */
export function JobbkompassetLogo() {
  return (
    <W bg="white">
      <div className="absolute inset-[19.93%_7.5%_10%_32.5%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.9994 56.0547">
          <path d={svgPaths.p1df30500} fill="#F07C14" />
          <path d={svgPaths.p8c21a00} fill="white" />
          <path clipRule="evenodd" d={svgPaths.p122f1a80} fill="#F07C14" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p21703180} fill="#F07C14" fillRule="evenodd" />
          <path d={svgPaths.p1f076400} fill="white" />
          <path clipRule="evenodd" d={svgPaths.p1935a600} fill="black" fillRule="evenodd" />
          <path d={svgPaths.p25188900} fill="#F07C14" />
          <path d={svgPaths.p1b8a6280} fill="#F07C14" />
          <path d={svgPaths.p18d6c900} fill="#F07C14" />
        </svg>
      </div>
      <div className="absolute inset-[10%_70%_70%_10%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <rect fill="#EE7C22" height="16" rx="2" width="16" />
          <path d={svgPaths.p127dfa00} fill="white" />
        </svg>
      </div>
    </W>
  );
}

/* Karakterkalkulatoren */
export function KarakterkalkulatorenLogo() {
  return (
    <W bg="white">
      <div className="absolute inset-[12.5%_22.5%_15%_23.75%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 58.004">
          <path clipRule="evenodd" d={svgPaths.p22093680} fill="#F07C21" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p1712dd00} fill="#F07C21" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.pabcc670} fill="#F07C21" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p29053b00} fill="#F07C21" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p22027000} fill="#F07C21" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.pc4f6c00} fill="#F07C21" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p19a2b900} fill="#F07C21" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p1d9d1100} fill="#F07C21" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p2b7e9b00} fill="#F07C21" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p76b9c00} fill="#F07C21" fillRule="evenodd" />
        </svg>
      </div>
    </W>
  );
}

/* Kostholdsplanleggeren */
export function KostholdsplanleggerenLogo() {
  return (
    <W bg="#0e4e7a">
      <div className="absolute inset-[5%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
          <path d={svgPaths.p8a8cf00} fill="white" />
          <path d={svgPaths.p35063c00} fill="white" />
          <path clipRule="evenodd" d={svgPaths.pa5b8480} fill="white" fillRule="evenodd" />
          <path d={svgPaths.p1eca1e80} fill="white" />
          <path d={svgPaths.p2bac2000} fill="white" />
          <path clipRule="evenodd" d={svgPaths.p2312e600} fill="white" fillRule="evenodd" />
          <path d={svgPaths.p1071ee80} fill="white" />
          <path d={svgPaths.p37536f00} fill="white" />
          <path d={svgPaths.p1f0a8e80} fill="white" />
          <path d={svgPaths.p23ba5e00} fill="white" />
          <path d={svgPaths.p3c3e9f00} fill="white" />
          <path d={svgPaths.p1f351a90} fill="white" />
          <path d={svgPaths.p4a01e00} fill="white" />
          <path d={svgPaths.p1749b710} fill="white" />
          <path d={svgPaths.p36b34600} fill="white" />
          <path d={svgPaths.p16a2f080} fill="white" />
          <path clipRule="evenodd" d={svgPaths.p3d406f40} fill="white" fillRule="evenodd" />
          <path d={svgPaths.p3be26880} fill="white" />
          <path d={svgPaths.p3abcdf80} fill="white" />
          <path d={svgPaths.p15ba9f00} fill="white" />
          <path d={svgPaths.p9c20800} fill="white" />
          <path d={svgPaths.p34726fc0} fill="white" />
          <path clipRule="evenodd" d={svgPaths.p29f55880} fill="white" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p16b8e00} fill="white" fillRule="evenodd" />
        </svg>
      </div>
    </W>
  );
}

/* Muligheter med yrkesfag → Illustrasjon3 + Logo20 */
export function MuligheterYrkesfagLogo() {
  return (
    <W bg="white">
      <div className="absolute inset-[20.11%_-87.51%_-0.07%_20.12%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133.916 63.967">
          <path d={svgPaths.p1e549300} fill="#FAD7B7" />
          <path d={svgPaths.p1ad35080} fill="#333333" />
          <path d={svgPaths.p2e3a5800} fill="white" />
        </svg>
      </div>
      <div className="absolute inset-[10%_70%_70%_10%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <rect fill="#EE7C22" height="16" rx="2" width="16" />
          <path d={svgPaths.p127dfa00} fill="white" />
        </svg>
      </div>
    </W>
  );
}

/* Sammenlign - uses utdanning.no logo */
export function SammenlignLogo() {
  return (
    <W bg="white">
      <div className="absolute inset-[21.18%_22.64%_11.41%_22.64%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.7778 53.9285">
          <path d={svgPaths.p3d1fe360} fill="#EE7C22" />
        </svg>
      </div>
    </W>
  );
}

/* Skamløs → Logo16 */
export function SkamlosLogo() {
  return (
    <W bg="white">
      <div className="absolute inset-[1.17%_0_0_0]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 79.0606">
          <path d={svgPaths.p3d2ae980} fill="#FFCEBD" />
          <path d={svgPaths.p15dfd800} fill="#FFCEBD" />
          <path d={svgPaths.p25a9db00} fill="#FFA383" />
          <path d={svgPaths.p2e88c780} fill="#FFA383" />
          <path d={svgPaths.p229e2200} fill="#15E1FF" />
          <path d={svgPaths.p31ded700} fill="#065E6A" />
          <path d={svgPaths.p31e91540} fill="#ED145B" />
        </svg>
      </div>
    </W>
  );
}

/* Slettmeg → Logo14 */
export function SlettmegLogo() {
  return (
    <W bg="white">
      <div className="absolute inset-[30.87%_5.18%_30.87%_4.77%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72.0367 30.6108">
          <path clipRule="evenodd" d={svgPaths.p3c1b7080} fill="black" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p25a0ea80} fill="white" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p29791c00} fill="white" fillRule="evenodd" />
          <path d={svgPaths.p2c70cd40} fill="white" />
          <path clipRule="evenodd" d={svgPaths.p13c10f00} fill="white" fillRule="evenodd" />
          <path d={svgPaths.p571f980} fill="white" />
          <path d={svgPaths.p34e607f0} fill="white" />
          <path clipRule="evenodd" d={svgPaths.p2916ac70} fill="white" fillRule="evenodd" />
          <path d={svgPaths.p2f109d00} fill="white" />
          <path d={svgPaths.p1d1c4200} fill="white" />
          <path d={svgPaths.p296f40f0} fill="white" />
          <path d={svgPaths.p1f8c3200} fill="white" />
        </svg>
      </div>
    </W>
  );
}

/* Slutta → Logo13 */
export function SluttaLogo() {
  return (
    <W bg="#f5ccb3">
      <div className="absolute inset-[36.06%_7.97%_37.16%_8%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.2243 21.4202">
          <path d={svgPaths.pdda9f00} fill="black" />
          <path d={svgPaths.p7f90800} fill="black" />
          <path clipRule="evenodd" d={svgPaths.p2a606780} fill="black" fillRule="evenodd" />
          <path d={svgPaths.p4a1ec00} fill="black" />
          <path d={svgPaths.p37955400} fill="black" />
          <path d={svgPaths.p1d9b0080} fill="black" />
          <path d={svgPaths.p337be900} fill="#DB333E" />
        </svg>
      </div>
    </W>
  );
}

/* Studenterspør → Studenter Spør */
export function StudentersporLogo() {
  return (
    <W bg="#0b6a62">
      <div className="absolute aspect-[30.62/50.95] left-[33.8%] right-[27.93%] top-1/2 -translate-y-1/2">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.6201 50.9542">
          <path d={svgPaths.p10ecba00} fill="#F5EFDE" />
          <path d={svgPaths.p2197a280} fill="#F5EFDE" />
        </svg>
      </div>
    </W>
  );
}

/* Tankevirus */
export function TankevirusLogo() {
  return (
    <W bg="white">
      <div className="absolute inset-[25.54%_17.89%_25.58%_17.93%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.3393 39.1002">
          <path d={svgPaths.p2edcbb80} fill="black" />
          <path d={svgPaths.pf509200} fill="black" />
          <path d={svgPaths.p16581d00} fill="black" />
          <path d={svgPaths.p2b7f0300} fill="black" />
          <path d={svgPaths.p16c18f00} fill="black" />
          <path d={svgPaths.pc790580} fill="black" />
          <path d={svgPaths.pf2fed80} fill="black" />
          <path d={svgPaths.p1f87ee00} fill="black" />
          <path d={svgPaths.p21e0fb40} fill="black" />
          <path d={svgPaths.p3f786d00} fill="black" />
        </svg>
      </div>
    </W>
  );
}

/* Ung Face It */
export function UngFaceItLogo() {
  return (
    <W bg="#ebf0ed">
      <div className="absolute inset-[40%_5%_41.46%_5%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 14.8291">
          <path clipRule="evenodd" d={svgPaths.p35611280} fill="#2E3130" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.pa094f0} fill="#2E3130" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.pae9b180} fill="#2E3130" fillRule="evenodd" />
          <path d={svgPaths.p35ebfb00} fill="#2E3130" />
          <path d={svgPaths.p3d6be300} fill="#2E3130" />
          <path d={svgPaths.p331ab280} fill="#2E3130" />
          <path d={svgPaths.pf934500} fill="#2E3130" />
          <path d={svgPaths.p1eb9b380} fill="#2E3130" />
          <path d={svgPaths.p248c1740} fill="#2E3130" />
          <path d={svgPaths.p1cf39c80} fill="#2E3130" />
        </svg>
      </div>
    </W>
  );
}

/* UngSpotlight → Logo6 */
export function UngSpotlightLogo() {
  return (
    <W bg="white">
      <div className="absolute inset-[16.68%_12.99%_16.71%_12.82%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.3527 53.2914">
          <path d={svgPaths.p3f82fc40} fill="#3F6998" />
          <path d={svgPaths.p36cfc900} fill="#3F6998" />
          <path d={svgPaths.pea75300} fill="#89A5C0" />
          <path d={svgPaths.p67f6e00} fill="#89A5C0" />
          <path d={svgPaths.p9672c70} fill="#FFB231" fillOpacity="0.6" />
          <path d={svgPaths.p300f0980} fill="#FFB231" fillOpacity="0.6" />
        </svg>
      </div>
    </W>
  );
}

/* Utdanningssystemet - uses utdanning.no logo */
export function UtdanningssystemetLogo() {
  return (
    <W bg="#ee7c22">
      <div className="absolute inset-[21.18%_22.64%_11.41%_22.64%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.7778 53.9285">
          <path d={svgPaths.p3d1fe360} fill="white" />
        </svg>
      </div>
    </W>
  );
}

/* Veien til fagbrev → Illustrasjon2 + Logo5 */
export function VeienTilFagbrevLogo() {
  return (
    <W bg="white">
      <div className="absolute inset-[32.28%_0_0_28.12%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.5006 54.1771">
          <path d={svgPaths.p3d9dbb00} fill="#FAD7B7" />
          <path d={svgPaths.p3042f900} fill="#6C6965" />
          <path d={svgPaths.p18678d70} fill="#6C6965" />
          <path d={svgPaths.p20c41700} fill="#F07C14" />
        </svg>
      </div>
      <div className="absolute inset-[10%_70%_70%_10%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <rect fill="#EE7C22" height="16" rx="2" width="16" />
          <path d={svgPaths.p127dfa00} fill="white" />
        </svg>
      </div>
    </W>
  );
}

/* Veien til studiekompetanse → Illustrasjon1 + Logo4 */
export function VeienTilStudiekompetanseLogo() {
  return (
    <W bg="white">
      <div className="absolute inset-[8.76%_12.61%_0_1.23%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.9269 72.9945">
          <path d={svgPaths.p376f4700} fill="#EFEFEF" />
          <path d={svgPaths.p3bc37980} fill="#6C6965" />
          <path d={svgPaths.p1f459700} fill="#2E2E2E" />
          <path d={svgPaths.p3a56100} fill="#F07C14" />
          <path d={svgPaths.p3648340} fill="black" />
          <path clipRule="evenodd" d={svgPaths.p37212080} fill="black" fillRule="evenodd" />
        </svg>
      </div>
      <div className="absolute right-[8px] size-[16px] top-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <rect fill="#EE7C22" height="16" rx="2" width="16" />
          <path d={svgPaths.p127dfa00} fill="white" />
        </svg>
      </div>
    </W>
  );
}

/* Verktøy for å velge videregående → Illustrasjon + Logo3 */
export function VerktoyVelgeVgsLogo() {
  return (
    <W bg="white">
      <div className="absolute inset-[28.52%_0_0_0]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 57.1876">
          <path d={svgPaths.p12491a00} fill="#FDE5D0" />
          <path d={svgPaths.p1ab3d8a0} fill="#35342D" />
          <path d={svgPaths.p10d34600} fill="#EF7E15" />
          <path d={svgPaths.p2125ce00} fill="#FFDD93" />
          <path d={svgPaths.p7af7200} fill="#F6AF73" />
        </svg>
      </div>
      <div className="absolute inset-[10%_70%_70%_10%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p3b61700} fill="#F07C14" />
          <path d={svgPaths.p3d882600} fill="white" />
        </svg>
      </div>
    </W>
  );
}

/* Yrkesfaghåndboka → Logo1 */
export function YrkesfaghandbokaLogo() {
  return (
    <W bg="#ee7c22">
      <div className="absolute inset-[5%_16.25%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 72">
          <path d={svgPaths.p39c29700} fill="#FDFFFF" />
          <path d={svgPaths.pdc1a500} fill="#FDE9D9" />
          <path d={svgPaths.p205e1500} fill="#A0A0A0" />
          <path d={svgPaths.pdb49500} fill="#A0A0A0" />
          <path d={svgPaths.p27cf1280} fill="#A0A0A0" />
          <path d={svgPaths.p34cd9000} fill="#A0A0A0" />
          <path d={svgPaths.p244bdaf0} fill="#A0A0A0" />
          <path d={svgPaths.p3bb1300} fill="#A0A0A0" />
          <path d={svgPaths.p39456dc8} fill="#A0A0A0" />
          <rect fill="white" height="12" rx="2" width="12" x="6" y="5" />
          <path d={svgPaths.p3164b400} fill="#EE7C22" />
        </svg>
      </div>
    </W>
  );
}

/* ═══════════════════════════════════════════
   SNAKK MED NOEN LOGOS
   ═══════════════════════════════════════════ */

/* 113 Medisinsk nødnummer → Logo39 */
export function Logo113() {
  return (
    <W bg="#fef35d">
      <div className="absolute inset-[36.25%_12.5%_35.63%_12.5%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 22.5">
          <path clipRule="evenodd" d={svgPaths.p36da7300} fill="white" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p3767a00} fill="white" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p2d7d2000} fill="white" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p1f2d7f00} fill="#014143" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p2b4b9c00} fill="#014143" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p85ef0c0} fill="#014143" fillRule="evenodd" />
        </svg>
      </div>
    </W>
  );
}

/* Alarmtelefonen for barn og unge */
export function AlarmtelefonenFigmaLogo() {
  return (
    <W bg="#d04620">
      <div className="absolute inset-[38.75%_12.5%_20%_12.5%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 33">
          <path clipRule="evenodd" d={svgPaths.p1580d600} fill="white" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p2d0bcf0} fill="white" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p1f0aca00} fill="white" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p7b5a800} fill="white" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.pb4a1060} fill="white" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p102ffc00} fill="white" fillRule="evenodd" />
          <path d={svgPaths.pef8b500} fill="white" />
          <path clipRule="evenodd" d={svgPaths.p1e133f80} fill="white" fillRule="evenodd" />
          <path d={svgPaths.p31fd280} fill="white" />
          <path d={svgPaths.p2cdc6800} fill="white" />
          <path d={svgPaths.p34c7a980} fill="white" />
          <path d={svgPaths.p11dfa380} fill="white" />
          <path d={svgPaths.p2db5ac80} fill="white" />
          <path clipRule="evenodd" d={svgPaths.p28d82600} fill="white" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p1f03ccf0} fill="white" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.pb51a580} fill="white" fillRule="evenodd" />
          <path d={svgPaths.paec3100} fill="white" />
          <path clipRule="evenodd" d={svgPaths.p34ac9300} fill="white" fillRule="evenodd" />
          <path d={svgPaths.pcfca4f0} fill="white" />
          <path d={svgPaths.p3c43f700} fill="white" />
          <path d={svgPaths.p31bb9f00} fill="white" />
          <path d={svgPaths.p176659f0} fill="white" />
          <path d={svgPaths.p9cb4600} fill="white" />
          <path d={svgPaths.pc8eb400} fill="white" />
          <path d={svgPaths.pa4ec4c0} fill="white" />
          <path d={svgPaths.p3a87ae00} fill="white" />
          <path d={svgPaths.pf2f3980} fill="white" />
          <path clipRule="evenodd" d={svgPaths.p3d215100} fill="white" fillRule="evenodd" />
          <path d={svgPaths.p3b3a9780} fill="white" />
          <path d={svgPaths.pb545880} fill="white" />
          <path d={svgPaths.p2b100500} fill="white" />
          <path d={svgPaths.pa97b780} fill="white" />
          <path d={svgPaths.p31074f00} fill="white" />
        </svg>
      </div>
    </W>
  );
}

/* NAV */
export function NavLogo() {
  return (
    <W bg="#c30000">
      <div className="absolute inset-[38.75%_12.5%_38.74%_12.5%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 18.0103">
          <path clipRule="evenodd" d={svgPaths.p3f1d3000} fill="white" fillRule="evenodd" />
        </svg>
      </div>
    </W>
  );
}

/* Forsvaret → Logo31 */
export function ForsvaretLogo() {
  return (
    <W bg="white">
      <div className="absolute inset-[8.75%_20.28%_18.17%_20%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.7739 58.4623">
          <path d={svgPaths.p614d700} fill="#EE343F" />
          <path clipRule="evenodd" d={svgPaths.p1b482dc0} fill="#FFD600" fillRule="evenodd" />
          <path d={svgPaths.p39c0c500} fill="#FFD600" />
          <path d={svgPaths.p23e2b700} fill="#FFD600" />
          <path d={svgPaths.p1f98f280} fill="white" />
          <path d={svgPaths.p3f721800} fill="#FFD600" />
          <path d={svgPaths.p2021b480} fill="#FFD600" />
          <path clipRule="evenodd" d={svgPaths.p2912bb40} fill="#FFD600" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p3241480} fill="black" fillRule="evenodd" />
          <path d={svgPaths.p31333d00} fill="black" />
          <path clipRule="evenodd" d={svgPaths.p3b514500} fill="black" fillRule="evenodd" />
          <path d={svgPaths.p23654000} fill="black" />
          <path clipRule="evenodd" d={svgPaths.p22b20200} fill="black" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p8017b80} fill="black" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p4b73940} fill="black" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.pe9c5880} fill="black" fillRule="evenodd" />
        </svg>
      </div>
    </W>
  );
}

/* Statens Vegvesen → Logo11 */
export function StatensVegvesenLogo() {
  return (
    <W bg="white">
      <div className="absolute inset-[23.75%_12.5%_22.5%_12.5%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 43">
          <path d={svgPaths.p2dda3730} fill="#FFD520" />
          <path d={svgPaths.pcc45800} fill="#46515A" />
          <path d={svgPaths.p19a94b00} fill="#ED1C2E" />
        </svg>
      </div>
    </W>
  );
}

/* Kirkens SOS */
export function KirkensSosLogo() {
  return (
    <W bg="#312959">
      <div className="absolute inset-[34.5%_6.62%_34.63%_6.62%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.4004 24.7002">
          <path d={svgPaths.p1400e00} fill="white" />
          <path clipRule="evenodd" d={svgPaths.p8adf300} fill="white" fillRule="evenodd" />
          <path d={svgPaths.pff3ac40} fill="white" />
          <path d={svgPaths.p3305c200} fill="white" />
          <path d={svgPaths.p2907a100} fill="white" />
          <path d={svgPaths.pf57880} fill="white" />
          <path d={svgPaths.p2becdd00} fill="white" />
          <path d={svgPaths.p18c37580} fill="white" />
          <path d={svgPaths.p736f100} fill="white" />
          <path clipRule="evenodd" d={svgPaths.p9dd3a00} fill="white" fillRule="evenodd" />
          <path d={svgPaths.pddeab50} fill="white" />
          <path d={svgPaths.p1eff1ac0} fill="white" />
          <path clipRule="evenodd" d={svgPaths.p1f0b5d00} fill="white" fillRule="evenodd" />
        </svg>
      </div>
    </W>
  );
}

/* SPISFO */
export function SpisfoFigmaLogo() {
  return (
    <W bg="#f9f2ea">
      <div className="absolute inset-[18.75%_12.5%_20%_12.5%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 49">
          <path clipRule="evenodd" d={svgPaths.p354fa0c0} fill="#599D9F" fillRule="evenodd" />
        </svg>
      </div>
    </W>
  );
}

/* Sex og samfunn */
export function SexOgSamfunnLogo() {
  return (
    <W bg="white">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60px] w-[54px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 60">
          <path d={svgPaths.p1c13f4f0} fill="#115E67" />
        </svg>
      </div>
    </W>
  );
}

/* Vold- og overgrepslinjen → Logo2 */
export function VoldOgOvergrepslinjenLogo() {
  return (
    <W bg="#f4f4f3">
      <div className="absolute inset-[21.25%_20%_22.12%_20%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 45.3067">
          <path d={svgPaths.p25e0c880} fill="#9F67FF" />
          <path d={svgPaths.pfb32880} fill="white" />
        </svg>
      </div>
    </W>
  );
}

/* Rustelefonen → RUSinfo → Logo18 */
export function RustelefonenLogo() {
  return (
    <W bg="white">
      <div className="absolute inset-[20%_45.09%_20%_42.5%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.93062 48">
          <path d={svgPaths.p3ddae880} fill="#1D1D1B" />
          <path d={svgPaths.p4328180} fill="#00AADB" />
        </svg>
      </div>
    </W>
  );
}

/* Mental Helse → using same approach, there's no exact match but we can use a placeholder or the Kors på halsen style */
/* Digital leksehjelp → Logo22 (Røde Kors / Kors på halsen) */
export function KorsPaaHalsenLogo() {
  return (
    <W bg="white">
      <div className="absolute inset-[18.75%_16.25%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 50">
          <path d={svgPaths.p17bb8780} fill="#D52B1E" />
          <path d={svgPaths.p1a499c00} fill="black" />
          <path clipRule="evenodd" d={svgPaths.p12b7e5f0} fill="black" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p3939cc00} fill="black" fillRule="evenodd" />
          <path d={svgPaths.p4d46f00} fill="black" />
          <path clipRule="evenodd" d={svgPaths.p104c6b00} fill="black" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p6a0d000} fill="black" fillRule="evenodd" />
          <path d={svgPaths.p967f600} fill="black" />
          <path clipRule="evenodd" d={svgPaths.p3966d7f2} fill="black" fillRule="evenodd" />
          <path d={svgPaths.p269c4f00} fill="black" />
          <path d={svgPaths.p2b47b880} fill="black" />
          <path clipRule="evenodd" d={svgPaths.p114fe600} fill="black" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p46b8c80} fill="black" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p2577b900} fill="black" fillRule="evenodd" />
          <path d={svgPaths.p139f9700} fill="black" />
          <path d={svgPaths.p18c05d80} fill="black" />
          <path d={svgPaths.p621ca80} fill="black" />
          <path d={svgPaths.p261b9b00} fill="black" />
          <path clipRule="evenodd" d={svgPaths.p1f999300} fill="black" fillRule="evenodd" />
          <path d={svgPaths.p25b6f00} fill="black" />
          <path d={svgPaths.p1e0ca700} fill="black" />
          <path clipRule="evenodd" d={svgPaths.p271b7080} fill="black" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p3f6e500} fill="black" fillRule="evenodd" />
          <path d={svgPaths.p1b966f80} fill="black" />
        </svg>
      </div>
    </W>
  );
}

/* Digital leksehjelp (Røde Kors) - red cross logo */
export function DigitalLeksehjelpLogo() {
  return (
    <W bg="white">
      <div className="absolute inset-[23.75%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
          <path d={svgPaths.p21cf38c0} fill="#D52B1E" />
        </svg>
      </div>
    </W>
  );
}
