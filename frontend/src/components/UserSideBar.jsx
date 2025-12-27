import SingleProfile from "./profile/SingleProfile.jsx";
import { icons } from "../utils/icons.jsx";
import { menuItems } from "../constants/data/menuData.js";
import profileImg1 from "../assets/images/profile1.jpg";
import { useState } from "react";

export default function UserSideBar({
  collapsed,
  ontoggle,
  currentPage,
  onPageChange,
}) {
  const [expendedItems, setExpendedItems] = useState(new Set(["analytics"]));
  const toggleExpended = (iteamId) => {
    const newExpendad = new Set(expendedItems);

    if (newExpendad.has(iteamId)) {
      newExpendad.delete(iteamId);
    } else {
      newExpendad.add(iteamId);
    }
    setExpendedItems(newExpendad);
  };
  return (
    <aside
      className={`${collapsed ? "w-20" : "w-72"} transition duration-300 ease-in-out bg-dark/80 h-screen dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col  relative z-10"
      aria-label="Sidebar"`}
    >
      {/* LOGO */}
      <div className="py-2 px-0 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            {icons.userStar}
          </div>

          {/* CONDITIONAL RENDERING */}
          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                Grow
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Admin dashboard
              </p>
            </div>
          )}
        </div>
        <div className="hidden md:block font-semibold border-t bg-surface border-t-slate-200/50 text-balance h-10 items-center px-2">
          <p className="hidden md:block py-2 text-slate-800 dark:text-light bg-surface w-full">
            Welcome back, Alex!
          </p>
        </div>
      </div>

      {/* NAVIGATION -  TOP */}
      <nav className="flex-1 px-1 pt-4 space-y-6 overflow-y-auto ">
        {menuItems.map((item) => {
          return (
            <div key={item.id}>
              <button
                className={`w-full flex items-center justify-between px-3 py-2 rounded transition-all duration-200 hover:bg-inverted ${currentPage === item.id || item.active ? "bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-md shadow-blue-500/25" : "text-body hover:bg-surface"}`}
                onClick={() => {
                  if (item.subMenu) {
                    toggleExpended(item.id);
                  } else {
                    onPageChange(item.id);
                  }
                }}
              >
                <div className="flex items-center space-x-3 ">
                  {item.icon}

                  {!collapsed && (
                    <>
                      <span className="text-sm text-slate-700 dark:text-slate-200 font-medium ml-2">
                        {item.label}
                      </span>

                      {item.badge && (
                        <span className="px-2 text-xs font-semibold text-inverted bg-secondary rounded-full">
                          {item.badge}
                        </span>
                      )}
                      {item.count && (
                        <span className="px-2 text-md font-semibold text-success flex items-center gap-1">
                          {item.count}
                          <span className=" text-sm font-semibold text-success">
                            {icons.add}
                          </span>
                        </span>
                      )}
                    </>
                  )}
                </div>

                {/* SUB MENU ARROW-DOWN*/}

                {!collapsed && item.subMenu && (
                  <span className={`transition-transform w-5 h-5`}>
                    {icons.arrowDown}
                  </span>
                )}
              </button>
              {/* SUB MENU */}
              {!collapsed && item.subMenu && expendedItems.has(item.id) && (
                <div className="ml-8 mt-2 space-y-1">
                  {item.subMenu?.map((subItem) => {
                    return (
                      <button
                        key={subItem.id}
                        className="w-full text-left p-2 text-sm text-body hover:text-secondary hover:bg-secondary rounded-lg transition-all "
                      >
                        {subItem.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* USER PROFILE */}
      {!collapsed && (
        <div className="bg-surface border-t p-1 border-slate-200/50 dark:border-slate-700/50 overflow-visible w-full inline-flex items-center">
          <SingleProfile
            src={profileImg1}
            name={"@Alexander"}
            text={"Alex@email.com"}
          />
        </div>
      )}
    </aside>
  );
}
