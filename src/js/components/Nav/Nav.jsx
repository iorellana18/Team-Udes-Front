import React from 'react';
import Search from '../Search/Search';
import ImageUpload from '../ImageUpload/ImageUpload'
import {Menu, Layout,Button,Dialog} from 'element-react';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
    dialogVisible: false
  };
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
<nav className="navbar navbar-light bg-light">

    <Layout.Col span="16"><div className="grid-content bg-purple">
          <Search></Search>
    </div></Layout.Col>

    

    <Layout.Col span="4"><div className="grid-content bg-purple-light">
            <span className="navbar-brand ml-3 mr-0 changeSizeBig ">
            Inicia sesión&emsp;o&emsp;Registrate aquí
            </span>
    </div></Layout.Col>
    <Layout.Col span="2"><div className="grid-content bg-purple-light"></div></Layout.Col>
    <Layout.Col span="2"><div className="grid-content bg-purple-light">
    
    <Button type="success" icon="upload2" onClick={ () => this.setState({ dialogVisible: true }) }></Button>
      <Dialog
        title="¡Sube tu fotografía!"
        size="tiny"
        visible={ this.state.dialogVisible }
        onCancel={ () => this.setState({ dialogVisible: false }) }
        lockScroll={ false }
      >
        <Dialog.Body>
          <ImageUpload></ImageUpload>
        </Dialog.Body>

      </Dialog>
    </div></Layout.Col>

</nav>

    </div>
        );
    }
}