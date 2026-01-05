import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { kpiData } from "../../constants/data/kpiData";
import InfoCard from "../../components/Dashboard/InfoCard";
import KpiList from "../../components/Dashboard/KpiList";
import Button from "../../components/Button";
import SmlBtn from "../../components/Dashboard/SmlBtn";

import StatusBadge from "../../components/Dashboard/statusBadge";
import ProgressBar from "../../components/Dashboard/ProgressBar";

import TextFieldSection from "../../components/Dashboard/TextFieldSection";
import { icons } from "../../utils/icons";
import KpiDetailContainer from "../../components/Dashboard/KpiDetailContainer";
import EmptyState from "../../components/EmptyState";
import SubGoalHeader from "../../components/Dashboard/SubGoalHeader";

// function formatId(kpiId, subId) {
//   return `kpi-${kpiId}-sub-${subId}`;
// }

export default function KpiDetailView() {
  const navigate = useNavigate();
  const { kpiId, subId } = useParams();

  const [subGoals, setSubGoals] = useState(() => {
    const savedSubGoals = localStorage.getItem(`subGoals:${kpiId}`);
    return savedSubGoals ? JSON.parse(savedSubGoals) : [];
  });
  const [activeSub, setActiveSub] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem(`subGoals:${kpiId}`, JSON.stringify(subGoals));
  }, [kpiId, subGoals]);

  const handleSubGoals = () => {
    // CREATE A NEW SUBGOAL
    const newSubGoals = {
      id: Date.now().toString(),
      title: "Untitled  Subgoal",
      assigned: "",
      status: "no progress",
      deadline: "--",
      progress: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toDateString(),
    };
    addSubGoals([newSubGoals, ...subGoals]);
    navigate(`/kpi/${kpiId}/sub/${newSubGoals.id}`);
    setIsEditing(true);
  };

  const addSubGoals = (subGoals) => {
    // CREATE A NEW SUBGOAL
    setSubGoals((prevSub) => [subGoals, ...prevSub]);
  };
  const updateSubGoal = (updatedSub) => {
    setSubGoals((prevSub) =>
      updatedSub.map((s) => (s.id === updatedSub.id ? updatedSub : s)),
    );
  };
  const removeSubGole = (id) => {
    setSubGoals((removedSub) => removedSub.filter((s) => s.id !== id));
  };

  const kpi = useMemo(
    () => kpiData.find((k) => String(k.id) === String(kpiId)),
    [kpiId],
  );

  return (
    <div className="min-h-screen w-full">
      {/* KPI DETAIL HEADER */}
      <SubGoalHeader addSubGoal={handleSubGoals} />
      {/* SUB KPI MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr]">
        {/* LEFT SUBGOAL SECTION */}
        <section
          className="border-r border-slate-200/60 dark:border-slate-800/60 "
          aria-label="Subgoals"
        >
          <div className="p-4 border-b border-slate-200/60 dark:border-slate-800/60">
            <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100 tracking-lg leading-relaxed">
              Subgoals
            </h2>
            <p className="text-xs text-slate-500">{subGoals.length} visions</p>
          </div>
          <ul
            role="listbox"
            aria-label="Subgoal list"
            className="p-2 space-y-2 outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            {/* KPI CARD LIST */}
            {subGoals.map((s) => {
              const selected = activeSub?.id === s.id;

              return (
                <KpiList
                  key={s.id}
                  selected={selected}
                  subgoal={s}
                  onSelect={() => {
                    setActiveSub(s);
                    navigate(`/kpi/${kpi.id}/sub/${s.id}`);
                  }}
                />
              );
            })}
          </ul>
          ,
        </section>

        {/* RIGHT DETAIL SECTION */}
        <section id="subgoal-detail" className="p-6">
          {activeSub ? (
            <section aria-label="subgoal content">
              {/* SUBGOAL TOP */}
              <article className="mb-6">
                <p className="text-xs text-muted font-sans font-semibold tracking-lg leading-relaxed">
                  Subgoal detail
                </p>
                {/* SUB MENU TITLE */}
                <div className="mt-1 flex items-center justify-between gap-4">
                  <h2
                    id="subgoal-title"
                    className="mt-1 text-2xl font-bold font-sans text-body "
                  >
                    {activeSub.title}
                  </h2>
                  {/* ACTIONS SUB-MENU BUTTONS -ADD- -ARCIVE-  */}
                  <div className="flex items-center space-x-5 gap-1 hover:text-blue-400 text-sm font-sans font-semibold py-2 ">
                    {isEditing ? (
                      <SmlBtn icon={icons.close} text={Close} />
                    ) : (
                      <>
                        <SmlBtn icon={icons.edit} text="Edit" />
                        <SmlBtn icon={icons.archive} text="Archive" />
                      </>
                    )}
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-1 text-xs">
                  <StatusBadge label="Status" value={activeSub.status} />
                  <span className="text-muted font-semi font-semibold text-xs">
                    Completed: {activeSub.progress}%
                  </span>
                </div>
              </article>

              {/* DETAIL CARDS SECTION  */}
              {isEditing ? <KpiDetailContainer /> : <div></div>}
              <KpiDetailContainer activeSub={activeSub} />

              {/* TEXT FILED SECTION */}
              {/* <form action="#">
                <div aria-label="subgoal-comments" className="mt-6">
                  <TextFieldSection
                    id="subgoal-comments"
                    label="Comment"
                    value=""
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write your thoughts here..."
                  />
                </div>
              </form> */}
              {/* BUTTONS SECTION */}
              <div className="mt-3 pt-4 flex items-center justify-end gap-4">
                {/* <SmlBtn icon={icons.trash} text="Delete" /> */}
                <Button
                  icon={icons.save}
                  className="button"
                  text="Save changes"
                />
              </div>
            </section>
          ) : (
            <EmptyState />
          )}
        </section>
      </div>
    </div>
  );
}
