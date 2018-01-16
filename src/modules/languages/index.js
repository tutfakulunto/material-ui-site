'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import AppLayout from '../../components/appLayout';
import LanguageIcon from 'material-ui-icons/Language';
import shortid from 'shortid';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import {withStyles, withTheme} from 'material-ui/styles';

class LanguagesPage extends React.Component {
    
    state = {languages: {}};

    componentDidMount() {
        this.fetchLanguagess()
            .then(languages => this.setState({languages}))
            .catch(error => {
                this.setState({languages: {}});
            });
    }

    render() {

        return (
            <AppLayout title={[<LanguageIcon className="page-icon" key={shortid.generate()} />, 'Languages']}>
                <Paper>
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
                      {languages.map(n => {
                        return (
                          <TableRow key={n.id}>
                            <TableCell>{n.name}</TableCell>
                            <TableCell numeric>{n.abbreviation}</TableCell>
                            <TableCell numeric>{n.family}</TableCell>
                            <TableCell numeric>{n.desription}</TableCell>
                            <TableCell numeric>{n.createdAt}</TableCell>
                            <TableCell numeric>n.updatedAt</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </Paper>
            </AppLayout>
        );
    }
}

export default LanguagesPage;