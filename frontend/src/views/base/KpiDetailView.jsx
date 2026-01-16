import { useKpiStore } from "../../store/kpiStore";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import KpiList from "../../components/Dashboard/KpiList";

import SmlBtn from "../../components/Dashboard/SmlBtn";

import SubGoalForm from "../../components/Dashboard/SubGoalForm";
import { icons } from "../../utils/icons";
import KpiDetailContainer from "../../components/Dashboard/KpiDetailContainer";

import EmptyState from "../../components/EmptyState";
import SubGoalHeader from "../../components/Dashboard/SubGoalHeader";

const defaultSubGoalsValue = {
  title: "",
  description: "",
  issue: "",
  importance: "",
  deadline: "",
  team: "",
  status: "",
  completed: false,
  assigned: [],
  createdAt: "Notset",
  progress: 0,
  priority: "",
};

export default function KpiDetailView() {
  const {
    addSubGoals,
    editSubGoal,
    removeSubKpi,
    toggleSubCompleted,
    archiveKpi,
    unArchiveKpi,
  } = useKpiStore((state) => ({
    addSubGoals: state.addSubGoals,
    editSubGoal: state.editSubGoal,
    removeSubKpi: state.removeSubKpi,
    toggleSubCompleted: state.toggleSubCompleted,
    archiveKpi: state.archiveKpi,
    unArchiveKpi: state.unArchiveKpi,
  }));

  const navigate = useNavigate();
  const { kpiId, subId } = useParams();

  const methods = useForm({
    defaultValues: defaultSubGoalsValue,
    mode: "onSubmit",
  });

  // GET ADD SUBGOALS ACTION FROM KPI BY ID ZUSTAND STORE
  const kpi = useKpiStore((s) => s.getKpiById(kpiId));
  const subGoals = kpi?.subGoals ?? [];

  const [isEditing, setIsEditing] = useState(false);
  // const [isArchived, setIsarchived]

  const createNewSub = subId === "new";
  const activeSub =
    !createNewSub && subId
      ? (subGoals.find((i) => i.id === subId) ?? null)
      : null;

  //SELECT AN EXISTING SUNGOAL
  useEffect(() => {
    if (!activeSub) return;
    methods.reset({
      title: activeSub.title ?? "",
      description: activeSub.description ?? "",
      issue: activeSub.issue ?? "",
      importance: activeSub.importance ?? "",
      deadline: activeSub.deadline ?? "",
      team: activeSub.team ?? "",
      status: activeSub.status ?? "",
      completed: !!activeSub.completed,
      assigned: activeSub.assigned ?? [],
      progress: activeSub.progress ?? 0,
      priority: activeSub.priority ?? "",
    });
    setIsEditing(false);
  }, [activeSub?.id]);

  // EMPTHY ALL THE INPUTS
  useEffect(() => {
    if (subId !== "new") return;
    methods.reset(defaultSubGoalsValue);
    setIsEditing(false);
  }, [subId, methods]);

  const handleUpdate = methods.handleSubmit((data) => {
    if (!kpiId || !activeSub) return;
    editSubGoal(kpiId, activeSub.id, data);
    setIsEditing(false);
  });

  // CREATE A NEW SUBGOAL
  const onSubmit = (subData) => {
    const newSub = addSubGoals(kpiId, subData);
    // RESET ALL FORM FIELDS
    methods.reset(defaultSubGoalsValue);
    navigate(`/kpi/${kpiId}/sub/${newSub.id}`);
  };

  const removeSub = () => {
    removeSubKpi(kpiId, activeSub.id);
    const remaining = subGoals.filter((x) => x.id !== activeSub.id);
    const latestSubId = remaining[0]?.id ?? "new";

    navigate(`/kpi/${kpiId}/sub/${latestSubId}`);
  };

  return (
    <div className="min-h-screen w-full bg-background dark:to-purple-50">
      {/* KPI DETAIL HEADER */}
      <SubGoalHeader />
      {/* SUB KPI MAIN CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] ">
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
            className="p-2 space-y-2 outline-none focus-visible:ring-2 focus-visible:ring-slate-400 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2"
          >
            {/* KPI CARD LIST */}
            {subGoals.map((s) => {
              return (
                <KpiList
                  key={s.id}
                  selected={activeSub?.id === s.id}
                  subGoal={s}
                  onSelect={() => {
                    navigate(`/kpi/${kpiId}/sub/${s.id}`);
                  }}
                />
              );
            })}
          </ul>
        </section>

        {/* RIGHT DETAIL SECTION */}
        <section id="subgoal-detail" className="p-3 md:p-6">
          {/* SHOW FORM CONTAINER */}
          {createNewSub ? (
            <div className="space-y-7">
              <FormProvider {...methods}>
                <SubGoalForm onSubmit={onSubmit} />
              </FormProvider>
            </div>
          ) : activeSub ? (
            isEditing ? (
              <FormProvider {...methods}>
                <SubGoalForm onSubmit={handleUpdate} />
              </FormProvider>
            ) : (
              <section aria-label="subgoal content" className="pb-4">
                {/* SUBGOAL TOP */}
                <article>
                  {/* ACTIONS SUB-MENU BUTTONS -ADD- -ARCIVE-  */}
                  <div className="flex items-start flex-col lg:justify-between lg:flex-row sm:pt-3 border-t border-slate-200 md:border-t-0 md:space-y-5">
                    <p className="text-xs text-muted font-sans font-semibold tracking-lg leading-relaxed text-nowrap mb-4">
                      Subgoal detail
                    </p>
                  </div>
                  <div className="flex justify-end space-x-5 md:gap-1 hover:text-blue-400 text-xs font-sans font-semibold">
                    <SmlBtn icon={icons.close} text="Close" />
                    <SmlBtn
                      onClick={() => removeSub()}
                      icon={icons.trash}
                      text="Delete"
                    />
                    <SmlBtn
                      onClick={() => setIsEditing((v) => !v)}
                      icon={icons.edit}
                      text={isEditing ? "Cansel" : "Edit"}
                    />
                    {/* {kpi?.archived ? (
                      <SmlBtn
                        onClick={() => unArchiveKpi(kpi.id)}
                        icon={icons.archive}
                        text="Unarchive"
                      />
                    ) : (
                      <SmlBtn
                        onClick={() => archiveKpi(kpi.id)}
                        icon={icons.archive}
                        text="Archive"
                      />
                    )} */}
                  </div>

                  {/* SUBMENU CONTENT */}
                  <KpiDetailContainer activeSub={activeSub} />
                </article>
              </section>
            )
          ) : (
            <EmptyState />
          )}
        </section>
      </div>
    </div>
  );
}
