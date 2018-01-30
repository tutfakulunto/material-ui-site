'use strict';

import React from 'react';
import AppLayout from '../../components/appLayout';
import DashboardIcon from 'material-ui-icons/Dashboard';
import shortid from 'shortid';

class LandingPage extends React.Component {
    render() {
        return (
            <AppLayout title={[<DashboardIcon className="page-icon" key={shortid.generate()} />, 'LandingPage']}>
                <h1>Landing Page</h1>
            </AppLayout>
        );
    }
}

export default LandingPage;