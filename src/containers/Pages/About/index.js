import React, {Component} from 'react';
import "./about.less";
import IntlMessages from '../../../components/utility/intlMessages';
import BarCampStaff from '../../../image/rectangle-14.png';

export default class Archive extends Component {
    render() {
        return (
            <div>
               <h1 className="page-header-text"><IntlMessages id="navigation.about" /></h1>

               <div className="about-image-wrapper">
                    <img src={BarCampStaff} alt="BarCamp Staff" />
               </div>

               <div className="about-text-wrapper">
                   <h3 className="about-header"><IntlMessages id="about.whoWeAre" /></h3>
                   <p className="about-text-content"><IntlMessages id="about.whoWeAreText" /></p>
               </div>
            </div>
            
        );
    }
}