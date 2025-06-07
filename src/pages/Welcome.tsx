import CreateBoardForm from "@/components/CreateBoardForm";
import { useState } from "react";
import { Link } from "react-router";

const Welcome = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className={"flex justify-center items-center gap-16"}>
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Welcome to Taskito - Kanban Board. Here you can create and manage your tasks in a simple
            and efficient way. Get started by creating a new board.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/home">
              <button type="button" className="btn btn-primary">
                Go to Home
              </button>
            </Link>
            <button className="btn btn-primary" onClick={() => setShowForm(true)}>
              Get Started
            </button>
          </div>
        </div>
        <div className="text-center">
       {showForm && <CreateBoardForm />} 
        </div>
          
      </div>
    </div>
  );
};

export default Welcome;
