import type { STATUS_VALUES } from "../constants/task-status";

export type Status = typeof STATUS_VALUES[number];

export interface Task {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  status: Status;
}