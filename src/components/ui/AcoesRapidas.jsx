import{UserRoundPlus, Newspaper,Dumbbell,Archive} from 'lucide-react'

const acoes = [
    {label: "Novo Paciente", icon: UserRoundPlus},
    {label: "Criar Relatório", icon: Newspaper},
    {label: "Novo Treino", icon: Dumbbell},
    {label: "Arquivados", icon: Archive},
]

export default function Acoes(){
    return(
        <div className='flex flex-row gap-4'>
            {acoes.map((acao) => (
            <div className='bg-gray-400 rounded-xl flex flex-col items-center p-4 flex-1 hover:bg-black hover:text-white cursor-pointer transition-colors m-4'>
                <acao.icon size={24}/>
                <span>{acao.label}</span>

            </div>
            
            
            
            ))}
        </div>
    )
}