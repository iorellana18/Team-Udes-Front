import React from 'react';
import { Card, Button } from 'element-react';

export default class ProductCard extends React.Component {
    constructor(props) {
        super(props);
    }
    handleButton() {
        //window.location.replace('http://www.falabella.com/' + this.props.data.url);        
    }
    render() {
        return (
            <div>
                <Card>
                    <img src={ 'http://falabella.scene7.com/is/image/Falabella/' + this.props.data.productId + '?wid=249&hei=249&crop=0,0,0,0' } className="center"/>
                    <div style={{ padding: 14 }}>
                        <span className="card-brand">{ this.props.data.brand }</span>
                        <br/>
                        <br/>
                        <span className="card-name">{ this.props.data.title }</span>
                        <br/>
                        <span className="card-price">{ this.props.data.precio }</span>
                        <div className="set-card-margin-bottom">
                            <Button
                                type="success"
                                className="pull-right"
                                onClick={this.handleButton()}
                                >
                                Ver
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}
