import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListCoworkings = () => {
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

  return (
    <main>
      <h2>Les coworkings</h2>

      <section>
        {coworkings.map((coworking) => {
          return (
            <article key={coworking.id}>
              <h2>{coworking.name}</h2>
              <Link to={`/coworkings/details/${coworking.id}`}>Voir le détail du coworking</Link>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default ListCoworkings;
