export const statusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-400 hover:bg-emerald-500 cursor-default text-white font-semibold dark:bg-emerald-900/30 dark:text-emerald-400";
      case "pending":
        return "bg-yellow-500 hover:bg-yellow-600 cursor-default text-white font-semibold dark:bg-yellow-900/30 dark:text-yellow-400";
      case "cancelled":
        return "bg-red-700 hover:bg-red-800 cursor-default text-white font-semibold dark:bg-red-900/30 dark:text-red-400";
      case "in progress":
        return "bg-blue-400 hover:bg-blue-500 cursor-default text-muted font-semibold dark:bg-blue-900/30 dark:text-blue-400 text-nowrap";

      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400";
    }
  };