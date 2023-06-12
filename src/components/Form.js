import React, { useState } from "react";

function Input({ type, name, placeholder = "", title }) {
    return (
      <>
        <label>{title}</label>
        <input type={type} name={name} required className="u-full-width" placeholder={placeholder} />
      </>
    )
  }

export default function Form({ onAgregarCita }) {
    const [idState, setId] = useState(0);
    const CrearCita = (event) => {
        event.preventDefault();
        let newCita = {
            id: idState,
            NombreMascota: event.target.mascota.value,
            NombreDueno: event.target.propietario.value,
            fecha: event.target.fecha.value,
            hora: event.target.hora.value,
            sintomas: event.target.sintomas.value
        }
        setId(idState + 1)
        event.target.mascota.value = ''
        event.target.propietario.value = ''
        event.target.fecha.value = ''
        event.target.hora.value = ''
        event.target.sintomas.value = ''
        onAgregarCita(newCita);
    }
    return (
        <>
            <form onSubmit={(event) => CrearCita(event)}>
                <div>
                <Input type="text"  name="mascota" placeholder="Nombre de la mascota"  className="u-full-width"  title="Nombre de la Mascota" />
                </div>
                <Input type="text"  name="propietario" placeholder="Nombre del Dueño de la Mascota"  className="u-full-width" title="Nombre del Dueño de la Mascota" />
                <Input type="date" name="fecha"  className="u-full-width" title="Fecha" />
                <Input type="time" name="hora" placeholder=""  className="u-full-width" title="Hora" />
                <label>Síntomas</label>
                <textarea name="sintomas" required className="u-full-width"></textarea>
                <button type="submit" className="u-full-width button-primary">Añadir Cita</button>
            </form>
        </>
    )
}



      