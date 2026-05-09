export default function CardMembros(props){
    return(
        <div className="flex  flex-col w-1/3 bg-white rounded-xl p-4 shadow-sm h-40">
            <div >
                <h1>{props.nome}</h1>
                <span>{props.especialidade}</span>
            </div>
            <span>{props.cargo}</span>
            {props.cargo !== "Recepção" && (
                <div>
                    <span>Pacientes:</span>
                    <h2>{props.pacientes}</h2>
                </div>
            )}
        </div>

    )
}