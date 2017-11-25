import React from 'react';
import { PropTypes } from 'react';
import { Card, Button } from 'element-react';

export default class ProductCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Card>
                    <img src={ this.props.data.img } className="center"/>
                    <div style={{ padding: 14 }}>
                        <span className="card-brand">{ this.props.data.brand }</span>
                        <br/>
                        <br/>
                        <span className="card-name">{ this.props.data.name }</span>
                        <br/>
                        <span className="card-price">{ this.props.data.price }</span>
                        <div className="set-card-margin-bottom">
                            <Button type="primary" className="pull-right">Agregar</Button>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}
