import MyBarChart from "./Dashboard/Charts/MyBarChart";
import Stats from "../components/Dashboard/Stats";
import MyPieChart from "./Dashboard/Charts/MyPieChart";
export default function ChartSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
      {/* <div className="space-y-4 grid grid-cols-1 xl:grid-cols-2 gap-6 min-w-[450px] ">
        <Stats />
      </div> */}
      <div className="md:col-span-2 ">
        <MyBarChart />
      </div>
      <MyPieChart />
    </section>
  );
}
