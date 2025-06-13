import { Check } from "lucide-react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function AddTasks(props) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const notificaErro = () => {
    toast.error("Você não pode inserir uma tarefa vazia! 😉");
  };
  const notificaCriacaoTarefa = () => {
    toast.success("Tarefa criada! 🚀");
  };

  return (
    <div className=" space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Nome da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)} //aqui estou dizendo que quando for digitar, vou atualizar o valor do state com o que for digitado no input
      ></input>

      <input
        type="text"
        placeholder="Descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={descricao}
        onChange={(event) => setDescricao(event.target.value)}
      ></input>

      <button
        className="bg-slate-500 px-4 py-2 text-white rounded-md font-medium flex items-center justify-center"
        onClick={() => {
          //VALIDACAO PARA TAREFA VAZIA
          if (titulo.trim() && descricao.trim()) {
            props.adicionarTarefa(titulo, descricao);
            notificaCriacaoTarefa();
            setTitulo(""); // Limpa o campo de título
            setDescricao(""); // Limpa o campo de descrição
          } else {
            notificaErro(); // Exibe a notificação de erro
          }
        }}
      >
        Adicionar Tarefa
        <Check className="ml-2" />
      </button>
    </div>
  );
}

export default AddTasks;
