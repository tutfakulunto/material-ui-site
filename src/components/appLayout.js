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
import Divider from 'material-ui/Divider';
import Hidden from 'material-ui/Hidden';
import MenuIcon from 'material-ui-icons/Menu';
import IconButton from 'material-ui/IconButton';
import DashboardIcon from 'material-ui-icons/Dashboard';
import LanguageIcon from 'material-ui-icons/Language';
import LessonsIcon from 'material-ui-icons/LibraryBooks';

const config = window.config;
const drawerWidth = 240;

const styles = (theme) => ({
    appFrame: {
        display: 'flex',
        height: '100%',
        width: '100%'
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
    },
    root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
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

        const drawer = (
            <div className={classes.drawerContainer}>
                <div className={classes.drawerHeader}>
                    <Typography type="title" className={classes.drawerHeaderContent}>
                    </Typography>
                </div>
                <Divider />
                <List className={classes.drawerList}>
                    <ListItem button onClick={() => this.handleMenuNavigation('/')}>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Dashboard" />
                    </ListItem>
                    <ListItem button onClick={() => this.handleMenuNavigation('/languages')}>
                        <ListItemIcon>
                            <LanguageIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Languages" />
                    </ListItem>
                    <ListItem button onClick={() => this.handleMenuNavigation('/lessons')}>
                        <ListItemIcon>
                            <LessonsIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Lessons" />
                    </ListItem>
                </List>
            </div>
        );

    return (
            <div className={classes.appFrame}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="contrast"
                            aria-label="open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.navIconHide}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} type="title" color="inherit" noWrap>
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Hidden mdUp>
                    <Drawer
                        type="temporary"
                        anchor="left"
                        open={this.state.mobileMenuOpen}
                        className={classes.drawer}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        onClose={this.handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        type="permanent"
                        open
                        className={classes.drawer}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

AppLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withTheme()(withStyles(styles)(AppLayout));