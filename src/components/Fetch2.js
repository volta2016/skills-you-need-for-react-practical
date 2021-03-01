import { useEffect, useState } from "react";
//Para extraer el contenido en el cuerpo del JSON desde la respuesta, usamos el método json()
//que lo pasa a formato json

export const Fetch = () => {
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/reedbarger")
      .then((response) => response.json())
      .then((data) => setAvatar(data.avatar_url))
      .cath((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <img src={avatar} alt="Reed Barger" />
  );
};
