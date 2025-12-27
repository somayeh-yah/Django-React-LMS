export default function TextFieldSection({
  id,
  label,
  value,
  onChange,
  rows = 3,
  placeholder = "",
}) {
  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 ms-2 text-xs font-semibold text-muted"
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-neutral-secondary-medium border border-default-medium
          text-heading text-xs rounded-3xl outline-none focus:outline-none focus:ring-0 focus:ring-slate-300
          focus:border-slate-300 block w-full p-3.5 shadow-sm
          placeholder:text-slate-400"
      />
    </>
  );
}
