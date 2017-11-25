import React from 'react';
import {Menu} from 'element-react';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }
    onSelect(){}

    render() {
        return (
    <div >
<nav className="navbar navbar-dark bg-dark">
    <div >
          <span className="navbar-brand ml-0 mr-0 changeSize ">VENTA TELEFÓNICA &emsp;</span>
          <span className="navbar-brand ml-0 mr-0 changeSize " >600 390 6500 &emsp;</span>
          <span className="navbar-brand ml-0 mr-0 changeSize ">TIENDAS &emsp;</span>
          <span className="navbar-brand ml-0 mr-0 changeSize ">FALABELLA TV &emsp; &emsp;</span>
          <span className="navbar-brand ml-0 mr-0 changeSize ">SERVICIO AL CLIENTE &emsp;</span>
          <span className="navbar-brand ml-0 mr-0 changeSize ">NOVIOS &emsp;</span>
      
    </div>

    <div className = "pull-right"> 
      <span className="navbar-brand ml-0 mr-0 changeSize " >CMR &emsp;| &emsp;</span>
      <span className="navbar-brand ml-0 mr-0 changeSize ">BANCO &emsp;| &emsp;</span>
      <span className="navbar-brand ml-0 mr-0 changeSize ">VIAJES &emsp;| &emsp;</span>
      <span className="navbar-brand ml-0 mr-0 changeSize ">SEGUROS &emsp;| &emsp;</span>
      <span className="navbar-brand ml-0 mr-0 changeSize ">MOVIL &emsp;| &emsp;</span>
      <span className="navbar-brand ml-0 mr-0 changeSize ">SODIMAC &emsp;| &emsp;</span>
      <span className="navbar-brand ml-0 mr-0 changeSize ">HOMY &emsp;| &emsp;</span>
      <span className="navbar-brand ml-0 mr-0 changeSize ">TOTTUS </span>
    </div>
    
    

</nav>


    </div>
        );
    }
}