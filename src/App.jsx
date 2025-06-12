import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";

function App() {
  //STATE
  const [tasks, setTasks] = useState([
    {
      id: 1,
      titulo: "Estudar programação",
      descricao: "Estudar react",
      completa: false,
    },
    {
      id: 2,
      titulo: "Fazer compras",
      descricao: "Comprar arroz, feijao, legumes e carnes para a dieta",
      completa: false,
    },
    {
      id: 3,
      titulo: "Ir pra academia",
      descricao: "Treinar pra ficar gostoso",
      completa: false,
    },
    
  ]);

  function tarefaClicada(tasksId){
    const novaTask = tasks.map(task =>{
      if(task.id === tasksId){
        return {...task, completa: !task.completa}
      }

      return task
    })

    setTasks(novaTask)

  }

  function excluirTarefa(taskId){
    const novaTasks = tasks.filter(task => task.id !== taskId);
    setTasks(novaTasks);
}


  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTasks />
        <Tasks tasks={tasks} tarefaClicada={tarefaClicada} excluirTarefa={excluirTarefa} />
      </div>
    </div>
  );
}

export default App;
