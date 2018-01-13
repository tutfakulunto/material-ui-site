'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import history from './history';
import {withStyles, withTheme} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, {
    ListItem,
    ListItemIcon,
    ListItemText
} from 'material-ui/List';
import Button from 'material-ui/Button';
import LanguageIcon from 'material-ui-icons/Language';


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
    navIconHide: {
        marginLeft: -12,
        marginRight: 20,

        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    title: {
        flex: 1,

        [theme.breakpoints.up('md')]: {
            marginLeft: 10
        }
    },
    drawer: {
        height: '100%'
    },
    drawerContainer: {
        height: `calc(100% + ${theme.spacing.unit * 6}px)`,

        [theme.breakpoints.up('md')]: {
            height: `calc(100% - ${theme.spacing.unit * 10.5}px)`,
        }
    },
    drawerHeader: theme.mixins.toolbar,
    drawerHeaderContent: {
        textAlign: 'center',
        lineHeight: '64px',
        fontWeight: 500,
        color: 'rgba(0, 0, 0, 0.54)'
    },
    drawerList: {
        height: '100%'
    },
    drawerPaper: {
        width: 250,

        [theme.breakpoints.up('md')]: {
            position: 'relative',
            width: drawerWidth,
            height: '100%'
        }
    },
    nestedMenu: {
        paddingLeft: theme.spacing.unit * 4
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

  <div>
    <ListItem button onClick={() => this.handleMenuNavigation('/')}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button onClick={() => this.handleMenuNavigation('/languages')}>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Languages" />
    </ListItem>
    <ListItem button onClick={() => this.handleMenuNavigation('/lessons')}>
      <ListItemIcon>
        <UsersIcon />
      </ListItemIcon>
      <ListItemText primary="Lessons" />
    </ListItem>
  </div>
};


AppLayout.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withTheme()(withStyles(styles)(AppLayout));