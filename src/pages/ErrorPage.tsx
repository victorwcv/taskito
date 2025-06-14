import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-8xl font-bold">Error 404</h1>
      <p className="text-lg text-gray-600">Page not found</p>
      <div className="flex gap-4 mt-4">
        <button className="btn btn-primary" onClick={() => navigate(-1)}>
          Get back
        </button>
        <button className="btn btn-primary" onClick={() => navigate("/boards")}>
          Back to boards
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
