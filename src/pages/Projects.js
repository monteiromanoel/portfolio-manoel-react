import React from 'react';
import '../styles/GalleryStyle.css';

function Projects() {
    return (
        <>
            <section id="portfolio" className="mb-5">
                <h1 className="text-center">Portfolio</h1>
                <div className="container">
                    {/* Gallery */}
                    <div className="row">
                        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                            <div className="hoverEffect rounded mb-2">
                                <img
                                    src="https://i.postimg.cc/RCtZ6CDr/conver-2-ezgif-com-webp-to-jpg-converter.jpg"
                                    className="rounded"
                                    alt="Conversor Americano"
                                />
                                <div className="overlay">
                                    <h2 className="bg-secondary p-1 opacityOverlay rounded">
                                        Conversor Americano
                                    </h2>
                                    <p>
                                        <button
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalPortfolio1"
                                            className="btn bg-none text-white"
                                        >
                                            Veja aqui
                                        </button>
                                    </p>
                                </div>
                            </div>

                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                                className="w-100 shadow-1-strong rounded mb-4"
                                alt="Wintry Mountain Landscape"
                            />
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="hoverEffect rounded mb-2">
                                <img
                                    src="https://i.postimg.cc/J4bg3kbL/i-Stock-000083601441-Large-1024x728.jpg"
                                    className="rounded"
                                    alt="Loja de Livros"
                                />
                                <div className="overlay">
                                    <h2 className="bg-secondary p-1 opacityOverlay rounded">
                                        Front para Loja de Livros
                                    </h2>
                                    <p>
                                        <button
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalPortfolio2"
                                            className="btn bg-none text-white"
                                        >
                                            Veja aqui
                                        </button>
                                    </p>
                                </div>
                            </div>

                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                                className="w-100 shadow-1-strong rounded mb-4"
                                alt="Boat on Calm Water"
                            />
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                                className="w-100 shadow-1-strong rounded mb-4"
                                alt="Waves at Sea"
                            />
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                                className="w-100 shadow-1-strong rounded mb-4"
                                alt="Yosemite National Park"
                            />
                        </div>
                    </div>
                    {/* Gallery */}
                </div>
            </section>

            <>
                <div
                    className="modal fade"
                    id="modalPortfolio1"
                    tabIndex={-1}
                    aria-labelledby="modalPortfolio1Label"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalPortfolio1Label">
                                    Conversor Americano
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">
                                <div className="p-3">
                                    Sistema PWA de Conversão de Medidas do padrão americano para o
                                    brasileiro, feito com o intuito de ajudar estudantes que estiverem
                                    fora do país. Projeto desenvolvido como projeto de faculdade,
                                    visando aprimorar as habilidades de desenvolvimento web e mobile,
                                    por se tratar de um sistema responsivo e instalável, sem necessitar
                                    de plataformas padrão (App Store ou Google Store). Tecnologias
                                    Utilizadas:
                                    <ul>
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>JavaScript</li>
                                        <li>Git e GitHub</li>
                                    </ul>
                                    Visite o sistema{" "}
                                    <a
                                        href="https://monteiromanoel.github.io/projeto-conversor/"
                                        target="_blank" rel='noreferrer'
                                    >
                                        aqui
                                    </a>
                                    <br />
                                    Link do Repositório: <a href="https://github.com/monteiromanoel/projeto-conversor" target="_blank" rel='noreferrer'>aqui</a>
                                    <img
                                        src="https://i.postimg.cc/PxV4Dz34/conver-1.png"
                                        className="img-fluid"
                                        alt="Conversor Americano"
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Fechar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="modal fade"
                    id="modalPortfolio2"
                    tabIndex={-1}
                    aria-labelledby="modalPortfolio2Label"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalPortfolio2Label">
                                    Front para Loja de Livros
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">
                                <div className="p-3">
                                    Estruturação de front end para a conversão de uma loja física de livros para uma loja virtual responsiva. Foi desenvolvido a front page completa e as outras páginas principais, como: 
                                    <ul> 
                                        <li>Sobre nós</li>
                                        <li>Contato</li>
                                        <li>Login e cadastro</li>
                                        <li>Carrinho de Compras</li>
                                        <li>Página exemplo de um dos produtos</li>
                                        <li>Exemplo de dashboard para gestão dos anúncios e vendas</li>

                                    </ul>

                                    Tecnologias
                                    Utilizadas:
                                    <ul>
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>JavaScript</li>
                                        <li>Git e GitHub</li>
                                    </ul>
                                    Visite o sistema{" "}
                                    <a
                                        href="https://projeto-faculdade-final-7ti0c4b5c-manoels-projects-e10bb2df.vercel.app/"
                                        target="_blank" rel="noreferrer"
                                    >
                                        aqui
                                    </a>
                                    <br />
                                    Link do Repositório: <a href="https://github.com/monteiromanoel/projeto-faculdade-final" target="_blank" rel='noreferrer' >aqui</a>
                                    <img
                                        src="https://i.postimg.cc/gjrgCx7g/Captura-de-tela-2024-04-21-134147.png"
                                        className="img-fluid mb-2"
                                        alt="Loja de Livros 1"
                                    />
                                    <br />
                                    <img
                                        src="https://i.postimg.cc/prhLpB7z/Captura-de-tela-2024-04-21-134513.png"
                                        className="img-fluid"
                                        alt="Loja de Livros 2"
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Fechar
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>


        </>
    )
}

export default Projects;