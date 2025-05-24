import type { Task } from "../types/task";

type Props = {
  tasks: Task[];
  onRemoveTask: (id: string) => void;
};

const TaskList: React.FC<Props> = ({ tasks, onRemoveTask }) => {
  const handleRemoveTask = (id: string) => {
    const confirmation = confirm("Are you sure you want to remove this task?");

    if (confirmation) {
      onRemoveTask(id);
    }
  };

  if (!tasks.length) {
    return <div>No tasks found</div>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h3>{task.title}</h3>
          {task.description && <p>{task.description}</p>}
          <p>
            {new Date(task.createdAt).toLocaleString("es-PE", {
              day: "numeric",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <button
            className="bg-red-300 rounded cursor-pointer"
            onClick={() => handleRemoveTask(task.id)}
          >
            🗑
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
