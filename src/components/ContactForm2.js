import React, { useState } from "react";
import { Form } from 'react-bootstrap';

const ContactForm = () => {

    // const [state, setState] = useState({
    //     name: '',
    //     email: '',
    //     subject: '',
    //     message: ''
    // });

    // const encode = (data) => {
    //     return Object.keys(data)
    //         .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    //         .join("&");
    // }

    // const handleSubmit = e => {
    //     fetch("/", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //         body: encode({ "form-name": "contact", ...state })
    //     })
    //         .then(() => {
    //             alert("Twoja wiadomość została przyjęta!");
    //             setState({
    //                 name: '',
    //                 email: '',
    //                 subject: '',
    //                 message: ''
    //             })
    //         })
    //         .catch(error => alert(error));

    //     e.preventDefault();
    // };

    // const handleChange = e => {
    //     const { name, value } = e.target;
    //     setState({
    //         ...state,
    //         [name]: value
    //     });
    // };

    return (

        <div className="contact__form-container">
            <div className="contact__form">
                <div className="">
                    <h1>Skontaktuj się <br /> <span> z nami </span></h1>
                </div>
                <div className="row">
                    <div className="col">
                        <form
                             name="contact-form"
                             method="POST"
                             data-netlify="true"
                             netlify-honeypot="bot-field"
                             action="/thank-you"
                        >
                            <Form.Group controlId="name">
                                {/* <Form.Label>Full Name</Form.Label> */}
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Twoje Imię"
                                    required={true}
                                />
                            </Form.Group>
                            <Form.Group controlId="email">
                                {/* <Form.Label>Email</Form.Label> */}
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Twój adres e-mail"
                                    required={true}
                                />
                            </Form.Group>
                            <Form.Group controlId="message">
                                {/* <Form.Label>Message</Form.Label> */}
                                <textarea
                                    as="textarea"
                                    name="message"
                                    rows="5"
                                    placeholder="Twoja wiadomość"
                                    required={true}
                                />
                            </Form.Group>
                            <button className="button" type="submit">
                                Wyślij
        </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default ContactForm;