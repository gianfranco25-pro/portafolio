import Link from "next/link";
import { getWeekGroup } from "@/data/weeks";

type WeekNavProps = {
  currentWeek: number;
};

const baseLinkClasses =
  "inline-flex items-center justify-center rounded-full border font-semibold shadow-lg transition-all duration-300 backdrop-blur-md";
const sizeClasses = "w-32 px-5 py-1 text-xs sm:text-sm";
const activeClasses = "bg-white text-slate-900 border-white/80 shadow-xl";
const inactiveClasses =
  "bg-white/70 text-slate-700 border-white/50 hover:bg-white hover:text-slate-900 hover:scale-105";

export default function WeekNav({ currentWeek }: WeekNavProps) {
  const unitOneWeeks = [1, 2, 3, 4, 5, 6, 7];
  const unitTwoWeeks = [9, 10, 11, 12, 13, 14, 15];
  const weeks = getWeekGroup(currentWeek).map((week) => ({
    number: week,
    href: `/projects/semana-${week}`,
  }));

  const renderUnitLinks = (unitWeeks: number[]) =>
    unitWeeks.map((week) => {
      const isActive = week === currentWeek;
      return (
        <Link
          key={week}
          href={`/projects/semana-${week}`}
          aria-current={isActive ? "page" : undefined}
          className={`${baseLinkClasses} ${sizeClasses} ${
            isActive ? activeClasses : inactiveClasses
          }`}
        >
          Semana {week}
        </Link>
      );
    });

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
      <nav className="hidden lg:flex absolute right-4 top-8 flex-col gap-2 z-40 max-h-[70vh] overflow-y-auto pl-1">
        {unitOneWeeks.includes(currentWeek) && (
          <div>
            {renderUnitLinks(unitOneWeeks)}
          </div>
        )}
        {unitTwoWeeks.includes(currentWeek) && (
          <div>
            {renderUnitLinks(unitTwoWeeks)}
          </div>
        )}
      </nav>
      <div className="lg:hidden flex flex-wrap gap-2 mb-8">
        {renderLinks()}
      </div>
    </>
  );
}
