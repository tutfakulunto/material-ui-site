'use strict';

import React from 'react';
import AppLayout from '../../components/appLayout';
import LanguageIcon from 'material-ui-icons/Language';
import shortid from 'shortid';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

class LanguagesPage extends React.Component {
    render() {
        
        function BasicTable(props) {
          const { classes } = props;

            return (
                <AppLayout title={[<LanguagesIcon className="page-icon" key={shortid.generate()} />, 'Languages']}>
                    <Paper className={classes.root}>
                      <Table className={classes.table}>
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
                          {data.map(n => {
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
}

BasicTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LanguagesPage);