import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import Search from "../../components/Search";
import { icons } from "../../utils/icons";
function BaseHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [instructorOpen, setInstructorOpen] = useState(false);
  const [studentOpen, setStudentOpen] = useState(false);

  const toggleMobile = () => {
    setMobileOpen((prev) => !prev);
    if (mobileOpen) {
      setInstructorOpen(false);
      setStudentOpen(false);
    }
  };

  return (
    <header className="sticky top-4 z-40 w-auto px-1 mx-auto">
      <div className="mx-auto sm:w-full sm:max-w-7xl sm:px-5 xs:mx-2.5 flex justify-center items-center">
        <nav className="flex items-center justify-between gap-2 w-full font-sans rounded-xl border border-accent-1/20 bg-header py-6 md:py-7 shadow-sm backdrop-blur-sm px-2.5 md:px-4 md:gap-4 lg:px-6 lg:py-4 lg:gap-3 ">
          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center">
            <div className="flex items-center justify-center gap-1 mr-1">
              <img src={logo} alt="logo" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 lg:flex">
            <li>
              <Link
                to="/pages/contact-us/"
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-accent-2/10"
              >
                {icons.phone}
                <span className="text-nowrap">Contact Us</span>
              </Link>
            </li>
            <li>
              <Link
                to="/pages/about-us/"
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-accent-2/10"
              >
                {icons.users}
                <span className="text-nowrap">About Us</span>
              </Link>
            </li>
            <li>
              <Link
                to="/pages/colleagues/"
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-accent-2/10"
              >
                {icons.award}
                <span className="text-nowrap">Case studies</span>
              </Link>
            </li>
            <li>
              <Link
                to="/pages/coaches/"
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-accent-2/10"
              >
                {icons.pricing}
                <span>Pricing</span>
              </Link>
            </li>
          </ul>

          {/* Desktop Search and  Auth Buttons */}
          <div className="hidden items-center gap-3 lg:flex ">
            {/* <Search placeholder="Search for Courses, Projects or goals" /> */}
            <Link
              to="/cart/"
              className="relative inline-flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-accent-2/10"
            >
              {icons.cart}
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-xl bg-button-accent text-xs text-body bg-icon hover:bg-icon-hover font-semibold">
                3
              </span>
            </Link>

            <button
              hrf="/login/"
              className=" bg-bt-strong py-2 px-4 text-hover rounded-3xl border font-semibold font-sans border-stone-200 hover:bg-bt-strong-hover hover:border-0 focus:outline-hidden focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
              role="button "
              type="submit"
            >
              Login
            </button>

            <button
              hrf="/register/"
              className="button"
              role="button"
              type="submit"
            >
              Sign up
            </button>
            <Link
              to="/more/"
              className="px-2 py-2.5 text-center hover:shadow-sm rounded-md transition-colors hover:bg-accent-2/10"
              onClick={() => setMobileOpen(false)}
            >
              {icons.secondaryMenu}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMobile}
            className="inline-flex items-center justify-center rounded-md p-3 transition-colors hover:bg-accent-2/3 lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">Open main menu</span>
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  mobileOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  mobileOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>
      </div>
      {/* Mobile Menu  */}
      <div
        className={`fixed inset-x-0 top-24 z-30 mx-auto max-w-7xl px-4 transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="max-h-[calc(100vh-7rem)] overflow-y-auto rounded-xl border border-accent-1/20 bg-surface p-4 shadow-md backdrop-blur-sm">
          <div className="flex flex-col gap-2">
            {/* Main Navigation Links */}
            <Link
              to="/pages/contact-us/"
              className="inline-flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-accent-1/10"
              onClick={() => setMobileOpen(false)}
            >
              {icons.phone}
              <span>Contact Us</span>
            </Link>
            <Link
              to="/pages/about-us/"
              className="inline-flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-accent-1/10"
              onClick={() => setMobileOpen(false)}
            >
              {icons.aboutUs}
              <span>About Us</span>
            </Link>
            <Link
              to="/pages/colleagues/"
              className="inline-flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-accent-1/10"
              onClick={() => setMobileOpen(false)}
            >
              {icons.award}
              <span>Case studies</span>
            </Link>
            <Link
              to="/pages/coaches/"
              className="inline-flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-accent-1/10"
              onClick={() => setMobileOpen(false)}
            >
              {icons.pricing}
              <span>Pricing</span>
            </Link>

            {/* Divider */}
            <div className="my-3 border-t border-accent-1/10" />

            {/* Search in Mobile */}
            <div className="px-1 mb-auto">
              <Search placeholder="Search for Courses, Projects or goals" />
            </div>

            {/* Auth Buttons in Mobile */}
            <div className="flex flex-col gap-2">
              <Link
                to="/cart/"
                className="flex items-center justify-center gap-1 rounded-lg border border-accent-1/20 px-4 py-3 transition-colors hover:border-accent-1/40 hover:bg-accent-1/5"
                onClick={() => setMobileOpen(false)}
              >
                <span>Cart</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-2 text-xs text-light">
                  3
                </span>
                {icons.cart}
              </Link>
              <Link
                to="/login/"
                className="flex items-center justify-center gap-2 rounded-lg border border-accent-1/20 px-4 py-3 text-center transition-colors hover:border-accent-1/40 hover:bg-accent-1/5"
                onClick={() => setMobileOpen(false)}
              >
                <span>Login </span>
                {icons.login}
              </Link>
              <Link
                to="/register/"
                className="rounded-lg bg-accent-2 px-4 py-3 text-center text-light shadow-sm transition-all hover:bg-accent-2/90 hover:shadow-md"
                onClick={() => setMobileOpen(false)}
              >
                Register <i className="fas fa-user-plus ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default BaseHeader;
