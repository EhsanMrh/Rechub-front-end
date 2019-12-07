import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './Pages/Home'
import Panel from './Pages/Panel'
import Blog from './Pages/Blog'

const Router = () => {
    return (
        <div>
            <BrowserRouter basename="/">
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/panel" component={Panel} />
                    <Route path="/blog" component={Blog} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router;