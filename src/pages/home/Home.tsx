import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Typography,
    List,
    Button,
    Tooltip
} from "antd";
import { APP_NAME } from "../../utils/appConstants";
import * as actions from "../../utils/reducerActions";

import styles from "./Home.module.scss";
import { Action } from "../../interfaces/Action";
import { Contact } from "../../interfaces/Contact";
import { State } from "../../interfaces/State";
import { Link } from "react-router-dom";

const { Title } = Typography;

interface HomeProps {
    dispatch (action: Action): void;
    contacts: Contact[];
}

class Home extends Component<HomeProps> {

    componentDidMount(): void {
        if (this.props.contacts.length === 0) {
            const contacts = localStorage.getItem("contacts");
            if (contacts) {
                const arrContacts: Contact[] = JSON.parse(contacts);
                arrContacts.forEach((contact) => {
                    this.props.dispatch({ type: actions.ADD_CONTACT, payload: contact });
                });
            }
        }
    }
    public render(): JSX.Element {
        return (
            <div className={styles.homePage}>
                <header>
                    <Title level={1}>{APP_NAME}</Title>
                    <p>Welcome to {APP_NAME}. If you have saved some contacts they should appear here.</p>
                </header>

                <div className={styles.contactsList}>
                    <List
                        bordered={true}
                        dataSource={this.props.contacts}
                        renderItem={(contact, index): JSX.Element => (
                            <List.Item key={index}>
                                <List.Item.Meta
                                    title={contact.name}
                                    description={contact.email}
                                />
                                <Button type="link">Edit</Button>
                            </List.Item>
                        )}
                    />
                </div>

                <div className={styles.fabSection}>
                    <Link to="contacts">
                        <Tooltip title="Add a new contact">
                            <Button shape="circle" type="primary" size="large" icon="plus" />
                        </Tooltip>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: State): {contacts: Contact[]} => {
    return {
        ...state
    };
};

export default connect(mapStateToProps)(Home);