import Cita from "./Cita";

export default function ListaCitas({ lista, onBorrarCita }) {
    return (
        <>
            {lista.map((item, index) => (
                <>
                    <Cita objeto={item} key={index} onBorrarCita={onBorrarCita} />
                </>
            ))}
        </>
    )
}
