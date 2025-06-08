import KanbanCard from "./KanbanCard";
import KanbanColumn from "./KanbanColumn";
import { useParams } from "react-router";
import { useBoardStore } from "@/stores";
import { useState } from "react";
import TaskForm from "./TaskForm";

const KanbanBoard: React.FC = () => {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const { boardId = "" } = useParams<{ boardId: string }>();
  const boardData = useBoardStore((state) => state.getBoardbyId(boardId));
  const firstColumn = boardData?.columns[0];
  const { removeTask } = useBoardStore();

  const handleRemoveTask = (columnId: string, taskId: string) => {
    removeTask(boardId, columnId, taskId);
  };

  console.log("boardData", boardData);

  if (!boardData) {
    return <div className="p-4 text-center text-gray-500">Board not found</div>;
  }

  return (
    <>
      <div className="h-full flex w-fit gap-4 p-8 mx-auto">
        {boardData.columns.map((column) => (
          <KanbanColumn key={column.id} label={column.title}>
            {column.tasks.map((task) => (
              <KanbanCard
                key={task.id}
                task={task}
                removeTask={() => handleRemoveTask(column.id, task.id)}
              />
            ))}
            {column.id === firstColumn?.id && (
              <button
                className="bg-white opacity-70 w-full p-3 rounded shadow text-center cursor-pointer hover:opacity-100"
                onClick={() => setShowAddTaskForm(true)}
              >
                + Add new task
              </button>
            )}
            {showAddTaskForm && (
              <div
                className="fixed inset-0 bg-black/20 flex items-center justify-center z-50"
                onClick={() => {
                  setShowAddTaskForm(false);
                }}
              >
                <TaskForm
                  boardId={boardId}
                  columnId={firstColumn?.id || ""}
                  closeForm={() => setShowAddTaskForm(false)}
                />
              </div>
            )}
          </KanbanColumn>
        ))}
      </div>
    </>
  );
};

export default KanbanBoard;
