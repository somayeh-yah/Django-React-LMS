import { useKpiStore } from "../../store/kpiStore";
import KpiList from "./KpiList";
export default function ArchivedKpis() {
  const archivedKpis = useKpiStore((state) => state.kpis.archived);
  return (
    <ul>
      {archivedKpis.map((kpi) => {
        <KpiList key={kpi.id} kpi={kpi} onSelect={() => onSelect?.(kpi.id)} />;
      })}
    </ul>
  );
}
