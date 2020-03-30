import React, { Component } from 'react';
import {FaGithub, FaFacebook, FaWhatsapp} from 'react-icons/fa'

export default class Footer extends Component {
    render() {
        return (
            <>
            <div className="footer">
                <ul className="redes-sociais">
                    <h2>Contatos</h2>
                    <li> <FaGithub size={20} color='#000'/> GitHub : <a href="https://github.com/joneivison13" target="_blank" rel="noopener noreferrer"> Joneivison13 </a></li>

                    <li><FaFacebook size={20} color="rgb(0, 0, 170)"/> Facebook: <a href="https://facebook.com/joneivison.oliveira" target="_blank" rel="noopener noreferrer">Joneivison Oliveira</a></li>

                    <li><FaWhatsapp size={20} color="rgb(0, 250, 0)"/> Whatsapp : <a href="https://api.whatsapp.com/send?phone=5573999553301" target="_blank" rel="noopener noreferrer">(73) 99955-3301</a></li>
                </ul>

                <ul className="docs">
                    <h2>Documentação</h2>
                    <li>Front-end feito em 100% <b><a href="https://pt-br.reactjs.org/" target="_blank" rel="noopener noreferrer">React.js</a></b></li>
                    <li>Backend (em produção) feito em <b><a href="https://nodejs.org/pt-br/docs/" target="_blank" rel="noopener noreferrer">Node.js </a></b>
                    e <b><a href="https://expressjs.com/pt-br/" target="_blank" rel="noopener noreferrer">Express</a></b></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
                <span>
                    <p className="sub-footer">
                        Todos os direitos reservados
                    </p>
                </span>
            </>
        )
    }
}
