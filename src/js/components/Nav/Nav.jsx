import React from 'react';
import PropTypes from 'prop-types';
import Search from '../Search/Search';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ImageUpload from '../ImageUpload/ImageUpload'
import { Menu, Layout, Button, Dialog } from 'element-react';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
            dialogVisible: false,
            loginVisible: false,
            registerVisible: false
        };
    }
    onSelect(){

    }
    handleSearch(data) {
        this.props.sendToApp(data);
    }
    handleImage(data) {
        this.props.sendImageUpload(data);
    }
    handleLoginClose() {
        this.setState({ loginVisible: false });
    }
    render() {
        return (
            <div >
                <nav className="navbar navbar-dark bg-dark">
                    <div >
                        <span className="navbar-brand ml-0 mr-0 changeSize ">
                            VENTA TELEFÓNICA &emsp;
                        </span>
                        <span className="navbar-brand ml-0 mr-0 changeSize " >
                            600 390 6500 &emsp;
                        </span>
                        <span className="navbar-brand ml-0 mr-0 changeSize ">
                            TIENDAS &emsp;
                        </span>
                        <span className="navbar-brand ml-0 mr-0 changeSize ">
                            FALABELLA TV &emsp; &emsp;
                        </span>
                        <span className="navbar-brand ml-0 mr-0 changeSize ">
                            SERVICIO AL CLIENTE &emsp;
                        </span>
                        <span className="navbar-brand ml-0 mr-0 changeSize ">
                            NOVIOS &emsp;
                        </span> 
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
                        <Search sendToNav={this.handleSearch.bind(this)}></Search>
                    </div></Layout.Col>
                    <Layout.Col span="4">
                        <div className="grid-content bg-purple-light">
                            <span className="navbar-brand ml-3 mr-0 changeSizeBig ">
                                <Button type="text" onClick={ () => this.setState({ loginVisible: true }) }>
                                    Inicia sesión
                                </Button>
                                &emsp;o&emsp;
                                <Button type="text" onClick={ () => this.setState({ registerVisible: true }) }>
                                    Registrate aquí
                                </Button>
                            </span>
                        </div>
                    </Layout.Col>
                    <Layout.Col span="2"><div className="grid-content bg-purple-light"></div></Layout.Col>
                    <Layout.Col span="2"><div className="grid-content bg-purple-light">
                        <Button type="success" onClick={ () => this.setState({ dialogVisible: true }) }>
                            &emsp;&emsp;<i className="fa fa-camera"></i>&emsp;&emsp;
                        </Button>
                        {/* Upload Picture */}
                        <Dialog
                            title="¡Sube tu fotografía!"
                            size="tiny"
                            visible={ this.state.dialogVisible }
                            onCancel={ () => this.setState({ dialogVisible: false }) }
                            lockScroll={ false }
                            >
                            <Dialog.Body>
                                <ImageUpload sendToNav={ this.handleImage.bind(this) }></ImageUpload>
                            </Dialog.Body>
                        </Dialog>
                        {/* Login */}
                        <Dialog
                            title="Autentificate"
                            size="tiny"
                            visible={ this.state.loginVisible }
                            onCancel={ () => this.setState({ loginVisible: false }) }
                            lockScroll={ false }
                            >
                            <Dialog.Body>
                                <Login close={this.handleLoginClose.bind(this)}></Login>
                            </Dialog.Body>
                        </Dialog>
                        {/* Register */}
                        <Dialog
                            title="Registrate"
                            size="tiny"
                            visible={ this.state.registerVisible }
                            onCancel={ () => this.setState({ registerVisible: false }) }
                            lockScroll={ false }
                            >
                            <Dialog.Body>
                                <Register></Register>
                            </Dialog.Body>
                        </Dialog>
                    </div>
                </Layout.Col>

            </nav>

        </div>
        );
    }
}

Nav.propTypes = {
    sendToApp: PropTypes.func,
    sendImageUpload: PropTypes.func
};
