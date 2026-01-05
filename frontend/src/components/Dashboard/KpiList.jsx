import InfoCard from "./InfoCard";
import StatusBadge from "./statusBadge";
import ProgressBar from "./ProgressBar";

export default function KpiList({ selected, subgoal, onSelect }) {
  return (
    <>
      <li>
        <InfoCard
          id={onSelect}
          onClick={onSelect}
          className={`${selected ? "bg-slate-300/40 dark:bg-slate-800" : ""}`}
          subgoal={subgoal}
        >
          <div className="flex items-start justify-between gap-2">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 line-clamp-1">
              {subgoal.title}
            </p>
            <time
              dateTime={subgoal.deadline}
              className="text-xs text-slate-500 tabular-nums"
            >
              {subgoal.deadline}
            </time>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
            <StatusBadge value={subgoal.status} />
            <span className="rounded-full bg-slate-200/60 dark:bg-slate-800 px-2 py-1">
              {subgoal.progress}%<span className="sr-only"> progress</span>
            </span>
            <span className="ml-auto">
              Assigned:{" "}
              <span className="font-semibold">{subgoal.assigned}</span>
            </span>
          </div>

          <div className="mt-2">
            <ProgressBar
              className="w-full h-2"
              status={subgoal.status}
              progress={Number(subgoal.progress ?? 0)}
              aria-label={`${subgoal.title} progress`}
            />
          </div>
        </InfoCard>
      </li>
    </>
  );
}
