import React, { Component } from 'react';
import { message, Layout, Menu, Icon, Button, Avatar, Breadcrumb, DatePicker } from 'antd';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { UserOutlined } from '@ant-design/icons';
import history from '../../history';
import Tasks from './tasks.jsx';
import Board from './board';
import 'react-tabs/style/react-tabs.css';
import './home.scss';
import axios from 'axios';

const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			labels: ['work', 'personal', 'casual'],
			status: ['new', 'inprogress', 'completed'],
			todos: []
		}
	}
	componentDidMount() {
		setTimeout(() => {
			const cred = { name: this.props.username };
			console.log("cred", cred, this.props.username);
			axios
				.post('/todo/get', cred)
				.then((res) => {
					console.log(res);
					if (res.data.status === 200) {
						this.setState({ todos: res.data.todos });
						console.log("Login Successful");
					}
				})
				.catch(err => {
					console.error(err);
				});
		}, 50);
	}
	handleAddTodo = (todo) => {
		todo.user = this.props.username;
		console.log(todo);
		axios
			.post('/todo/add', todo)
			.then((res) => {
				console.log(res);
				if (res.data.status === 200) {
					this.setState({ todos: [...this.state.todos, res.data.todo] });
				}
			})
			.catch(err => {
				console.error(err);
				message.error("error occured !!");
			});

		setTimeout(() => {
			console.log(this.state.todos);
		}, 1000);
	}
	handleAddLabel = (label) => {
		this.setState({ labels: [...this.state.labels, label] });
		setTimeout(() => {
			console.log(this.state.labels);
		}, 100);
	}
	handleEditTodo = (todo) => {
		axios
			.post('/todo/edit', todo)
			.then((res) => {
				console.log(res);
				if (res.data.status === 200) {
					var data = this.state.todos.map((t) => {
						if (todo._id == t._id) return todo;
						else return t;
					});
					this.setState({ todos: data });
					setTimeout(() => {
						console.log(this.state.todos);
					}, 100);
				}
				else
					message.error('Edit Operation Failed !!!');
			})
			.catch(err => {
				console.error(err);
				message.error('Edit Operation failed');
			});
		
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
								handleEditTodo={this.handleEditTodo}
								handleAddLabel={this.handleAddLabel} />
						</TabPanel>
						<TabPanel>
							<Board
								todos={this.state.todos}
								handleEditTodo={this.handleEditTodo}
								labels={this.state.labels} />
						</TabPanel>
					</Tabs>
				</Content>
			</Layout>
		);
	}
}

export default Home;