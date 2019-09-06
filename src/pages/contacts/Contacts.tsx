import React, { Component } from "react";
import { Form, Typography, Input, Row, Col, DatePicker, Button } from "antd";

import styles from "./Contacts.module.scss";

const { Item } = Form;

class Contacts extends Component {
    public render(): JSX.Element {
        return (
            <div className={styles.contactsPage}>
                <Typography.Title level={2}>
                    Enter new contact details
                </Typography.Title>

                <Row>
                    <Col xs={24} md={{ span: 12, offset: 6}}>
                        <Form>
                            <Row gutter={6}>
                                <Col xs={24}>
                                    <Item colon={false} label="Full name">
                                        <Input type="text" />
                                    </Item>
                                </Col>
                                <Col xs={12}>
                                    <Item colon={false} label="Birthday" >
                                        <DatePicker allowClear={true} style={{width: "100%"}} />
                                    </Item>
                                </Col>
                                <Col xs={12}>
                                    <Item colon={false} label="Phone number">
                                        <Input type="text" />
                                    </Item>
                                </Col>
                                <Col xs={24}>
                                    <Item colon={false} label="Email address">
                                        <Input type="email" />
                                    </Item>
                                </Col>
                                <Col xs={24}>
                                    <Button type="primary" size="large" htmlType="submit" block>
                                        Save
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Contacts;