import { Link, useNavigate, useParams } from "react-router";
import { useBoardStore } from "@/stores";
import { toast } from "sonner";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const { boards, removeBoard } = useBoardStore();
  const [justDeleted, setJustDeleted] = useState(false);
  const navigate = useNavigate();
  const boardIdUrl = useParams().boardId || "";
  const boardList = boards.map((board) => ({
    id: board.id,
    title: board.title,
  }));

  useEffect(() => {
    if (!justDeleted) return;

    if (boards.length > 0) {
      const lastBoard = boards[boards.length - 1];
      navigate(`/boards/${lastBoard.id}`);
    } else {
      navigate("/boards");
    }

    setJustDeleted(false);
  }, [boards, justDeleted, navigate]);

  const handleDeleteBoard = (boardId: string) => {
    removeBoard(boardId);
    toast.success("Board deleted successfully");
    setJustDeleted(true);
  };

  return (
    <div className="flex flex-col h-screen w-[300px]  bg-zinc-800 text-white">
      {/* Sidebar header */}
      <div className="h-20 flex flex-col justify-center px-4 bg-zinc-900">
        <h1 className="text-2xl font-semibold">
          Taskito
        </h1>
        <small className="text-accent-500">Kanban Board App</small>
      </div>
      {/* Sidebar content */}
      <div className="flex-1 p-4">
        <h2 className="text-gray-400 text-sm mt-6 mb-2">My Projects </h2>
        <ul>
          {boardList.map((board) => (
            <li
              key={board.id}
              className={`hover:underline underline-offset-4 py-2 ${
                board.id === boardIdUrl ? "text-accent-500 pl-2 border-l-4 border-accent-500" : ""
              }`}
            >
              <Link to={`/boards/${board.id}`}>
                {board.title || <span className="text-gray-500 italic">No title</span>}
              </Link>
              <button
                className="float-right cursor-pointer"
                title="Delete"
                onClick={() => handleDeleteBoard(board.id)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Sidebar footer */}
      <div className="p-4 flex flex-col gap-3">
        <button className="btn">Create New Task</button>

        <Link className="btn" to="/boards/new">
          Create New Board
        </Link>

        <Link className="btn" to="/">
          Back to Welcome
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
