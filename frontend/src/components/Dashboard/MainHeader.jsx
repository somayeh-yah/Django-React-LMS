import { useTheme } from "../../context/ThemeProvider";
import { motion as m, scale } from "motion/react";
import { useNavigate } from "react-router-dom";
import { icons } from "../../utils/icons";
import Search from "../Search";
import SingleProfile from "../profile/SingleProfile";
import profileImg1 from "../../assets/images/profile1.jpg";
import Button from "../Button";

export default function MainHeader({ sideBarCollapsed, onToggleSidbar }) {
  const { userPreference, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/kpi/new");
  };

  const sunPath =
    "M47.6667 66.3333C57.976 66.3333 66.3333 57.976 66.3333 47.6667C66.3333 37.3574 57.976 29 47.6667 29C37.3574 29 29 37.3574 29 47.6667C29 57.976 37.3574 66.3333 47.6667 66.3333Z";

  const moonPath =
    "M47.6667 66.3333C57.976 66.3333 66.3333 57.976 66.3333 47.6667C48.3143 54.5704 40.9227 45.2905 47.6667 29C37.3574 29 29 37.3574 29 47.6667C29 57.976 37.3574 66.3333 47.6667 66.3333Z";
  // THIS STYLE GOES ON PARENT ELEMENT
  const raysV = {
    hidden: {
      strokeOpacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    visible: {
      strokeOpacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  // THIS IS APPLIED TO THE EACH ROWS IN THE SUN
  const rayV = {
    hidden: {
      pathLength: 0,
      opacity: 0,
      // start from the center of the circle
      scale: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        // Customize timing for each property
        pathLength: { duration: 0.3 },
        opasity: { duration: 0.2 },
        scale: { duration: 0.3 },
      },
    },
  };

  const shineVariant = {
    hidden: {
      opacity: 0,
      scale: 2,
      strokeDasharray: "20, 1000",
      strokeDashoffset: 0,
      filter: "blur(0px)",
    },
    visible: {
      opacity: [0, 1, 0],
      strokeDashoffset: [0, -50, -100],
      filter: ["blur(2px)", "blur(2px)", "blur(0px)"],

      transition: {
        duration: 0.75,
        ease: "linear",
      },
    },
  };

  return (
    <header className=" bg-surface/90 dark:bg-surface backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-2 py-1.5 h-17">
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

          {/* THEME TOGGLE */}
          <div className="flex items-center gap-2 ">
            <button
              className="cursor-pointer"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <m.svg
                strokeWidth="4"
                strokeLinecap="round"
                width={40}
                height={40}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`relative ${userPreference === "dark" ? "text-blue-300" : "text-yellow-600"}`}
              >
                <m.path
                  variants={shineVariant}
                  d={moonPath}
                  className="absolute top-0 left-0"
                  stroke="currentColor"
                  initial="hidden"
                  animate={userPreference === "dark" ? "visible" : "hidden"}
                />
                <m.g
                  variants={raysV}
                  initial="hidden"
                  animate={userPreference === "light" ? "visible" : "hidden"}
                  stroke="currentColor"
                  style={{ strokeLinecap: "round" }}
                >
                  <m.path variants={rayV} d="M47.6665 1V10.3333" />
                  <m.path variants={rayV} d="M47.6665 85V94.3333" />
                  <m.path
                    variants={rayV}
                    d="M14.6733 14.6733L21.2533 21.2533"
                  />
                  <m.path
                    variants={rayV}
                    d="M74.0801 74.0801L80.6601 80.6601"
                  />
                  <m.path variants={rayV} d="M1 47.6665H10.3333" />
                  <m.path variants={rayV} d="M85 47.6665H94.3333" />
                  <m.path
                    variants={rayV}
                    d="M21.2533 74.0801L14.6733 80.6601"
                  />
                  <m.path
                    variants={rayV}
                    d="M80.6601 14.6733L74.0801 21.2533"
                  />
                </m.g>
                {/* SUN ICON */}
                <m.path
                  d={sunPath}
                  stroke="currentColor"
                  fill="currentColor"
                  transition={{ duration: 1, type: "spring" }}
                  initial={{ fillOpacity: 0, strokeOpacity: 0 }}
                  animate={
                    userPreference === "dark"
                      ? {
                          d: moonPath,
                          rotate: -360,
                          scale: 1.5,
                          fillOpacity: 0.25,
                          strokeOpacity: 1,
                        }
                      : {
                          d: sunPath,
                          rotate: 0,
                          scale: 1,
                          fillOpacity: 0.25,
                          strokeOpacity: 1,
                        }
                  }
                />
              </m.svg>
            </button>

            {/* NOTIFICATION ICON */}
            <button className="relative p-2.5 rounded text-slate-600  cursor-pointer hover:text-slate-300 transition-colors">
              {icons.bell}
              <span className="absolute top-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-sans">
                3
              </span>
            </button>

            {/* SETTING ICON */}
            <button className="relative p-2.5 rounded text-slate-600  cursor-pointer hover:text-slate-300 transition-colors">
              {icons.settings}
            </button>
          </div>

          {/* USER PROFILE IMG*/}
          <SingleProfile src={profileImg1} name={""} />
        </div>
      </div>
    </header>
  );
}
