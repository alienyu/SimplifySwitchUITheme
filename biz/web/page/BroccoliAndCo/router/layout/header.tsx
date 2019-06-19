import * as React from 'react'
import { observer, inject } from 'mobx-react/index';
import { WrapperHeaderCmp } from './styled'
import { Button, Row, Col } from 'antd';
import customizeThemeStore from '../../mobx/customizeThemeStore';

type Props = {
    customizeThemeStore: any
}

@inject("customizeThemeStore")
@observer
class Header extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { customizeThemeStore } = this.props;
        return (
            <WrapperHeaderCmp>
                <Row type="flex">
                    <Col span={5}>BROCCOLI & CO.</Col>
                    <Col span={4}>
                        <Button type="primary" onClick={() => customizeThemeStore.changeThemeKey("shopify")}>ChangeShopifyTheme</Button>
                    </Col>
                    <Col span={4}>
                        <Button type="default" onClick={() => customizeThemeStore.changeThemeKey("default")}>ChangeDefaultTheme</Button>
                    </Col>
                </Row>
            </WrapperHeaderCmp>
        )
    }
}

module.exports = Header;