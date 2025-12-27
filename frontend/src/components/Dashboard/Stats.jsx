import { icons } from "../../utils/icons";
import { statsData } from "../../constants/data/StatsData";

export default function Stats({ label, children }) {
  return (
    // DASHBOARD MAIN CONTENT
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {statsData.map((stats, i) => {
        const Icon = stats.icon;
        return (
          <div
            key={i}
            className="bg-background backdrop-blur-xl rounded-2xl py-4 px-3 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-sm transition-all duration-300 group "
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-secondary mb-2">
                  {stats.title}
                </p>
                <p className="text-3xl font-bold text-body mb-4">
                  {stats.value}
                </p>
                {/* TRENDING */}
                <div className="flex items-center space-x-2 font-semibold">
                  {stats.trend === "up"
                    ? icons.arrowUpRight
                    : icons.arrowDownRight}

                  <span
                    className={`text-sm font-semibold ${stats.trend === "up" ? "text-success" : "text-red-600"}`}
                  >
                    {stats.change}
                  </span>
                  <span className="text-sm text-secondary ">Vs last month</span>
                </div>
              </div>
              {/* ICONS */}
              <div
                className={`p-3 rounded-xl ${stats.bgColor} group-hover:scale-110 transition-all duration-300`}
              >
                <Icon className={`w-6 h-6 cursor-pointer ${stats.textColor}`} />
              </div>
            </div>
            {/* PROGRESS-BAR */}
            <div className="mt-4 h-2 bg-surface rounded-full overflow-hidden">
              <div
                className={`h-full w-full bg-linear-to-r ${stats.bgColor} rounded-full transition-all duration-100 `}
                style={{ width: stats.trend === "up" ? "75%" : "45%" }}
              ></div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
