import React from "react";

import api from '../../services/api'

export default function Header() {
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-dark azul">
      <a className="navbar-brand" href="/">
        Jhonis
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/em-breve">
              Quem Somos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/em-breve">
              Contato
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/em-breve"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Produtos
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="/em-breve">
                Roupas
              </a>
              <a className="dropdown-item" href="/em-breve">
                Acessórios
              </a>
              <a className="dropdown-item" href="/em-breve">
                Sapatos
              </a>
              <a className="dropdown-item" href="/em-breve">
                Todos os produtos
              </a>
            </div>
          </li>
          <div className="login">

            <li className="nav-item">
              <a className="button-login nav-link btn btn-primary" href="/em-breve">
                Criar Conta
              </a>
            </li>
            <li className="nav-item">
              <a className="button-login nav-link btn btn-success" href="/em-breve">
                Logar
              </a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}
