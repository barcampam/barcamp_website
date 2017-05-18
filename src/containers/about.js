import React, { Component } from 'react';

export default class About extends Component {
    render(){
        return (
            <div>
                <div className="container-fluid about-section">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h1>About</h1>
                            <div className="about-cover">
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 about-us">
                           <h4>Who we Are?</h4>
                            <p>The event will take place on May 27-28, 2017 in Yerevan, Armenia and will bring together bloggers, new media professionals, IT specialists, companies involved in Internet and digital technologies, journalists and journalism students as well as any other
                                groups interested in using technology and Internet in their work.  Digital technologies, journalists and journalism students as well as any other groups interested in using technology and Internet in their work digital technologies,
                                journalists and journalism students as well as any other groups interested in using technology and Internet in their work.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
