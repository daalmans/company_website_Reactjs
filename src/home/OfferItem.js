import React from 'react';


export const OfferItem = props => {
    const { title, url } = props;
    return (
        <div className="offer-item">
            <div className="box-icon">
                <img src={url} alt="type" />
            </div>
            <div className="offer__title">
                <h4>{title}</h4>
            </div>

            {/* {props.url_page == null ? <div></div> : <p><a className="button" href={props.url_page}>Read more</a></p>} */}
        </div>
    )
};

export default OfferItem
