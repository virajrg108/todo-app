import React from 'react';
import { Row, Col, Divider, Input, DatePicker, Select, Button, Tag } from 'antd';
import moment from 'moment';
import { Scrollbars } from 'react-custom-scrollbars';
import { SearchOutlined } from '@ant-design/icons';
import './tasks.scss';

const { RangePicker } = DatePicker;
const { Option } = Select;


class Tasks extends React.Component {
	constructor(props) {
		super(props);
		console.log(props.todos);
		this.state = {
			rangeDate: [null, null],
			searchText: '',
			selectedLabels: [],
			selectedStatus: [],
			todos: this.props.todos
		};
		this.handleFilter = this.handleFilter.bind(this);
	}
	handleFilter = (e, type) => {
		var search = '', date = [];
		if (type == 'search') {
			var search = e.target.value;
			console.log(search, type);
			this.setState({ searchText: search });
			// if(search!=='') {
			// 	var data = this.props.todos.filter(function(todo) {
			// 		return todo.name.toLowerCase().includes(search.toLowerCase());
			// 	});
			// 	this.setState({todos: data});
			// }
			// else 
			// 	this.setState({todos:this.props.todos});
		}
		else if (type == 'date') {
			
		}
	}
	handleSelect = (type, value) => {
		console.log(type, value);
		if (type == 'label') {
			this.setState({ selectedLabels: value });
		}
		else if (type == 'status') {
			this.setState({ selectedStatus: value });
		}
	}
	dateChange = (date, dateString) => {
		if (dateString[0] !== "") {
			var date = moment(dateString[0], 'YYYY-MM-DD');
			this.setState({ rangeDate: [moment(dateString[0], 'YYYY-MM-DD'), moment(dateString[1], 'YYYY-MM-DD')] });
		}
		else
			this.setState({ rangeDate: [null, null] })
			this.handleFilter('', 'date');
	}
	render() {
		const Label = this.props.labels.map(function (l) {
			return <Option key={l}>{l}</Option>
		});
		const Status = this.props.status.map(function (l) {
			return <Option key={l}>{l}</Option>
		});
		return (
			<Row className="tasks" >
				<Col span={11} className="filters-wrapper">
					<div className="filters">
						<Button type="primary">Add Todo</Button>
						<br /><br />
						<Input size="large" suffix={<SearchOutlined />} name="searchTxt" value={this.state.searchTxt} onChange={(e) => this.handleFilter(e, 'search')} className="search-input" placeholder="Search Todo" />
						<br /><br />
						<RangePicker onChange={this.dateChange} size="large" value={this.state.rangeDate} />
						<br /><br />
						<Select
							size="large"
							mode="multiple"
							style={{ width: '100%' }}
							placeholder="Please select label"
							defaultValue={[]}
							onChange={(value) => this.handleSelect('label', value)}
						>
							{Label}
						</Select>
						<br /><br />
						<Select
							size="large"
							mode="multiple"
							style={{ width: '100%' }}
							placeholder="Please select status"
							defaultValue={[]}
							onChange={(value) => this.handleSelect('status', value)}
						>
							{Status}
						</Select>
						<br /><br />
						<Button type="primary">Add Label</Button>
					</div>
				</Col>
				<Divider type="vertical" className="divider" />
				<Col span={12} className="todos">
					<Scrollbars
						renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{ display: "none" }} />}
						renderThumbHorizontal={props => <div {...props} className="thumb-horizontal" style={{ display: "none" }} />}
						renderTrackVertical={props => <div {...props} className="track-vertical" style={{ display: "none" }} />}
						renderThumbVertical={props => <div {...props} className="thumb-vertical" style={{ display: "none" }} />}
					>
						{this.state.todos.map(function (todo) {
							return <div className="card" style={todo.priority == 'high' ? { borderTop: '5px solid #cf1322' } : todo.priority == 'normal' ? { borderTop: '5px solid #006d75' } : { borderTop: '5px solid #5b8c00' }} title={todo.name}>
								<div className="card-row">
									<p className="card-title">{todo.name}</p>
									<div className="card-badge">
										<Tag color={todo.priority == 'high' ? 'red' : todo.priority == 'normal' ? 'blue' : 'green'}>{todo.priority}</Tag>
										<Tag>{todo.status}</Tag>
									</div>
								</div>
								<div className="card-row">
									<p className="card-desc">{todo.desc}</p>
									<div className="card-badge">
										{todo.label.map(function (l) {
											return <Tag>{l}</Tag>
										})}
									</div>
								</div>
								<div style={{textAlign:'left'}}>{todo.due}</div>
							</div>
						})}
					</Scrollbars>
				</Col>
			</Row>
		);
	}
}

export default Tasks;