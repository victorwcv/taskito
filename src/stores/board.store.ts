import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { nanoid } from "nanoid";

interface Task {
  id: string;
  title: string;
  description?: string;
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

interface Board {
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
}

export const useBoardStore = create<BoardState>()(
  devtools(
    persist(
      (set) => ({
        boards: [],

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
      }),
      {
        name: "kanban-storage", // key en localStorage
      }
    )
  )
);
