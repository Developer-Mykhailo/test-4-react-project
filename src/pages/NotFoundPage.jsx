import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Link to="/">Back to Home</Link>

      <h1>404 - Page is not found</h1>
    </div>
  );
};

export default NotFound;
