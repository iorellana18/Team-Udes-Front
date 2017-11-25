import React from 'react';
import Nav from './Nav/Nav'
import Search from './Search/Search'
import Login from './Login/Login'
import Register from './Register/Register'
import ProductCard from './ProductCard/ProductCard'
import ImageUpload from './ImageUpload/ImageUpload'
import Home from './Home/Home'
import { Layout } from 'element-react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {    
            data: []
        }
    }
    handleSearch(data) {
        this.setState({ data: data });
        console.log('Search', this.state.data, data);
    }
    handleImage(data) {
        this.setState({ data: data });
        console.log('Image', this.state.data, data);
    }
    render() {
        let items = [];
        let car = [];
        if (this.state.data.length == 0) {
            items = (
                <div align="center">
                    <h3>Aplicacion para e-Hackaton</h3>
                    <h5>Miembros</h5>
                    <h6>- Katherine Liberona</h6>
                    <h6>- Nestor Mora</h6>
                    <h6>- Ian Orellana</h6>
                    <h6>- Daniel Wladdimiro</h6>
                    <h6>- Nicolas Vasquez</h6>
                </div>
            );
            car = <Home></Home>;
        } else {
            car = null;
            
            items = this.state.data.map((item, index) => (
                <Layout.Col span="6" key={index}>
                    <ProductCard data={item}></ProductCard>
                </Layout.Col>
            ))
        }
        console.log(items);
        return (
            <div>
                <Nav
                    sendToApp = { this.handleSearch.bind(this) }
                    sendImageUpload = { this.handleImage.bind(this) }
                    >
                </Nav>
                { car }
                <Layout.Col offset="2" span="20">
                    { items }
                </Layout.Col>
                <br/>
            </div>
        );
    }
}