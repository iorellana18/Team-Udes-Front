import React from 'react';
import Search from './Search/Search'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div align="center">
                <h1>HOLA</h1>
                <Search></Search>
                <br/>
            </div>
        );
    }
}