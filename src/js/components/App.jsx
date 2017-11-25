import React from 'react';
import Nav from './Nav/Nav'
import Search from './Search/Search'
import Login from './Login/Login'
import Register from './Register/Register'
import ProductCard from './ProductCard/ProductCard'
import { Layout } from 'element-react';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aaa: {
                bbb: [
                    {
                        img: 'http://falabella.scene7.com/is/image/Falabella/5034704?wid=249&hei=249&crop=0,0,0,0',
                        brand: 'nikon',
                        name: 'Lente Camara',
                        price: '$599.000'
                    },
                    {
                        img: 'http://falabella.scene7.com/is/image/Falabella/5034704?wid=249&hei=249&crop=0,0,0,0',
                        brand: 'nikon',
                        name: 'Lente Camara',
                        price: '$599.000'
                    },
                    {
                        img: 'http://falabella.scene7.com/is/image/Falabella/5034704?wid=249&hei=249&crop=0,0,0,0',
                        brand: 'nikon',
                        name: 'Lente Camara',
                        price: '$599.000'
                    },
                    {
                        img: 'http://falabella.scene7.com/is/image/Falabella/5034704?wid=249&hei=249&crop=0,0,0,0',
                        brand: 'nikon',
                        name: 'Lente Camara',
                        price: '$599.000'
                    },
                    {
                        img: 'http://falabella.scene7.com/is/image/Falabella/5034704?wid=249&hei=249&crop=0,0,0,0',
                        brand: 'nikon',
                        name: 'Lente Camara',
                        price: '$599.000'
                    },
                    {
                        img: 'http://falabella.scene7.com/is/image/Falabella/5034704?wid=249&hei=249&crop=0,0,0,0',
                        brand: 'nikon',
                        name: 'Lente Camara',
                        price: '$599.000'
                    }
                ]
            } 
        }
    }
    render() {
        return (
            <div>
                <Nav></Nav>
                <h1>HOLA</h1>
                <Search></Search>
                <Login></Login>
                <Register></Register>
                {this.state.aaa.bbb.map((item, index) => (
                    <Layout.Col span="6" key={index}>
                        <ProductCard data={item}></ProductCard>
                    </Layout.Col>
                ))}
                <br/>
            </div>
        );
    }
}