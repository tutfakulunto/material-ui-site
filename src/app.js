'use strict';

import React from 'react';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import AppRouter from './components/appRouter';

const theme = createMuiTheme({
    palette: {
        primary: blue
    },
});

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <AppRouter />
            </MuiThemeProvider>
        );
    }
}

export default App;