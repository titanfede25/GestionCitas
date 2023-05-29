import Input from "./Input";
import React, { useState } from "react";

export default function Formulario({ onAgregarCita }) {
    const [idState, setId] = useState(0);
    const CrearCita = (e) => {
        e.preventDefault();
        let newCita = {
            id: idState,
            NombreMascota: e.target.mascota.value,
            NombreDueno: e.target.propietario.value,
            fecha: e.target.fecha.value,
            hora: e.target.hora.value,
            sintomas: e.target.sintomas.value
        }
        setId(idState + 1)
        e.target.mascota.value = ''
        e.target.propietario.value = ''
        e.target.fecha.value = ''
        e.target.hora.value = ''
        e.target.sintomas.value = ''
        onAgregarCita(newCita);
    }
    return (
        <>
            <form onSubmit={(e) => CrearCita(e)}>
                <Input type="text" name="mascota" placeholder="Nombre de la mascota" required className="u-full-width" title="Nombre de la Mascota" />
                <Input type="text" name="propietario" placeholder="Nombre del Dueño de la Mascota" required className="u-full-width" title="Nombre del Dueño de la Mascota" />
                <Input type="date" name="fecha" className="u-full-width" title="Fecha" />
                <Input type="time" name="hora" placeholder="" className="u-full-width" title="Hora" />
                <label>Síntomas</label>
                <textarea name="sintomas" className="u-full-width"></textarea>
                <button type="submit" className="u-full-width button-primary">Añadir Cita</button>
            </form>
        </>
    )
}