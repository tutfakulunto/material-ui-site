'use strict';

import React from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import history from './history';
import LandingPage from '../modules/landingPage';
import DashboardPage from '../modules/dashboard';
import LanguagesPage from '../modules/languages';
import LessonsPage from '../modules/lessons';

class AppRouter extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact getAuthToken={this.getAuthToken} path="/landingPage" component={LandingPage} />
                    <Route exact getAuthToken={this.getAuthToken} path="/" component={DashboardPage} />
                    <Route exact getAuthToken={this.getAuthToken} path="/languages" component={LanguagesPage} />
                    <Route exact getAuthToken={this.getAuthToken} path="/lessons" component={LessonsPage} />
                </Switch>
            </Router>
        );
    }
}

export default AppRouter;