import React, { useState } from "react";
import Card from "./Card";

const Form = ({ artista }) => {
  const [comprador, setComprador] = useState({
    nombre: "",
    email: "",
  });
  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);
  console.log(comprador);

  const handleSubmit = (event) => {
    event.preventDefault();
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (
      comprador.nombre.trim().length > 6 &&
      comprador.nombre.includes(" ") &&
      regexEmail.test(comprador.email)
    ) {
      setMostrar(true);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {mostrar ? (
        <Card comprador={comprador} artista={artista} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Nombre completo</label>
          <input
            type="text"
            value={comprador.nombre}
            onChange={(event) =>
              setComprador({ ...comprador, nombre: event.target.value })
            }
          />
          <label>Email: </label>
          <input
            type="email"
            value={comprador.email}
            onChange={(event) =>
              setComprador({ ...comprador, email: event.target.value })
            }
          />
          <button>Comprar entrada</button>
          {error && (
            <h4 style={{ color: "red" }}>
              Coloque la información correctamente
            </h4>
          )}
        </form>
      )}
    </div>
  );
};

export default Form;
