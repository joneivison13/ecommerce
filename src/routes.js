import { BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import Main from './pages/Products';
import Breve from './pages/Embreve';

export default function Routes() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/em-breve" component={Breve}/>
        </Switch>
    </BrowserRouter>
    )
}
