import KanbanCard from "@/components/KanbanCard";
import KanbanColumn from "@/components/KanbanColumn";
import { useParams } from "react-router";
import { useBoardStore } from "@/stores";

const KanbanBoard: React.FC = () => {
  const { boardId = "" } = useParams<{ boardId: string }>();
  const boardData = useBoardStore((state) => state.getBoardbyId(boardId));
  const { removeTask } = useBoardStore();

  const handleRemoveTask = (columnId: string, taskId: string) => {
    removeTask(boardId, columnId, taskId);
  };

  if (!boardData) {
    return (
      <div className="flex justify-center items-center h-full">
        <h2 className="text-2xl font-semibold text-gray-500">Board not found</h2>
      </div>
    );
  }

  return (
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
        </KanbanColumn>
      ))}
    </div>
  );
};

export default KanbanBoard;
