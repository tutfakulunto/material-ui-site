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
import Button from 'material-ui/Button';
import DashboardIcon from 'material-ui-icons/Dashboard';
import LanguageIcon from 'material-ui-icons/Language';
import LessonsIcon from 'material-ui-icons/LibraryBooks';


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
      <div>
        <AppBar className={classes.appBar}>
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
          <main className={classes.content}>
            {this.props.children}
          </main>
        </AppBar>
      </div>
    );
  };
}

export default AppLayout;