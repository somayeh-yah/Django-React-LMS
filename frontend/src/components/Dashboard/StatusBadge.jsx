import { statusColor } from "../../utils/statusColor";

export default function StatusBadge({ value, className = "" }) {
  return (
    <span
      className={`inline-flex rounded-full px-2 py-1 text-xs ms-1 shadow-sm ${className} `}
    >
      {value}
    </span>
  );
}
