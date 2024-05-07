import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/admin/">Dashboard</Link>
            <Link to="/admin/coworkings">Gérer les coworkings</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AdminHeader;
