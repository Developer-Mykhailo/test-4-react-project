//UserPage.jsx

import { Link, useParams } from "react-router-dom";
import { getUserById } from "../data/fakeApi";

const UserPage = () => {
  const { id } = useParams();
  const { name, descr } = getUserById(id);

  return (
    <div>
      <Link to="/users">Back</Link>

      <h2>User name: {name}</h2>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, eius.
        Praesentium harum nesciunt, similique perferendis fugit sint. Quas,
        similique cum. <span>{descr}</span>
      </p>
    </div>
  );
};

export default UserPage;
