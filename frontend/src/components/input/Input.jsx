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
    // Checkbox renderas annorlunda
    if (type === "checkbox") {
      return (
        <div className="form-check">
          <input
            id={id}
            name={name}
            type="checkbox"
            className={`form-check-input ${error ? "is-invalid" : ""}`}
            onChange={onChange}
            required={required}
            ref={ref}
            checked={value}
          />
          {label && (
            <label className="form-check-label" htmlFor={id}>
              {label}
            </label>
          )}
          {/* <ValidationMessage message={errors.email} /> */}
          {/* {error && <div className="invalid-feedback d-block">{error}</div>} */}
        </div>
      );
    }

    return (
      <div>
        {label && (
          <label htmlFor={id} className="form-label">
            {label}
          </label>
        )}

        <input
          id={id}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          ref={ref}
          className={`form-control ${error ? "is-invalid" : ""}`}
        />
      </div>
    );
  },
);

export default Input;
