
export const statusDotColor = (status) => {
  switch ((status).toLowerCase()) {
    case "completed":
      return "bg-emerald-400";
    case "pending":
      return "bg-yellow-500";
    case "cancelled":
      return "bg-red-700";
    case "in progress":
      return "bg-blue-400";
    case "new":
        return "bg-pink-300";   
    default:
      return "bg-slate-300";
  }
};

export const statusColor = (status) => {
    switch ((status).toLowerCase()) {
      case "completed":
        return "bg-emerald-400 hover:bg-emerald-500 cursor-default text-white font-semibold dark:bg-emerald-900/30 dark:text-emerald-400";
      case "pending":
        return "bg-yellow-500 hover:bg-yellow-600 cursor-default text-white font-semibold dark:bg-yellow-900/30 dark:text-yellow-400";
      case "cancelled":
        return "bg-red-700 hover:bg-red-800 cursor-default text-hover font-semibold dark:bg-red-900/30 dark:text-red-400";
      case "in progress":
        return "bg-blue-400 hover:bg-blue-500 cursor-default text-hover font-semibold dark:bg-blue-900/30 dark:text-blue-400 text-nowrap";
     case "new":
        return "bg-pink-400 hover:bg-pink-500 cursor-default text-hover font-semibold dark:bg-pink-900/30 dark:text-pink-300 text-nowrap";   

      default:
        return "bg-slate-200/50 text-slate-500 dark:bg-slate-800 dark:text-slate-300 ";
    }
  };