import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './home/Home';
import { About } from './onas/Zespol';
import { Contact } from './Contact';
import Oferta from './oferta/Oferta';
import { Footer } from './components/Footer';
import Header from './components/Header';
import {about_info} from './data/about_info'
import Personal from './onas/Personal'


const findByUrl = (data, url) => 
  data.find(u => u.url === url)



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" render={props => (props.location.pathname !== '/') && <Header />} />
          <Route exact path="/" component={Home} />
          <Route exact path="/oferta" component={Oferta} />
          <Route exact path="/about" component={About} />
          <Route exact path="/kontakt" component={Contact} />
          <Route exact path="/about/:name" render={({match}) => 
            <Personal {...findByUrl(about_info, match.params.name)} /> }  /> 
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;
