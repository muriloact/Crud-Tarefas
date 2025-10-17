import Navbar from "../components/Navbar";
import { useState } from "react";

function Criar() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [prazo, setPrazo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://127.0.0.1:5000/api/tarefaCrud-criar', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({titulo,descricao,prazo})
      });

      if (!response.ok) throw new Error("Erro na requisição");
      
      const data = await response.json();

      console.log(data);

      setTitulo("");
      setDescricao("");
      setPrazo("");

      alert("Tarefa criada com sucesso!");
      
    } catch (err) {

      console.error(err);

      alert("Erro ao criar tarefa.");

    }
  };

  return (
    <div className="">
      <Navbar />
      <div className="bg-blue-200 w-screen h-lvh flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md flex flex-col items-center shadow-md">
          <div className="mb-4">
            <h1 className="text-2xl font-bold">Criar Nova Tarefa</h1>
          </div>
          <input type="text" placeholder="Título" onChange={ (e)=>{ setTitulo(e.target.value)}} className="mb-4 p-2 rounded-md w-64 border-1"/> 
          <br />
          <textarea placeholder="Descrição" onChange={ (e)=>{ setDescricao(e.target.value)}} className="mb-4 p-2 rounded-md w-64 h-32 border-1"></textarea>
          <br />
          <input type="date" onChange={ (e)=>{ setPrazo(e.target.value)}} className="mb-4 p-2 rounded-md w-64 border-1"/>
          <br />
          <button type="submit" className="bg-amber-200 p-2 rounded-md w-64 hover:bg-amber-300 transition-colors">Criar Tarefa</button> 
        </form>
      </div>
    </div>
  )
}

export default Criar;
