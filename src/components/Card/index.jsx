import code from "./assets/code.svg";
import chat from "./assets/chat.svg";
import share from "./assets/share.svg";
import "./style.css";

export default function Card({id, imgUrl, resumo, titulo, LinhasDeCode, compartilhamentos, comentarios, usuario}) {
  return (
    <article className="card">
      <div className="card__image">
        <img src={imgUrl} alt="Imagem do post" />
      </div>
      <div className="card__conteudo">
        <div className="conteudo__txt">
          <h3>{titulo}</h3>
          <p>{resumo}</p>
        </div>
        <div className="conteudo__rodape">
          <ul>
            <li>
              <img src={code} alt="Icone para ver o código" />
              {LinhasDeCode}
            </li>
            <li>
              <img src={share} alt="Icone para compartilhar" />
              {compartilhamentos}
            </li>
            <li>
              <img src={chat} alt="Icone para abrir o chat da comunidade" />
              {comentarios}
            </li>
          </ul>
          <div className="rodape__usuario">
            <img src={usuario.imagem} alt="Icone de usuário" />
            {usuario.nome}
          </div>
        </div>
      </div>
    </article>
  );
}
  