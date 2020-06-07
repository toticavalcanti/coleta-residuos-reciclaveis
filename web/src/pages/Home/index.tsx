import React from 'react';
import {  } from 'react-icons/fi'
import './style.css';
import logo from '../../assets/logo.svg';

const Home = () => {
    return(
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Ecoleta"/>
                </header>

                <main>
                    <h1>Seu mercado de coleta de resíduos.</h1>
                    <p>Ajudamos pessoas a encontrar pontos de coleta de forma eficiente.</p>
                    <a href="/cadastro">
                        <span>></span>
                        <strong>Cadastre um ponto de coleta</strong>
                    </a>
                </main>
            </div>
        </div>
    );
}

export default Home;