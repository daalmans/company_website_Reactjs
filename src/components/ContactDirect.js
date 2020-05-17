import React from 'react'
import {contact_info} from '../data/contact_info'

const ContactDirect = () => {
    return (
        <div className="contact-direct">

            <div className="heading">
                <h1>Bezpośredni kontakt</h1>
            </div>


            <div className="contact-direct__container">
                <div className="contact-direct-email">
                    <h4><i className="fa fa-envelope"></i> {contact_info.email}</h4>
                </div>
                <div className="contact-direct-phone">
                    <h4><i className="fa fa-phone"></i>  {contact_info.tel} </h4>
                </div>
            </div>
        </div>
    )
}

export default ContactDirect;