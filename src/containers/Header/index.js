import React, {Component} from 'react';
import config from "./config";
import actions from '../../redux/languageSwitcher/actions';
import { Row, Col, Layout, } from "antd";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom'
import logo from '../../image/logo.png';
import "./header.less";
import IntlMessages from '../../components/utility/intlMessages';

const { changeLanguage } = actions;
const { Header } = Layout;


class Head extends Component {
    state = {
        isOpen: false
    }

    renderMenus() {
        if(this.props.app.view === 'DesktopView') {
            return (
                <Col span={8}>
                    <nav>
                        <ul className="menu-wrapper">
                            <NavLink activeClassName="active" to="/archive" key="1"><IntlMessages id="navigation.archive" /></NavLink>
                            <NavLink activeClassName="active" to="/livestream" key="2"><IntlMessages id="navigation.livestream" /></NavLink>
                            <NavLink activeClassName="active" to="/faq" key="3"><IntlMessages id="navigation.faq" /></NavLink>
                            <NavLink activeClassName="active" to="/about" key="4"><IntlMessages id="navigation.about" /></NavLink>
                        </ul>
                    </nav>
                </Col>
            );
        }

        return null;
    }

    renderLanguage() {
        const { language, changeLanguage } = this.props;

        if(this.props.app.view === 'DesktopView') {
            return (
                <Col span={3}>
                    {config.options.map(option => {
                        const { languageId, text } = option;
                        const customClass =
                            languageId === language.languageId
                                ? 'selectedTheme languageSwitch'
                                : 'languageSwitch';

                        return (
                            <a
                                className={customClass}
                                key={languageId}
                                onClick={() => {
                                    changeLanguage(languageId);
                                }}
                            >
                                {text}
                            </a>
                        );
                    })}
                </Col>
            );
        }

        return (
            <Col span={3}>
                <div onClick={this.handleClick.bind(this)} className={`${this.state.isOpen ? 'open' : null} bar-burger wrapper-menu`}>
                    <div className="line-menu half start"></div>
                    <div className="line-menu"></div>
                    <div className="line-menu half end"></div>
                </div>
            </Col>
        );
    }

    renderMobileMenu() {
        const { language, changeLanguage } = this.props;

        if(this.props.app.view !== 'DesktopView') {
            return (
                <div className={`${this.state.isOpen ? 'open-drawer' : null} mobile-menu`}>
                    <div className="mobile-language">
                        {config.options.map(option => {
                            const {languageId, text} = option;
                            const customClass =
                                languageId === language.languageId
                                    ? 'selectedTheme languageSwitch'
                                    : 'languageSwitch';

                            return (
                                <a
                                    className={customClass}
                                    key={languageId}
                                    onClick={() => {
                                        changeLanguage(languageId);
                                    }}
                                >
                                    {text}
                                </a>
                            );
                        })}
                    </div>
                    <nav>
                        <ul className="menu-wrapper">
                            <NavLink activeClassName="active" to="/archive" key="1"><IntlMessages
                                id="navigation.archive"/></NavLink>
                            <NavLink activeClassName="active" to="/livestream" key="2"><IntlMessages
                                id="navigation.livestream"/></NavLink>
                            <NavLink activeClassName="active" to="/faq" key="3"><IntlMessages
                                id="navigation.faq"/></NavLink>
                            <NavLink activeClassName="active" to="/about" key="4"><IntlMessages id="navigation.about"/></NavLink>
                        </ul>
                    </nav>
                </div>
            );
        }

        return null;
    }

    handleClick() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <Header className={`bar-header ${this.props.location.pathname === '/' ? 'is-index' : null}`}>
                <Row type="flex" justify="space-between" align="middle" className="header-row">
                    <Col className="logo-wrapper" span={3}>
                        <NavLink to="/" className='logo-link'>
                            <img src={logo} alt="BarCamp EVN'18"/>
                        </NavLink>
                    </Col>
                    {this.renderMenus()}
                    {this.renderLanguage()}
                </Row>
                {this.renderMobileMenu()}
            </Header>
        );
    }
}

export default connect(
    state => ({
        locale: state.LanguageSwitcher.toJS().language.locale,
        app: state.App.toJS(),
        ...state.LanguageSwitcher.toJS(),
        location: state.router.location
    }),
    { changeLanguage }
)(Head)