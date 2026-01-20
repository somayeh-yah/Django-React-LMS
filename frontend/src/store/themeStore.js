import { create } from "zustand";
import { persist } from "zustand/middleware";



export const useThemeStore = create(
  persist(
    (set) => ({
      userPreference: "light",
     
       toggleTheme: ()=> 
       set((s) =>({
        userPreference: s.userPreference === "light" ? "dark" : "light",
       })),
       setThemes: (userPreference) => set({userPreference})
      
    }),
    {
      name: "app-theme", 
      
    }
  )
);
