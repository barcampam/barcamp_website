import React, {Component} from 'react';
import "./livestream.less";
import IntlMessages from '../../../components/utility/intlMessages';
// import LivestreamBox from '../../Livestream/';
import { Row, Col } from 'antd';

export default class Livestream extends Component {
    render() {
        return (
            <div className="livestream-wrapper">
                <h1 className="page-header-text"><IntlMessages id="navigation.livestream" /></h1>

                {/* <LivestreamBox /> */}

                <Row>
                    <Col xl={10} lg={10} md={24} sm={24} xs={24}>
                        <div className="room1-header-wrapper">
                            <h1>242b Room</h1>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xl={10} lg={10} md={10} sm={24} xs={24}>
                        <div className="room2-header-wrapper">
                            <h1>Big Hall</h1>
                        </div>
                    </Col>
                </Row>

            </div>

            
        );
    }
}