import InfoCard from "./InfoCard";
import SingleProfile from "../../components/profile/SingleProfile";
import profileImg1 from "../../assets/images/profile1.jpg";
import { icons } from "../../utils/icons";
import StatusBadge from "../../components/Dashboard/statusBadge";
import ProgressBar from "../../components/Dashboard/ProgressBar";
import { priorityColor, statusColor } from "../../utils/statusColor";

export default function KpiDetailContainer({ activeSub }) {
  return (
    <>
      {/* SUB MENU TITLE */}
      <div className="flex items-start justify-between gap-4 pt-16 pb-15">
        <div className="w-24 min-w-full">
          <h2
            id="subgoal-title"
            className="mt-1 text-2xl md:text-4xl font-semibold font-sans text-body "
          >
            {activeSub.title || "Untitled"}
          </h2>
        </div>
      </div>
      <section
        aria-label="Sub goals metadata"
        className="grid grid-cols-2 lg:grid-cols-2 gap-4 space-y-4"
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
          <div className="space-y-2">
            <p className="text-xs uppercase text-slate-500 font-semibold">
              Status
            </p>

            <StatusBadge
              value={activeSub.status}
              className={`text-white font-medium text-xs px-3 py-1 rounded-full ${statusColor(activeSub.status)}`}
            />
          </div>
        </InfoCard>
        {/* INFO CARD 4 */}
        <InfoCard>
          <ProgressBar
            className="text-muted font-semi font-semibold text-xs"
            progress={Number(20 ?? 0)}
            status={activeSub.status}
          />
        </InfoCard>
        {/* INFO CARD 5 */}
        <InfoCard>
          <div className="space-y-3">
            <p className="text-xs uppercase text-slate-500 font-semibold">
              Description
            </p>

            <div className="flex items-center gap-3 text-sm text-wrap">
              {icons.dec}
              <p className="text-sm leading-relaxed max-w-sm text-body">
                {activeSub.description}
              </p>
            </div>
          </div>
        </InfoCard>
        {/* INFO CARD 6 */}
        <InfoCard>
          <div className="space-y-3">
            <p className="text-xs uppercase text-slate-500 font-semibold">
              Priority
            </p>

            <div className="flex items-center gap-3 text-sm">
              {icons.priority}
              <StatusBadge
                value={activeSub.priority}
                className={`text-white font-medium text-xs px-3 py-1 rounded-full ${priorityColor(activeSub.priority)}`}
              />
            </div>
          </div>
        </InfoCard>
      </section>
    </>
  );
}
