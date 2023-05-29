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
      <h1>Patient Manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Create My Date</h2>
            <Formulario onAgregarCita={AgregarCita} />
          </div>
          <div className="one-half column">
            <h2>Create My Date</h2>
            <ListaCitas lista={citas} onBorrarCita={BorrarCita} />    
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
