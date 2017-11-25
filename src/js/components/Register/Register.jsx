import React from 'react';
import { Input, Button, Form, Message } from 'element-react';
import PropTypes from 'prop-types';
import { register } from '../../services/index'

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: '',
                lastname: '',
                email: '',
                password: '',
                password_validation: '',
                user_type: 2
            }
        }
    }
    onSubmit(state) {
        register(this.state.form).then((res) => {
            console.log('register', res);
            Message({
                message: 'Bienvenido, te haz autentificado con exito.',
                type: 'success'
              });
              this.props.close(true);
        }).catch((res) => {
            console.log('error register', res);
            Message.error('Error al intentar ingresar en tu cuenta.');
            this.props.close(true);
        });
    }
    onChange(key, value) {
        this.state.form[key] = value;
        this.forceUpdate();
    }
    handleClose() {
        this.props.close(true);
    }
    render() {
        return (
            <div align="center">
                <Form model={this.state.form}>
                    <Form.Item label="Nombre">
                        <Input
                            value={this.state.form.name}
                            onChange={this.onChange.bind(this, 'name')}
                        >
                        </Input>
                    </Form.Item>
                    <Form.Item label="Apellido">
                        <Input
                            value={this.state.form.lastname}
                            onChange={this.onChange.bind(this, 'lastname')}
                        >
                        </Input>
                    </Form.Item>
                    <Form.Item label="Email">
                        <Input
                            value={this.state.form.email}
                            onChange={this.onChange.bind(this, 'email')}
                        >
                        </Input>
                    </Form.Item>
                    <Form.Item label="Contraseña">
                        <Input
                            value={this.state.form.password}
                            onChange={this.onChange.bind(this, 'password')}
                            type="password"
                        >
                        </Input>
                    </Form.Item>
                    <Form.Item label="Validar Contraseña">
                        <Input
                            value={this.state.form.password_validation}
                            onChange={this.onChange.bind(this, 'password_validation')}
                            type="password"
                        >
                        </Input>
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={this.handleClose.bind(this)}>Cancelar</Button>
                        <Button type="success" onClick={this.onSubmit.bind(this)}>Registrarse</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

Register.propTypes = {
    close: PropTypes.func,
};