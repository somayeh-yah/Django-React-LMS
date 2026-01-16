import { create } from "zustand";
import { persist } from "zustand/middleware";

 const now = () => new Date().toLocaleDateString();


export const useKpiStore = create()(
  persist(
    (set, get) => ({
      kpis: [],

      addKpi: (data = {}) => {
         console.log("Data som skickas till addKpi:", data);
      
        const newKpi = {
          id: crypto.randomUUID(),
          goal: "",
          subGoals:[],
          issue: "",
          description: "",
          deadline: "",
          assigned: [],
          priority:  (data.priority ?? "").toString().trim().toLowerCase(),
          team:"untitled team",
          status: (data.status ?? "default").toString().trim().toLowerCase(),
          completed: false,
          isEditing:false,
          archived: false,
          archivedAt:now(),
          progress:0,
          createdAt: now(),
          updatedAt: now(),
          ...data,
        };

        set((state) => ({ kpis: [newKpi, ...state.kpis] }));
        return newKpi;
      },
      
      editKpi: (id, isEditing = {}) =>
       set((state) => ({
       kpis: state.kpis.map((k) =>
        k.id === id ? { 
          ...k,
          ...isEditing,
           status: isEditing.status ? isEditing.status.toString().trim().toLowerCase() : k.status,
            priority: isEditing.priority ? isEditing.priority.toString().trim().toLowerCase() : k.priority, updatedAt: now()} : k
    ),
  })),
    
      removeKpi: (id) =>
        set((state) => ({ kpis: state.kpis.filter((k) => k.id !== id) })),

      toggleCompleted: (id) =>
        set((state) => ({
          kpis: state.kpis.map((k) =>
            k.id === id ? { ...k, completed: !k.completed } : k
          ),
        })),

      getKpiById: (id) => get().kpis.find((k) => k.id === id) || null,

       archiveKpi: (kpiId) =>
    set((state) => ({
    kpis: state.kpis.map((k) =>
      k.id === kpiId 
        ? {...k, archived:true, archivedAt: now(), updatedAt:now()}
        :k
),
  })),

    unArchiveKpi: (kpiId) =>
    set((state) => ({
    kpis: state.kpis.map((k) =>
      k.id === kpiId 
        ? {...k, archived:false, updatedAt:now()}
        :k
),
  })),

       
    
      // SUB GOALS
     addSubGoals: (kpiId, subData = {}) => {

        const newSub = {
          id: crypto.randomUUID(),
          title: "",
          description: "",
          deadline: "",
          assigned: [],
          priority: (subData.priority ?? "").toString().trim().toLowerCase(),
          completed: false,
          isEditing:false,
         
          status: (subData.status ?? "default").toString().trim().toLowerCase(),
          progress: 0,
          createdAt: now(),
          updatedAt: now(),
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

      editSubGoal: (kpiId, subId, isEditing ) =>
       set((state) => ({
       kpis: state.kpis.map((k) =>
       k.id !== kpiId
        ? k
        : {
            ...k,
            subGoals: (k.subGoals ?? []).map((s) =>
              s.id === subId ? { ...s, ...isEditing, updatedAt: now()} : s
            ),
            updatedAt: now(),
          }
     ),
  })),

toggleSubCompleted: (kpiId, subId) =>
  set((state) => ({
    kpis: state.kpis.map((k) =>
      k.id !== kpiId
        ? k
        : {
            ...k,
            subGoals: (k.subGoals ?? []).map((s) =>
              s.id === subId ? { ...s, completed: !s.completed} : s
            ),
            updatedAt: now(),
          }
    ),
  })),

     removeSubKpi: (kpiId, subId) =>
        set((state) => ({ kpis: state.kpis.map((k) => k.id !== kpiId? k :{
          ...k,
          subGoals: (k.subGoals ?? []).filter((s)=> s.id !== subId),
          updatedAt: now(),
        }) })),

   
        
  // PERSIST ENDS HERE
    }),

    // a uniq key name for your Object in localStorage
    { name: "kpi-store" } 
    
  )
  
);
