import { DollarSign, UserRound, Activity, TrendingDown } from "lucide-react";
export const statsData = [
  {
    title: "Quarterly Revenue",
    value: "$124.8k",
    change: "+12.4%",
    trend: "up",
    icon: DollarSign,
    color: "border-emerald-500",
    bgColor: "bg-emerald-200 dark:bg-emerald-950/40",
    textColor: "text-emerald-500 dark:text-emerald-400",
  },
  {
    title: "Active Users",
    value: "3,482",
    change: "+8.1%",
    trend: "up",
    icon: UserRound,
    color: "border-sky-500 ",
    bgColor: "bg-sky-200 dark:bg-sky-950/40",
    textColor: "text-sky-500 dark:text-sky-400",
  },
  {
    title: "Customer Rate",
    value: "4.7%",
    change: "+0.6%",
    trend: "up",
    icon: Activity,
    color: "border-indigo-500",
    bgColor: "bg-indigo-200 dark:bg-indigo-950/40",
    textColor: "text-indigo-600 dark:text-indigo-400",
  },
  {
    title: "Overall growth.",
    value: "2.3%",
    change: "-0.4%",
    trend: "down",
    icon:TrendingDown,
    color: "border-rose-500",
    bgColor: "bg-rose-200 dark:bg-rose-950/40",
    textColor: "text-rose-600 dark:text-rose-400",
  },


];