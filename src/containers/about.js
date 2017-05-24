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
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <p>"BarCamp Yerevan" was first held on April 17-19, 2009. Armenian IT and new media specialists fell in love with the new type of "unconference" and each successive BarCamp,
                                    in 2010, 2011, 2012, 2013, 2014, 2015 attracted more and more people. In 2009 we only had 400 participants. Last year, in 2015, the number of developers, hackers, geeks, bloggers,
                                    journalists and online activists reached 2500. Check out this video to get a glimpse of what it felt to be in "BarCamp Yerevan 2011″. Our favorite bit is the afterparty of course ;)
                                    <br /><br />

                                    "BarCamp Yerevan 2017″ will be held pretty soon.
                                </p>
                                <h5>What is BarCamp?</h5>
                                <p>BarCamp is a brand new event, originating in the Silicon Valley of USA in 2005 that has become widespread throughout the world.</p>
                                <h5>Filling in presentation wall</h5>
                                <p>BarCamp is usually a "non-conference" in the sphere of information technology or "IT,"new media and Internet. A "non-conference" is the unofficial, informal part of the conference supporting open discussions and a free exchange of ideas and opinions.</p>
                                <h5>First BarCamp in History</h5>
                                <p>The philosophy of BarCamp is the following: all presentations are given by participants themselves, with no formally invited guest speakers and without the formality of traditional conference.</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <p>Most revealing, the schedule of events is "produced" by the participants of the conference and is formed only after the conference opens, as participants add the presentations they want to hold on a white board. We also have workshops and guest speakers, whose talks are announced beforehand.</p>
                                <h5>Our region</h5>
                                <p>The first ever BarCamp near to us was organised in Kiev in October 2007. It brought together about 300 people from Ukraine, Belarus, Kazakhstan, Latvia, Russia, Kyrgyzstan, Poland, and other countries from the region and featured around 45 presentations.<br /><br />
                                    After “BarCamp Kiev”, there was "BarCamp Baltics" in Riga (February 2008) and "Barcamp Caucasus" in Tbilisi (June 2008). The wave of BarCamps continues.
                                </p>
                                <h5>Target Group</h5>
                                <p>The main target audience of the BarCamp is engineers/developers/programmers of all flavors, project managers, entrepreneurs, new media activists, designers, educators and all professionals who are building the next generation Web.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
