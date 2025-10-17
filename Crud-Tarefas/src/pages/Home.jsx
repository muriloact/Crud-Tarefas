import iconPesquisa from '../icon/loupe.png'
import Navbar from '../components/Navbar'
import Containertarefas from '../components/Containertarefas'
import { useEffect, useState} from 'react'


function Home() {

  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(true);

  function converterData(dataString) {
    const data = new Date(dataString);
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  useEffect(() => {
    const handleTarefas = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/tarefaCrud', {
          method: 'GET',
          headers: {'Content-Type':'application/json'}
        });
        if (!response.ok) throw new Error("Erro na requisição");

        const data = await response.json();

        const containerTarefas = data.map((tarefa) => (
          {
            idTarefas: tarefa.idtarefas,
            tituloTarefas: tarefa.tituloTarefas,
            conteudoTarefas: tarefa.conteudoTarefas,
            prazoTarefas: converterData(tarefa.prazoTarefas)
          }
        ));

        setItens(containerTarefas);
        setInterval(() => {
          setLoading(false);
        }, 800);

      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      }
    };

    handleTarefas();
  }, []);

  return (
    loading ? <div className='flex justify-center items-center w-screen h-lvh'><h1 className='text-gray-600 text-xl'>Carregando tarefas...</h1></div> :
    <div className='flex justify-center items-center flex-col max-w-auto'>
      <div className=''>
        <Navbar />
      </div>
      <div className=' bg-blue-200 w-screen h-lvh items-center flex flex-col gap-4 p-8'>
        <div className='w-screen flex justify-center flex-row text-gray-600 mb-8 items-center gap-1'>
          <input type="text" className='p-2 rounded-md h-6/6 bg-amber-50' placeholder='Digite o título da sua lista...' />
          <button className='bg-amber-50 p-3.5 rounded-md text-sm hover:bg-amber-100'><img src={iconPesquisa} alt="" className='' /></button>
        </div>

        <div className='bg-white w-8/8 h-full grid grid-cols-1 gap-4 rounded-md p-4 overflow-y-scroll -scroll'>
          {itens.map((item) => (
            <Containertarefas key={item.idTarefas} id={item.idTarefas} titulo={item.tituloTarefas} descricao={item.conteudoTarefas} prazo={item.prazoTarefas} />
          ))}

        </div>

      </div>

    </div>

  )
}
export default Home;