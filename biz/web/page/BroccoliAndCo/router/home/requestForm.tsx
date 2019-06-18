import * as React from 'react'
import { WrapperRequestFormCmp } from './styled'
import { Row, Col, Button, Form, Input } from 'antd'
import {observer} from 'mobx-react/index';
var AjaxLoading = require('@mobx/ajaxLoading');
var customTheme = require('@mobx/mulTheme');

declare var Ajax: any;

interface FormProps {
    form: any,
    showSuccessModal?: () => void
}

interface FormState {
    confirmDirty: Boolean,
    errorMsg: String
}

@observer
class RequestForm extends React.Component<FormProps, FormState> {
    constructor(props: FormProps) {
        super(props);
        this.state = {
            confirmDirty: false,
            errorMsg: ""
        }
    }

    handleConfirmBlur = (e: any) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule: any, value: string, callback: any) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('email')) {
            callback('Two email that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule: any, value: string, callback: any) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirmEmail'], { force: true });
        }
        callback();
    }

    handleSubmit = (e: any) => {
        let that = this;
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err: any, values: any) => {
            if (!err) {
                Ajax({
                    url: "/prod/fake-auth",
                    data: {
                        name: values.name,
                        email: values.email
                    },
                    handlerErr: true,
                    callback(data: any) {
                        if(data.success) {
                            that.props.showSuccessModal();
                        } else {
                            that.setState({errorMsg: data.data.errorMessage});
                        }
                    }
                });
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 24 },
            },
        };
        return (
            <WrapperRequestFormCmp {...customTheme.currentTheme}>
                <Row type="flex" justify="center" align="middle" className="formFrame">
                    <Col span={20}>
                        <Form {...formItemLayout}>
                            <Form.Item>
                                {getFieldDecorator('name', {
                                    rules: [{
                                        required: true, message: 'Please input your full name!',
                                    }, {
                                        min: 3, message: 'Full name needs to be at least 3 characters long'
                                    }],
                                })(
                                    <Input placeholder="Full name" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('email', {
                                    rules: [{
                                        type: 'email', message: 'The input is not valid email!',
                                    }, {
                                        required: true, message: 'Please input your email!',
                                    }, {
                                        validator: this.validateToNextPassword,
                                    }],
                                })(
                                    <Input placeholder="Email" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('confirmEmail', {
                                    rules: [{
                                        type: 'email', message: 'The input is not valid email!',
                                    }, {
                                        required: true, message: 'Please confirm your email!',
                                    }, {
                                        validator: this.compareToFirstPassword
                                    }],
                                })(
                                    <Input placeholder="Confirm email" onBlur={this.handleConfirmBlur} />
                                )}
                            </Form.Item>
                            <Form.Item {...formItemLayout}>
                                <Button type="primary" className="requestBtn" onClick={this.handleSubmit} disabled={AjaxLoading.status ? true : false}>{AjaxLoading.status ? 'Sending, please wait...' : 'Send'}</Button>
                            </Form.Item>
                        </Form>
                        <Row className="errorMsg">{this.state.errorMsg}</Row>
                    </Col>
                </Row>
            </WrapperRequestFormCmp>
        )
    }
}

const WrapperRequestForm = Form.create<FormProps>()(RequestForm);
export default WrapperRequestForm