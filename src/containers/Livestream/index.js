import React, {Component} from 'react';
import "./livestream.less";
import { Row, Col } from 'antd';

export default class Livestream extends Component {

    state = {
        active: 1,
    }

    room1 = {
        key: 1,
        url: "https://www.youtube.com/embed/tgbNymZ7vqY",
        title: "Big Hall"
    }

    room2 = {
        key: 2,
        url: "https://www.youtube.com/watch?v=mgeDbB5pbO4",
        title: "117E Room"
    }

    room3 = {
        key: 3,
        url: "https://www.youtube.com/watch?v=KrCMWS_fB4o",
        title: "113W Room"
    }

    room4 = {
        key: 4,
        url: "https://www.youtube.com/watch?v=lqBL3E_wo6M",
        title: "224B Room"
    }

    room5 = {
        key: 5,
        url: "https://www.youtube.com/embed/tgbNymZ7vqY",
        title: "224B Room"
    }

    room(state) {
        switch(state) {
            case this.state.active === 1:
                return  <iframe width="548" 
                                height="320"
                                frameBorder="0" 
                                allowFullScreen
                                title= {this.room1.title}
                                src={this.room1.url} />
            case this.state.active === 2:
                return  <iframe width="548" 
                                height="320"
                                frameBorder="0" 
                                allowFullScreen
                                title= {this.room2.title}
                                src={this.room2.url} />
            case this.state.active === 3:
                return  <iframe width="548" 
                                height="320"
                                frameBorder="0" 
                                allowFullScreen
                                title= {this.room3.title}
                                src={this.room3.url} />
            case this.state.active === 4:
                return  <iframe width="548" 
                                height="320"
                                frameBorder="0" 
                                allowFullScreen
                                title= {this.room4.title}
                                src={this.room4.url} />
            case this.state.active === 5:
                return  <iframe width="548" 
                                height="320"
                                frameBorder="0" 
                                allowFullScreen
                                title= {this.room5.title}
                                src={this.room5.url} />
            default:
                return  <iframe width="548" height="320"
                            title= {this.room1.title}
                            src={this.room1.url} />
        }
    }
    
    render() {  
        return (
            <Row>
                <div className="videos-content-wrapper">
                    <Col xl={7} lg={7} md={7} sm={7} xs={7}>
                        <div className="rooms-wrapper">
                            <a onClick={this.setState({
                                active: 1
                            })}>
                                <h3>Big Hall</h3>
                            </a>

                            <a onClick={this.setState({
                                active: 2
                            })}>
                                <h3>117E room</h3>
                            </a>

                            <a onClick={this.setState({
                                active: 3
                            })}>
                                <h3>113W room</h3>
                            </a>

                            <a onClick={this.setState({
                                active: 4
                            })}>
                                <h3>224B room</h3>
                            </a>
                            
                            <a onClick={this.setState({
                                active: 5
                            })}>
                                <h3>224B room</h3>
                            </a>
                        </div>
                    </Col>

                    <Col xl={10} lg={10} md={10} sm={10} xs={10}>
                            
                    </Col>

                    <Col xl={7} lg={7} md={7} sm={7} xs={7}>
                    
                        
                
                    </Col>
                </div>
                <div className="videos-bottom-background">

                </div>
            </Row>
        );
    }
}