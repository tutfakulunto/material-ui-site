'use strict';

import React from 'react';
import AppLayout from '../../components/appLayout';
import LanguageIcon from 'material-ui-icons/Language';
import shortid from 'shortid';

class LanguagesPage extends React.Component {
    render() {
        return (
            <AppLayout title={[<LanguageIcon className="page-icon" key={shortid.generate()} />, 'Languages']}>
                <h1>Languages Page</h1>
            </AppLayout>
        );
    }
}

export default LanguagesPage;