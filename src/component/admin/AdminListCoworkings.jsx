import { useState, useEffect } from "react";
import AdminHeader from "./AdminHeader";
import { Link } from "react-router-dom";

const AdminListCoworkings = () => {
  const [coworkings, setCoworkings] = useState([]);

  const [needsRefresh, setNeedRefresh] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5001/api/coworkings", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((coworkingsData) => {
        setCoworkings(coworkingsData.data);
      });
  }, [needsRefresh]);

  const handleDeleteCoworking = (event, coworkingId) => {
    fetch("http://localhost:5001/api/coworkings/" + coworkingId, {
      method: "DELETE",
      credentials: "include",
    }).then((response) => {
      setNeedRefresh(!needsRefresh);
    });
  };

  return (
    <>
      <AdminHeader />

      <main>
        <h2>Les coworkings</h2>

        <Link to="/admin/coworkings/create">Créer un coworking</Link>

        <section>
          {coworkings.map((coworking) => {
            return (
              <article key={coworking.id}>
                <h2>{coworking.name}</h2>
                <button onClick={(event) => handleDeleteCoworking(event, coworking.id)}>Supprimer</button>
                <Link to={`/admin/coworkings/${coworking.id}/update`}>Modifier</Link>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default AdminListCoworkings;
