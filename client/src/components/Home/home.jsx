import React, { Component } from 'react';
import { message, Layout, Menu, Icon, Button, Tabs, Avatar, Breadcrumb } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import history from '../../history';
import Tasks from './tasks.jsx';
import './home.scss';

const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

class Home extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange = (event) => {
		history.push('/snippets');
	}
	render() {
		return (
			<Layout className="home">
				<Header className="header-wrapper" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
					<div className="header">
						<div className="title">TASK MANAGER</div>
						<Avatar size="large" icon={<UserOutlined />} />
					</div>
				</Header>
				<Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
					<br />
					<div className="card-container">
						<Tabs type="card">
							<TabPane className="tab-pane" tab="TASKS" key="1">
								<Tasks />
							</TabPane>
							<TabPane className="tab-pane" tab="BOARD" key="2">
								<p>Content of Tab Pane 2</p>
								<p>Content of Tab Pane 2</p>
								<p>Content of Tab Pane 2</p>
							</TabPane>
						</Tabs>
					</div>
				</Content>
			</Layout>
		);
	}
}

export default Home;