import { STATUS_LIST } from "../constants/task-status";
import type { Status, Task } from "../types/task";

type Props = {
  task: Task;
  onRemove: (id: string) => void;
  onStatusChange: (id: string, status: Status) => void;
};

const KanbanCard : React.FC<Props> = ({ task, onRemove, onStatusChange }) => {

  const options = STATUS_LIST;
  
  return (
    <li className="bg-gray-50 p-3 rounded shadow flex justify-between items-start">
      <div>
        <h3 className="font-semibold hover:underline cursor-pointer"><a>{task.title}</a></h3>
        {task.description && (
          <p className="text-sm text-gray-600">{task.description}</p>
        )}
        <p className="text-xs text-gray-400 mt-1">
          {new Date(task.createdAt).toLocaleString('es-PE', { dateStyle: 'short', timeStyle: 'short' })}
        </p>
      </div>
      <div className="flex flex-col items-end gap-1 ml-2">
        <button
          onClick={() => onRemove(task.id)}
          className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
        >
          🗑
        </button>

        {/* Menú de cambio de estado */}
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value as Status)}
          className="text-xs mt-1"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </li>
  );
}

export default KanbanCard;
