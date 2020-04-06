import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as Pages from './pages'

export default function Routes({ setLoad }){
    
    const [logged, setLogged] = useState();


    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" render={(props) => 
                    <Pages.Home setLoad={setLoad} 
                                logged={logged} 
                                setLogged={setLogged} />} exact />
                <Route path="/login" render={(props) => 
                    <Pages.Login setLoad={setLoad}
                                 logged={logged} 
                                 setLogged={setLogged} />} exact />
                <Route path="/one" render={(props) => <Pages.One setLoad={setLoad} />} exact />
                <Route path="/two" render={(props) => <Pages.Two setLoad={setLoad} />} exact />
                <Route path="/three" render={(props) => <Pages.Three setLoad={setLoad} />} exact />
                <Route path="/four" render={(props) => <Pages.Four setLoad={setLoad} />} exact />
            </Switch>
        </BrowserRouter>
    );
}