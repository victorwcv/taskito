import TaskForm from "./components/TaskForm";
import KanbanBoard from "./components/KanbanBoard";
import { useTasks } from "./hooks/useTasks";
import Navbar from "./components/Navbar";
import CustomDrawer from "./components/CustomDrawer";

function App() {
  const { tasks, addTask, removeTask, updateStatus } = useTasks();

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">
        <KanbanBoard tasks={tasks} onRemove={removeTask} onStatusChange={updateStatus} />
      </main>
      <CustomDrawer position="right">
        <TaskForm onAddTask={addTask} />
      </CustomDrawer>
    </>
  );
}

export default App;
