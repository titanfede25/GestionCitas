import './App.css';
import Formulario from "./components/Formulario";
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
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <Formulario onAgregarCita={AgregarCita} />
          </div>
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <ListaCitas lista={citas} onBorrarCita={BorrarCita} />    
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
