import TaskForm from "./components/TaskForm";
import KanbanBoard from "./components/KanbanBoard";
import { useTasks } from "./hooks/useTasks";
import Navbar from "./components/Navbar";

function App() {
  const { tasks, addTask, removeTask, updateStatus } = useTasks();

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">
        <TaskForm onAddTask={addTask} />
        <KanbanBoard tasks={tasks} onRemove={removeTask} onStatusChange={updateStatus} />
      </main>
    </>
  );
}

export default App;
