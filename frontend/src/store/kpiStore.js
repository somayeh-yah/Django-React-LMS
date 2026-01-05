import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useKpiStore = create()(
  persist(
    (set, get) => ({
      kpis: [],

      addKpi: (data = {}) => {
      
       const now = new Date().toLocaleDateString();

        const newKpi = {
          id: crypto.randomUUID(),
          goal: "",
          issue: "",
          importance: "",
          deadline: "",
          assigned: [],
          team:"untitled team",
          status: "Not set",
          completed: false,
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
    }),
    { name: "kpi-store" }
  )
);
