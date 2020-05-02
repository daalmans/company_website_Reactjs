import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {

    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const sendEmail = event => {
        event.preventDefault();

        console.log('We will fill this up shortly.');
        // code to trigger Sending email
    };

    const onInputChange = event => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value
        });
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form onSubmit={sendEmail}>
                        <Form.Group controlId="name">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={state.name}
                                placeholder="Enter your full name"
                                onChange={onInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                name="email"
                                value={state.email}
                                placeholder="Enter your email"
                                onChange={onInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label  className="aaaaaa">Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="message"
                                value={state.message}
                                rows="3"
                                placeholder="Enter your message"
                                onChange={onInputChange}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
        </Button>
                    </form>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="card bg-light mb-3">
                        <div className="card-header bg-success text-white text-uppercase"><i className="fa fa-home"></i> Address</div>
                        <div className="card-body">
                            <p>3 rue des Champs Elysées</p>
                            <p>75008 PARIS</p>
                            <p>France</p>
                            <p>Email : email@example.com</p>
                            <p>Tel. +33 12 56 11 51 84</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
};

export default ContactForm;