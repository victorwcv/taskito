import TaskForm from "./components/TaskForm";
import KanbanBoard from "./components/KanbanBoard";
import { useTasks } from "./hooks/useTasks";

function App() {
  const { tasks, addTask, removeTask, updateStatus } = useTasks();

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold my-4">Hello Taskito</h1>
      <TaskForm onAddTask={addTask} />
      <KanbanBoard tasks={tasks} onRemove={removeTask} onStatusChange={updateStatus} />
    </div>
  );
}

export default App;
