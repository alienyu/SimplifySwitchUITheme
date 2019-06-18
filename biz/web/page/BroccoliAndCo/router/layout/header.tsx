import * as React from 'react'
import { observer } from 'mobx-react/index';
import { WrapperHeaderCmp } from './styled'
import { Button, Row, Col } from 'antd';
var customTheme = require('@mobx/mulTheme');

@observer
class Header extends React.Component<{}, {}> {
    constructor(props: object) {
        super(props);
    }

    render() {
        return (
            <WrapperHeaderCmp>
                <Row type="flex">
                    <Col span={5}>BROCCOLI & CO.</Col>
                    <Col span={4}>
                        <Button type="primary" onClick={() => customTheme.changeTheme("shopify")}>ChangeShopifyTheme</Button>
                    </Col>
                    <Col span={4}>
                        <Button type="default" onClick={() => customTheme.changeTheme("default")}>ChangeDefaultTheme</Button>
                    </Col>
                </Row>
            </WrapperHeaderCmp>
        )
    }
}

module.exports = Header;