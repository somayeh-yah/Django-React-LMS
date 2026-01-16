import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";
import { icons } from "../../utils/icons";
import Input from "./Input";
import TextFieldSection from "./TextFieldSection";
import { teamOptions, statusOptions } from "../../constants/data/kpiData";
import { statusDotColor, priorityColor } from "../../utils/statusColor";
import { priorityOptions } from "../../constants/data/kpiData";
import MySelectInput from "./MySelectInput";

export default function SubGoalForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <div className="flex flex-col pt-3">
        <h1 className="text-2xl font-bold text-body">
          What is your Sub goal for this Main Goal?
        </h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="py-3 px-4 space-y-2  w-[500px]"
      >
        <Input
          id="title"
          name="title"
          type="text"
          placeholder="Ex: Build a high-trust, high-performing team."
          label="What is your sub goal?"
          error={errors.title?.message}
          {...register("title", { required: "Goal is required" })}
        />
        <TextFieldSection
          id="description"
          placeholder="Ex: It increases alignment, retention and delivery quality."
          label="Why is this goal important?"
          error={errors.description?.message}
          {...register("description", {
            required: "Please write why this goal is importand",
          })}
        />

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

        <Controller
          name="priority"
          control={control}
          rules={{ required: "Priority is required" }}
          render={({ field }) => (
            <MySelectInput
              inputId="priority"
              name="priority"
              options={priorityOptions}
              value={
                priorityOptions.find((o) => o.value === field.value) ?? null
              }
              onChange={(opt) => field.onChange(opt?.value ?? "")}
              formatOptionLabel={(opt) => (
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${priorityColor(opt.value)}`}
                  />
                  <span>{opt.label}</span>
                </div>
              )}
              placeholder="select status"
              label="Priority :"
            />
          )}
        />
        {errors.priority && (
          <p className="text-xs text-red-500 ms-2">{errors.priority.message}</p>
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
          Create
          <span className="text-base font-sant font-semibold leading-none">
            {icons.add}
          </span>
        </button>
      </form>
    </>
  );
}
