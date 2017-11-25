import React from 'react';
import {Button, Icon} from 'react-materialize'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div align="center">
                <h1>HOLA</h1>
                <Button waves='light'>EDIT ME<Icon left>save</Icon></Button>
                <br/>
            </div>
        );
    }
}