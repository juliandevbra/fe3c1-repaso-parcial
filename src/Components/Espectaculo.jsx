import React from "react";

const Espectaculo = ({ elemento, setIsSelected }) => {
  //   console.log(elemento);

  return (
    <div>
      <img src={elemento.img} alt="" />
      <h3>{elemento.artista}</h3>
      <h4>{elemento.fecha}</h4>
      <h2>${elemento.precio}</h2>
      <button onClick={() => setIsSelected({ show: elemento, status: true })}>
        Quiero ir!
      </button>
    </div>
  );
};

export default Espectaculo;
