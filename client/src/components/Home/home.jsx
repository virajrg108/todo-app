import React, { Component } from 'react';
import { message, Layout, Menu, Icon, Button, Avatar, Breadcrumb } from 'antd';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { UserOutlined } from '@ant-design/icons';
import history from '../../history';
import Tasks from './tasks.jsx';
import 'react-tabs/style/react-tabs.css';
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
					<Tabs>
						<TabList>
							<Tab>TASKS</Tab>
							<Tab>BOARD</Tab>
						</TabList>
						<TabPanel>
							<Tasks/>
						</TabPanel>
						<TabPanel>
							<h2>Any content 2</h2>
						</TabPanel>
					</Tabs>
				</Content>
			</Layout>
		);
	}
}

export default Home;