import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { availableWeeks } from "@/data/weeks";

const weeks = availableWeeks.map((week) => ({
  number: week,
  href: `/projects/semana-${week}#bibliografia`,
}));

const Bibliography = () => {
  return (
    <section id="bibliografia" className="py-20">
      <h1 className="heading">
        Bibliografía <span className="text-purple">por semana</span>
      </h1>
      <p className="text-white-200 mt-4 text-center">
        Accede a las fuentes y recursos usados en cada semana.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {weeks.map((week) => (
          <Link
            key={week.number}
            href={week.href}
            className="group relative overflow-hidden rounded-2xl p-[1px] focus:outline-none"
          >
            <span className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-30 transition-opacity duration-300 group-hover:opacity-70" />
            <span className="relative flex items-center justify-between rounded-2xl bg-black-100 px-6 py-4 text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
              <span className="text-base font-semibold">Semana {week.number}</span>
              <span className="flex items-center gap-2 text-sm text-purple">
                Bibliografía
                <FaLocationArrow className="text-purple" />
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Bibliography;
