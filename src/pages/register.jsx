import { Button, Col, Form, Input, notification, Row } from "antd";
import { registerUserApi } from "../services/api.service";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const res = await registerUserApi(values.fullName, values.email, values.password, values.phone)
        if (res?.data) {
            notification.success({
                message: "Register user",
                description: "Register successful user"
            })
            navigate("/login")
        }
        else {
            notification.error({
                message: "Register user",
                description: JSON.stringify(res.message)
            })
        }
    }
    const onFinishFailed = (values) => {
        console.log("")
    }
    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ padding: "20px" }}
        >
            <Row justify={"center"}>
                <Col xs={24} md={8}>
                    <Form.Item
                        label="Username"
                        name="fullName"
                        rules={[
                            {
                                required: true,
                                // pattern: new RegExp(/^a-zA-Z0-9/i),
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Row justify={"center"}>
                <Col xs={24} md={8}>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
            </Row>

            <Row justify={"center"}>
                <Col xs={24} md={8}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Row justify={"center"}>
                <Col xs={24} md={8}>
                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                pattern: new RegExp(/\d+/g),
                                message: "Wrong format!"
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col xs={24} md={8}>
                    <div>
                        <Button onClick={() => form.submit()} type="primary">Register</Button>
                    </div>
                </Col>
            </Row>

        </Form >
    )
}

export default RegisterPage;