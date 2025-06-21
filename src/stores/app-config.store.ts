import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface AppConfig {
  isOpenSidebar: boolean;
}

interface AppState {
  config: AppConfig;
  toggleSidebar: () => void;
}

export const useAppConfigStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        config: {
          isOpenSidebar: true,
        },
        toggleSidebar: () =>
          set((state) => ({
            config: {
              ...state.config,
              isOpenSidebar: !state.config.isOpenSidebar,
            },
          })),
      }),
      {
        name: "app-config",
      }
    )
  )
);
      