import React from 'react'
import { about_info } from '../data/about_info';
import OsobaCard from './OsobaCard'



export const About = (props) => {
  return (
    <div>
      <div className="about">
        <div className="wrapper">
          <div className="about__heading">
            Poznaj zespół Centrum Terapii
          </div>
          <div>
            {about_info.map((item, i) => {
              const { imie, opis, url, url_img, opis_main } = item;
              return (
                <OsobaCard imie={imie} opis={opis} url={url} url_img={url_img} opis_main={opis_main} key={i}/>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

