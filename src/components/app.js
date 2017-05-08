import React, {Component} from 'react';

import Header from "./header"
import Footer from "./footer"

export default class App extends Component {
    render() {
        return (

            <div >
                <div className="container">
                    <Header/>
                    {this.props.children}
                    <Footer/>
                </div>
            </div>
        );
    }
}
