import { statusColor } from "../../utils/statusColor";

export default function ProgressBar({ progress = 0, status = "Pending" }) {
  return (
    <div className="space-y-1 w-full">
      <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
        <span>Progress</span>
        <span className="font-medium">{progress}%</span>
      </div>

      <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-sm">
        <div
          className={`h-full rounded-full transition-all ${statusColor(status)}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
