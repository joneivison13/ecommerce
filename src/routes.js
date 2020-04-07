import { BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import Main from './pages/Products';
import Breve from './pages/Embreve';
import New from './pages/New';
import Cadastro from './pages/Cadastro';
import User from './pages/User';

export default function Routes() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/em-breve" component={Breve}/>
            <Route path="/create" component={New}/>
            <Route path="/cadastro" component={Cadastro}/>
            <Route path="/user" component={User}/>
        </Switch>
    </BrowserRouter>
    )
}
