import { useState } from "react";

const LoginForm = () => {
  const [message, setMessage] = useState("");

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    const loginData = {
      username: username,
      password: password,
    };

    const loginDataJson = JSON.stringify(loginData);

    fetch("http://localhost:5001/api/users/login", {
      method: "POST",
      body: loginDataJson,
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((response) => {
      if (response.status === 200) {
        setMessage("Connexion réussie");
      } else {
        setMessage("Connexion refusée");
      }
    });
  };

  return (
    <>
      <p>{message}</p>
      <form onSubmit={handleLoginSubmit}>
        <label>
          Nom de l'utilisateur
          <input name="username" type="text" />
        </label>

        <label>
          Mot de passe
          <input name="password" type="password" />
        </label>

        <input type="submit" />
      </form>
    </>
  );
};

export default LoginForm;
