import Sidebar from "./components/Sidebar";
import BarraDePesquisa from "./components/BarraDePesquisa";
import Filtro from "./components/Filtro";
import "./App.css";
import Card from "./components/Card";
import Ordenacao from "./components/Ordenacao";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro Children={'Programação'}/>
        <Ordenacao />
        <Card/>
      </div>
    </div>
  );
}

export default App;
