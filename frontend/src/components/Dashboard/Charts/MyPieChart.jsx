import { pieShartData } from "../../../constants/data/pieChartData";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
export default function MyPieChart() {
  return (
    <section className="bg-surface backdrop:blur-xl rounded-b-xl p-2 border border-slate-200/50 dark:border-slate-700/50 min-h-[250px] shadow-sm ">
      <div className="mb-1">
        <h4 className="text-lg font-bold text-body">Visions Achived</h4>
        <p className="text-sm text-muted ">This quarters goals was</p>
      </div>
      <div className="h-48 ">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie
              data={pieShartData}
              cx={"50%"}
              cy={"50%"}
              innerRadius={40}
              outerRadius={80}
              paddingAngle={5}
              dataKey={"value"}
              isAnimationActive={true}
              animationBegin={0}
              animationDuration={1500}
              animationEasing="ease-in-out"
            >
              {pieShartData.map((data, i) => {
                return <Cell key={`cell-${i} `} fill={data.color} />;
              })}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(235, 235, 235, 0.95)",
                border: "none",
                borderRadius: "12px",
                boxShadow: "0, 10px, 40px rgba(0, 0, 0, 0.1)",
                color: "var(--color-body)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* TOOLTIP UI */}
      <div className="space-y-3">
        {pieShartData.map((data, i) => {
          return (
            <div
              className="flex items-center justify-between break-keep"
              key={i}
            >
              <div className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: data.color }}
                ></div>
                <span className="ps-2 text-sm text-body ">{data.name}</span>
              </div>
              <div className="text-sm font-semibold text-body">
                {data.value}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
