import Stats from "../../components/ui/StatsCards";
import Acoes from "../../components/ui/AcoesRapidas";
import Consultas from "../../components/ui/Consultas";

export default function Dashboard(){
    return(
        <div className="px-1">
            <div className="grid grid-cols-2 md:grid-cols-4 w-auto gap-4 my-6 mx-4">
                <Stats label="Atendimento do dia" valor="7"/>
                <Stats label="Pacientes ativos" valor="24"/>
                <Stats label="Cancelamento do dia" valor="0"/>
                <Stats label="Planos vencendo" valor="3"/>
            </div>
             <div>
                    <Acoes/>
            </div>
            <div className="grid grid-col-[3fr_1fr]"><Consultas/></div>

        </div>




    )
}