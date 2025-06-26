import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface AppConfig {
  isVisited: boolean;
  isOpenSidebar: boolean;
}

interface AppState {
  config: AppConfig;
  toggleSidebar: () => void;
  visited: () => void;
}

export const useAppConfigStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        config: {
          isOpenSidebar: true,
          isVisited: false,
        },
        toggleSidebar: () =>
          set((state) => ({
            config: {
              ...state.config,
              isOpenSidebar: !state.config.isOpenSidebar,
            },
          })),
        visited: () =>
          set((state) => ({
            config: {
              ...state.config,
              isVisited: true,
            },
          })),
      }),
      {
        name: "app-config",
      }
    )
  )
);
      