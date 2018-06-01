import React, {Component} from 'react';
import { Layout } from 'antd';
import img from '../../../image/6-layers.png';
// import andriod from '../../../image/bitmap.png';
import './index.less';
import {connect} from "react-redux";

class Index extends Component {
    render() {
        return (
            <div>
                <Layout className={`bar-index ${this.props.app.view !== 'DesktopView' ? 'mobile' : null}`}>
                    <div className="bar-text-wrapper">
                        <h3 className="bar-date">Jun 16-17</h3>
                        <h1 className="bar-text">The most wanted <b>tech and<br /> media event</b> in Armenia</h1>
                    </div>
                    <div className="bar-bootom-images">
                        <p className="bar-hashtag">#barcampevn18</p>
                        {/*<a href="https://play.google.com/store/apps/details?id=com.barcampevn" target="_blank">*/}
                            {/*<img src={andriod} alt="BarCamp EVN'18 Andriod Application"/>*/}
                        {/*</a>*/}
                    </div>
                    <img className="bar-main-img" src={img} alt="BarCamp EVN'18 Cover" />
                </Layout>
                <div className="bar-head-separator" />
            </div>
        );
    }
}

export default connect(
    state => ({
        app: state.App.toJS()
    }),
    {}
)(Index);