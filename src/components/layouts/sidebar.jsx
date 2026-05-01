import { UserRoundSearch, ChartNoAxesCombined, Settings, ShieldQuestionMark, LogOut } from 'lucide-react'

    const menu = [
        { label: 'Pacientes' , icon: UserRoundSearch},
        { label: 'Funcionários', icon: ChartNoAxesCombined},
        { label: 'Configurações', icon: Settings},
    ]
    const buttonside = [
        { label: 'Suporte', icon: ShieldQuestionMark },
        { label: 'Sair', icon: LogOut},
    ]


export default function Sidebar(){
    return(
        <div className='h-screen flex flex-col w-64 bg-[#005073]'>
            {/* Topo da Side*/}
            <div className='p-6'>
                <h1 className='text-white text-2xl'>Instituto Maya </h1>
                <p className='text-[#BCC9CA]'>Clínica de RPG</p>
            </div>
            
            {/* Meio da Side*/}
            {menu.map((item)=>(
            <div className='flex items-center gap-3 px-6 py-3 text-white'>
                <item.icon/>
                <span>{item.label}</span>
            </div>
        ))}
        {/* Rodapé da Side*/}
        <div className='mt-auto mb-4'>
            <button className='w-4/5 text-white text-center px-4 py-3  bg-gradient-to-r from-[#0077a8] to-[#00a878] rounded-full mx-auto block'>Nova Consulta</button>
            <hr className='border-[#ffffff20] mx-6 my-2'/>
            {buttonside.map((item) => (
                <div className='flex items-center gap-3 px-6 py-3 text-white'>
                    <item.icon/>
                    <span>{item.label}</span>
                </div>
            ))}
        </div>  
        </div>
    )
}