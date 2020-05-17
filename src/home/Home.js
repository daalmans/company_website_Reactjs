import React, { useState } from 'react'
import ContactForm from '../components/ContactForm';
import { Element, scroller } from 'react-scroll';
import { Fade } from 'react-reveal';
import Landing from './Landing';
import Nav from '../components/Nav';
import SideBar from '../components/SideBar';
import { Link } from 'react-router-dom';

const scrollToLanding = elem => {
  scroller.scrollTo(elem, {
    duration: 800,
    delay: 100,
    smooth: true,
  })
}


const Home = () => {
  const [visible, setVisible] = useState(false)

  const showSideBar = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <div className="home">
        <Fade>
          <div className="home__header">
            <div className="wrapper">
              <div className="head">
              <Link className="head__logo-link" to="/">
                <div className="logo"><img className="image" src="/img/logo_dark.png"/></div>
                </Link>
                <div className="header__menu" onClick={showSideBar}></div>
                <SideBar showSideBar={visible} />
                
              </div>
              <div className="logo-main"><img className="image" src="/img/logo_dark.png"/></div>
              <Nav context="home" />
              <div className="home__intro">
                Jeśli czujesz, że problemy zaczynają Cię przytłaczać, sięgnij po pomoc.
              </div>
              <div className="home__intro-sec">
                Życie w dzisiejszym świecie nie jest łatwe.
                Ciągły pośpiech, natłok informacji, nieustanny stres, zdarzenia losowe powodują różnego rodzaju problemy,
                także o charakterze psychicznym. Nie zostawaj sam z problemami!
              </div>
              <div className="home__caption"
                onClick={() => scrollToLanding('landing')}>
                Dowiedz się jak możemy Ci pomóc
              </div>

              <div className="home__scroll-down"></div>
            </div>
          </div>
        </Fade>
      </div>
      <div>

        <Element name="landing">

          <Landing />
        </Element>

        <div className="home__contact">
          <div className="wrapper">
            <ContactForm />
          </div>
        </div>

      </div>
    </div>
  )
}




export default Home