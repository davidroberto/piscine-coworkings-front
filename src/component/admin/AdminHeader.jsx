import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("access_token");

    navigate("/login");
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/admin/">Dashboard</Link>
            <Link to="/admin/coworkings">Gérer les coworkings</Link>
            <button onClick={handleLogout}>Se déconnecter</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AdminHeader;
