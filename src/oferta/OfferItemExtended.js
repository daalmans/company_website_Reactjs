import React from 'react';

const renderItems = items => (
    items.map((item, i) => <p key={i}>{item}</p>)
)

export const OfferExtendedItem = props => {
    console.log(props)
    return (
        <div className="offer-extended">
            <div className="wrapper">
                <div className="title">{props.title}</div>


                <div className="opis__main">
                    {renderItems(props.text)}
                </div>

                <div className="opis__msg">
                    <blockquote className="blockquote">{renderItems(props.message)}</blockquote>
                </div>
                <div className="offer-extended__btn">
                    <a className="button" href='/'>Powrót</a>
                </div>
            </div>
        </div>
    )

};

export default OfferExtendedItem