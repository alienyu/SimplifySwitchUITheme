import * as React from 'react'
import { observer, inject } from 'mobx-react/index';
import { WrapperHeaderCmp } from './styled'
import { Button, Row, Col } from 'antd';

type Props = {
    customizeThemeStore?: any
}

@inject("customizeThemeStore")
@observer
export default class Header extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { customizeThemeStore } = this.props;
        return (
            <WrapperHeaderCmp>
                <Row type="flex">
                    <Col span={5}>Change Theme.</Col>
                    <Col span={3}>
                        <Button type="primary" onClick={() => customizeThemeStore.changeThemeKey("shopify")}>ChangeShopifyTheme</Button>
                    </Col>
                    <Col span={3}>
                        <Button type="default" onClick={() => customizeThemeStore.changeThemeKey("default")}>ChangeDefaultTheme</Button>
                    </Col>
                    <Col span={3}>
                        <Button type="primary" onClick={() => customizeThemeStore.changeThemeKey("joom")}>ChangeJoomTheme</Button>
                    </Col>
                </Row>
            </WrapperHeaderCmp>
        )
    }
}

