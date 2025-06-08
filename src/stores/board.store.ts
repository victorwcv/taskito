import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { nanoid } from "nanoid";

export interface Task {
  id: string;
  title: string;
  description: string;
  createdAt: string;
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

export interface Board {
  id: string;
  title: string;
  columns: Column[];
}

interface BoardState {
  boards: Board[];

  // Actions
  addBoard: (title: string) => string;
  addColumn: (boardId: string, title: string) => void;
  addTask: (boardId: string, columnId: string, task: Task) => void;
  getBoardbyId: (id: string) => Board | undefined;
}

export const useBoardStore = create<BoardState>()(
  devtools(
    persist(
      (set, get) => ({
        // State
        boards: [],
        // Actions
        addBoard: (title) => {
          const newBoard = { id: nanoid(), title, columns: [] };
          set((state) => ({
            boards: [...state.boards, newBoard],
          }));
          return newBoard.id;
        },

        addColumn: (boardId, title) =>
          set((state) => ({
            boards: state.boards.map((board) =>
              board.id === boardId
                ? {
                    ...board,
                    columns: [...board.columns, { id: nanoid(), title, tasks: [] }],
                  }
                : board
            ),
          })),

        addTask: (boardId, columnId, task) =>
          set((state) => ({
            boards: state.boards.map((board) =>
              board.id === boardId
                ? {
                    ...board,
                    columns: board.columns.map((col) =>
                      col.id === columnId
                        ? {
                            ...col,
                            tasks: [...col.tasks, { ...task, id: nanoid() }],
                          }
                        : col
                    ),
                  }
                : board
            ),
          })),

        getBoardbyId: (id) => get().boards.find((board) => board.id === id),
      }),
      {
        name: "kanban-storage", // key en localStorage
      }
    )
  )
);
