import React, { useState } from "react";
// import api from '../../services/api';
// import { useHistory } from 'react-router-dom'

export default function Create() {
  return (
    <>
      <form className="login">
        <div className="data">
          <h2 className="vinheta">Faça seu Cadastro!!</h2>

          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            name="email"
            style={{ marginBottom: 20 }}
            required
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            style={{ marginBottom: 20 }}
            required
          />

          <button className="btn btn-danger py-2" type="submit">
            Entrar
          </button>
        </div>
      </form>
    </>
  );
}
