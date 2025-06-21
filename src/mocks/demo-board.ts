import type { Board } from "@/stores";

export const demoBoard: Board = {
  id: "demo",
  title: "Demo Board",
  columns: [
    {
      id: "todo",
      title: "To Do",
      tasks: [
        {
          id: "task-1",
          title: "Task 1",
          description: "This is the first task.",
          createdAt: new Date("2023-10-01").toISOString(),
        },
        {
          id: "task-2",
          title: "Task 2",
          description: "This is the second task.",
          createdAt: new Date("2023-10-02").toISOString(),
        },
      ],
    },
    {
      id: "in-progress",
      title: "In Progress",
      tasks: [
        {
          id: "task-3",
          title: "Task 3",
          description: "This task is currently in progress.",
          createdAt: new Date("2023-10-03").toISOString(),
        },
      ],
    },
    {
      id: "done",
      title: "Done",
      tasks: [
        {
          id: "task-4",
          title: "Task 4",
          description: "This task has been completed.",
          createdAt: new Date("2023-10-04").toISOString(),
        },
      ],
    },
  ],
}  