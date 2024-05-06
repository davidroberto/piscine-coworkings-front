import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailsCoworking = () => {
  const { id } = useParams();

  const [coworking, setCoworking] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/api/coworkings/" + id, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((coworkingData) => {
        setCoworking(coworkingData.data);
      });
  }, []);

  return (
    <main>
      <h1>Détail du coworking : </h1>

      {coworking ? (
        <>
          <h2>{coworking.name}</h2>
          <p>Prix : </p>

          <ul>
            <li>{coworking.price.day} e par jour</li>
            <li>{coworking.price.hour} e par heure</li>
            <li>{coworking.price.month} e par mois</li>
          </ul>

          <p>Adresse :</p>

          <p>
            {coworking.address.number} {coworking.address.street} {coworking.address.postCode} {coworking.address.city}
          </p>
        </>
      ) : (
        <h2>Coworking non trouvé</h2>
      )}
    </main>
  );
};

export default DetailsCoworking;
