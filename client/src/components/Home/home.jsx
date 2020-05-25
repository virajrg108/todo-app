import React, { Component } from 'react';
import { message, Layout, Menu, Icon, Button, Avatar, Breadcrumb, DatePicker } from 'antd';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { UserOutlined } from '@ant-design/icons';
import history from '../../history';
import Tasks from './tasks.jsx';
import 'react-tabs/style/react-tabs.css';
import './home.scss';
import todos from './todo';

const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			labels: ['work', 'personal', 'casual'],
			status: ['new', 'inprogress', 'completed'],
			todos: todos
		}
	}
	handleAddTodo = (todo) => {
		this.setState({ todos: [...this.state.todos, todo] });
		setTimeout(()=> {
			console.log(this.state.todos);
		}, 1000);
	}
	handleAddLabel = (label) => {
		this.setState({labels: [...this.state.labels, label]});
		setTimeout(()=> {
			console.log(this.state.labels);
		}, 100);
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
							<Tasks
								labels={this.state.labels} 
								status={this.state.status} 
								todos={this.state.todos} 
								handleAddTodo={this.handleAddTodo}
								handleAddLabel={this.handleAddLabel} />
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