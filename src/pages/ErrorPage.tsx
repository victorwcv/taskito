import { useNavigate } from "react-router"


const ErrorPage = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <button className="btn btn-primary" onClick={() => navigate(-1)}>Get back</button>
      <button className="btn btn-primary" onClick={() => navigate("/")}>Back to Home</button>
    </div>
  )
}

export default ErrorPage