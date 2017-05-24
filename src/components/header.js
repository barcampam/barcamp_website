import React, {Component} from "react"

const Active = (pathName)=>{
    let path = location.pathname;
    if(pathName == path){
        return "active"
    }
}
class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle">
                            <span></span>
                        </button>
                        <a className="navbar-brand" href="/"><img src={require('../../public/img/logo.png')}  /></a>
                    </div>
                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="/"></a>
                            </li>
                            {/*<li className={Active("/archive")}>*/}
                                {/*<a href="/archive">ARCHIVE</a>*/}
                            {/*</li>*/}
                            {/*<li  className={Active("/livestream")} >*/}
                                {/*<a href="/livestream">LIVESTREAM</a>*/}
                            {/*</li>*/}
                            <li className={Active("/faq")}>
                                <a href="/faq">FAQ</a>
                            </li>
                            <li className={Active("/about")}>
                                <a href="/about">ABOUT</a>
                            </li>
                        </ul>
                        {/*<ul className="nav navbar-nav navbar-right">*/}
                            {/*<li>*/}
                                {/*<a href="/">ARM</a>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                                {/*<a href="/">ENG</a>*/}
                            {/*</li>*/}
                        {/*</ul>*/}
                    </div>
                </div>
            </nav>
        )
    }
}

export  default Header