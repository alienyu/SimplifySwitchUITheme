import * as React from 'react'
import { WrapperRequestFormCmp } from './styled'
import { Row, Col, Button, Form, Input } from 'antd'
declare var Ajax: any;

interface FormProps {
    form: any,
    hideForm?: () => void
}

interface FormState {
    confirmDirty: Boolean
}

class RequestForm extends React.PureComponent<FormProps, FormState> {
    constructor(props: FormProps) {
        super(props);
        this.state = {
            confirmDirty: false
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
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err: any, values: object) => {
            if (!err) {
                console.log('Received values of form: ', values);
                Ajax();
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <WrapperRequestFormCmp>
                <Row type="flex" justify="center" align="middle" className="formFrame">
                    <Col span={20}>
                        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                            <Form.Item
                                label="Full name"
                            >
                                {getFieldDecorator('name', {
                                    rules: [{
                                        required: true, message: 'Please input your full name!',
                                    }, {
                                        min: 3, message: 'Full name needs to be at least 3 characters long'
                                    }],
                                })(
                                    <Input placeholder="input your full name" />
                                )}
                            </Form.Item>
                            <Form.Item
                                label="Email"
                            >
                                {getFieldDecorator('email', {
                                    rules: [{
                                        type: 'email', message: 'The input is not valid E-mail!',
                                    }, {
                                        required: true, message: 'Please input your E-mail!',
                                    }, {
                                        validator: this.validateToNextPassword,
                                    }],
                                })(
                                    <Input placeholder="input your email" />
                                )}
                            </Form.Item>
                            <Form.Item
                                label="Confirm Email"
                            >
                                {getFieldDecorator('confirmEmail', {
                                    rules: [{
                                        type: 'email', message: 'The input is not valid E-mail!',
                                    }, {
                                        required: true, message: 'Please confirm your E-mail!',
                                    }, {
                                        validator: this.compareToFirstPassword
                                    }],
                                })(
                                    <Input placeholder="confirm your Email" onBlur={this.handleConfirmBlur} />
                                )}
                            </Form.Item>
                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit">Submit</Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </WrapperRequestFormCmp>
        )
    }
}

const WrapperRequestForm = Form.create()(RequestForm);
export default WrapperRequestForm