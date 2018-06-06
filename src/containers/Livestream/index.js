import React, {Component} from 'react';
import "./livestream.less";
import { Row, Col } from 'antd';

export default class Livestream extends Component {

    state = {
        stream: [
            {
                url: "https://www.youtube.com/embed/kO5LhED9QBo?list=PLkaN8-chLmTRvWRxcXvRs1PjbMEI3LTPa",
                room: "Big Hall"
            },
            {
                url: "https://www.youtube.com/embed/V05iKvHSdEc?list=PLkaN8-chLmTSqizWXmTzk-bxmIbnhX1Dg",
                room: "308E room"
            },
            {
                url: "https://www.youtube.com/embed/DIdXYBVUjAs?list=PLkaN8-chLmTQ_urHPTBmKIh1cc-9XkRUK",
                room: "208E room"
            },
            {
                url: "https://www.youtube.com/embed/t2S-lfoeM3w?list=PLkaN8-chLmTShNHmw0O-dDeOaH7iq9voj",
                room: "213W room"
            },
            {
                url: "https://www.youtube.com/embed/jvoJLDZbR2U?list=PLkaN8-chLmTRKDqiHlpWqW1D_bG1_IqEV",
                room: "214W room"
            },
            {
                url: "https://www.youtube.com/embed/GnmWEfUMa8o?list=PLkaN8-chLmTQKOIF3YZMY6rMzjMXroZ96",
                room: "114W room"
            }
        ],
        active: 0
    };
    
    render() {  
        return (
            <Row className="videos-content-wrapper">
                <Col xl={7} lg={7} md={6} sm={6} xs={24}>
                    <div className="rooms-wrapper">
                        {this.state.stream.map((item, index) => (
                            <a className={this.state.active === index ? 'active' : null} key={index} onClick={() => this.setState({active: index})}>
                                <h3>{item.room}</h3>
                            </a>
                        ))}
                    </div>
                </Col>

                <Col xl={10} lg={10} md={18} sm={18} xs={24} className="iframe-wrapper">
                    <iframe width="548" 
                        height="308"
                        frameBorder="0" 
                        allowFullScreen
                        title={this.state.stream[this.state.active].room}
                        src={this.state.stream[this.state.active].url} 
                        className="youtube-iframe"/>
                </Col>

                <Col xl={7} lg={7} md={0} sm={0} xs={0} >

                </Col>

                <div className="videos-bottom-background">

                </div>
            </Row>
        );
    }
}