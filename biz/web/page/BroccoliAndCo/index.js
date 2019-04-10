import React, { Component } from 'react'
import { HashRouter, Route, Link } from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

import AppHeader from 'routers/layout/header.jsx'
import AppFooter from 'routers/layout/footer.jsx'
import Home from 'routers/home'

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <Header><AppHeader /></Header>
                <Content style={{ height: 'calc(100vh - 133px)', background: '#fff' }}>
                    <HashRouter>
                        <Route exact path="/" component={Home} />
                    </HashRouter>
                </Content>
                <Footer><AppFooter /></Footer>
            </Layout>
        )
    }
}

module.exports = Index;