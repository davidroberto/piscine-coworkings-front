import { useVerifyToken } from "../../utils/authGuard";
import AdminHeader from "./AdminHeader";

const AdminCreateCoworking = () => {
  useVerifyToken();

  const handleCreateCoworking = (event) => {
    event.preventDefault();

    // je récupère tous les champs de price, je créé un objet avec
    // et je le transforme en json (parce que le back stocke le prix en json)
    const price = {
      month: parseInt(event.target.priceMonth.value),
      day: parseInt(event.target.priceDay.value),
      hour: parseInt(event.target.priceHour.value),
    };

    // je récupère tous les champs d'adresse, je créé un objet avec
    // et je le transforme en json (parce que le back stocke l'adresse en json)
    const address = {
      number: event.target.number.value,
      street: event.target.street.value,
      postCode: event.target.postCode.value,
      city: event.target.city.value,
    };

    // je veux envoyer des données classiques + un fichier, donc je passe
    // par un FormData plutôt qu'un envoie en JSON classique
    const formData = new FormData();

    // j'ajoute dans le form data toutes les données, y compris l'image
    formData.append("name", event.target.name.value);
    formData.append("price", JSON.stringify(price));
    formData.append("address", JSON.stringify(address));
    formData.append("superficy", event.target.superficy.value);
    formData.append("capacity", event.target.capacity.value);

    formData.append("image", event.target.image.files[0]);

    // je poste mon formData, en ne specifiant pas qu'on envoie
    // du json car on envoie un Form Data
    fetch("http://localhost:5001/api/coworkings/withImg", {
      method: "POST",
      body: formData,
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Coworking créé", data);
      });
  };

  return (
    <>
      <AdminHeader />
      <h2>Créer un coworking</h2>

      <form onSubmit={handleCreateCoworking}>
        <div>
          <label>
            Nom
            <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Prix à l'heure
            <input type="text" name="priceHour" />
          </label>
        </div>
        <div>
          <label>
            Prix au jour
            <input type="text" name="priceDay" />
          </label>
        </div>
        <div>
          <label>
            Prix au mois
            <input type="text" name="priceMonth" />
          </label>
        </div>
        <div>
          <label>
            Numéro de rue
            <input type="number" name="number" />
          </label>
        </div>
        <div>
          <label>
            Rue
            <input type="text" name="street" />
          </label>
        </div>
        <div>
          <label>
            Code postal
            <input type="text" name="postCode" />
          </label>
        </div>
        <div>
          <label>
            Ville
            <input type="text" name="city" />
          </label>
        </div>
        <div>
          <label>
            Superficie
            <input type="number" name="superficy" />
          </label>
        </div>
        <div>
          <label>
            Capacité
            <input type="number" name="capacity" />
          </label>
        </div>

        <label>
          Image
          <input type="file" name="image" />
        </label>

        <input type="submit" value="Créer" />
      </form>
    </>
  );
};

export default AdminCreateCoworking;
