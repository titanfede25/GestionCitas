import React from 'react'

export default function Cita({ objeto, index, onBorrarCita }) {
  const guardar = (nombre) => {
    onBorrarCita(nombre)
  }
  return (
    <>
      <div className="cita" key={index}>
        <p>Nombre de la Mascota: <span>{objeto.NombreMascota}</span></p>
        <p>Nombre del Dueño de la mascota: <span>{objeto.NombreDueno}</span></p>
        <p>Fecha: <span>{objeto.fecha}</span></p>
        <p>Hora: <span>{objeto.hora}</span></p>
        <p>Síntomas: <span>{objeto.sintomas}</span></p>
        <button className="button elimnar u-full-width" onClick={() => guardar(objeto.id)}>Borrar ×</button>
      </div><br></br>
    </>
  )
}
