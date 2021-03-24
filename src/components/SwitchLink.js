import React from 'react';
import{Switch, Route} from 'react-router-dom'
import Home from '../views/Home';
import Product from '../views/Product';

function SwitchLink() {
  return ( 
    <Switch>
        <Route exact path='/'>
             <Home/>
            </Route>
        <Route path='/products/:id'>
              <Product/>
        </Route>
    </Switch>
        
  );
}

export default SwitchLink;
