import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const tituloParam = searchParams.get("titulo");
  const descricaoParam = searchParams.get("descricao");
  const navegacao = useNavigate()

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative m-6">
            <button onClick={()=> navegacao(-1)} className="absolute left-0 top-0 bottom-0 text-slate-100">
                <ChevronLeftIcon></ChevronLeftIcon>
            </button>
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Detalhes das tarefas
        </h1>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-1xl text-slate-900 font-bold ">Titulo da tarefa:</h2>
          <h3 className="text-2xl text-slate-600 font-bold mb-4">{tituloParam}</h3>
          <h2 className="text-1xl text-zinc-900 font-bold ">Descrição da tarefa:</h2>
          <p className="text-1xl text-slate-600 font-bold mb-4">{descricaoParam}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
