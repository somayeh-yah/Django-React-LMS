import { icons } from "../utils/icons";
import Search from "../components/Search";
import SingleProfile from "../components/profile/SingleProfile";
import profileImg1 from "../assets/images/profile1.jpg";

export default function Header({ sideBarCollapsed, onToggleSidbar }) {
  return (
    <header className=" bg-surface/90 dark:bg-surface backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-2 py-1 h-15">
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
          {/* ADD BUTTON  */}
          <button className="hidden lg:flex items-center space-x-2 py-2 px-4 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded hover:shadow-lg transition-all">
            {icons.add} <span className="text-sm font-medium">New</span>
          </button>

          {/* SUN ICON TOGGLE*/}
          <button className="p-2.5 rounded text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            {icons.sun}
          </button>

          {/* NOTIFICATION */}
          <button className="relativ p-2.5 rounded text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            {icons.bell}
            <span className="absolute top-2 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-sans">
              3
            </span>
          </button>

          {/* SETTING */}
          <button className="p-2.5 rounded text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            {icons.settings}
          </button>

          {/* USER PROFILE */}
          <SingleProfile src={profileImg1} name={""} />
        </div>
      </div>
    </header>
  );
}
