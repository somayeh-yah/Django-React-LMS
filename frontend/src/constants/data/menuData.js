import { icons } from "../../utils/icons";

export const menuItems = [
    {
      id: "overview",
      label: "Dashboard",
      icon: icons.dashboardIcon,
      href: "/dashboard",
      badge: "New",
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: icons.activity,
      href: "/analytics",
      subMenu: [
        {
          id: "traffic",
          label: "Traffic & Visitors",
          href: "/analytics/traffic",
        },
        {
          id: "conversion",
          label: "Conversion Rate",
          href: "/analytics/conversions",
        },
        { id: "funnels", label: "Funnels", href: "/analytics/funnels" },
        { id: "cohorts", label: "Cohort Analysis", href: "/analytics/cohorts" },
      ],
    },
    {
      id: "sales",
      label: "Sales",
      icon: icons.chart,
      href: "/sales",
      count: 50,
      subMenu: [
        { id: "revenue", label: "Revenue KPIs", href: "/sales/revenue" },
        { id: "pipeline", label: "Pipeline", href: "/sales/pipeline" },
        { id: "targets", label: "Targets vs Actuals", href: "/sales/targets" },
      ],
    },
    {
      id: "projects",
      label: "Projects",
      icon: icons.kanban,
      href: "/projects",
      subMenu: [
        {
          id: "active-projects",
          label: "Active Projects",
          href: "/projects/active",
        },
        {
          id: "sprints",
          label: "Sprints & Velocity",
          href: "/projects/sprints",
        },
        { id: "risks", label: "Risks", href: "/projects/risks" },
      ],
    },

    {
      id: "messages",
      label: "Messages",
      icon: icons.messages,
      href: "/messages",
      badge: 3,
    },

    {
      id: "calendar",
      label: "Calendar",
      icon: icons.calendar,
      href: "/calendar",
      badge: 1,
    },

    {
      id: "team",
      label: "Team",
      icon: icons.users,
      href: "/team",
      badge: 5,

      subMenu: [
        {
          id: "performance",
          label: "Team Performance",
          href: "/team/performance",
        },
        { id: "workload", label: "Workload", href: "/team/workload" },
      ],
    },

    {
      id: "members",
      label: "Members",
      icon: icons.user,
      href: "/members",
      badge: 12,
    },

    {
      id: "reports",
      label: "Reports",
      icon: icons.file,
      href: "/reports",
      count: 20,
    },
    {
      id: "settings",
      label: "Settings",
      icon: icons.settings,
      href: "/settings",
    },
  ];

