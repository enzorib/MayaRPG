import {MoveRight } from 'lucide-react'

const consultas = [
    {horario: "9:50", paciente:"Enzo Ribeiro",tipo: "RPG", status: "Confirmado"},
    {horario: "11:50", paciente:"Bianca Roberta",tipo: "Quiropraxia", status: "Cancelado"},
    {horario: "14:10", paciente:"Rikelmy Ancieto",tipo: "RPG", status: "Aguardando"},
]



export default function Consultas(){
    return(
        <div className="bg-green-200 p-4 mx-2 rounded-3xl flex flex-col gap-3">
            <div className=" flex flex-row justify-between m-5">
               <h1 className="text-3xl">Próximas consultas</h1>
               <button className='flex flex-row items-center'>Ver Agenda <MoveRight/> </button>

            </div>
            {consultas.map((consulta) => (
                <div className="flex flex-row gap-5 bg-[#FFF666] w-full p-4 items-center rounded-3xl">
                    <h1 className="text-2xl w-16 text-center">{consulta.horario}</h1>
                    <div className="w-px h-8 bg-gray-300"></div> 
                    <div className="flex flex-col text-center flex flex-1">
                        <h2 className="text-lg">{consulta.paciente}</h2>
                        <span className="text-sm">{consulta.tipo}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full w-28 text-center ${
                        consulta.status == "Confirmado" ? "bg-green-200 text-green-800" : 
                        consulta.status == "Cancelado" ? "bg-red-200 text-red-800" :
                        consulta.status == "Aguardando" ? "bg-yellow-200 text-yellow-800" : "bg-gray-200 text-gray-800"
                    }`}>{consulta.status}</span>    
                    <button className='w-32'>Ver Relatório</button>
                </div>



            ))}


        </div>
    )
}