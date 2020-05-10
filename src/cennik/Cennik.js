import React from 'react'
import { cennik } from '../data/cennik';
import CennikItem from './CennikItem'

const Oferta = () => {
  return (
    <div>
      <div className="cennik">
        <div className="wrapper">
          {/* <div className="cennik__heading">
            Zapoznaj sie z nasza oferta
          </div> */}
          <div className="cennik-items">
            {cennik.map((item, i) => {
              const { title, cena, czas, remark } = item;
              return (
                <CennikItem title={title} cena={cena}
                             czas={czas} remark={remark}
                             key={i}/>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}


export default Oferta