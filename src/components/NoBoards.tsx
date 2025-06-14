import { Link } from "react-router-dom";

export const NoBoards = () => {

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <h2 className="text-2xl font-semibold mb-2">No boards yet</h2>
      <p className="text-gray-500 mb-6">
        Start by creating your first board to organize your tasks.
      </p>
      <Link to="/boards/new" className="btn btn-primary ">
        + Create Board
      </Link>
    </div>
  );
};