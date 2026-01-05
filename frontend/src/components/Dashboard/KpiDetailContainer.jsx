import InfoCard from "./InfoCard";
import SingleProfile from "../../components/profile/SingleProfile";
import profileImg1 from "../../assets/images/profile1.jpg";
import { icons } from "../../utils/icons";
import StatusBadge from "../../components/Dashboard/statusBadge";
import ProgressBar from "../../components/Dashboard/ProgressBar";

export default function KpiDetailContainer({ activeSub }) {
  return (
    <section
      aria-label="Sub goals metadata"
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {/* INFO CARD 1 */}
      <InfoCard>
        <div className="space-y-1">
          <p className="text-xs uppercase text-slate-500 font-semibold">
            Assigned
          </p>

          <div className="flex items-center gap-2">
            <SingleProfile src={profileImg1} name={activeSub.assigned} />
            <span className="text-sm font-medium">{activeSub.assigned}</span>
          </div>
        </div>
      </InfoCard>
      {/* INFO CARD 2 */}
      <InfoCard>
        <div className="space-y-1">
          <p className="text-xs uppercase text-slate-500 font-semibold">
            Deadline
          </p>

          <div className="flex items-center gap-2 text-sm">
            {icons.calendar}
            <time dateTime={activeSub.deadline}>{activeSub.deadline}</time>
          </div>
        </div>
      </InfoCard>
      {/* INFO CARD 3 */}
      <InfoCard>
        <div className="space-y-1">
          <p className="text-xs uppercase text-slate-500 font-semibold">
            Status
          </p>

          <StatusBadge value={activeSub.status} />
        </div>
      </InfoCard>
      {/* INFO CARD 4 */}
      <InfoCard>
        <ProgressBar progress={activeSub.progress} status={activeSub.status} />
      </InfoCard>
    </section>
  );
}
