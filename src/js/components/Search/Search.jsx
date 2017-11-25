import React from 'react';
import { Input } from 'element-react';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div align="center">
                <Input
                    icon="time"
                    placeholder="¿Qué buscas?"
                />
            </div>
        );
    }
}