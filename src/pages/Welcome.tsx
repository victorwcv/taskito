import { Link } from "react-router";

const Welcome = () => {
  return (
    <div className="relative hero bg-base-200 min-h-screen bg-[url('/welcome-bg.webp')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className={"flex justify-center items-center gap-16 z-10"}>
        <div className="max-w-md text-white">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Welcome to Taskito - Kanban Board. Here you can create and manage your tasks in a simple
            and efficient way. Get started by creating a new board.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/boards/new" className="btn btn-primary" >
              Get Started
            </Link>
          </div>
        </div>
        <div className="text-center"></div>
      </div>
    </div>
  );
};

export default Welcome;
