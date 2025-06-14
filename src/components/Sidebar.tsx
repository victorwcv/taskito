import { Link, useParams } from "react-router"
import { useBoardStore } from "@/stores";

const Sidebar = () => {
  const { boards, removeBoard } = useBoardStore();
  const boardIdUrl = useParams().boardId || "";
  const boardList = boards.map((board) => ({
    id: board.id,
    title: board.title,
  }));

  const handleDeleteBoard = (boardId: string) => {
    removeBoard(boardId);
  };

  const handleCreateBoard = () => {
    console.log("Create board");
  };
  
  return (
     <div className="flex flex-col h-screen w-64 bg-zinc-800 text-white">
        {/* Sidebar header */}
        <div className="p-4 bg-zinc-900">
          <h1 className="text-2xl font-semibold">
            VC / <span className="text-accent-500">Taskito</span>
          </h1>
          <small className="text-gray-400">Kanban Board App</small>
        </div>
        {/* Sidebar content */}
        <div className="flex-1 p-4">
          <h2 className="text-gray-400 text-sm mb-2">My Projects </h2>
          <ul>
            {boardList.map((board) => (
              <li key={board.id} className="mb-2">
                -{" "}
                <Link
                  to={`/boards/${board.id}`}
                  className={`hover:underline underline-offset-4 ${
                    board.id === boardIdUrl ? "text-accent-500" : ""
                  }`}
                >
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
          <button className="btn btn-primary" onClick={handleCreateBoard}>
            <Link className="w-full" to="/boards/new">
              Create New Board
            </Link>
          </button>
          <button className="btn btn-primary">
            <Link className="w-full" to="/">
              Back to Welcome
            </Link>
          </button>
        </div>
      </div>
  )
}

export default Sidebar