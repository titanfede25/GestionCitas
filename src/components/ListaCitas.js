import Cita from "./Cita";

export default function ListsCitas({ lista, onBorrarCita }) {
    return (
        <>
            {lista.map((item, index) => (
                <>
                    <Cita obj={item} key={index} onBorrarCita={onBorrarCita} />
                </>
            ))}
        </>
    )
}
