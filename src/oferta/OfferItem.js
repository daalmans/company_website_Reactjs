import React from 'react';


export const item = props => {
    return (
        <div className="oferta__item">
            <div className="oferta__item-title">
            <h3>{props.title}</h3>
            </div>
            <div className="oferta__item-opis">
            <p>{props.text}</p>
            </div>
            <hr />
        </div>
    )

};

export default item