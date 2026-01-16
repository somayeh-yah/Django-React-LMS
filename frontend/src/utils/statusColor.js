
// export const statusDotColor = (status) => {
//   switch ((status)) {
//     case "completed":
//       return "bg-emerald-400";
//     case "pending":
//       return "bg-yellow-500";
//     case "cancelled":
//       return "bg-red-700";
//     case "in progress":
//       return "bg-blue-400";
//     case "new":
//         return "bg-pink-300";   
//     default:
//       return "bg-slate-300";
//   }
// };


// export const statusColor = (status) => {
//     switch ((status)) {
//       case "completed":
//         return "bg-emerald-400 hover:bg-emerald-500 cursor-default text-white font-semibold dark:bg-emerald-900/30 dark:text-emerald-400";
//       case "pending":
//         return "bg-yellow-500 hover:bg-yellow-600 cursor-default text-white font-semibold dark:bg-yellow-900/30 dark:text-yellow-400";
//       case "cancelled":
//         return "bg-red-700 hover:bg-red-800 cursor-default text-hover font-semibold dark:bg-red-900/30 dark:text-red-400";
//       case "in progress":
//         return "bg-blue-400 hover:bg-blue-500 cursor-default text-hover font-semibold dark:bg-blue-900/30 dark:text-blue-400 text-nowrap";
//      case "new":
//         return "bg-pink-400 hover:bg-pink-500 cursor-default text-hover font-semibold dark:bg-pink-900/30 dark:text-pink-300 text-nowrap";   

//       default:
//         return "bg-slate-200/50 text-slate-500 dark:bg-slate-800 dark:text-slate-300 ";
//     }
//   };

//   export const priorityColor = (prio) => {
//     switch ((prio)) {
//       case "low":
//         return "bg-emerald-400 dark:bg-emerald-900/30 ";
//       case "medium":
//         return "bg-yellow-500 dark:bg-yellow-900/30";
//       case "high":
//         return "bg-red-700 dark:bg-red-900/30 ";
//       case "critical":
//         return "bg-blue-900 dark:bg-blue-900/30 ";
     
//       default:
//         return "bg-slate-200/50 dark:bg-slate-800  ";
//     }
//   };


  // taskUiConfig.js

const TASK_UI_STYLES= {
  status: {
    default: {
      dot: "bg-slate-300",
      badge:
        "bg-slate-200/50 text-slate-500 dark:bg-slate-800 dark:text-slate-300",
    },

    completed: {
      dot: "bg-emerald-400",
      badge:
        "bg-emerald-400 hover:bg-emerald-500 cursor-default text-white font-semibold dark:bg-emerald-900/30 dark:text-emerald-400",
    },

    pending: {
      dot: "bg-yellow-500",
      badge:
        "bg-yellow-500 hover:bg-yellow-600 cursor-default text-white font-semibold dark:bg-yellow-900/30 dark:text-yellow-400",
    },

    cancelled: {
      dot: "bg-red-700",
      badge:
        "bg-red-700 hover:bg-red-800 cursor-default text-white font-semibold dark:bg-red-900/30 dark:text-red-400",
    },

    "in progress": {
      dot: "bg-blue-400",
      badge:
        "bg-blue-400 hover:bg-blue-500 cursor-default text-white font-semibold dark:bg-blue-900/30 dark:text-blue-400 text-nowrap",
    },

    new: {
      dot: "bg-pink-300",
      badge:
        "bg-pink-400 hover:bg-pink-500 cursor-default text-white font-semibold dark:bg-pink-900/30 dark:text-pink-300 text-nowrap",
    },
  },

  priority: {
    default: {
      color: "bg-slate-200/50 dark:bg-slate-800",
    },

    low: {
      color: "bg-emerald-400 dark:bg-emerald-900/30",
    },

    medium: {
      color: "bg-yellow-500 dark:bg-yellow-900/30",
    },

    high: {
      color: "bg-red-700 dark:bg-red-900/30",
    },

    critical: {
      color: "bg-blue-900 dark:bg-blue-900/30",
    },
  },
};

export const statusDotColor = (status) =>
  TASK_UI_STYLES.status[status]?.dot ??
  TASK_UI_STYLES.status.default.dot;

export const statusColor = (status) =>
  TASK_UI_STYLES.status[status]?.badge ??
  TASK_UI_STYLES.status.default.badge;

export const priorityColor = (priority) =>
  TASK_UI_STYLES.priority[priority]?.color ??
  TASK_UI_STYLES.priority.default.color;
