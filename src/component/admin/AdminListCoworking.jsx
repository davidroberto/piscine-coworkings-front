import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const AdminListCoworkings = () => {
  const [coworkings, setCoworkings] = useState([]);

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
  }, []);

  const handleDeleteCoworking = (event, coworkingId) => {
    // le cookie est envoyé avec la requête automatiquement
    // car il a été créé lors de la connexion
    // et le serveur a renvoyé un cookie avec la réponse
    fetch(`http://localhost:5001/api/coworkings/${coworkingId}`, {
      method: "DELETE",
    });
  };

  return (
    <main>
      <h2>Les coworkings</h2>

      <section>
        {coworkings.map((coworking) => {
          return (
            <article key={coworking.id}>
              <h2>{coworking.name}</h2>
              <button onClick={(event) => handleDeleteCoworking(event, coworking.id)}>Delete</button>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default AdminListCoworkings;
