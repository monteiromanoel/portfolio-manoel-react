import React from 'react';
import Education from './Education';

function About() {
    return (
        <>
            <section id="skills">
                <div className="container">
                    <div className="row gap-3">
                        <div className="col-sm-12 text-center section-title">
                            <h3>O que eu faço?</h3>
                        </div>
                        <div className="col bgCard1 text-white p-3 rounded-start shadow">
                            <div
                                className="mh-service-item shadow-1 dark-bg"
                            >
                                <i className="fa-solid fa-gears"></i>
                                <h3>Padrões de Projeto</h3>
                                <p>
                                    Desenvolvo sistemas baseados nos principais padrões de projetos do mercado, podendo também aprender outros para novas experiências
                                </p>
                            </div>
                        </div>
                        <div className="col bgCard2 text-white p-3 shadow">
                            <div
                                className="mh-service-item shadow-1 dark-bg"
                            >
                                <i className="fa fa-code iron-color" />
                                <h3>Web Development</h3>
                                <p>
                                    Compreensão de problemas e desenvolvimento de soluções web completas
                                </p>
                            </div>
                        </div>
                        <div className="col bgCard3 text-white p-3 rounded-end shadow">
                            <div
                                className="mh-service-item shadow-1 dark-bg"
                            >
                                <i className="fa-regular fa-comments"></i>
                                <h3>Soft Skills</h3>
                                <p>
                                    Sei observar meus limites, saber pedir ajuda e trabalhar em equipe em prol da resolução dos problemas e trabalhos diários
                                </p>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col">
                                <h3>Habilidades Técnicas (Hard Skills)</h3>
                                <div className="accordion" id="accordion-hard">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne"
                                                aria-expanded="false"
                                                aria-controls="collapseOne"
                                            >
                                                Front-End
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#accordion-front"
                                        >
                                            <div className="accordion-body">
                                                <span>Nível de Habilidade</span>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar"
                                                        style={{ width: "80%" }}
                                                        role="progressbar"
                                                        aria-valuenow={30}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    >
                                                        80%
                                                    </div>
                                                </div>
                                                <ul className="list-group">
                                                    <li className="list-group-item">
                                                        Estruturação de páginas com HTML5
                                                    </li>
                                                    <li className="list-group-item">
                                                        Estilização de componentes com CSS3
                                                    </li>
                                                    <li className="list-group-item">
                                                        Estilização seguindo normalizações com Bootstrap 5
                                                    </li>
                                                    <li className="list-group-item">
                                                        Criação de dinamicidade nas páginas com JavaScript
                                                    </li>
                                                    <li className="list-group-item">
                                                        Manipulação de inputs e elementos com JQuery
                                                    </li>
                                                    <li className="list-group-item">
                                                        Programação assíncrona com AJAX
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseTwo"
                                            >
                                                Java
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingTwo"
                                            data-bs-parent="#accordion-hard"
                                        >
                                            <div className="accordion-body">
                                                <span>Nível de Habilidade</span>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar"
                                                        style={{ width: "75%" }}
                                                        role="progressbar"
                                                        aria-valuenow={75}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    >
                                                        75%
                                                    </div>
                                                </div>
                                                <ul className="list-group">
                                                    <li className="list-group-item">
                                                        Java EE 17+(Enterprise Edition)
                                                    </li>
                                                    <li className="list-group-item">
                                                        Utilização do framework Spring Boot com seus principais
                                                        componentes
                                                        <ul>
                                                            <li>Spring Security</li>
                                                            <li>Spring Data</li>
                                                            <li>Spring Boot Web</li>
                                                            <li>Thymeleaf</li>
                                                        </ul>
                                                    </li>
                                                    <li className="list-group-item">Criação de API's</li>
                                                    <li className="list-group-item">
                                                        Criação de projetos Web completos com padrão MVC
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree"
                                                aria-expanded="false"
                                                aria-controls="collapseThree"
                                            >
                                                .Net C#
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#accordion-hard"
                                        >
                                            <div className="accordion-body">
                                                <span>Nível de Habilidade</span>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar"
                                                        style={{ width: "60%" }}
                                                        role="progressbar"
                                                        aria-valuenow={60}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    >
                                                        60%
                                                    </div>
                                                </div>
                                                <ul className="list-group">
                                                    <li className="list-group-item">.Net 6+</li>
                                                    <li className="list-group-item">Criação de API's</li>
                                                    <li className="list-group-item">
                                                        Criação projetos Web com padrão MVC
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour"
                                                aria-expanded="false"
                                                aria-controls="collapseFour"
                                            >
                                                ReactJs / NextJs
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseFour"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingFour"
                                            data-bs-parent="#accordion-hard"
                                        >
                                            <div className="accordion-body">
                                                <span>Nível de Habilidade</span>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar"
                                                        style={{ width: "50%" }}
                                                        role="progressbar"
                                                        aria-valuenow={70}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    >
                                                        50%
                                                    </div>
                                                </div>
                                                <ul className="list-group">
                                                    <li className="list-group-item">
                                                        Componentização de elementos
                                                    </li>
                                                    <li className="list-group-item">Criação de API's</li>
                                                    <li className="list-group-item">
                                                        Conexão e consumo de API's
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFive">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFive"
                                                aria-expanded="false"
                                                aria-controls="collapseFive"
                                            >
                                                Banco de Dados
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseFive"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingFive"
                                            data-bs-parent="#accordion-hard"
                                        >
                                            <div className="accordion-body">
                                                <span>Nível de Habilidade</span>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar"
                                                        style={{ width: "80%" }}
                                                        role="progressbar"
                                                        aria-valuenow={80}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    >
                                                        80%
                                                    </div>
                                                </div>
                                                <ul className="list-group">
                                                    <li className="list-group-item">
                                                        MySQL, SQL Server e NoSQL
                                                    </li>
                                                    <li className="list-group-item">
                                                        Criação de diagramas de banco de dados
                                                    </li>
                                                    <li className="list-group-item">
                                                        Estruturação lógica com base no sistema ou no escopo do
                                                        projeto
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <h3>Habilidades Profissionais (Soft Skills)</h3>
                                <ul className="list-group">
                                    <li className="list-group-item">Comunicação ativa</li>
                                    <li className="list-group-item">Compreensão de problemas</li>
                                    <li className="list-group-item">Trabalho individual ou conjunto</li>
                                    <li className="list-group-item">Estruturação de ideias</li>
                                    <li className="list-group-item">Proatividade</li>
                                    <li className="list-group-item">Vontade de aprender sempre mais</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Education />

        </>

    )
}

export default About
