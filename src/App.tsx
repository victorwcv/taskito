import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useTasks } from "./hooks/useTasks";

function App() {

  const { tasks, addTask, removeTask } = useTasks();
  
  return <div className="min-h-screen flex flex-col items-center">
    <h1 className="text-3xl font-bold my-4">Hello Taskito</h1>
    <TaskForm onAddTask={addTask} />
    <TaskList tasks={tasks} onRemoveTask={removeTask} />
  </div>;
}

export default App;
