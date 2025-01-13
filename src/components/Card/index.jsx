import "./style.css";
import capa from "./assets/Code editor.png";
import code from "./assets/code.svg";
import chat from "./assets/chat.svg";
import share from "./assets/share.svg";
import profile from "./assets/Ellipse 1.png";

export default function Card() {
  return (
    <article className="card">
      <div className="card__image">
        <img src={capa} alt="Imagem do post" />
      </div>
      <div className="card__conteudo">
        <div className="conteudo__txt">
          <h3>Titulo do post</h3>
          <p>Resumo do post</p>
        </div>
        <div className="conteudo__rodape">
          <ul>
            <li>
              <img src={code} alt="Icone para ver o código" />
              100
            </li>
            <li>
              <img src={share} alt="Icone para compartilhar" />
              12
            </li>
            <li>
              <img src={chat} alt="Icone para abrir o chat da comunidade" />
              10
            </li>
          </ul>
          <div className="rodape__usuario">
            <img src={profile} alt="Icone de usuário" />
            pedro
          </div>
        </div>
      </div>
    </article>
  );
}
