import { useState } from "react";
import "./App.css";
import Espectaculo from "./Components/Espectaculo";
import { espectaculos } from "./espectaculos";
import Form from "./Components/Form";

function App() {
  const [isSelected, setIsSelected] = useState({
    show: null,
    status: false,
  });
  return (
    <>
      {isSelected.status ? <Form artista={isSelected.show} /> : null}
      {espectaculos.map((elemento) => {
        return (
          <Espectaculo
            key={elemento.id}
            setIsSelected={setIsSelected}
            elemento={elemento}
          />
        );
      })}
    </>
  );
}

export default App;

//Componentes
//Props
//Estados
//Eventos
//Formularios
//Map
