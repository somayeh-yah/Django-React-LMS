import InfoCard from "./InfoCard";
import StatusBadge from "./statusBadge";
import ProgressBar from "./ProgressBar";
import { statusColor } from "../../utils/statusColor";

export default function KpiList({ selected, subGoal, onSelect }) {
  return (
    <>
      <li>
        <InfoCard
          id={subGoal.id}
          onClick={onSelect}
          className={`${selected ? "bg-slate-300/40 dark:bg-slate-800" : ""}`}
        >
          <div className="flex items-start justify-between gap-2">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 line-clamp-1">
              Title:{subGoal.title || "Untitled"}
            </p>
            <time
              dateTime={subGoal.deadline}
              className="text-xs text-slate-500 tabular-nums"
            >
              Deadline: {subGoal.deadline}
            </time>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
            <StatusBadge
              value={subGoal.status}
              className={`${statusColor(subGoal.status)}`}
            />

            <span className="ml-auto">
              Assigned:{" "}
              <span className="font-semibold">{subGoal.assigned}</span>
            </span>
          </div>

          <div className="mt-2 max-w-[500px] w-full">
            <ProgressBar
              status={subGoal.status}
              progress={Number(40 ?? 0)}
              aria-label={`${subGoal.title} progress`}
            />
          </div>
        </InfoCard>
      </li>
    </>
  );
}
