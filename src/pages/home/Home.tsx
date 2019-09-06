import React, { Component } from "react";
import { Typography } from "antd";
import { APP_NAME } from "../../utils/app-constants";

const { Title } = Typography;

class Home extends Component {
    public render(): JSX.Element {
        return (
            <div className="homePage">
                <Title level={1}>{APP_NAME}</Title>
                <p>Welcome to {APP_NAME}. If you have saved some contacts they should appear here.</p>
            </div>
        );
    }
}

export default Home;