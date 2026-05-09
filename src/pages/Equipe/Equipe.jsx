import CardMembros from "../../components/ui/CardEquipe";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Equipe() {
  const [CardAtual, setCardAtual] = useState(0);

  const membros = [
    {
      nome: "Maya Yamamoto",
      especialidade: "Diretora Clínica",
      cargo: "admin",
      pacientes: "14",
    },
    {
      nome: "Enzo Ribeiro",
      especialidade: "Fisioterapeuta Senior",
      cargo: "fisioterapeuta",
      pacientes: "7",
    },
    { nome: "Rikelmy Nacleto", especialidade: "Assistente", cargo: "Recepção" },
    { nome: "Bianca", especialidade: "Assistente", cargo: "Recepção" },
  ];
  return (
    <div>
      <div className="flex items-center justify-between w-full bg-gray-100 p-5 h-50">
        <button
          className="w-8"
          disabled={CardAtual === 0}
          onClick={() => setCardAtual(CardAtual - 3)}
        >
          <ChevronLeft />
        </button>
        <div className="flex flex-1 gap-4">
          {membros.slice(CardAtual, CardAtual + 3).map((membro) => (
            <CardMembros
              nome={membro.nome}
              especialidade={membro.especialidade}
              cargo={membro.cargo}
              pacientes={membro.pacientes}
            />
          ))}
        </div>
        <button
          className="w-8"
          disabled={CardAtual + 3 >= membros.length}
          onClick={() => setCardAtual(CardAtual + 3)}
        >
          <ChevronRight />
        </button>
      </div>
      <div className="bg-[#FFF9F2] rounded-2xl p-6 mx-2 mt-6">
        <h2 className="text-2xl font-bold">Níveis de Acesso</h2>
        <p className="text-gray-500 text-sm mb-6">
          Perfis de permissão globais da clínica
        </p>

        <div className="flex gap-4">
          <div className="flex-1 bg-white rounded-xl p-4">
            <h3 className="font-bold mb-3">Admin</h3>
            <ul className="text-sm text-gray-600 flex flex-col gap-2">
              <li className="text-green-600">✓ Acesso total ao sistema</li>
              <li className="text-green-600">✓ Gerenciar equipe e pacientes</li>
              <li className="text-green-600">✓ Relatórios financeiros</li>
            </ul>
          </div>
          <div className="flex-1 bg-white rounded-xl p-4">
            <h3 className="font-bold mb-3">Fisioterapeuta</h3>
            <ul className="text-sm text-gray-600 flex flex-col gap-2">
              <li className="text-green-600">✓ Ver e editar seus pacientes</li>
              <li className="text-green-600">✓ Criar planos de tratamento</li>
              <li className="text-red-500">✗ Sem acesso financeiro</li>
            </ul>
          </div>
          <div className="flex-1 bg-white rounded-xl p-4">
            <h3 className="font-bold mb-3">Recepção</h3>
            <ul className="text-sm text-gray-600 flex flex-col gap-2">
              <li className="text-green-600">✓ Agendar consultas</li>
              <li className="text-green-600">✓ Ver agenda da equipe</li>
              <li className="text-red-500">✗ Sem acesso a prontuários</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
