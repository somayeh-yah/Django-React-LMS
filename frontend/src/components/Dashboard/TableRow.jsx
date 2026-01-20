import { useKpiStore } from "../../store/kpiStore";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MoreHorizontal } from "lucide-react";
import { icons } from "../../utils/icons";
import profileImg2 from "../../assets/images/profile2.jpg";
import Input from "./Input";

import GroupProfile from "../profile/GroupProfile";
import SingleProfile from "../profile/SingleProfile";
import { priorityColor, statusColor } from "../../utils/statusColor";
import Button from "../Button";
import EmptyState from "../EmptyState";

export default function TableRow() {
  //  GET THE DATA PROPERTY FIELD FROM KPIS
  const archivedKpis = useKpiStore((state) =>
    state.kpis.filter((k) => k.archived),
  );
  const navigate = useNavigate();

  const kpis = useKpiStore((s) => s.kpis);
  const toggleCompleted = useKpiStore((s) => s.toggleCompleted);

  if (!kpis || kpis.length === 0) return <EmptyState />;

  const handleNavigate = (kpiId) => navigate(`/kpi/${kpiId}`);
  const [open, setOpen] = useState(false);
  const rowVariants = {
    initial: { opacity: 0, y: 10 },
    notCompleted: { opacity: 1, y: 0 },
    checked: { opacity: 0.65 },
    // exit: { opacity: 0, y: 10 },
  };
  const goToArchivedKpi = (id) => {
    setOpen(false);
    navigate(`/kpi/${id}/sub/new`);
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

            <div className="  flex xs:flex-col items-end mt-4 gap-4 max-w-[227px] w-full">
              <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className="flex items-center gap-2 ms-1 bg-transparent font-semibold text-muted hover:border-b"
                aria-haspopup="menu"
                aria-expanded={open}
              >
                See previous
                <span className="text-xs text-muted/50 font-bold font-sans">
                  KPI:s
                </span>
                <span className="text-xs">
                  {open ? icons.arrowDown : icons.arrowUp}
                </span>
              </button>
              {open && (
                <div
                  role="menu"
                  className="absolute right-0 top-0 mt-11 w-full border min-h-full border-slate-200/50 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-950 z-50"
                >
                  <div className="px-3 py-2 text-xs font-semibold text-slate-500">
                    Archived KPIs ({archivedKpis.length})
                  </div>

                  {archivedKpis?.length === 0 ? (
                    <div className="px-3 py-3 text-sm text-slate-500">
                      No archived KPIs yet.
                    </div>
                  ) : (
                    <ul className="max-h-72 overflow-auto py-1">
                      {archivedKpis.map((a) => (
                        <li key={a.id}>
                          <button
                            type="button"
                            role="menuitem"
                            onClick={() => goToArchivedKpi(a.id)}
                            className="w-full text-left px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-900"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <span className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">
                                {a.goal || "Untitled KPI"}
                              </span>
                            </div>

                            <div className="mt-1 flex items-center justify-between text-xs text-slate-500">
                              <span className="truncate">
                                team: {a.team || "untitled team"}
                              </span>
                              <span className="shrink-0">
                                {a.archivedAt ?? ""}
                              </span>
                            </div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* COACH CARD */}
        <div className="px-3 py-3">
          <div className="flex items-center justify-between gap-6 rounded-xl bg-background dark:bg-blue-950 px-3 py-3 shadow-sm hover:shadow-md ring-1 ring-black/5 w-[250px] mb-5">
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
                  Priority
                </th>
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
                    className="even:bg-background odd:bg-surface transition-colors"
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
                              ? "line-through decoration-2 text-slate-500"
                              : "text-body"
                          }`}
                        >
                          {kpi.goal}
                        </label>
                      </div>
                    </td>

                    <td className="p-3">
                      <span className="text-sm font-semibold text-body text-nowrap">
                        {kpi.issue || "—"}
                      </span>
                    </td>

                    <td className="p-3">
                      <span className="text-sm font-semibold text-body text-nowrap">
                        {kpi.goal || "—"}
                      </span>
                    </td>

                    <td className="p-3">
                      <span className="text-sm font-semibold text-body text-nowrap">
                        {kpi.team || "—"}
                      </span>
                    </td>

                    <td className="p-3">
                      <span className="text-sm font-semibold text-body text-nowrap">
                        {kpi.assigned ?? []}
                      </span>
                    </td>

                    <td className="p-3 text-nowrap">
                      <span
                        className={`text-body font-medium text-xs px-3 py-1 rounded-full ${statusColor(kpi.status)}`}
                      >
                        {kpi.status}
                      </span>
                    </td>
                    <td className="p-3 text-nowrap">
                      <span
                        className={`text-white font-medium text-xs px-3 py-1 rounded-full ${priorityColor(kpi.priority)}`}
                      >
                        {kpi.priority}
                      </span>
                    </td>

                    <td className="p-3">
                      <span className="text-sm font-semibold text-body text-nowrap">
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
