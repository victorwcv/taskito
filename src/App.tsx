// import TaskForm from "@/components/TaskForm";
// import KanbanBoard from "@/components/KanbanBoard";
// import { useTasks } from "@/hooks/useTasks";
// import Navbar from "@/components/Navbar";
// import CustomDrawer from "@/components/CustomDrawer";
import { BrowserRouter } from "react-router";
import AppRoutes from "./router/AppRoutes";

function App() {
  // const { tasks, addTask, removeTask, updateStatus } = useTasks();

  return (
    // <div className="flex flex-col lg:h-screen h-auto">
    //   <Navbar />
    //   <main className="flex-1 overflow-hidden">
    //     <KanbanBoard tasks={tasks} onRemove={removeTask} onStatusChange={updateStatus} />
    //   </main>
    //   <CustomDrawer position="right">
    //     <TaskForm onAddTask={addTask} />
    //   </CustomDrawer>
    // </div>
    <BrowserRouter basename="/taskito">
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
