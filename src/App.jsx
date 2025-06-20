import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 } from "uuid";

function App() {
  //STATE
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tarefas")) || []);

  //executa a primeira funcao, sempre que o valor da lista for alterada
  useEffect(() =>{
    localStorage.setItem("tarefas", JSON.stringify(tasks))
  }, [tasks])

  function tarefaClicada(tasksId) {
    const novaTask = tasks.map((task) => {
      if (task.id === tasksId) {
        return { ...task, completa: !task.completa };
      }

      return task;
    });

    setTasks(novaTask);
  }

  function adicionarTarefa(titulo, descricao) {
    const novaTarefa = {
      id: tasks.length + 1,
      titulo: titulo,
      descricao: descricao,
      completa: false,
    };
    setTasks([...tasks, novaTarefa]);
  }

  function excluirTarefa(taskId) {
    const novaTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(novaTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTasks adicionarTarefa={adicionarTarefa} tasks={tasks} />
        <Tasks
          tasks={tasks}
          tarefaClicada={tarefaClicada}
          excluirTarefa={excluirTarefa}
        />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
