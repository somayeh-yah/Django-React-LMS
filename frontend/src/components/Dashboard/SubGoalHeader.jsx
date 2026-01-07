import { useKpiStore } from "../../store/kpiStore";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import StatusBadge from "./statusBadge";
import ProgressBar from "./ProgressBar";
import Button from "../Button";
// import { kpiData as kpi } from "../../constants/data/kpiData";

export default function SubGoalHeader() {
  const { kpiId } = useParams();
  const kpi = useKpiStore((s) => s.getKpiById(kpiId));
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/kpi/${kpiId}/sub/new`);
  };
  if (!kpi) return <div>Loading…</div>;
  return (
    <header
      className="sticky top-0 z-20 border-b border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-950/80 backdrop-blur px-4 py-4"
      aria-label="kpi-title"
    >
      <section className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <a
            href="/dashboard/"
            className="text-body font-bold mb-3 py-1 font-sans"
          >
            Go back
          </a>
          <p className="text-xs text-slate-500 pt-5 font-sans">KPI</p>
          <h1 id="kpi-title" className="text-lg sm:text-xl font-sans text-body">
            {kpi.goal}
          </h1>

          <div className="pt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
            <span className="ms-1">
              Status: <StatusBadge value={kpi.status} />
            </span>
            <span className="ms-1">
              Team: <StatusBadge value={kpi.team} />
            </span>
            <span className="ms-1">
              Priority: <StatusBadge value={kpi.priority} />
            </span>
            <span className="ms-1">
              Category:
              <StatusBadge value={kpi.category} />
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
        </div>

        {/* OVERALL PROGRESS */}
        <div className="w-full lg:w-[320px]">
          <label className="text-xs text-slate-500">Overall progress</label>
          <div className="mt-2 flex items-center gap-3 ">
            <ProgressBar
              status={kpi.status || 0}
              progress={kpi.progress}
              aria-label="Overall KPI progress"
            />
          </div>
          {/* BUTTON GROUP  */}
          <div className="mt-3 flex items-center justify-end gap-2">
            <Button type="button" text="Edit KPI" className="sec-button" />
            <Button
              type="submit"
              className="button"
              text="Add subgoal"
              onClick={handleNavigate}
            />
          </div>
        </div>
      </section>
    </header>
  );
}
