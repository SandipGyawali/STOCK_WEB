import { Link } from "react-router-dom";

function NavLink({ path, name }) {
  return (
    <>
      <li className=" link-login nav-link">
        <Link to={`${path}`}>{name}</Link>
      </li>
    </>
  );
}

export default NavLink;
