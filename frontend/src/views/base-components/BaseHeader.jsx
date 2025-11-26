import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import Search from "../../components/Search/Search";
import {
  Phone,
  UsersRound,
  Award,
  HandCoins,
  ShoppingCart,
  ChevronDown,
  LogIn,
  GraduationCap,
  Users,
} from "lucide-react";

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
    <header className="sticky top-4 z-40">
      <div className="mx-auto w-full max-w-7xl px-3 py-3 sm:px-5 flex justify-center items-center">
        <nav className="flex items-center justify-between gap-2 w-full rounded-xl border border-accent-1/20 bg-surface py-6 md:py-7 shadow-sm backdrop-blur-sm md:px-4 md:gap-4 lg:px-6 lg:py-4 lg:gap-6 ">
          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center">
            <div className="flex items-center justify-center gap-1 mr-1">
              <img src={logo} alt="logo" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 lg:flex ">
            <li>
              <Link
                to="/pages/contact-us/"
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-accent-2/10"
              >
                <Phone size={20} strokeWidth={1.5} />
                <span className="text-nowrap">Contact Us</span>
              </Link>
            </li>
            <li>
              <Link
                to="/pages/about-us/"
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-accent-2/10"
              >
                <UsersRound size={20} strokeWidth={1.5} />
                <span className="text-nowrap">About Us</span>
              </Link>
            </li>
            <li>
              <Link
                to="/pages/colleagues/"
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-accent-2/10"
              >
                <Award size={20} strokeWidth={1.5} />
                <span className="text-nowrap">Case studies</span>
              </Link>
            </li>
            <li>
              <Link
                to="/pages/coaches/"
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-accent-2/10"
              >
                <HandCoins size={20} strokeWidth={1.5} />
                <span>Pricing</span>
              </Link>
            </li>
          </ul>

          {/* Desktop Auth Buttons */}
          <div className="hidden items-center gap-3 lg:flex ">
            <Search />
            <Link
              to="/cart/"
              className="relative inline-flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-accent-2/10"
            >
              <ShoppingCart size={20} strokeWidth={1.5} />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-xl bg-accent-2 text-xs text-light">
                3
              </span>
            </Link>

            <Link
              to="/login/"
              className="rounded-lg border border-accent-1/20 px-4 py-2 transition-colors hover:border-accent-1/40 hover:bg-accent-1/5 text-sub"
            >
              Login
            </Link>

            <Link
              to="/register/"
              className="rounded-lg bg-accent-2 px-4 py-2 text-light shadow-sm transition-all hover:bg-accent-2/90 hover:shadow-md"
            >
              Register
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
              <Phone size={20} strokeWidth={1.5} />
              <span>Contact Us</span>
            </Link>
            <Link
              to="/pages/about-us/"
              className="inline-flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-accent-1/10"
              onClick={() => setMobileOpen(false)}
            >
              <UsersRound size={20} strokeWidth={1.5} />
              <span>About Us</span>
            </Link>
            <Link
              to="/pages/colleagues/"
              className="inline-flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-accent-1/10"
              onClick={() => setMobileOpen(false)}
            >
              <Award size={20} strokeWidth={1.5} />
              <span>Case studies</span>
            </Link>
            <Link
              to="/pages/coaches/"
              className="inline-flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-accent-1/10"
              onClick={() => setMobileOpen(false)}
            >
              <HandCoins size={20} strokeWidth={1.5} />
              <span>Pricing</span>
            </Link>

            {/* Divider */}
            <div className="my-3 border-t border-accent-1/10" />

            {/* Search in Mobile */}
            <div className="px-1 mb-6">
              <Search placeholder="Search Courses" />
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
                <ShoppingCart size={20} strokeWidth={1.5} />
              </Link>
              <Link
                to="/login/"
                className="flex items-center justify-center gap-2 rounded-lg border border-accent-1/20 px-4 py-3 text-center transition-colors hover:border-accent-1/40 hover:bg-accent-1/5"
                onClick={() => setMobileOpen(false)}
              >
                <span>Login </span>
                <LogIn size={20} strokeWidth={1.5} />
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
