import { Link, Outlet } from "react-router-dom";
import { useBoardStore } from "@/stores";

const Home = () => {
  const { boards } = useBoardStore();

  const boardProjects = boards.map((board) => ({
    id: board.id,
    title: board.title,
  }));

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-zinc-800 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Taskito</h1>
        </div>
        <div className="p-4">
          <h2 className="text-gray-300 text-sm mb-2">My Projects </h2>
          <ul>
            {boardProjects.map((project) => (
              <li key={project.id} className="mb-2">
                <Link to={`/home/${project.id}`} className="text-white">
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex-1 p-4">
        {boardProjects.length === 0 ? <p>No boards found</p> : <Outlet context={boards} />}
      </div>
    </div>
  );
};

export default Home;
