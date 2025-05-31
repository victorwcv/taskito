import { STATUS_LIST } from "../constants/task-status";
import type { Status, Task } from "../types/task";
import KanbanCard from "./KanbanCard";
import KanbanColumn from "./KanbanColumn";

type Props = {
  tasks: Task[];
  onRemove: (id: string) => void;
  onStatusChange: (id: string, status: Status) => void;
};

const KanbanBoard: React.FC<Props> = ({ tasks, onRemove, onStatusChange }) => {
  const columns = STATUS_LIST;

  return (
    <div className="container mx-auto h-full overflow-x-auto overflow-y-hidden flex lg:flex-row flex-col gap-4 p-8">
      {columns.map((column) => (
        <KanbanColumn key={column.value} label={column.label}>
          {tasks
            .filter((task) => task.status === column.value)
            .map((task) => (
              <KanbanCard
                key={task.id}
                task={task}
                onRemove={onRemove}
                onStatusChange={onStatusChange}
              />
            ))}
        </KanbanColumn>
      ))}
    </div>
  );
};

export default KanbanBoard;
