import React from "react";

const Card = ({ comprador, artista }) => {
  // console.log(props)
  return (
    <div>
      <h3>Gracias, {comprador.nombre}!</h3>
      <h4>
        En tu casilla de email te enviamos tu entrada para {artista.artista}
      </h4>
    </div>
  );
};

export default Card;
