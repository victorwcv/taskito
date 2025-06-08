import type { Task } from "@/stores";

type Props = {
  task: Task;
  removeTask: () => void;
};

const KanbanCard: React.FC<Props> = ({ task, removeTask }) => {
  
  return (
    <li className="bg-gray-50 p-3 rounded shadow flex justify-between items-start">
      <div>
        <h3 className="font-semibold hover:underline cursor-pointer">
          <a>{task.title}</a>
        </h3>
        {task.description && <p className="text-sm text-gray-600">{task.description}</p>}
        <p className="text-xs text-gray-400 mt-1">
          {new Date(task.createdAt).toLocaleString("es-PE", {
            dateStyle: "short",
            timeStyle: "short",
          })}
        </p>
      </div>
      <div className="flex flex-col items-end gap-1 ml-2">
        <button
          onClick={removeTask}
          className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
        >
          🗑
        </button>
      </div>
    </li>
  );
};

export default KanbanCard;
