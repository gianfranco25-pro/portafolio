import Link from "next/link";
import { availableWeeks } from "@/data/weeks";

type WeekNavProps = {
  currentWeek: number;
};

const weeks = availableWeeks.map((week) => ({
  number: week,
  href: `/projects/semana-${week}`,
}));

const baseLinkClasses =
  "inline-flex items-center justify-center rounded-full border font-semibold shadow-lg transition-all duration-300 backdrop-blur-md";
const sizeClasses = "w-24 px-3 py-2 text-xs sm:text-sm";
const activeClasses = "bg-white text-slate-900 border-white/80 shadow-xl";
const inactiveClasses =
  "bg-white/70 text-slate-700 border-white/50 hover:bg-white hover:text-slate-900 hover:scale-105";

export default function WeekNav({ currentWeek }: WeekNavProps) {
  const renderLinks = () =>
    weeks.map((week) => {
      const isActive = week.number === currentWeek;

      return (
        <Link
          key={week.number}
          href={week.href}
          aria-current={isActive ? "page" : undefined}
          className={`${baseLinkClasses} ${sizeClasses} ${
            isActive ? activeClasses : inactiveClasses
          }`}
        >
          Semana {week.number}
        </Link>
      );
    });

  return (
    <>
      <nav className="hidden lg:flex fixed left-6 top-24 flex-col gap-3 z-40 max-h-[70vh] overflow-y-auto pr-1">
        {renderLinks()}
      </nav>
      <div className="lg:hidden flex flex-wrap gap-2 mb-8">
        {renderLinks()}
      </div>
    </>
  );
}
