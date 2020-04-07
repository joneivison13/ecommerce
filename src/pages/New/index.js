import React from "react";
// import api from "../../services/api";
// import { useHistory } from "react-router-dom";

export default function Cadastro() {
  return (
    <>
      <div className="formulario1">
        <form className="form">
          <div className="data">
            <h2
              style={{ marginBottom: 30, textAlign: "center", color: "#fff" }}
            >
              Faça seu Login
            </h2>

            <label htmlFor="name">Nome</label>
            <input
              className="input"
              type="text"
              name="name"
              style={{ marginBottom: 20 }}
              required
            />

            <label htmlFor="email">E-Mail</label>
            <input
              className="input"
              type="email"
              name="email"
              style={{ marginBottom: 20 }}
              required
            />

            <label htmlFor="name">Endereço</label>
            <input
              className="input"
              type="text"
              name="name"
              style={{ marginBottom: 20 }}
              required
            />

            <label htmlFor="name">Cidade</label>
            <input
              className="input"
              type="text"
              name="name"
              style={{ marginBottom: 20 }}
              required
            />

            <label htmlFor="name">UF</label>
            <input
              className="input"
              type="text"
              name="name"
              style={{ marginBottom: 20 }}
            />

            <label htmlFor="password">Senha</label>
            <input
              className="input"
              type="password"
              name="password"
            />

            <small
              style={{
                textAlign: "center",
                marginTop: 20,
                marginBottom: 20,
                fontSize: 16,
              }}
            >
              <a style={{ textDecoration: "underline" }} href="/cadastro">
                Já tenho CONTA
              </a>
            </small>

            <button type="submit" className="btn btn-success">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
