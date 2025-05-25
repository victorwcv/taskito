import type { Status } from "../types/task";

// constants.ts
export const STATUS_VALUES = ["backlog", "in-progress", "done"] as const;

export const STATUS_LIST: { label: string; value: Status }[] = [
  { label: "📝 Backlog", value: "backlog" },
  { label: "🚧 In Progress", value: "in-progress" },
  { label: "✅ Done", value: "done" },
];
