'use strict';

import React from 'react';
import AppLayout from '../../components/appLayout';
import DashboardIcon from 'material-ui-icons/Dashboard';
import shortid from 'shortid';

class DashboardPage extends React.Component {
    render() {
        return (
            <AppLayout title={[<DashboardIcon className="page-icon" key={shortid.generate()} />, 'Dashboard']}>
                <h1>Dashboard Page</h1>
            </AppLayout>
        );
    }
}

export default DashboardPage;