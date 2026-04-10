import { Link } from "react-router";
import { HappyCharacter } from "../components/shared";
import { Button } from "../components/button";

export function NotFound() {
  return (
    <section className="px-4 py-16 flex flex-col items-center text-center">
      <HappyCharacter />
      <h1 className="font-['Borna',sans-serif] text-[28px] text-[#0f0f0f] leading-[36px] tracking-[-0.112px] mt-6" style={{ fontWeight: 600 }}>
        Oops! Siden ble ikke funnet
      </h1>
      <p className="font-['Open_Sans',sans-serif] text-[16px] text-[#454545] leading-[24px] tracking-[-0.064px] mt-3 max-w-[300px]" style={{ fontWeight: 400 }}>
        Vi finner ikke siden du leter etter. Kanskje den er flyttet eller slettet.
      </p>
      <div className="mt-6">
        <Link to="/">
          <Button variant="primary">Gå til forsiden</Button>
        </Link>
      </div>
    </section>
  );
}
