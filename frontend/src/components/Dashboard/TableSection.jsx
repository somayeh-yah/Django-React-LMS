import { useNavigate } from "react-router-dom";
import { MoreHorizontal } from "lucide-react";
import profileImg2 from "../../assets/images/profile2.jpg";
import { kpiData as kpis } from "../../constants/data/kpiData";
import Input from "../input/Input";

import GroupProfile from "../profile/GroupProfile";
import SingleProfile from "../profile/SingleProfile";
import { statusColor } from "../../utils/statusColor";
export default function TableSection() {
  const navigate = useNavigate();

  const handleNavigate = (kpiId) => {
    navigate(`/kpi/${kpiId}`);
  };

  return (
    <section className="grid grid-cols-1 md-grid-cols-3 gap-6 w-full">
      <div className="bg-surface backdrop:blur-xl rounded-b-2xl border-b border-br overflow-visible">
        <div className="px-2 py-2 border-b border-br">
          <div className="flex items-center justify-between">
            <div className="flex xs:flex-col items-start gap-1 space-x-6">
              <h4 className="text-lg text-muted font-bold whitespace-nowrap font-sans py-2">
                Team Members
              </h4>
              {/* PROFILE GROUP */}
              <GroupProfile />
            </div>
            <div className="flex xs:flex-col items-end mt-4">
              <button className="flex-1 text-start md:text-end bg-transparent font-semibold text-muted  dark:bg-slate-900 hover:border-b">
                See previous
                <span className=" ms-1 text-xs text-muted/50 font-bold font-sans">
                  KPI.s
                </span>
              </button>
              <p className="text-sm text-body text-start mt-3">Latest KPI</p>
            </div>
          </div>
        </div>
        {/* MEMBER TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full max-w-full">
            <thead>
              <tr>
                {/* COACH CONTACT */}
                <th className="text-left px-3 text-sm font-semibold text-muted">
                  Visions & Goals
                </th>
                <div className="min-w-[250px] flex flex-row items-center justify-center  max-w-sm space-y-1 rounded-xl bg-white px-2 m-2 py-2 shadow-lg ring ring-black/5 gap-3 ">
                  <SingleProfile
                    src={profileImg2}
                    alt="profile image"
                    name="Alex manii"
                  />
                  <div className="space-y-1 text-left mx-auto w-full">
                    <p className="font-medium text-gray-500">
                      Teamleader/Coach
                    </p>
                    <button className="button py-1">Message</button>
                  </div>
                </div>
              </tr>
              <tbody>
                {kpis.map((kpi, i) => {
                  console.log("KPI:", kpi);
                  return (
                    <tr
                      className="even:bg-white odd:bg-gray-70 dark:even:bg-gray-900/50 dark:odd:bg-gray-950transition-colors  "
                      key={i}
                    >
                      <td className="p-3">
                        <Input type="checkbox" title="checkbox" id="check" />
                      </td>
                      <td className="p-3">
                        <button
                          type="button"
                          onClick={() => handleNavigate(kpi.id)}
                        >
                          <span className="text-sm font-medium text-slate-500 hover:text-slate-800/80 text-nowrap">
                            {kpi.id}
                          </span>
                        </button>
                      </td>
                      <td className="p-3">
                        <span className="text-sm font-medium text-slate-500 hover:text-slate-800/80 hover:border-b border-slate-400 text-nowrap tracking-xs">
                          {kpi.goal}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className="text-sm font-medium text-slate-500 hover:text-slate-800/80 text-nowrap">
                          team: {kpi.team}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className="text-xs font-semibold text-slate-500 hover:text-slate-800/80 text-nowrap">
                          assigned: {kpi.assigned}
                        </span>
                      </td>
                      <td className="p-3">
                        <span
                          className={`text-slate-400 dark:text-white font-medium text-xs px-3 py-1 rounded-full  ${statusColor(kpi.status)} !importand `}
                        >
                          {kpi.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className="text-slate-500 hover:text-slate-800/80  dark:text-white font-semibold  text-xs px-3 py-1 rounded-full text-nowrap">
                          deadline :{kpi.deadline}
                        </span>
                      </td>
                      <td className="p-3">
                        <button
                          type="button"
                          onClick={() => {
                            handleNavigate(kpi.id);
                          }}
                          className={`text-slate-400 dark:text-white font-medium text-xs px-3 py-1 rounded-full `}
                        >
                          <MoreHorizontal className="w-4.5 h-4.5 hover:text-muted cursor-pointer" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </thead>
          </table>
        </div>
      </div>
    </section>
  );
}
