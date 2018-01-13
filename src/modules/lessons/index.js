'use strict';

import React from 'react';
import AppLayout from '../../components/appLayout';
import LibraryBooksIcon from 'material-ui-icons/LibraryBooks';
import shortid from 'shortid';

class LessonsPage extends React.Component {
    render() {
        return (
            <AppLayout title={[<LibraryBooksIcon className="page-icon" key={shortid.generate()} />, 'Lessons']}>
                <h1>Lessons Page</h1>
            </AppLayout>
        );
    }
}

export default LessonsPage;