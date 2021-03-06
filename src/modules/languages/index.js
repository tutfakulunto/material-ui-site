'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import AppLayout from '../../components/appLayout';
import LanguageIcon from 'material-ui-icons/Language';
import shortid from 'shortid';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import api from '../../helpers/api';

class LanguagesPage extends React.Component {
    state = {
        languages: []
    };

    componentDidMount() {
        this.fetchLanguages()
            .then(languages => this.setState({languages}))
            .catch(error => {
                this.setState({languages: {}});
            });
    }

    render() {
        const {languages} = this.state;

        return (
            <AppLayout title={[<LanguageIcon className="page-icon" key={shortid.generate()} />, 'Languages']}>
                <Paper>
                  {languages.length > 0 &&
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell numeric>Abbreviation</TableCell>
                          <TableCell numeric>Family</TableCell>
                          <TableCell numeric>Description</TableCell>
                          <TableCell numeric>Created At</TableCell>
                          <TableCell numeric>Updated At</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {languages.map(language => {
                          return (
                            <TableRow key={language.id}>
                              <TableCell>{language.name}</TableCell>
                              <TableCell numeric>{language.abbreviation}</TableCell>
                              <TableCell numeric>{language.family}</TableCell>
                              <TableCell numeric>{language.description}</TableCell>
                              <TableCell numeric>{language.createdAt}</TableCell>
                              <TableCell numeric>language.updatedAt</TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  }
                  {languages.length === 0 &&
                    <p>No records found.</p>
                  }
                </Paper>
            </AppLayout>
        );
    }

    fetchLanguages = () => {
        return api.get('http://localhost:3000/languages');
    }
}

export default LanguagesPage;