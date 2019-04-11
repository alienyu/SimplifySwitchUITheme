import * as React from 'react'
import { HashRouter, Route } from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

import AppHeader from '@router/layout/header'
import AppFooter from '@router/layout/footer'
import Home from '@router/home/index'

export default class Index extends React.Component<{}, {}> {
    render() {
        return (
            <Layout>
                <Header><AppHeader /></Header>
                <Content style={{ height: '100vh' }}>
                    <HashRouter>
                        <Route exact path="/" component={Home} />
                    </HashRouter>
                </Content>
                <Footer><AppFooter /></Footer>
            </Layout>
        )
    }
}