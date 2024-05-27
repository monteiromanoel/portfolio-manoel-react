import React from 'react';
import '../styles/GalleryStyle.css';
import '../styles/ProjectsStyle.css';
import "bootstrap/dist/js/bootstrap.js";

function Projects() {
    return (
        <>
            <section id="portfolio" className="mb-5">
                <h2 className="text-center mb-3">O que eu fiz até aqui?</h2>
                <div className="container-full">
                    {/* Gallery */}
                    <div className='row gap-3 justify-content-center'>
                        <div className='col-md-5'>
                            <div className="card cardProjects">
                                <img src="https://i.postimg.cc/RCtZ6CDr/conver-2-ezgif-com-webp-to-jpg-converter.jpg" className="card-img-top imgCardProjects" alt="Conversor 1" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Conversor Americano</h5>
                                    <p className="card-text">
                                        Sistema Web PWA para apoio a alunos de intercâmbio
                                    </p>
                                    <a href="#0"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalPortfolio1"
                                        className="btn btn-primary w-100 btnProject">
                                        Ver Detalhes
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-5'>
                            <div className="card cardProjects">
                                <img src="https://i.postimg.cc/1398gsLy/3793130.jpg" className="card-img-top" alt="Livros 1" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Loja de Livros</h5>
                                    <p className="card-text">
                                        Front para uma loja de livros online
                                    </p>
                                    <a href="#0"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalPortfolio2"
                                        className="btn btn-primary w-100 btnProject">
                                        Ver Detalhes
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-5'>
                            <div className="card cardProjects">
                                <img src="https://i.postimg.cc/QdPNs7ZK/vecteezy-travel-equipment-and-world-map-13908085.jpg" className="card-img-top" alt="Livros 1" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Agência de Turismo</h5>
                                    <p className="card-text">
                                        Sistema completo para uma agência de viagens online
                                    </p>
                                    <a href="#0"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalPortfolio3"
                                        className="btn btn-primary w-100 btnProject">
                                        Ver Detalhes
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-5'>
                            <div className="card cardProjects">
                                <img src="https://i.postimg.cc/fL6BWvjF/163568-ilustracao-contabil-do-elemento-do-contador-cpa-vetor.jpg" className="card-img-top" alt="Viagem 1" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Sistema de Precificação</h5>
                                    <p className="card-text">
                                        Sistema criado para ajudar na gestão de valores de vendas.
                                    </p>
                                    <a href="#0"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalPortfolio4"
                                        className="btn btn-primary w-100 btnProject">
                                        Ver Detalhes
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-5'>
                            <div className="card cardProjects">
                                <img src="https://i.postimg.cc/MKNzrFTx/Teamwork-Business-03-generated.jpg" className="card-img-top" alt="Viagem 1" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Empreenda + | Plataforma para Compartilhamento de Ensino</h5>
                                    <p className="card-text">
                                        Sistema web feito aos moldes de uma rede social com uma plataforma de ensino inclusa.
                                    </p>
                                    <a href="#0"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalPortfolio5"
                                        className="btn btn-primary w-100 btnProject">
                                        Ver Detalhes
                                    </a>
                                </div>
                            </div>
                        </div>




                    </div>

                </div>


            </section>

            <>

                {/* Portfolio Modal 1 */}
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
                                    <div className='my-3'>
                                        <a
                                            href="https://monteiromanoel.github.io/projeto-conversor/"
                                            target="_blank" rel='noreferrer' className='px-2'
                                        >
                                            Visitar <i class="fa-solid fa-arrow-up-right-from-square px-1"></i>
                                        </a>
                                    </div>

                                    Link do Repositório: <a href="https://github.com/monteiromanoel/projeto-conversor" target="_blank" rel='noreferrer'>aqui</a>
                                    <img
                                        src="https://i.postimg.cc/PxV4Dz34/conver-1.png"
                                        className="img-fluid"
                                        alt="Conversor Americano"
                                    />
                                </div>
                            </div>
                            <div className="modal-footer justify-content-center">
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

                {/* End Portfolio Modal 1 */}

                {/* Portfolio Modal 2 */}
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
                                    <div className='my-3'>
                                        <a
                                            href="https://projeto-faculdade-final-7ti0c4b5c-manoels-projects-e10bb2df.vercel.app/"
                                            target="_blank" rel="noreferrer" className='px-2'
                                        >
                                            Visitar <i class="fa-solid fa-arrow-up-right-from-square px-1"></i>
                                        </a>
                                    </div>

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

                            <div className="modal-footer justify-content-center">
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

                {/* End Portfolio Modal 2 */}

                {/* Portfolio Modal 3 */}
                <div
                    className="modal fade"
                    id="modalPortfolio3"
                    tabIndex={-1}
                    aria-labelledby="modalPortfolio3Label"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalPortfolio3Label">
                                    Estrutura de site para Agência de Turismo
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
                                    <p>Sistema web completo para uma agência de turismo, separado o desenvolvimento por etapas, sendo a front page responsiva e as outras páginas principais, como:</p>
                                    <ul>
                                        <li>Home</li>
                                        <li>Destino</li>
                                        <li>Promoções</li>
                                        <li>Contato</li>
                                        <li>Login e cadastro</li>
                                    </ul>

                                    <p>
                                        Posteriormente foi implementado o back-end no projeto, utilizando primeiramente Java E.E + MySQL e após, refatorado para o framework Spring Boot (com Spring Security e demais componentes) + MySQL. Também foi criada uma versão de dashboard para gestão dos anúncios e vendas dos pacotes com as mesmas tecnologias.
                                    </p>

                                    Tecnologias
                                    Utilizadas: <br />
                                    <div className='row'>
                                        <div className='col'>
                                            Front-End
                                            <ul>
                                                <li>HTML5</li>
                                                <li>CSS3</li>
                                                <li>JavaScript</li>
                                                <li>Bootstrap</li>
                                                <li>JQuery</li>
                                            </ul>
                                        </div>

                                        <div className='col'>
                                            Back-End
                                            <ul>
                                                <li>Java 17+</li>
                                                <li>Spring Boot</li>
                                                <li>MySQL</li>
                                            </ul>
                                        </div>
                                    </div>

                                    Ferramentas de Desenvolvimento:
                                    <ul>
                                        <li>Git e GitHub</li>
                                        <li>Padrão MVC</li>
                                        <li>Kanban</li>
                                    </ul>

                                    <div className='my-3'>
                                        Visite o exemplo do front aqui:
                                        <a
                                            href="https://monteiromanoel.github.io/atv-Pratica-Recode-Modulo-2/index.html"
                                            target="_blank" rel="noreferrer" className='px-2'
                                        >
                                            Visitar <i class="fa-solid fa-arrow-up-right-from-square px-1"></i>
                                        </a>
                                    </div>

                                    Link dos Repositórios:
                                    <ul>
                                        <li style={{ listStyleType: 'none' }}><a href="https://github.com/monteiromanoel/atv-Pratica-Recode-Modulo-2" target="_blank" rel='noreferrer' >Versão 2 (Front-end) + Modelo inicial do Back-end e banco de dados</a></li>
                                        <li style={{ listStyleType: 'none' }}><a href="https://github.com/monteiromanoel/Agencia-Recode-V3" target="_blank" rel='noreferrer' >Versão 3 (Final)</a></li>
                                        <li style={{ listStyleType: 'none' }}><a href="https://github.com/monteiromanoel/Agencia-Recode-V3" target="_blank" rel='noreferrer' >Refatoração do dashboard de gestão em C# .NET + NextJs para apresentação</a></li>
                                    </ul>
                                    <div
                                        id="carouselExampleControls"
                                        className="carousel slide"
                                        data-ride="carousel"
                                    >
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img className="d-block w-100 img-fluid imgCarousel3" src="https://i.postimg.cc/jSMWq6JZ/Captura-de-tela-2024-04-29-212216.png" alt="Agência de Turismo 1" />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100 img-fluid imgCarousel3" src="https://i.postimg.cc/WzDGPW3R/captura-1.jpg" alt="Dashboard Agência de Turismo 1" />
                                            </div>
                                        </div>
                                        <a
                                            className="carousel-control-prev"
                                            href="#carouselExampleControls"
                                            role="button"
                                            data-slide="prev"
                                        >
                                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a
                                            className="carousel-control-next"
                                            href="#carouselExampleControls"
                                            role="button"
                                            data-slide="next"
                                        >
                                            <span className="carousel-control-next-icon" aria-hidden="true" />
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer justify-content-center">
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
                {/* End Portfolio Modal 3 */}

                {/* Portfolio Modal 4 */}
                <div
                    className="modal fade"
                    id="modalPortfolio4"
                    tabIndex={-1}
                    aria-labelledby="modalPortfolio4Label"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalPortfolio4Label">
                                    Sistema para Precificação de Valores de Venda
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
                                    <p>Sistema web feito com o intuito de auxiliar na gestão de vendas e promoções.Sistema criado para acelerar a conversão de valores de vendas, substituindo a "tentativa e erro" que tabelas manuais e convencionais possuem.</p>
                                    <p>
                                        Ao utilizar, o usuário tem a opção de alimentar a tabela apenas com o preço de custo, com o Código(SKU) + Custo ou completa, com o SKU + Custo do produto + frete a ser pago, seguindo as regras de negócio de cada marketplace individualmente, entregando o valor de venda atualizado de acordo com a margem de lucro.
                                    </p>
                                    <p>
                                        Para comodidade, o usuário pode também baixar uma tabela base e importe-a preenchida para o sistema. Assim, podem ser feitos vários cálculos de uma vez e visualizados na tabela dentro do sistema e, caso estiver tudo certo, extrair ela em formato Excel.
                                    </p>

                                    Tecnologias
                                    Utilizadas: <br />
                                    <div className='row'>

                                        <ul>
                                            <li>HTML5</li>
                                            <li>CSS3</li>
                                            <li>JavaScript (para o front e os cálculos)</li>
                                            <li>Bootstrap</li>
                                            <li>JQuery</li>
                                            <li>Biblioteca: <a href="https://github.com/linways/table-to-excel" target="_blank" rel='noreferrer'>Table-to-Excel</a></li>
                                            <li>Ajax (<a href="https://clipboardjs.com/" target="_blank" rel='noreferrer'>ClipboardJs</a>)</li>
                                            <li>Biblioteca de ícones Font Awesome</li>
                                        </ul>
                                    </div>
                                    Ferramentas de Desenvolvimento:
                                    <ul>
                                        <li>Git e GitHub</li>
                                        <li>Padrão MVC</li>
                                        <li>Kanban</li>
                                        <li>Deploy do sistema no Vercel</li>
                                    </ul>

                                    <div className='my-3'>
                                        Visite o sistema aqui:
                                        <a
                                            href="https://calculadora-marketplaces-ianni-17r2407n6.vercel.app/"
                                            target="_blank" rel="noreferrer" className='px-2'
                                        >
                                            Visitar <i class="fa-solid fa-arrow-up-right-from-square px-1"></i>
                                        </a>
                                    </div>

                                    <p>
                                        Link do Repositório
                                        <a href="https://github.com/monteiromanoel/atv-Pratica-Recode-Modulo-2" target="_blank" rel='noreferrer' >Aqui</a>
                                    </p>


                                    <div
                                        id="carouselCalculatorControls"
                                        className="carousel slide"
                                        data-ride="carousel"
                                    >
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img className="d-block w-100 img-fluid imgCarousel3" src="https://i.postimg.cc/pLqSjggx/Captura-de-tela-2024-05-12-131440.png" alt="Sistema de Conversão 1" />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100 img-fluid imgCarousel3" src="https://i.postimg.cc/kGq7XvqY/Captura-de-tela-2024-05-12-132949.png" alt="Sistema de Conversão 2" />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100 img-fluid imgCarousel3" src="https://i.postimg.cc/KYqxQK2h/Captura-de-tela-2024-05-09-205707.png" alt="Tabela Exportada" />
                                            </div>
                                        </div>
                                        <a
                                            className="carousel-control-prev"
                                            href="#carouselExampleControls"
                                            role="button"
                                            data-slide="prev"
                                        >
                                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a
                                            className="carousel-control-next"
                                            href="#carouselCalculatorControls"
                                            role="button"
                                            data-slide="next"
                                        >
                                            <span className="carousel-control-next-icon" aria-hidden="true" />
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer justify-content-center">
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
                {/* End Portfolio Modal 4 */}

                {/* Portfolio Modal 5 */}
                <div
                    className="modal fade"
                    id="modalPortfolio5"
                    tabIndex={-1}
                    aria-labelledby="modalPortfolio5Label"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalPortfolio5Label">
                                    Plataforma Web de Ensino
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
                                    <p>Sistema web feito com o intuito de ser uma plataforma de ensino e compartilhamento de conhecimento para micro empresários. Feito com base no projeto da ONU, <a href="https://www.ipea.gov.br/ods/ods8.html" target="_blank" rel='noreferrer'>ODS8, que contribui para o desenvolvimento sustentável de micro empresários ao redor do mundo.</a></p>
                                    <p>
                                        O sistema em si foi feito para possuir 4 núcleos principais. Sendo eles:
                                        <ul>
                                            <li>Rede Social</li>
                                            <li>Página de cursos</li>
                                            <li>Dashboard para administradores</li>
                                            <li>Dashboard para colaboradores</li>
                                        </ul>
                                        Assim, além dos usuários gerais do sistema, ele também serviria de auxílio para educadores compartilharem seus trabalhos.
                                    </p>
                                    <p>
                                        O desenvolvimento foi separado em etapas, sendo elas: Desenvolvimento dos protótipos do sistema e do banco de dados; desenvolvimento do front ennd com sua estruturação e estilização; desenvolvimento do back end em Java + MySql; refatoração do sistema com Spring Boot, para melhoria do desempenho de desenvolvimento e inclusão da segurança dos dados e entrega final.
                                    </p>

                                    Tecnologias
                                    Utilizadas: <br />
                                    <div className='row'>
                                        <div className='col'>
                                            Front-End
                                            <ul>
                                                <li>HTML5</li>
                                                <li>CSS3</li>
                                                <li>JavaScript</li>
                                                <li>Bootstrap</li>
                                                <li>JQuery</li>
                                                <li>Ajax</li>
                                                <li>Biblioteca para edição de texto TinyMCE</li>
                                                <li>Biblioteca de ícones Font Awesome</li>
                                            </ul>
                                        </div>

                                        <div className='col'>
                                            Back-End
                                            <ul>
                                                <li>Java 17+</li>
                                                <li>Spring Boot (com Spring Security, Spring Data, Thymeleaf, JPA, Lombok, etc.)</li>
                                                <li>MySQL</li>
                                            </ul>
                                        </div>
                                    </div>

                                    Ferramentas de Desenvolvimento:
                                    <ul>
                                        <li>Git e GitHub</li>
                                        <li>Padrão MVC</li>
                                        <li>Desenvolvimento ágil Kanban</li>
                                    </ul>

                                    <div className='my-3'>
                                        Visite o exemplo do front aqui:
                                        <a
                                            href="https://squad-35-recode.github.io/Projeto-Recode-Squad-35/"
                                            target="_blank" rel="noreferrer" className='px-2'
                                        >
                                            Visitar <i class="fa-solid fa-arrow-up-right-from-square px-1"></i>
                                        </a>
                                    </div>


                                    Link dos Repositórios:
                                    <ul>
                                        <li style={{ listStyleType: 'none' }}><a href="https://github.com/squad-35-recode/Projeto-Recode-Squad-35" target="_blank" rel='noreferrer' >Versão 1 (Front-end) + Modelo inicial do Back-end e banco de dados</a></li>
                                        <li style={{ listStyleType: 'none' }}><a href="https://github.com/squad-35-recode/Projeto-Squad-35-V2-Recode" target="_blank" rel='noreferrer' >Versão 2, feita em Java E.E com o banco MySQL e suas documentações</a></li>
                                        <li style={{ listStyleType: 'none' }}><a href="https://github.com/squad-35-recode/Projeto-Squad35-V3-Empreenda" target="_blank" rel='noreferrer' >Versão 3 (Final), feita em Java Spring Boot com o banco MySQL e com fluxo de segurança completo</a></li>
                                    </ul>


                                    <div
                                        style={{
                                            position: "relative",
                                            paddingBottom: "56.544502617801044%",
                                            height: 0
                                        }}
                                    >
                                        <iframe
                                            src="https://www.loom.com/embed/7a27abab913b4979bb6e17dcba3e9861?sid=85130978-a76b-4467-8ec3-65e0c49485e1"
                                            frameBorder={0}
                                            webkitallowfullscreen=""
                                            mozallowfullscreen=""
                                            allowFullScreen=""
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%"
                                            }}
                                        />
                                    </div>

                                </div>
                            </div>

                            <div className="modal-footer justify-content-center">
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
                {/* End Portfolio Modal 5 */}

            </>


        </>
    )
}

export default Projects;