import { useKpiStore } from "../../store/kpiStore";
import { useParams } from "react-router-dom";
import { statusColor } from "../../utils/statusColor";

export default function ProgressBar({ progress = 0, status = "Pending" }) {
  const { kpiId } = useParams();
  const kpi = useKpiStore((s) => s.getKpiById(kpiId));
  return (
    <div className="space-y-1 w-full">
      <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 ">
        <span>Completed</span>
        <span className="font-medium">
          {progress}
          {kpi.progress}%
        </span>
      </div>

      <div className="h-2.5 w-full rounded-full bg-slate-300/50 dark:bg-slate-800 overflow-hidden shadow-sm">
        <div
          className={`h-full rounded-full transition-all ${statusColor(status)}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
