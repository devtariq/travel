import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

const App = () => {
    return (
        <div className="App">

            <Router>
                <Switch>
                    <Route path="/" exact> 
                        <Users />
                    </Route>
                    <Route path="/new/place" exact>
                        <NewPlace />
                    </Route>
                    <Redirect to="/" />
                </Switch>

            </Router>

        </div>
    );
}

export default App;
