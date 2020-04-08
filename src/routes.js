import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/Products';
import Purchase from './pages/Purchase';

export default function Routes() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/product/:product" component={Purchase}/> 
        </Switch>
    </BrowserRouter>
    )
}
