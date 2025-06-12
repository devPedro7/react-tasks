import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks(props) {
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

          <button className="bg-slate-400 p-2 text-white rounded-md">
            <ChevronRightIcon></ChevronRightIcon>
          </button>

          <button
            onClick={() => props.excluirTarefa(task.id)}
            className="bg-slate-400 p-2 text-white rounded-md"
          >
            <TrashIcon></TrashIcon>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
