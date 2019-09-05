import React, { Component } from "react";
import { Form } from "antd";

import styles from "./Contacts.module.scss";

class Contacts extends Component {
    public render(): JSX.Element {
        return (
            <div className={styles.contactsPage}>
                <Form>

                </Form>
            </div>
        );
    }
}

export default Contacts;