//UserPage.jsx

import {
  Link,
  NavLink,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";
import { getUserById } from "../data/fakeApi";
import clsx from "clsx";
import s from "../components/Navigation/Navigation.module.css";

const UserPage = () => {
  const { id } = useParams();
  const user = getUserById(String(id));
  const navigate = useNavigate();

  if (!user) {
    return (
      <div>
        <Link to="/users">Back</Link>
        <h2>Користувача з ID {id} не знайдено</h2>
      </div>
    );
  }

  const { name, descr } = user;

  //jsx
  return (
    <div>
      <button onClick={() => navigate(-1)}>Go Back</button>

      <h2>{name}</h2>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, eius.
        Praesentium harum nesciunt, similique perferendis fugit sint. Quas,
        similique cum. <span>{descr}</span>
      </p>
      <br />
      <br />

      <nav className={s.nav}>
        <NavLink
          to="profile"
          className={({ isActive }) => clsx(s.link, isActive && s.accent)}
        >
          Profile
        </NavLink>
        <NavLink
          to="posts"
          className={({ isActive }) => clsx(s.link, isActive && s.accent)}
        >
          Posts
        </NavLink>
        <NavLink
          to="settings"
          className={({ isActive }) => clsx(s.link, isActive && s.accent)}
        >
          Settings
        </NavLink>
        <NavLink to={`/users/${id}`} className={s.link}>
          Close
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default UserPage;
