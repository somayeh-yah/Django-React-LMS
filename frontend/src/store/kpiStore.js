import { create } from "zustand";
import { persist } from "zustand/middleware";

 const now = new Date().toLocaleDateString();

export const useKpiStore = create()(
  persist(
    (set, get) => ({
      kpis: [],

      addKpi: (data = {}) => {
      
      

        const newKpi = {
          id: crypto.randomUUID(),
          goal: "",
          subGoals:[],
          issue: "",
          importance: "",
          deadline: "",
          assigned: [],
          team:"untitled team",
          status: "Not set",
          completed: false,
          progress:0,
          createdAt: now,
          updatedAt: now,
          ...data,
        };

        set((state) => ({ kpis: [newKpi, ...state.kpis] }));
        return newKpi;
      },
      
      
    
      removeKpi: (id) =>
        set((state) => ({ kpis: state.kpis.filter((k) => k.id !== id) })),

      toggleCompleted: (id) =>
        set((state) => ({
          kpis: state.kpis.map((k) =>
            k.id === id ? { ...k, completed: !k.completed } : k
          ),
        })),

      getKpiById: (id) => get().kpis.find((k) => k.id === id) || null,

      // SUB GOALS
     addSubGoals: (kpiId, subData = {}) => {

        const newSub = {
          id: crypto.randomUUID(),
          title: "",
          deadline: "",
          assigned: "",
          status: "Not set",
          progress: 0,
          createdAt: now,
          updatedAt: now,
          ...subData,
        };

        set((state) => ({
          kpis: state.kpis.map((k) =>
            k.id === kpiId
              ? { ...k, subGoals: [newSub, ...(k.subGoals ?? [])]}
              : k
          ),
        }));

        return newSub;
      },
    }),
    { name: "kpi-store" }
  )
);
