import { forwardRef } from "react";
import "../../components/input/Input.css";
const Input = forwardRef(
  (
    {
      id,
      label,
      error,
      name,
      value,
      placeholder,
      type = "text",
      required,
      onChange,
    },
    ref,
  ) => {
    if (type === "checkbox") {
      return (
        <input
          id={id}
          name={name}
          type="checkbox"
          className={`w-4 h-4 borderbg-neutral-secondary-medium border border-default-medium rounded-lg focus:ring-accent-2 focus:border-accent-2 cursor-pointer shadow-sm ${error ? "is-invalid" : ""} `}
          onChange={onChange}
          required={required}
          ref={ref}
          checked={value}
        />
      );
    }

    return (
      <>
        <label
          htmlFor={id}
          className="w-full block mb-2.5 after:text-red-500 after:content-['*'] text-sm font-medium text-heading"
        >
          <span className="text-sm text-accent-3/80 mb-0">{label}</span>
        </label>
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          ref={ref}
          label={label}
          className={`bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-lg focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs m-0 placeholder:text-accent-3/50 placeholder:text-sm ${error ? "is-invalid" : ""}`}
        />
      </>
    );
  },
);

export default Input;
