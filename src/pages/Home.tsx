import { Link, Outlet } from "react-router-dom";
import { useBoardStore } from "@/stores";
import { useState } from "react";
import CreateBoardForm from "@/components/CreateBoardForm";

const Home = () => {
  const [showCreateBoardForm, setShowCreateBoardForm] = useState(false);
  const { boards } = useBoardStore();

  const boardProjects = boards.map((board) => ({
    id: board.id,
    title: board.title,
  }));

  return (
    <div className="flex h-screen">
      <div className="flex flex-col h-screen w-64 bg-zinc-800 text-white">
        {/* Sidebar header */}
        <div className="p-4">
          <h1 className="text-2xl font-bold">Taskito</h1>
        </div>
        {/* Sidebar content */}
        <div className="flex-1 p-4">
          <h2 className="text-gray-300 text-sm mb-2">My Projects </h2>
          <ul>
            {boardProjects.map((project) => (
              <li key={project.id} className="mb-2">
                <Link to={`/boards/${project.id}`} className="text-white">
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Sidebar footer */}
        <div className="p-4 flex flex-col gap-2">
          <button className="btn btn-primary" onClick={() => setShowCreateBoardForm(true)}>
            Create New Board
          </button>
          <button className="btn btn-primary">
            <Link className="w-full" to="/">
              Back to Welcome
            </Link>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto" >
        <Outlet />
      </div>
      {showCreateBoardForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <CreateBoardForm closeForm={() => setShowCreateBoardForm(false)} showCloseButton />
        </div>
      )}
    </div>
  );
};

export default Home;
