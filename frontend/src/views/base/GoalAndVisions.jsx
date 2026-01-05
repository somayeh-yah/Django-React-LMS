import { useForm, FormProvider } from "react-hook-form";
import { useState, useMemo } from "react";
import { useKpiStore } from "../../store/kpiStore";
import { useNavigate } from "react-router-dom";
import CreateKpiForm from "../../components/Dashboard/CreateKpiForm";
import SmlBtn from "../../components/Dashboard/SmlBtn";
import { icons } from "../../utils/icons";
import bgIllustration from "../../assets/images/illustration.svg";

export default function GoalAndVisions() {
  const addNewKpi = useKpiStore((s) => s.addKpi);
  const kpis = useKpiStore((s) => s.kpis);
  const navigate = useNavigate();

  const pageSize = 3;
  const [page, setPage] = useState(0);

  const pagesCount = Math.ceil(kpis.length / pageSize);

  const newKpis = useMemo(() => {
    const start = page * pageSize;
    return kpis.slice(start, start + pageSize);
  }, [kpis, page]);

  const canPrev = page > 0;
  const canNext = page < pagesCount - 1;

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

  // STAY ON THE PAGE + CLEAN FORM
  const onSubmit = (data) => {
    addNewKpi({
      ...data,
    });
    methods.reset();
  };

  // CONTINUE BTN: ADD KPI + GO TO NEXT PAGE
  const onContinue = () => {
    navigate("/dashboard");
  };

  const prev = () => {
    if (!canPrev) return;
    setPage((p) => p - 1);
  };

  const next = () => {
    if (!canNext) return;
    setPage((p) => p + 1);
  };

  return (
    <section className="min-h-screen min-w-screen bg-background pt-10">
      <div className="mx-auto">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* LEFT DIV */}
          <article className="py-4 px-6 sm:px-8 md:px-14 lg:px-10 md:py-15 gap-5">
            <h1 className="text-2xl font-sans font-semibold text-body ">
              Okey, let's go trough Goals and Visions for your team/ company
            </h1>
            <div className="mt-1 md:mt-6">
              <h2 className="text-sm text-muted font-sans font-semibold">
                What problem do you whant to solve
              </h2>
              {/* FORM CONTAINER */}
              <div className="space-y-7">
                <FormProvider {...methods}>
                  <CreateKpiForm onSubmit={onSubmit} />
                </FormProvider>
              </div>
            </div>

            {/* BOTTOM MINI NAV + CONTINUE BTN*/}

            <div className="pt-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-slate-600">
                  {/* KPI BTNs */}
                  {newKpis.map((kpi) => (
                    <SmlBtn
                      key={kpi.id}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 font-medium"
                      text={kpi.goal?.trim() || "Untitled"}
                      onClick={() => navigate(`/kpi/${kpi.id}`)}
                    />
                  ))}

                  <button
                    type="button"
                    className="ml-2 inline-flex gap-1 items-center justify-center text-xs font-medium text-center text-slate-500 hover:text-slate-700 cursor-pointer h-full"
                  >
                    Show all
                    <span>{icons.arrowRight}</span>
                  </button>
                </div>
                {/* PAGINATION BUTTONS */}
                <div className="flex items-center gap-2">
                  {/* PREV  BTN */}
                  <button
                    type="button"
                    className="rounded-md px-2 py-1  text-slate-500 hover:bg-slate-100"
                    aria-label="Previous"
                    disabled={!canPrev}
                    onClick={prev}
                  >
                    {icons.arrowLeft}
                  </button>
                  {/* NEXT BTN */}
                  <button
                    type="button"
                    className="rounded-md px-2 py-1 text-slate-500 hover:bg-slate-100"
                    aria-label="Next"
                    disabled={!canNext}
                    onClick={next}
                  >
                    {icons.arrowRight}
                  </button>
                </div>
              </div>
            </div>
          </article>
          {/* RIGHT ILLUSTRAION + GRADIENT */}
          <article className="relative overflow-hidden bg-background h-full">
            {/* GRADIENT */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-linear-to-t from-sky-200/60 to-transparent" />
            {/* CONTENT */}
            <div className=" relative grid h-full min-h-0 grid-rows-[auto_1fr_auto] sm:p-8 md:p-6">
              {/* ILLUSTRATION */}
              <div className="hidden md:flex justify-center pt-6 ">
                <div className="inline-block before:absolute before:inset-0 before:rounded-full before:bg-background/10 before:pointer-events-none">
                  <img
                    src={bgIllustration}
                    alt="Illustration"
                    className="block h-auto w-full max-w-[330px] object-contain"
                  />
                </div>
              </div>
              {/* SPACE */}
              <div />
              {/* CONTINUE BUTTON */}
              <div className="flex justify-center mb-15 md:mb-50">
                <button
                  onClick={onContinue}
                  type="button"
                  className="w-[200px] rounded-full bg-sky-600 px-6 py-3 text-sm font-sans tracking-lg font-semibold text-hover shadow-md hover:bg-sky-700 cursor-pointer"
                >
                  Continue
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
