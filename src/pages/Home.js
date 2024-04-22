import React from 'react';
import '../styles/Home.css';

function Home() {
    return <>
        <div className='divider-home'>
        </div>
        <section id="home">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 align-content-center">
                        <div>
                            <div className="hello my-2">
                                <span className="helloText">Olá!, meu nome é</span>
                            </div>
                            <h2 className="name my-4">Manoel Monteiro de Castro</h2>
                            <h4 className="textGeneral">Full Stack Developer</h4>
                            <p className="textGeneral">
                                Desenvolvedor full stack apaixonado por criar soluções inovadoras e
                                eficientes. Sou comprometido com a entrega de produtos de
                                alta qualidade, utilizando boas práticas de desenvolvimento e
                                colaborando efetivamente em equipes ágeis. Com habilidades sólidas
                                em comunicação e resolução de problemas, estou sempre buscando
                                aprender e me adaptar às últimas tendências tecnológicas para
                                impulsionar o sucesso do projeto e o crescimento pessoal e profissional.
                            </p>
                            <ul className="list-group list-group-horizontal d-flex justify-content-center fs-2 mb-3">
                                <li className="list-group-item border-0">
                                    <a href="https://github.com/monteiromanoel" target="_blank" rel="noreferrer">
                                        <i
                                            className="fa fa-github text-muted icon"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="bottom"
                                            title="Ver o GitHub"
                                        ></i>
                                    </a>
                                </li>
                                <li className="list-group-item border-0">
                                    <a
                                        href="https://www.linkedin.com/in/manoel-monteiro-11234b1bb/"
                                        target="_blank" rel="noreferrer"
                                    >
                                        <i
                                            className="fa-brands fa-linkedin text-muted icon"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="bottom"
                                            title="Ver o LinkedIn"
                                        ></i>
                                    </a>
                                </li>
                                <li className="list-group-item border-0">
                                    <a
                                        href="mailto:manoel.monteiro1@outlook.com?subject=Assunto do Email&body=Corpo do Email"
                                        target="_blank" rel="noreferrer"
                                    >
                                        <i
                                            className="fa fa-envelope-o text-muted icon"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="bottom"
                                            title="Enviar E-mail"
                                        ></i>
                                    </a>
                                </li>
                                <li className="list-group-item border-0">
                                    <a href="https://drive.google.com/file/d/1RbXfNh1dbiuSiENAjiQe1rrt2g8cc5jz/view?usp=drive_link" target='_blank' rel="noreferrer">
                                        <i
                                            className="fa fa-download text-muted icon"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="bottom"
                                            title="Baixar Currículo"
                                        ></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="hero-img">
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                                    alt=""
                                    className="img-fluid rounded-circle shadowImage imagePerson" id='imgPersonHome'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Home
