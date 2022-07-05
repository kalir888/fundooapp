import react from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from '../pages/signin/signin';
import SignUp from '../pages/signup/signup';
import Dashboard from '../pages/dashboard/dashboard';

function Router() {
    return (
        <div>
            <BrowserRouter >
                <Switch>
                    <Route path="/SignIn" component={SignIn}/>
                    <Route exact path="/" component={SignUp}/>
                    <Route path="/Dashboard" component={Dashboard}/> 
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router;