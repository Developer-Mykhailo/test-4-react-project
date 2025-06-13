//Users.jsx

import { Link } from "react-router-dom";
import s from "./Users.module.css";
import { users } from "../../data/fakeApi";

const Users = () => {
  return (
    <div className={s.users}>
      <Link to="/">Back</Link>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>User {user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
