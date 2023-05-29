import React from 'react'

export default function Cita({ obj, index, onBorrarCita }) {
  const guardar = (nom) => {
    onBorrarCita(nom)
  }
  return (
    <>
      <div className="cita" key={index}>
        <p>Mascota: <span>{obj.nomMascota}</span></p>
        <p>Dueño: <span>{obj.nomDueno}</span></p>
        <p>Fecha: <span>{obj.fecha}</span></p>
        <p>Hora: <span>{obj.hora}</span></p>
        <p>Sintomas: <span>{obj.sintomas}</span></p>
        <button className="button elimnar u-full-width" onClick={() => guardar(obj.id)}>Eliminar ×</button>
      </div><br></br>
    </>
  )
}
