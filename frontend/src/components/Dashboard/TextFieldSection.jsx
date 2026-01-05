import { forwardRef } from "react";

const TextFieldSection = forwardRef(
  ({ id, label, error, rows = 3, className, ...rest }, ref) => {
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
        <textarea
          id={id}
          rows={rows}
          ref={ref}
          {...rest}
          className={`bg-neutral-secondary-medium border border-slate-400
          text-heading text-xs rounded-3xl outline-none focus:outline-none focus:ring-0 focus:ring-slate-700
          focus:border-slate-700 block w-full p-3.5 shadow-sm
          placeholder:text-slate-400 ${className}`}
        />

        {error && <p className="mt-1 ms-2 text-xs text-red-500">{error}</p>}
      </>
    );
  },
);

export default TextFieldSection;
