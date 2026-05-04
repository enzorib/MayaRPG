import {Search, Calendar1, Bell} from 'lucide-react'

export default function Header(){
    return(
        <div className="sticky top-0 w-full bg-[#FFF9F2] px-6 py-4 flex items-center justify-between">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18}/>
                <input className="w-100 pl-9 py-2 rounded-full bg-white" placeholder="Pesquisar pacientes" />
            </div>
            <div className='flex flex-row gap-4'>
                <Calendar1/>
                <Bell/>
                <div className="w-px h-8 bg-gray-300"></div> 
                <span className="text-black">Dra. Maya Yamamoto</span>
            </div>

        </div>
    )
 
}