import React from 'react'

const renderItems = items => (
    items.map((item, i) =>  <p key={i}>{item}</p>)
  )

const Personal = (props) => {
    return (
        <div className="personal">
            <div className="wrapper">
                <div className="imie">{props.imie}</div>
                    <div>
                        <img src={props.url_img} alt='Image 1' className='personal__img' />
                    </div>

                    <div className="opis">{props.opis}</div>
                    <div className="opis__main">{renderItems(props.opis_main)}</div>
                    <div className="opis__msg">
                        <blockquote className="blockquote">{renderItems(props.message)}</blockquote>
                    </div>
                <div className="personal__btn">
                    <a className="button" href='/about'>Powrót</a>
                </div>
            </div>
        </div >
    )
}

export default Personal