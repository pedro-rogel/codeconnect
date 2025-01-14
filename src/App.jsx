import Sidebar from "./components/Sidebar";
import BarraDePesquisa from "./components/BarraDePesquisa";
import Filtro from "./components/Filtro";
import "./App.css";
import Card from "./components/Card";
import Ordenacao from "./components/Ordenacao";
import { useEffect, useState } from "react";

function App() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes"
    )
      .then((resp) => resp.json())
      .then((dados) => setDados(dados));
  }, []);

  console.log(dados);

  return (
    <div className="container">
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro Children={"Programação"} />
        <Ordenacao />
        <ul className="card-lista">
          {dados
            ? dados.map((item, index) => (
                <li key={index}>
                  <Card
                    id={item.id}
                    imgUrl={item.imagem_capa}
                    resumo={item.resumo}
                    titulo={item.titulo}
                    LinhasDeCode={item.linhas_de_codigo}
                    compartilhamentos={item.compartilhamentos}
                    comentarios={item.comentarios}
                    usuario={item.usuario}
                  />
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default App;
