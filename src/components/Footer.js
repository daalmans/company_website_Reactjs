import React from 'react';
import ContactFooter from './ContactFooter'




export const Footer = () => {
    return (
        
        <footer className="footer">
            <div className="wrapper wrapper--footer">

                <div className="footer__contact">
                    <ContactFooter />
                </div>
                <div className="footer__blog-posts">
                    {/* BLOG POSTS COMING SOON */}
                    </div>

            </div>
        </footer>
    )

};
