import * as React from 'react'
import { WrapperHomeCmp } from './styled'
import { Row, Col, Modal } from 'antd'
import RequestForm from './requestForm'

export default class Home extends React.PureComponent<{}, { isShowForm: boolean }> {
    constructor(props: object) {
        super(props);
        this.state = {
            isShowForm: false
        }
    }
    showForm() {
        this.setState({ isShowForm: true });
    }

    hideForm() {
        this.setState({ isShowForm: false });
    }

    render() {
        return (
            <WrapperHomeCmp>
                <Row type="flex" justify="center" align="middle" className="pageFrame">
                    <Col span={18}>
                        <Row className="requestFrame" type="flex" justify="center">
                            <Col span={22}>
                                <Row className="main">
                                    <Row className="title">Request an Invitation</Row>
                                    <Row className="text">If you want to request an invitation,you can click the following button and fill the necessary fields to submit.</Row>
                                </Row>
                                <Row className="btnLine">
                                    <a href="javascript:;" onClick={this.showForm.bind(this)}>I Want to Request</a>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {this.state.isShowForm ? 
                    <Modal
                        title="Request Invitation"
                        visible={true}
                        footer={null}
                        onCancel={this.hideForm.bind(this)}
                    >
                        <RequestForm hideForm={this.hideForm.bind(this)} />
                    </Modal> : null
                }
            </WrapperHomeCmp>
        )
    }
}