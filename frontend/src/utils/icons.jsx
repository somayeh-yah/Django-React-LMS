import {
  UserPlus,
  Loader,
  Phone,
  UsersRound,
  UserRound,
  Award,
  HandCoins,
  ShoppingCart,
  ChevronDown,
  LogIn,
  EllipsisVertical,
  GraduationCap,
  Users,
  Search,
  ListFilterPlus,
  Plus,
  Bell,
  Settings,
  Sun,
  LayoutDashboard,
  Activity,
  Zap,
  ChartSpline,
  Kanban,
  FileChartColumn,
  UserStar,
  MessagesSquare,
  Calendar,
  CloudUpload,
  CloudDownload,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Clock,
  CircleCheckBig,
  TriangleAlert,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

export const icons = {
  loading: <Loader size={25} strokeWidth={1.5} />,
  register: <UserPlus size={25} strokeWidth={1.5} />,
  login: <LogIn size={25} strokeWidth={1.5} />,
  phone: <Phone size={20} strokeWidth={1.5} />,
  users: <UsersRound size={20} strokeWidth={1.5} />,
  user: <UserRound size={20} strokeWidth={1.5} />,
  award: <Award size={20} strokeWidth={1.5} />,
  pricing: <HandCoins size={20} strokeWidth={1.5} />,
  cart: <ShoppingCart size={20} strokeWidth={1.5} />,
  secondaryMenu: <EllipsisVertical strokeWidth={2} />,
  add: <Plus size={20} strokeWidth={1.5} />,
  bell: <Bell size={25} strokeWidth={1.5} />,
  settings: <Settings size={25} strokeWidth={1.5} />,
  sun: <Sun size={25} strokeWidth={1.5} />,
  arrowDown: <ChevronDown strokeWidth={1.5} className="text-slate-4 w-4 h-4" />,
  dashboardIcon: <LayoutDashboard size={20} strokeWidth={1.5} />,
  activity: <Activity size={20} strokeWidth={1.5} />,
  zap: <Zap strokeWidth={1.5} className="w-6 h-6 text-white" />,
  chart: <ChartSpline size={20} strokeWidth={1.5} />,
  kanban: <Kanban size={20} strokeWidth={1.5} />,
  file: <FileChartColumn size={20} strokeWidth={1.5} />,
  trendingDown: <TrendingDown size={20} strokeWidth={1.5} />,
  clock: <Clock size={20} strokeWidth={1.5} />,
  checkCirkel: <CircleCheckBig size={20} strokeWidth={1.5} />,
  alertTriangel: <TriangleAlert size={20} strokeWidth={1.5} />,
  arrowDownRight: (
    <ArrowDownRight
      size={20}
      strokeWidth={1.5}
      className="text-red-600 font-semibold"
    />
  ),
  userStar: (
    <UserStar size={20} strokeWidth={1.5} className="w-6 h-6 text-white" />
  ),
  messages: <MessagesSquare size={20} strokeWidth={1.5} />,
  calendar: <Calendar size={20} strokeWidth={1.5} />,
  fileUpload: <CloudUpload size={20} strokeWidth={1.5} />,
  cloudDownload: <CloudDownload size={20} strokeWidth={1.5} />,
  arrowRight: <ArrowRight size={20} strokeWidth={1.5} />,
  dollarSign: <DollarSign size={20} strokeWidth={1.5} />,
  arrowUpRight: (
    <ArrowUpRight
      size={20}
      strokeWidth={1.5}
      className="text-success font-semibold"
    />
  ),

  filter: (
    <ListFilterPlus
      size={20}
      strokeWidth={1.5}
      className="absolute right-3 top-1/2 -translate-y-1/2  text-slate-400 hover:text-slate-500 cursor-pointer"
    />
  ),
  search: (
    <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 hover:text-slate-500 cursor-pointer" />
  ),
};
