import { useKpiStore } from "../../store/kpiStore";
import { useNavigate, useParams } from "react-router-dom";
import StatusBadge from "./statusBadge";
import ProgressBar from "./ProgressBar";
import { priorityColor, statusColor } from "../../utils/statusColor";
import Button from "../Button";
import SmlBtn from "./SmlBtn";
import { icons } from "../../utils/icons";

export default function SubGoalHeader() {
  // GET THE ARCHIVE KPI AND THE UN- ARCHIVED KPI FUNCTIONS FROM STORE
  const archiveKpi = useKpiStore((state) => state.archiveKpi);
  const unArchiveKpi = useKpiStore((state) => state.unArchiveKpi);
  const { kpiId } = useParams();
  const kpi = useKpiStore((s) => s.getKpiById(kpiId));

  if (!kpi) return <div>Loading…</div>;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/kpi/${kpiId}/sub/new`);
  };

  return (
    <header
      className="sticky top-0 z-20 border-b border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-950/80 backdrop-blur px-4 py-4"
      aria-label="kpi-title"
    >
      <section className=" flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div className="w-full">
          <a
            href="/dashboard/"
            className="text-body font-bold mb-3 py-1 font-sans"
          >
            Go back
          </a>
          {/* BUTTON GROUP  */}
          <div className="flex items-center justify-end gap-2 w-full">
            <Button type="button" text="Edit KPI" className="button" />
            <Button
              type="button"
              className="button"
              text="Add subgoal"
              onClick={handleNavigate}
            />
          </div>
          {/* OVERALL PROGRESS */}
          <div className="w-full flex justify-start flex-col mt-4">
            <p className="text-start text-xs text-muted">Overall progress</p>
            <div className=" flex items-end gap-3 max-w-[500px] w-full">
              <ProgressBar
                status={kpi.status}
                progress={Number(20 ?? 0)}
                aria-label="Overall KPI progress"
              />
            </div>
          </div>

          <p className="text-xs text-slate-500 pt-5 font-sans">KPI</p>
          <h1 id="kpi-title" className="text-lg sm:text-xl font-sans text-body">
            {kpi.goal}
          </h1>

          <div className="pt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
            <span className="ms-1">
              Status:{" "}
              <StatusBadge
                value={kpi.status || "Not set"}
                className={`text-white font-medium text-xs px-3 py-1 rounded-full ${statusColor(kpi.status)}`}
              />
            </span>
            <span className="ms-1">
              Team: <StatusBadge value={kpi.team} />
            </span>
            <span className="ms-1">
              Priority:{" "}
              <StatusBadge
                value={kpi.priority || "not set"}
                className={`text-white font-medium text-xs px-3 py-1 rounded-full ${priorityColor(kpi.priority)}`}
              />
            </span>
            <span className="ms-1">
              Category:
              <StatusBadge value={kpi.category || "not set"} />
            </span>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
            <span>
              Assigned:
              <strong className="font-semibold ms-1">{kpi.assigned}</strong>
            </span>

            <span>
              Deadline:
              <time dateTime={kpi.deadline} className="font-semibold ms-1">
                {kpi.deadline}
              </time>
            </span>

            <span>
              Updated:
              <time dateTime={kpi.updatedAt} className="font-semibold ms-1">
                {kpi.updatedAt}
              </time>
            </span>
          </div>

          {/* ARCHIVE AND UNARCHIVE BTNs */}
          <div className="flex relative">
            <div className="absolute right-0 -top-5">
              {kpi?.archived ? (
                <SmlBtn
                  onClick={() => unArchiveKpi(kpi.id)}
                  icon={icons.archive}
                  text="Unarchive"
                />
              ) : (
                <SmlBtn
                  onClick={() => archiveKpi(kpi.id)}
                  icon={icons.archive}
                  text="Archive"
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
