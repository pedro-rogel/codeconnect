import { useState } from "react";
import "./style.css";
export default function index() {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  console.log(termoPesquisa)

  return (
    <input
      type="search"
      placeholder="Digite o que você procura"
      className="barra-pesquisa"
      value={termoPesquisa}
      onChange={(e) => setTermoPesquisa(e.target.value)}
    />
  );
}
