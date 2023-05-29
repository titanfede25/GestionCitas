import './App.css';
import Form from "./components/Form";
import ListaCitas from "./components/ListaCitas";
import React, { useState } from "react";

function App() {
  const [citas, setCitas] = useState([]);
  const AgregarCita = (newCita) => {
    setCitas(
      [
        ...citas,
        newCita,
      ]
    );
  }
  const BorrarCita = (idABorrar) => {
    let newArr = citas;
    newArr = newArr.filter(objeto => objeto.id !== idABorrar);
    setCitas(newArr)
  }
  return (
    <>
      <h1>Administrador de Citas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear una cita</h2>
            <Form onAgregarCita={AgregarCita} />
          </div>
          <div className="one-half column">
            <h2>Citas</h2>
            <ListaCitas lista={citas} onBorrarCita={BorrarCita} />    
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
