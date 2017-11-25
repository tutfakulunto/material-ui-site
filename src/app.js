import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'material-ui/Button';

class App extends React.Component {
    render() {
        return (
            <Button raised color="primary">
            Hello World
            </Button>
        );
    }
}

module.exports = App;