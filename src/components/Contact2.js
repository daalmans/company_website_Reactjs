import React, { useState } from "react";



const ContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")



    const handleChange = e => {
        const { name, value } = e.target
        if (name === 'name') {
            return setName(value)
        }
        if (name === 'email') {
            return setEmail(value)
        }
        if (name === 'message') {
            return setMessage(value)
        }
    }



    const handleSubmit = event => {
        event.preventDefault()
        const newFormObject = {
            name: name,
            email: email,
            message: message

        }
        console.log(newFormObject)
        setName("")
        setEmail("")
        setEmail("")

    }

    return (
        <div>
            <div className="contact-container">
                <div className="wrapper-form">
                    <div className="company-info">
                        <h3>Company name</h3>
                        <ul>
                            <li><i className="fa fa-road"></i>44 Something St</li>
                            <li><i className="fa fa-phone"></i>(555) 555 555 555</li>
                            <li><i className="fa fa-envelope"></i>test@test.test</li>
                        </ul>
                    </div>
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <p><label>Name: </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={handleChange}
                                />
                            </p>
                            <p><label>E-mail: </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                />
                            </p>
                            <p className="full"><label>Wiadomosc: </label>
                                <textarea
                                    rows="5"
                                    name="message"
                                    value={message}
                                    onChange={handleChange}
                                />
                            </p>

                                <p className="full">
                                <input className="button-form" type="submit" value="Submit" name="" /></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default ContactForm;


// return (

//     <div>
//         <form class="contact-form">
//             <div class="form-group">
//                 <label>Name: </label>
//                 <input type="text" name="name" />
//             </div>
//             <div class="form-group">
//                 <label>Email: </label>
//                 <input type="text" name="email" />
//             </div>
//             <div class="form-group">
//                 <label>Message: </label>
//                 <textarea name="message"></textarea>
//             </div>
//             <input class="button" type="submit" value="Submit" name="" />
//         </form>
//     </div>
// );
// };