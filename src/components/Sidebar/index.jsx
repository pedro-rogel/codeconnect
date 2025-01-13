import React from "react";
import Logo from "./assets/Logo.svg";
import Feed from "./assets/feed.svg";
import Perfil from "./assets/account_circle.svg";
import Sb from "./assets/info.svg";
import Logout from "./assets/logout.svg";
import './style.css';
export default function index() {
  return (
    <>
      <aside>
        <img src={Logo} alt="Logo Codeconnect" />
        <nav>
          <ul className="lista-sidebar">
            <li>
              <a href="#" className="item__link--publicacao">Publicar</a>
            </li>
            <li>
              <a href="#" className="iten__link item__link--ativo" >
                <img src={Feed} alt="" />
                <span>Feed</span>
              </a>
            </li>
            <li>
              <a href="#" className="iten__link">
                <img src={Perfil} alt="" />
                <span>Perfil</span>
              </a>
            </li>
            <li>
              <a href="#" className="iten__link">
                <img src={Sb} alt="" />
                <span>Sobre nós</span>
              </a>
            </li>
            <li>
              <a href="#" className="iten__link">
                <img src={Logout} alt="" />
                <span>Sair</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
