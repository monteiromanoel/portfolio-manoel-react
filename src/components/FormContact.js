import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const FormContact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_5ohjclj', 'template_2h3grou', form.current, {
                publicKey: 'AYyLI21PTBeQA_avD',
            })
            .then(
                () => {
                    window.alert("E-mail enviado com sucesso. Obrigado pelo contato!");
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className='row'>
                <div className='col'>
                    <label>Nome</label>
                    <input className='form-control' type="text" name="user_name" />
                </div>
                <div className='col'>
                    <label>Email</label>
                    <input className='form-control' type="email" name="user_email" />
                </div>
            </div>

            <div>
                <label>Mensagem</label>
                <textarea className='form-control' rows="6" name="message" />
            </div>

            <button className='btn btn-primary my-2' type="submit"> Enviar <i class="fas fa-paper-plane mx-1"></i> </ button>
        </form>
    );
};

export default FormContact;