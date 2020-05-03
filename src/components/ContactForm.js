import React, { useState } from "react";
import { Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'

const ContactForm = () => {

    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...state })
        })
            .then(() => {
                alert("Twoja wiadomość została przyjęta!");
                setState({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })
            })
            .catch(error => alert(error));

        e.preventDefault();
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        });
    };

    return (

        <div className="contact__form-container">
            <div className="contact__form">
                <div className="">
                    <h1>Skontaktuj się <br /> <span> z nami </span></h1>
                </div>
                <div className="row">
                    <div className="col">
                        <form onSubmit={handleSubmit}>
                            <Form.Group controlId="name">
                                {/* <Form.Label>Full Name</Form.Label> */}
                                <input
                                    type="text"
                                    name="name"
                                    value={state.name}
                                    placeholder="Twoje Imię"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="email">
                                {/* <Form.Label>Email</Form.Label> */}
                                <input
                                    type="text"
                                    name="email"
                                    value={state.email}
                                    placeholder="Twój adres e-mail"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="message">
                                {/* <Form.Label>Message</Form.Label> */}
                                <textarea
                                    as="textarea"
                                    name="message"
                                    value={state.message}
                                    rows="5"
                                    placeholder="Twoja wiadomość"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <button className="button" type="submit">
                                Wyślij
        </button>
                        </form>
                    </div>

                    {/* <div className="col-12 col-sm-4">
                    <div className="company-info">
                        <h3>Company name</h3>
                        <ul>
                            <li><i className="fa fa-road"></i>44 Something St</li>
                            <li><i className="fa fa-phone"></i>(555) 555 555 555</li>
                            <li><i className="fa fa-envelope"></i>test@test.test</li>
                        </ul>
                    </div>
                </div> */}
                </div>
            </div>
        </div>

    )
};

export default ContactForm;