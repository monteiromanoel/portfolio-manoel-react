import React from 'react';
import '../styles/Contact.css';
import FormContact from '../components/FormContact';

function Contact() {
    return (
        <>
            <h3 class="text-center mt-3">Obrigado por chegar até aqui! </h3>
            <section className="d-flex align-items-center justify-content-center mt-5" id="contact">
                <div className="map-image image-bg">
                    <div className="container d-flex align-items-center justify-content-center px-4">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3>Entre em contato comigo</h3>
                            </div>
                            <div className="col-sm-12 mh-footer-address">
                                <div className="row">
                                    <div className="col-sm-12 col-md-4">
                                        <div>
                                            <div>
                                                <i className="fa fa-location-arrow fs-5" />
                                            </div>
                                            <div className="each-info">
                                                <h4>Endereço</h4>
                                                <address>
                                                    Suzano - SP
                                                </address>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <div>
                                            <div>
                                                <i className="fa fa-envelope-o fs-5" />
                                            </div>
                                            <div>
                                                <h4>Email</h4>
                                                <a className="link-offset-2 link-underline link-underline-opacity-0" href="mailto:manoel.monteiro1@outlook.com">manoel.monteiro1@outlook.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <div>
                                            <div>
                                                <i class="fab fa-whatsapp fs-5"></i>
                                            </div>
                                            <div className="each-info">
                                                <h4>Telefone</h4>
                                                <a className="link-offset-2 link-underline link-underline-opacity-0" href="https://wa.me/5511963802228" target="_blank" rel='noreferrer'> (11)96380-2228 <i class="fas fa-external-link-alt"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <FormContact />
                            <div>
                                <div className="mh-map">
                                    <div id="mh-map" className="shadow-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Contact
