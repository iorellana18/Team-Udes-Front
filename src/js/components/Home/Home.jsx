import React from 'react';
import { Carousel } from 'element-react';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Carousel trigger="click" height="450px" interval="2000">
                {
                    [1,2,3,4].map((item, index) => {
                        return (
                            <Carousel.Item key={index}>
                                <img src={'./../../../img/'+item+'.png'} alt=""/>
                            </Carousel.Item>
                        )
                    })
                }
                </Carousel>
            </div>
        );
    }
}
