import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { kpiData } from "../../constants/data/kpiData";
import InfoCard from "../../components/Dashboard/InfoCard";
import { Calendar } from "lucide-react";
import SingleProfile from "../../components/profile/SingleProfile";
import StatusBadge from "../../components/Dashboard/statusBadge";
import ProgressBar from "../../components/Dashboard/ProgressBar";
import profileImg1 from "../../assets/images/profile1.jpg";
import TextFieldSection from "../../components/Dashboard/TextFieldSection";

function formatId(kpiId, subId) {
  return `kpi-${kpiId}-sub-${subId}`;
}

export default function KpiDetailView() {
  const navigate = useNavigate();
  const { kpiId, subId } = useParams();

  const kpi = useMemo(
    () => kpiData.find((k) => String(k.id) === String(kpiId)),
    [kpiId],
  );

  const subGoals = kpi?.subGoals ?? [];
  // Auto-select första subgoal om man går till /kpi/:kpiId utan subId
  useEffect(() => {
    if (!kpi) return;
    const first = subGoals[0];
    if (!subId && first?.id) {
      navigate(`/kpi/${kpi.id}/sub/${first.id}`, { replace: true });
    }
  }, [kpi, subGoals, subId]);

  // Aktiv subgoal
  const activeSub = subId
    ? (subGoals.find((s) => String(s.id) === String(subId)) ?? null)
    : (subGoals[0] ?? null);

  if (!kpi) {
    return (
      <section className="p-6 flex flex-col items-center justify-center py-6 ">
        <h1 className="text-xl font-bold py-5 text-body">KPI not found</h1>
      </section>
    );
  }

  const [comment, setComment] = "";
  return (
    <div className="min-h-screen w-full">
      {/* KPI DETAIL HEADER */}
      <header
        className="sticky top-0 z-20 border-b border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-950/80 backdrop-blur px-4 py-4"
        aria-label="kpi-title"
      >
        <section className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0">
            <a href="/dashboard/" className="text-body mb-2 py-1">
              Go back
            </a>
            <p className="text-xs text-slate-500">KPI</p>
            <h1
              id="kpi-title"
              className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100"
            >
              {kpi.goal}
            </h1>

            <div className="pt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
              <span className="ms-1">
                Status: <StatusBadge value={kpi.status} />
              </span>
              <span className="ms-1">
                Priority: <StatusBadge value={kpi.priority} />
              </span>
              <span className="ms-1">
                Category:
                <StatusBadge value={kpi.category} />
              </span>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
              <span>
                Assigned:
                <strong className="font-semibold ms-1">{kpi.assigned}</strong>
              </span>

              <span>
                Deadline:
                <time dateTime={kpi.deadline} className="font-semibold ms-1">
                  {kpi.deadline}
                </time>
              </span>

              <span>
                Updated:
                <time dateTime={kpi.updatedAt} className="font-semibold ms-1">
                  {kpi.updatedAt}
                </time>
              </span>
            </div>
          </div>

          {/* OVERALL PROGRESS */}
          <div className="w-full lg:w-[320px]">
            <label className="text-xs text-slate-500">Overall progress</label>
            <div className="mt-2 flex items-center gap-3 ">
              <ProgressBar
                status={kpi.status || 0}
                progress={kpi.progress}
                aria-label="Overall KPI progress"
              />
            </div>
            {/* BUTTON GROUP  */}
            <div className="mt-3 flex items-center justify-end gap-2">
              <button
                type="button"
                className="rounded-lg border border-slate-200 dark:border-slate-800 px-3 py-2 text-sm  focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Edit KPI
              </button>
              <button type="button" className="button">
                Add subgoal
              </button>
            </div>
          </div>
        </section>
      </header>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr]">
        {/* LEFT SUBGOAL SECTION */}
        <section
          className="border-r border-slate-200/60 dark:border-slate-800/60"
          aria-label="Subgoals"
        >
          <div className="p-4 border-b border-slate-200/60 dark:border-slate-800/60">
            <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Subgoals
            </h2>
            <p className="text-xs text-slate-500">{subGoals.length} items</p>
          </div>

          {subGoals.length === 0 ? (
            <div className="p-4 text-sm text-slate-500">
              No subgoals yet. Add one to get started.
            </div>
          ) : (
            <ul
              role="listbox"
              aria-label="Subgoal list"
              aria-activedescendant={
                activeSub?.id ? formatId(kpi.id, activeSub.id) : undefined
              }
              tabIndex={0}
              // onKeyDown={onListKeyDown}
              className="p-2 space-y-1 outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              {subGoals.map((s) => {
                const selected = String(s.id) === String(subId);

                return (
                  <li key={s.id}>
                    <button
                      id={formatId(kpi.id, s.id)}
                      role="option"
                      aria-selected={selected}
                      aria-current={selected ? "true" : undefined}
                      type="button"
                      onFocus={() => setFocusIndex(idx)}
                      onClick={() => navigate(`/kpi/${kpi.id}/sub/${s.id}`)}
                      className={[
                        "w-full text-left rounded-xl p-3 transition",
                        " focus-visible:outline-2 focus-visible:outline-offset-2",
                        selected
                          ? "bg-slate-100 dark:bg-slate-900"
                          : "hover:bg-slate-50 dark:hover:bg-slate-900/60",
                      ].join(" ")}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 line-clamp-1">
                          {s.title}
                        </p>
                        <time
                          dateTime={s.deadline}
                          className="text-xs text-slate-500 tabular-nums"
                        >
                          {s.deadline}
                        </time>
                      </div>

                      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <StatusBadge value={s.status} />
                        <span className="rounded-full bg-slate-200/60 dark:bg-slate-800 px-2 py-1">
                          {s.progress}%
                          <span className="sr-only"> progress</span>
                        </span>
                        <span className="ml-auto">
                          Assigned:{" "}
                          <span className="font-semibold">{s.assigned}</span>
                        </span>
                      </div>

                      <div className="mt-2">
                        <ProgressBar
                          className="w-full h-2"
                          status={s.status || 0}
                          progress={Number(s.progress)}
                          aria-label={`${s.title} progress`}
                        />
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        {/* RIGHT DETAIL SECTION */}
        <section id="subgoal-detail" className="p-6">
          {!activeSub ? (
            <div className="text-slate-500">Select a subgoal</div>
          ) : (
            <section aria-label="subgoal content">
              {/* SUBGOAL TOP */}
              <article className="mb-6">
                <p className="text-xs text-slate-500">Subgoal detail</p>
                <h2
                  id="subgoal-title"
                  className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100 "
                >
                  {activeSub.title}
                </h2>

                <div className="mt-3 flex flex-wrap items-center gap-1 text-xs">
                  <StatusBadge label="Status" value={activeSub.status} />
                  <span className="text-muted font-semi font-semibold text-xs">
                    Completed: {activeSub.progress}%
                  </span>
                </div>
              </article>

              {/* DETAIL CARDS SECTION  */}
              <section
                aria-label="Sub goals metadata"
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {/* INFO CARD 1 */}
                <InfoCard>
                  <div className="space-y-1">
                    <p className="text-xs uppercase text-slate-500 font-semibold">
                      Assigned
                    </p>

                    <div className="flex items-center gap-2">
                      <SingleProfile
                        src={profileImg1}
                        name={activeSub.assigned}
                      />
                      <span className="text-sm font-medium">
                        {activeSub.assigned}
                      </span>
                    </div>
                  </div>
                </InfoCard>
                {/* INFO CARD 2 */}
                <InfoCard>
                  <div className="space-y-1">
                    <p className="text-xs uppercase text-slate-500 font-semibold">
                      Deadline
                    </p>

                    <div className="flex items-center gap-2 text-sm">
                      <Calendar size={16} className="text-slate-400" />
                      <time dateTime={activeSub.deadline}>
                        {activeSub.deadline}
                      </time>
                    </div>
                  </div>
                </InfoCard>
                {/* INFO CARD 3 */}
                <InfoCard>
                  <div className="space-y-1">
                    <p className="text-xs uppercase text-slate-500 font-semibold">
                      Status
                    </p>

                    <StatusBadge value={activeSub.status} />
                  </div>
                </InfoCard>
                {/* INFO CARD 4 */}
                <InfoCard>
                  <ProgressBar
                    progress={activeSub.progress}
                    status={activeSub.status}
                  />
                </InfoCard>
              </section>
              {/* TEXT FILED SECTION */}
              <form action="#">
                <div aria-label="subgoal-comments" className="mt-6">
                  <TextFieldSection
                    id="subgoal-comments"
                    label="Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write your thoughts here..."
                  />
                </div>
              </form>
              {/* BUTTONS SECTION */}
              <div className="mt-3 flex items-center justify-end gap-2">
                <button
                  type="button"
                  className="rounded-lg border border-slate-200 dark:border-slate-800 px-4 py-2 text-sm  focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Delete subgoal
                </button>
                <button type="button" className="button">
                  Save changes
                </button>
              </div>
            </section>
          )}
        </section>
      </div>
    </div>
  );
}
