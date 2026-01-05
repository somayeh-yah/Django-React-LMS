import Select from "react-select";

const selectClassNames = {
  container: () => "w-full",
  // DEFINE A FUNCTION FOR SELECT INPUT STYLES
  control: (state) =>
    [
      "bg-neutral-secondary-medium",

      "border border-slate-400",
      "text-heading text-xs",
      "rounded-3xl",
      "outline-none",
      "block w-full p-3.5 shadow-sm",
      "min-h-[45px]",
      "transition-colors",
      state.isFocused ? "border-slate-700 ring-0" : "",
      "hover:border-slate-700",
    ].join(" "),

  valueContainer: () => "px-1 gap-2",
  placeholder: () => "text-slate-400",
  singleValue: () => "text-heading",
  indicatorsContainer: () => "p-0 gap-2",
  dropdownIndicator: () => "p-0 text-slate-500 hover:text-slate-700",
  clearIndicator: () => "p-0 text-slate-500 hover:text-slate-700",

  menu: () =>
    "mt-2 rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden",
  menuList: () => "py-1",

  // DEFINE A FUNCTION FOR OPTION STYLES
  option: (state) =>
    [
      "px-3 py-2 text-sm cursor-pointer",
      state.isSelected ? "bg-slate-200 text-slate-900" : "text-slate-700",
      state.isFocused ? "bg-slate-100" : "",
    ].join(" "),

  // MULTI SELECT (IS ISMULTI)
  multiValue: () => "rounded-full bg-slate-100 px-2 py-1",
  multiValueLabel: () => "text-xs text-slate-700",
  multiValueRemove: () => "ml-1 rounded-full hover:bg-slate-200 px-1",
};

export default function MySelectInput(props) {
  return (
    <>
      {props && (
        <label
          htmlFor={props.id}
          className="inline-flex items-center gap-1 mb-2 mt-5 ms-2 text-xs font-semibold text-muted"
        >
          <span className=" after:text-red-500 after:content-['*'] text-sm font-medium text-heading"></span>
          {props.label}
        </label>
      )}
      <Select unstyled classNames={selectClassNames} {...props} />
    </>
  );
}
