import React from 'react'
import { WrapperHomeCmp } from './styled'
import { Row, Col } from 'antd'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <WrapperHomeCmp>
                <Row type="flex" justify="center" align="middle">
                    <Col span={12}>
                        <div className="requestFrame"></div>
                    </Col>
                </Row>
            </WrapperHomeCmp>
        )
    }
}

module.exports = Home;