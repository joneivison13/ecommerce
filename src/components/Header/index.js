import React from "react";

export default function Header() {
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-dark azul">
      <a className="navbar-brand" href="/em-breve">
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
          <li className="nav-item">
            <a className="nav-link" href="/user">
              Sua Conta
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
          <li className="nav-item mx-3 my-1 btn btn-success">
            <a className="dark" href="/create">
            Crie sua conta
              
            </a>
          </li>
          <li className="nav-item my-1 btn btn-primary mx-3">
            <a className="dark" href="/cadastro">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
