import { useForm, FormProvider } from "react-hook-form";
import { useKpiStore } from "../../store/kpiStore";
import { useNavigate, useParams } from "react-router-dom";

import KpiList from "../../components/Dashboard/KpiList";
import Button from "../../components/Button";
import SmlBtn from "../../components/Dashboard/SmlBtn";

import StatusBadge from "../../components/Dashboard/statusBadge";
import SubGoalForm from "../../components/Dashboard/SubGoalForm";
import { icons } from "../../utils/icons";
import KpiDetailContainer from "../../components/Dashboard/KpiDetailContainer";

import EmptyState from "../../components/EmptyState";
import SubGoalHeader from "../../components/Dashboard/SubGoalHeader";

export default function KpiDetailView() {
  const navigate = useNavigate();
  const { kpiId, subId } = useParams();
  // GET KPI BY ID
  const kpi = useKpiStore((s) => s.getKpiById(kpiId));
  const addSubGoals = useKpiStore((s) => s.addSubGoals);

  const subGoals = kpi?.subGoals ?? [];

  const isNew = subId === "new";
  const activeSub =
    !isNew && subId ? (subGoals.find((i) => i.id === subId) ?? null) : null;

  const handleSubGoals = (subData) => {
    const newSub = addSubGoals(kpiId, subData);
    navigate(`/kpi/${kpiId}/sub/${newSub.id}`);
  };

  const methods = useForm({
    defaultValues: {
      goal: "",
      issue: "",
      importance: "",
      deadline: "",
      team: "",
      status: "",
      completed: false,
      assigned: [],
      createdAt: "Notset",
      progress: "",
    },
    mode: "onSubmit",
  });

  return (
    <div className="min-h-screen w-full">
      {/* KPI DETAIL HEADER */}
      <SubGoalHeader addSubGoals={addSubGoals} />
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
              return (
                <KpiList
                  key={s.id}
                  selected={activeSub?.id === s.id}
                  subgoal={s}
                  onSelect={() => {
                    navigate(`/kpi/${kpiId.id}/sub/${s.id}`);
                  }}
                />
              );
            })}
          </ul>
          ,
        </section>

        {/* RIGHT DETAIL SECTION */}
        <section id="subgoal-detail" className="p-6">
          {/* FORM CONTAINER */}
          {isNew ? (
            <div className="space-y-7">
              <FormProvider {...methods}>
                <SubGoalForm handleSubGoals={handleSubGoals} />
              </FormProvider>
            </div>
          ) : activeSub ? (
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
