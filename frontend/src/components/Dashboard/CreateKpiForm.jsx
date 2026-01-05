import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";
import { icons } from "../../utils/icons";
import Input from "./Input";
import TextFieldSection from "./TextFieldSection";
import { teamOptions, statusOptions } from "../../constants/data/kpiData";
import { statusDotColor } from "../../utils/statusColor";
import MySelectInput from "./MySelectInput";

export default function CreateKpiForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <div className="flex flex-col pt-18 ">
        <h1 className="text-2xl font-bold text-body">
          What is your main goal for this quarter?
        </h1>
        <p className="mt-1 text-sm text-muted font-sans font-semibold">
          Explain your goal briefly (or pass existing company goals in there)
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="py-3 space-y-2 mx-auto"
      >
        <Input
          id="issue"
          type="text"
          name="issue"
          placeholder="We're <Company name> and helping users solve <problem>"
          label="What problem are you trying to solving for your customers/ company?"
          error={errors.issue?.message}
          {...register("issue", { required: "Issue is required" })}
        />

        <Input
          id="goal"
          name="goal"
          type="text"
          placeholder="Ex: Build a high-trust, high-performing team."
          label="What is your main goal?"
          error={errors.goal?.message}
          {...register("goal", { required: "Goal is required" })}
        />

        <TextFieldSection
          id="importance"
          placeholder="Ex: It increases alignment, retention and delivery quality."
          label="Why is this goal important?"
          error={errors.importance?.message}
          {...register("importance", {
            required: "Please write why this goal is importand",
          })}
        />

        <Controller
          name="team"
          control={control}
          rules={{ required: "Team is required" }}
          render={({ field }) => (
            <MySelectInput
              inputId="team"
              name="team"
              options={teamOptions}
              value={teamOptions.find((o) => o.value === field.value) ?? null}
              onChange={(opt) => field.onChange(opt?.value ?? "")}
              placeholder="Search or select team member"
              label="Team:"
            />
          )}
        />
        {errors.team && (
          <p className="text-xs text-red-500 ms-2">{errors.team.message}</p>
        )}
        <Controller
          name="assigned"
          control={control}
          rules={{
            validate: (v) => (v?.length ? true : "Assign at least one"),
          }}
          render={({ field }) => (
            <MySelectInput
              inputId="assigned"
              name="assigned"
              options={teamOptions}
              value={teamOptions.filter((o) =>
                (field.value ?? []).includes(o.value),
              )}
              onChange={(opts) =>
                field.onChange((opts ?? []).map((o) => o.value))
              }
              placeholder="Search or select team member"
              isMulti
              maxSelected={3}
              label="Assigned :"
            />
          )}
        />
        {errors.assigned && (
          <p className="text-xs text-red-500 ms-2">{errors.assigned.message}</p>
        )}

        <Controller
          name="status"
          control={control}
          rules={{ required: "Status is required" }}
          render={({ field }) => (
            <MySelectInput
              inputId="status"
              name="status"
              options={statusOptions}
              value={statusOptions.find((o) => o.value === field.value) ?? null}
              onChange={(opt) => field.onChange(opt?.value ?? "")}
              formatOptionLabel={(opt) => (
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${statusDotColor(opt.value)}`}
                  />
                  <span>{opt.label}</span>
                </div>
              )}
              placeholder="select status"
              label="Status :"
            />
          )}
        />
        {errors.status && (
          <p className="text-xs text-red-500 ms-2">{errors.status.message}</p>
        )}

        <Input
          id="deadline"
          type="date"
          name="deadline"
          label="Deadline?"
          icon={icons.calendar}
          error={errors.deadline?.message}
          {...register("deadline", { required: "Deadline is required" })}
        />
        <button
          type="submit"
          className=" mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-body hover:bg-slate-100 cursor-pointer"
        >
          Add new
          <span className="text-base font-sant font-semibold leading-none">
            {icons.add}
          </span>
        </button>
      </form>
    </>
  );
}
