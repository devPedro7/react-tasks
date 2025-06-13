import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Tasks(props) {
  const params = useNavigate();
  const excluirMessage = () => {
    toast.error("Tarefa excluída! 🚮")
  };

  function verDetalhesTarefa(task) {

    const query = new URLSearchParams()
    query.set("titulo", task.titulo)
    query.set("descricao", task.descricao)
    params(
      `/detalhes-tarefa?${query.toString()}`
    );
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.tarefaClicada(task.id)}
            className={`bg-slate-400 w-full text-white p-2 rounded-md text-left ${
              task.completa && "line-through"
            }`}
          >
            {task.titulo}
          </button>

          <button
            onClick={() => verDetalhesTarefa(task)}
            className="bg-slate-400 p-2 text-white rounded-md"
          >
            <ChevronRightIcon></ChevronRightIcon>
          </button>

          <button
            onClick={()=>{
              props.excluirTarefa(task.id)
              excluirMessage()
            }}
            className="bg-red-800 p-2 text-white rounded-md"
          >
            <TrashIcon></TrashIcon>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
