//Users.jsx

import { Link } from "react-router-dom";
import s from "./Users.module.css";
import { users } from "../../data/fakeApi";
import { useState } from "react";

const Users = () => {
  //state
  const [userName, setUserName] = useState("");

  //filter
  const visibleUsers = users.filter((el) =>
    el.name.toLowerCase().includes(userName.toLowerCase())
  );

  // jsx
  return (
    <div className={s.users}>
      <Link to="/">Back</Link>
      <br />
      <br />

      <input
        type="text"
        name="name"
        placeholder="Enter user's name"
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <br />

      <ul>
        {visibleUsers.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
