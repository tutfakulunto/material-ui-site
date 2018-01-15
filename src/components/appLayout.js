'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import history from './history';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, {
    ListItem,
    ListItemIcon,
    ListItemText
} from 'material-ui/List';
import {withStyles, withTheme} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import DashboardIcon from 'material-ui-icons/Dashboard';
import LanguageIcon from 'material-ui-icons/Language';
import LessonsIcon from 'material-ui-icons/LibraryBooks';

const config = window.config;
const drawerWidth = 240;

const styles = (theme) => ({
    appFrame: {
        display: 'flex',
        height: '100%'
    },
    appBar: {
        position: 'fixed',
        marginLeft: drawerWidth,

        '& a': {
            color: 'white',
            textDecoration: 'none'
        },
        '& a:hover': {
            textDecoration: 'underline'
        },
        '& .page-icon': {
            verticalAlign: 'top',
            marginRight: '10px'
        },

        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`
        }
    },
    title: {
        flex: 1,

        [theme.breakpoints.up('md')]: {
            marginLeft: 10
        }
    },
    content: {
        backgroundColor: theme.palette.background.default,
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        width: '100%',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        padding: theme.spacing.unit * 3,
        marginTop: theme.spacing.unit * 7,

        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing.unit * 8
        },

        [theme.breakpoints.up('md')]: {
            paddingBottom: theme.spacing.unit * 3
        },

        '& a': {
            color: '#f50057',
            textDecoration: 'none'
        },
        '& a:hover': {
            color: '#DC003E',
            textDecoration: 'underline'
        }
    }
});

class AppLayout extends React.Component {
    state = {
        mobileMenuOpen: false
    }

    handleDrawerToggle = () => {
        this.setState({mobileMenuOpen: !this.state.mobileMenuOpen});
    }

    handleMenuNavigation = (uri) => {
        this.setState({mobileMenuOpen: false});
        history.push(uri);
    }

  render() {
        const {classes, title} = this.props;

    return (
      <div className={classes.appFrame}>
        <AppBar className={classes.appBar}>
            <ListItem button onClick={() => this.handleMenuNavigation('/')}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button onClick={() => this.handleMenuNavigation('/languages')}>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary="Languages" />
            </ListItem>
            <ListItem button onClick={() => this.handleMenuNavigation('/lessons')}>
              <ListItemIcon>
                <LessonsIcon />
              </ListItemIcon>
              <ListItemText primary="Lessons" />
            </ListItem>
        </AppBar>
        <main className={classes.content}>
            {this.props.children}
          </main>
      </div>
    );
  };
}

export default withTheme()(withStyles(styles)(AppLayout));