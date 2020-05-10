import React from 'react';


export const item = props => {
    return (
        <div className="cennik__item">
            <div className="cennik__item-title">
                <h3>{props.title} </h3>
            </div>
            <div className="cennik__item-opis">
                <p><span>Cena: {props.cena}</span> PLN</p>
                <p>Czas trwania sesji: {props.czas} minut</p>
            </div>
            <div className="cennik__item-remark">
                {props.remark}
            </div>
            <hr />
        </div>
    )

};

export default item