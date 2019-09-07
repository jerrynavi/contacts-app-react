import React, { Component, SyntheticEvent, ChangeEvent } from "react";
import { Form, Typography, Input, Row, Col, DatePicker, Button, message } from "antd";
import { Link } from "react-router-dom";

import styles from "./Contacts.module.scss";

import { connect } from "react-redux";
import * as actions from "../../utils/reducerActions";

import { Contact } from "../../interfaces/Contact";
import { State } from "../../interfaces/State";
import { Moment } from "moment";
import { Action } from "../../interfaces/Action";

const { Item } = Form;

interface ContactProps {
    dispatch (action: Action): void;
    contacts: Contact[];
}

class Contacts extends Component<ContactProps> {

    contactData: Contact = {
        name: "",
        birthday: "",
        phone: "",
        email: "",
    };

    updateContactDataWithInputField = (event: ChangeEvent<{name: string; value: string}>): void => {
        this.contactData[event.currentTarget.name] = event.currentTarget.value;
    }

    updateBirthday = (date: Moment | null, dateString: string): void => {
        this.contactData.birthday = dateString;
    }

    addContact = (event: SyntheticEvent): void => {
        event.preventDefault();
        if (this.contactData.name.length < 1) {
            message.error("The contact's name is required");
            const contactNameField: HTMLElement | null = document.querySelector("input[name=name]");
            if (contactNameField) {
                contactNameField.focus();
            }
            return;
        }
        this.props.dispatch({ type: actions.ADD_CONTACT, payload: this.contactData });
        message.success("New contact added.");
    }

    render(): JSX.Element {
        return (
            <div className={styles.contactsPage}>
                <Typography.Title level={2}>
                    Enter new contact details
                </Typography.Title>

                <Row>
                    <Col xs={24} md={{ span: 12, offset: 6}}>
                        <Form onSubmit={this.addContact}>
                            <Row gutter={6}>
                                <Col xs={24}>
                                    <Item colon={false} required={true} label="Full name">
                                        <Input type="text" name="name" onChange={this.updateContactDataWithInputField} />
                                    </Item>
                                </Col>
                                <Col xs={12}>
                                    <Item colon={false} label="Birthday" >
                                        <DatePicker allowClear={true} onChange={this.updateBirthday} name="birthday" style={{width: "100%"}} />
                                    </Item>
                                </Col>
                                <Col xs={12}>
                                    <Item colon={false} label="Phone number">
                                        <Input type="text" onChange={this.updateContactDataWithInputField} name="phone" />
                                    </Item>
                                </Col>
                                <Col xs={24}>
                                    <Item colon={false} label="Email address">
                                        <Input type="email" onChange={this.updateContactDataWithInputField} name="email" />
                                    </Item>
                                </Col>
                                <Col xs={24}>
                                    <Button type="primary" size="large" htmlType="submit" block>
                                        Save
                                    </Button>
                                    <Link to="/">
                                        <Button type="default" size="large" block>
                                            Go back
                                        </Button>
                                    </Link>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>

            </div>
        );
    }
}

const mapStateToProps = (state: State): {contacts: Contact[]} => {
    return {
        ...state
    };
};

export default connect(mapStateToProps)(Contacts);