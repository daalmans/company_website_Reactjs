import React, { useState } from 'react';


export const OfferItem = props => {


    const { title, url, url_hover, url_page } = props;

    const [state, setState] = useState({ img: url })
    return (

        <div className="offer-item">
            <div className="box-icon">
                <a href={`/oferta/${url_page}`}>
                    <img src={state.img} alt="type"
                        onMouseEnter={() => {
                            setState({ img: url_hover })
                        }}

                        onMouseOut={() => {
                            setState({ img: url })
                        }}
                    />

                <div className="offer__title">
                    <h4>{title}</h4>
                </div>
                </a>
            </div>

            {/* {props.url_page == null ? <div></div> : <p><a className="button" href={props.url_page}>Read more</a></p>} */}
        </div>
    )
};

export default OfferItem
