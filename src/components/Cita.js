import React from 'react'

export default function Cita({ obj, index, onBorrarCita }) {
  const guardar = (nom) => {
    onBorrarCita(nom)
  }
  return (
    <>
      <div className="cita" key={index}>
        <p>Nombre de la Mascota: <span>{obj.NombreMascota}</span></p>
        <p>Nombre del Dueño de la mascota: <span>{obj.NombreDueno}</span></p>
        <p>Fecha: <span>{obj.fecha}</span></p>
        <p>Hora: <span>{obj.hora}</span></p>
        <p>Síntomas: <span>{obj.sintomas}</span></p>
        <button className="button elimnar u-full-width" onClick={() => guardar(obj.id)}>Borrar ×</button>
      </div><br></br>
    </>
  )
}
