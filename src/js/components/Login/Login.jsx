import React from 'react';
import { Input, Button, Form, Message } from 'element-react';
import { login } from '../../services/index'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                username: '',
                password: ''
            }
        }
    }
    onSubmit(state) {
        console.log('FORM', this.state.form);
        login(this.state.form).then((res) => {
            console.log('LOGIN', res);
            localStorage.setItem('token', res.data.token);
            Message({
                message: 'Bienvenido, te haz autentificado con exito.',
                type: 'success'
              });
        }).catch((res) => {
            console.log('ERROR LOGIN', res);
            Message.error('Error al intentar ingresar en tu cuenta.');
        })
    }
    onChange(key, value) {
        this.state.form[key] = value;
        this.forceUpdate();
    }
    render() {
        return (
            <div align="center">
                <Form model={this.state.form}>
                    <Form.Item label="Email">
                        <Input 
                            value={this.state.form.username} 
                            onChange={this.onChange.bind(this, 'username')}
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
                    <Form.Item>
                        <Button>Cancel</Button>
                        <Button type="success" onClick={this.onSubmit.bind(this)}>Entrar</Button>
                    </Form.Item>
                </Form>
                <br/>
            </div>
        );
    }
}