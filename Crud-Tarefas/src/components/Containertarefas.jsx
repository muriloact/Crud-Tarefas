import { useState } from "react";

function Containertarefas({ id, titulo, descricao, prazo }) {

  const [itens, setItens] = useState([]);

  const handleExcluir = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/tarefaCrud-deletar/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type':'application/json'}
      });
      if (!response.ok) throw new Error("Erro na requisição");

      setItens(itens.filter(item => item.idTarefas !== id));  

    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
    }
  }

  return (
    <div className="bg-amber-200 w-3/3 max-h-60 rounded-md p-3 mb-2 flex flex-col justify-around shadow-md hover:transform-3d hover:scale-105 transition">
      <h1 className="text-lg font-bold text-center">{titulo}</h1>

      <div className="text-sm break-words whitespace-pre-line mt-3">
        <p><span className="font-semibold">Descrição:</span> {descricao}</p>
      </div>

      <p className="text-sm break-words whitespace-pre-line mt-1">
        <span className="font-semibold">Prazo:</span> {prazo}
      </p>

      <button className=" bg-red-500 text-white rounded-md h-8 mt-3 hover:text-black hover:bg-red-800 transition-colors" onClick={() => handleExcluir(id)}>
        Excluir
      </button>
    </div>
  );
}

export default Containertarefas;
