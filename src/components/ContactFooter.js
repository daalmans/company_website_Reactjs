import React from 'react';
import {contact_info} from '../data/contact_info'


const ContactFooter = () => {

    // const { tel, email, adres } = props;

    return (
        
        <div>
            <div className="footer-contact-info">
                <div className="logo-footer"><img className="image" src="/img/logo_light.png"/></div>
                <div>
                    <ul className="contact-info">
                        <li>
                            <span>Tel:</span>
                            <br />
                    {contact_info.tel}
                </li>
                        <li>
                            <span>E-mail:</span>
                            <br />
                    {contact_info.email}
                </li>
                        <li>
                            <span>Adres:</span>
                            <br />
                    {contact_info.adres}
                    <br />
                </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ContactFooter