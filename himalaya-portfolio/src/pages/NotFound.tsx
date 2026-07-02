import { profile } from "../data/site";
import { useSEO } from "../hooks/useSEO";
import MagneticButton from "../components/MagneticButton";
import Ridgeline from "../components/Ridgeline";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  useSEO({
    title: `Page not found — ${profile.name}`,
    description: "This trail leads nowhere. Head back to base.",
    path: "/404",
  });

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <Ridgeline className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full opacity-60" />
      <div className="container-page relative text-center">
        <p className="font-display text-8xl text-pine sm:text-9xl">404</p>
        <h1 className="mt-4 font-display text-2xl text-ink">This trail leads nowhere.</h1>
        <p className="mx-auto mt-3 max-w-md text-slate">
          The page you're looking for isn't on the map. Let's get you back to steadier ground.
        </p>
        <div className="mt-8 flex justify-center">
          <MagneticButton to="/" variant="solid">
            <ArrowLeft size={16} /> Back home
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
