import * as React from 'react'
import { HashRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { observer, inject } from 'mobx-react/index';
import * as _ from 'lodash';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
import AppHeader from '@router/layout/header';
import AppFooter from '@router/layout/footer';
import Home from '@router/home/index';

declare const Constants: any;

type Props = {
    customizeThemeStore?: any,
}

@inject('customizeThemeStore')
@observer
class Index extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }
    componentDidMount() {
        const params  =  location.hash.split("?");
        let formattedParams = params.length >1 ? _.chain(params[1])
        .split("&")
        .map(_.ary(_.partial(_.split,_,"="),1))
        .fromPairs()
        .value() : {};
        let defaultTheme:string = _.get(formattedParams, 'pl', 'default');
        this.props.customizeThemeStore.changeThemeKey(defaultTheme);
    }
    render() {
        return (
            <ThemeProvider theme={{ [Constants.theme]: this.props.customizeThemeStore.currentThemeKey }}>
                <Layout>
                    <Header><AppHeader /></Header>
                    <Content style={{ height: 'calc(100vh - 156px)', marginTop: 64 }}>
                        <HashRouter>
                            <Route exact path="/" component={Home} />
                        </HashRouter>
                    </Content>
                    <Footer><AppFooter /></Footer>
                </Layout>
            </ThemeProvider>
        )
    }
}

export default Index;