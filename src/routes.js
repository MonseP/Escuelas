import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import Contacto from './components/contacto/Contacto';

import Perfil from './components/perfil/Perfil';

import BeeContainer from './components/miel/BeeContainer';

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/contacto" component={Contacto}/>
        <Route path="/perfil" component={Perfil} />
        <Route path="/bee-co" component={BeeContainer} />
        <Route render={() => <h2>En construcción</h2>} />


    </Switch>

);
