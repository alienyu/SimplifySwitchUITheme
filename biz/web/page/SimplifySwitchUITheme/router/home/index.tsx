import * as React from 'react'
import { WrapperHomeCmp } from './styled'
import { Row, Col, Modal } from 'antd'
import RequestForm from './requestForm'

export default class Home extends React.Component<{}, { isShowForm: boolean, isShowSuccessModal: boolean }> {
    constructor(props:any) {
        super(props);
        this.state = {
            isShowForm: false,
            isShowSuccessModal: false
        }
    }

    showForm() {
        this.setState({ isShowForm: true });
    }

    hideForm() {
        this.setState({ isShowForm: false });
    }

    showSuccessModal() {
        this.setState({
            isShowForm: false,
            isShowSuccessModal: true
        });
    }

    hideSuccessModal() {
        this.setState({ isShowSuccessModal: false });
    }

    renderModalTitle() {
        return (
            <div className="title">
                <div className="text">Request an invite</div>
                <div className="line"></div>
            </div>
        )
    }

    renderSuccessModalTitle() {
        return (
            <div className="title">
                <div className="text">All done!</div>
                <div className="line"></div>
            </div>
        )
    }

    render() {
        return (
            <WrapperHomeCmp>
                <Row type="flex" justify="center" align="middle" className="pageFrame">
                    <Col span={18}>
                        <div className="title">A better way</div>
                        <div className="title">to enjoy every day.</div>
                        <div className="text">Be the first to know when we launch.</div>
                        <a href="javascript:;" onClick={this.showForm.bind(this)}>Request an invite</a>
                    </Col>
                </Row>
                {this.state.isShowForm ?
                    <Modal
                        wrapClassName="formModal"
                        title={this.renderModalTitle()}
                        visible={true}
                        width={400}
                        closable={false}
                        footer={null}
                        onCancel={this.hideForm.bind(this)}
                    >
                        <RequestForm showSuccessModal={this.showSuccessModal.bind(this)} />
                    </Modal> : null
                }
                {this.state.isShowSuccessModal ?
                    <Modal
                        wrapClassName="successModal"
                        title={this.renderSuccessModalTitle()}
                        visible={true}
                        width={400}
                        closable={false}
                        footer={null}
                        onCancel={this.hideSuccessModal.bind(this)}
                    >
                        <Row className="content" type="flex" justify="center" align="middle">
                            <Col span={20}>
                                <div className="text">You will be one of the first to experience Broccoli & Co. when we launch.</div>
                                <a href="javascript:;" className="okBtn" onClick={this.hideSuccessModal.bind(this)}>OK</a>
                            </Col>
                        </Row>
                    </Modal> : null
                }
            </WrapperHomeCmp>
        )
    }
}