import { useKpiStore } from "../../store/kpiStore";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MoreHorizontal } from "lucide-react";

import profileImg2 from "../../assets/images/profile2.jpg";
import Input from "./Input";

import GroupProfile from "../profile/GroupProfile";
import SingleProfile from "../profile/SingleProfile";
import { statusColor } from "../../utils/statusColor";
import Button from "../Button";
import EmptyState from "../EmptyState";

export default function TableRow() {
  const navigate = useNavigate();

  const kpis = useKpiStore((s) => s.kpis);
  const toggleCompleted = useKpiStore((s) => s.toggleCompleted);

  if (!kpis || kpis.length === 0) return <EmptyState />;

  const handleNavigate = (kpiId) => navigate(`/kpi/${kpiId}`);

  const rowVariants = {
    initial: { opacity: 0, y: 10 },
    notCompleted: { opacity: 1, y: 0 },
    checked: { opacity: 0.65 },
    // exit: { opacity: 0, y: 10 },
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      <div className="bg-surface backdrop-blur-xl rounded-b-2xl border-b border-br overflow-visible md:col-span-3">
        {/* HEADER */}
        <div className="px-2 py-2 border-b border-br">
          <div className="flex items-center justify-between">
            <div className="flex xs:flex-col items-start gap-1 space-x-6">
              <h4 className="text-lg text-muted font-bold whitespace-nowrap font-sans py-2">
                Team Members
              </h4>
              <GroupProfile />
            </div>

            <div className="flex xs:flex-col items-end mt-4 gap-4">
              <button className="flex-1 ms-1 text-start bg-transparent font-semibold text-muted dark:bg-slate-900 hover:border-b">
                See previous
                <span className="ps-1 text-xs text-muted/50 font-bold font-sans">
                  KPI.s
                </span>
              </button>
              <p className="text-sm text-body text-start mt-3">Latest KPI</p>
            </div>
          </div>
        </div>

        {/* COACH CARD */}
        <div className="px-3 py-3">
          <div className="flex items-center justify-between gap-6 rounded-xl bg-white px-3 py-3 shadow-lg ring-1 ring-black/5 w-[250px] mb-5">
            <SingleProfile
              src={profileImg2}
              alt="profile image"
              name="Alex manii"
            />
            <div className="space-y-2 text-left">
              <p className="font-semibold text-sm text-muted">
                Teamleader/Coach
              </p>
              <Button className="button" text="Message" />
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full max-w-full">
            <thead>
              <tr className="text-left ">
                <th className="p-3 text-sm font-semibold  text-muted">
                  Completed
                </th>
                <th className="p-3 text-sm font-semibold text-muted">Issue</th>
                <th className="p-3 text-sm font-semibold text-muted">Vision</th>
                <th className="p-3 text-sm font-semibold text-muted">Team</th>
                <th className="p-3 text-sm font-semibold text-muted">
                  Assigned
                </th>
                <th className="p-3 text-sm font-semibold text-muted">Status</th>
                <th className="p-3 text-sm font-semibold text-muted">
                  Deadline
                </th>
              </tr>
            </thead>

            <AnimatePresence initial={false}>
              <motion.tbody layout>
                {kpis.map((kpi) => (
                  <motion.tr
                    key={kpi.id}
                    variants={rowVariants}
                    initial="initial"
                    animate={kpi.completed ? "checked" : "notCompleted"}
                    // exit="exit"
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    layout
                    className="even:bg-white odd:bg-gray-50 dark:even:bg-gray-900/50 dark:odd:bg-gray-950 transition-colors"
                  >
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <Input
                          type="checkbox"
                          title="checkbox"
                          id={`check-${kpi.id}`}
                          checked={!!kpi.completed}
                          onChange={() => toggleCompleted(kpi.id)}
                        />
                        <label
                          htmlFor={`check-${kpi.id}`}
                          className={`text-sm font-medium text-nowrap ${
                            kpi.completed
                              ? "line-through text-slate-500"
                              : "text-slate-800"
                          }`}
                        >
                          {kpi.goal}
                        </label>
                      </div>
                    </td>

                    <td className="p-3">
                      <span className="text-sm font-semibold text-slate-500 text-nowrap">
                        {kpi.issue || "—"}
                      </span>
                    </td>

                    <td className="p-3">
                      <span className="text-sm font-semibold text-slate-500 text-nowrap">
                        {kpi.goal || "—"}
                      </span>
                    </td>

                    <td className="p-3">
                      <span className="text-sm font-semibold text-slate-500 text-nowrap">
                        {kpi.team || "—"}
                      </span>
                    </td>

                    <td className="p-3">
                      <span className="text-sm font-semibold text-slate-500 text-nowrap">
                        {kpi.assigned ?? []}
                      </span>
                    </td>

                    <td className="p-3 text-nowrap">
                      <span
                        className={`text-white font-medium text-xs px-3 py-1 rounded-full ${statusColor(kpi.status)}`}
                      >
                        {kpi.status}
                      </span>
                    </td>

                    <td className="p-3">
                      <span className="text-sm font-semibold text-slate-500 text-nowrap">
                        {kpi.deadline || "—"}
                      </span>
                    </td>

                    <td className="p-3">
                      <button
                        type="button"
                        onClick={() => handleNavigate(kpi.id)}
                        className="text-slate-400 dark:text-white px-2 py-1 rounded-full"
                      >
                        <MoreHorizontal className="w-4.5 h-4.5 hover:text-muted cursor-pointer" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </AnimatePresence>
          </table>
        </div>
      </div>
    </section>
  );
}
