import { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      id,
      label,
      error,
      placeholder,
      type = "text",
      className,
      icon,
      onChange,
      ...rest
    },
    ref,
  ) => {
    if (type === "checkbox") {
      return (
        <input
          id={id}
          name={name}
          type="checkbox"
          className={`w-4 h-4 borderbg-neutral-secondary-medium border border-default-medium rounded-lg focus:ring-accent-2 focus:border-accent-2 cursor-pointer shadow-sm `}
          onChange={onChange}
          required={required}
          ref={ref}
          {...rest}
          checked={value}
        />
      );
    }

    return (
      <>
        {label && (
          <label
            htmlFor={id}
            className="inline-flex items-center gap-1 mb-2 mt-5 ms-2 text-xs font-semibold text-muted"
          >
            <span className=" after:text-red-500 after:content-['*'] text-sm font-medium text-heading"></span>
            {label}
          </label>
        )}

        <input
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          ref={ref}
          {...rest}
          label={label}
          className="bg-neutral-secondary-medium border border-slate-400
          text-heading text-xs rounded-3xl outline-none focus:outline-none focus:ring-0 focus:ring-slate-700
          focus:border-slate-700 block w-full p-3.5 shadow-sm
          placeholder:text-slate-400"
          icon={icon}
        />
        {error && <p className="mt-1 text-xs text-red-500 ms-2">{error}</p>}
      </>
    );
  },
);

export default Input;
