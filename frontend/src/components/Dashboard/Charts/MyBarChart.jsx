import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { chartData } from "../../../constants/data/chartData";

export default function MyBarChart() {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 px-1 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="text-xl font-bold text-slate-800 dark:text-white text-clip ps-1">
            Monthly Goal Achievement
          </h4>
        </div>
        {/* Goal */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-linear-to-r from-blue-400 to-blue-600 rounded-full "></div>
            <div className="text-sm text-slate-600 dark:text-slate-400 ">
              <span className="">Goal</span>
            </div>
          </div>
          {/* Achived */}
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-linear-to-r from-purple-400 to-purple-500 rounded-full "></div>
            <div className="text-sm text-slate-600 dark:text-slate-400 ">
              <span className="">Achived</span>
            </div>
          </div>
        </div>
      </div>
      {/* RECHART CHART */}
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray={"3 3"}
              stroke={"#e2e8f0"}
              opacity={0.3}
            />
            <XAxis
              dataKey="month"
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value / 100} k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
              }}
            />
            {/* GOAL */}
            <Bar
              dataKey="goal"
              fill="#3b82f6"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
            {/* Achived */}
            <Bar
              dataKey="achieved"
              fill="#9463f4"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
