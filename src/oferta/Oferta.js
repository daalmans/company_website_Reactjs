import React from 'react'
import { offer_main } from '../data/offer_main';
import OfferItem from './OfferItem'

const Oferta = () => {
  return (
    <div>
      <div className="oferta">
        <div className="wrapper">
          <div className="oferta__heading">
            W czym możemy Ci pomóc
          </div>
          <div>
            {offer_main.map((item, i) => {
              const { title, text } = item;
              return (
                <OfferItem title={title} text={text} key={i}/>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}





export default Oferta