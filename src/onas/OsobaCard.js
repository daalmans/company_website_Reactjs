import React from 'react'




const Osoba = props => {
  return (
    <div className='onas-item'>
      <img src={props.url_img} className='card-img-top' />
      <div className='onas-item__info'>
        <div className='onas-item__name'>
          <h3>{props.imie}</h3>
        </div>
        <div className='onas-item__opis'>
        <p>{props.opis}</p>
        </div>
        <div className="btn-container">
          <a className="button" href={'/about/' + props.url}>Zobacz więcej</a>
        </div>
      </div>
    </div>
  );
};

export default Osoba;