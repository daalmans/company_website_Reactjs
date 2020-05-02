import React from 'react';
import { Fade } from 'react-reveal';
import { offer_front } from '../data/offer_front';
import OfferItem from './OfferItem'


const renderItems = items => (
    items.map((item, i) => <OfferItem {...item} key={i} />)
)

const Landing = () => {
    return (
        <div className="landing">
            <div className="wrapper">
                <Fade left duration={800}>
                    <div className="landing__intro">
                    <h1>
                            Zespół centrum terapii udzieli <span>Tobie</span> wsparcia  w zakresie
            </h1>
                    </div>
                    <div>
                        <div className="landing__content">
                            {renderItems(offer_front)}
                        </div>
                        <div className="landing__btn">
                            <p><a className="button" href='/oferta'>Zobacz więcej</a></p>
                        </div>
                    </div>
                </Fade>
            </div>
        </div >
    );
};

export default Landing;