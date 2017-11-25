import React from 'react';
import Nav from './Nav/Nav'
import Search from './Search/Search'
import Login from './Login/Login'
import Register from './Register/Register'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Nav></Nav>
                <h1>HOLA</h1>
                <Search></Search>
                <Login></Login>
                <Register></Register>
                <br/>
            </div>
        );
    }
}