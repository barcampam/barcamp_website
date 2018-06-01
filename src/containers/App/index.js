import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, LocaleProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import { Debounce } from 'react-throttle';
import { WindowResizeListener } from 'react-window-resize-listener';
import { toggleAll } from '../../redux/app/reducer';
import AppRouter from './AppRouter';
import { AppLocale } from '../../index';
import Header from '../Header';
import Footer from '../Footer';

const { Content } = Layout;

export class Index extends Component {
  render() {
    const { locale } = this.props;
    const currentAppLocale = AppLocale[locale];

    return (
      <LocaleProvider locale={currentAppLocale.antd}>
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <Layout>
            <Debounce time="1000" handler="onResize">
              <WindowResizeListener
                onResize={windowSize =>
                  this.props.toggleAll(
                    windowSize.windowWidth,
                    windowSize.windowHeight
                  )}
              />
            </Debounce>
            <Layout style={{ flexDirection: 'row', overflowX: 'hidden', alignItems: 'center' }}>
              <Layout>
                  <Header />
                  <Content>
                      <AppRouter />
                  </Content>
                  <Footer />
              </Layout>
            </Layout>
          </Layout>
        </IntlProvider>
      </LocaleProvider>
    );
  }
}

export default connect(
    state => ({
        locale: state.LanguageSwitcher.toJS().language.locale,
        ...state.LanguageSwitcher.toJS(),
    }),
    { toggleAll }
)(Index);
