import React, {Component} from "react"


class Header extends Component {

    render() {
        return (
            <header role="banner">
                <div className="col-lg-3 col-md-3"><img className="img-responsive" src={require('../../public/img/logo.png')}/></div>
                <div className="col-lg-9 col-md-9">
                    <nav classID="navbar-primary" className="navbar" role="navigation">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse"
                                        data-target="#navbar-primary-collapse">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div className="collapse navbar-collapse" classID="navbar-primary-collapse">
                                <ul className="nav navbar-nav">
                                    <li><a href="/archive">ARCHIVE</a></li>
                                    <li><a href="/livestream">LIVESTREAM</a></li>
                                    <li><a href="/faq">FAQ</a></li>
                                    <li><a href="/about">ABOUT</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}

export  default Header