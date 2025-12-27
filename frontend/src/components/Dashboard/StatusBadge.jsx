import { statusColor } from "../../utils/statusColor";

export default function StatusBadge({ value }) {
  return (
    <span
      className={`inline-flex rounded-full px-2 py-1 text-xs ${statusColor(value)} shadow-sm`}
    >
      {value}
    </span>
  );
}
