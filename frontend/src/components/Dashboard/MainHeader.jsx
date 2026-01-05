// import { useKpiStore } from "../../store/kpiStore";
import { useNavigate } from "react-router-dom";
import { icons } from "../../utils/icons";
import Search from "../Search";
import SingleProfile from "../profile/SingleProfile";
import profileImg1 from "../../assets/images/profile1.jpg";
import Button from "../Button";

export default function MainHeader({ sideBarCollapsed, onToggleSidbar }) {
  // const addNewKpi = useKpiStore((s) => s.addKpi);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/kpi/new");
  };

  return (
    <header className=" bg-surface/90 dark:bg-surface backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-2 py-1 h-17">
      <div className="flex items-center justify-between">
        {/* LEFT SECTION */}
        <div className="flex items-center space-x-6 ">
          <button
            className="mb-2 p-2 me-1 rounded text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={onToggleSidbar}
          >
            {icons.secondaryMenu}
          </button>
        </div>

        {/* SECTION CENTER */}
        <div className="flex-1 max-w-md mx-8 ">
          <div className="relative">
            <Search
              placeholder="Search by task or project..."
              icon1={icons.search}
              icon2={icons.filter}
            />
          </div>
        </div>

        {/* RIGHT SECTION*/}
        <div className="flex items-center gap-3 ">
          {/* QUICK ACTION SECTION*/}
          {/* BUTTON GROUP  */}
          <div className="mt-3 flex items-center justify-end gap-2">
            <Button
              type="button"
              className="button"
              text="Add new"
              onClick={handleNavigate}
            />
          </div>

          {/* SUN ICON TOGGLE*/}
          <button className="p-2.5 rounded text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            {icons.sun}
          </button>

          {/* NOTIFICATION ICON */}
          <button className="relativ p-2.5 rounded text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            {icons.bell}
            <span className="absolute top-2 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-sans">
              3
            </span>
          </button>

          {/* SETTING ICON */}
          <button className="p-2.5 rounded text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            {icons.settings}
          </button>

          {/* USER PROFILE IMG*/}
          <SingleProfile src={profileImg1} name={""} />
        </div>
      </div>
    </header>
  );
}
