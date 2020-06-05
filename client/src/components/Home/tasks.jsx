import React from 'react';
import { Row, Col, Divider, Input, Popconfirm, DatePicker, Select, Tag, Modal, Tooltip } from 'antd';
import moment from 'moment';
import { DeleteOutlined } from '@ant-design/icons';
import { Scrollbars } from 'react-custom-scrollbars';
import { SearchOutlined } from '@ant-design/icons';
import AddTodoModal from './addTodoModal';
import EditLabel from './editLabel';
import './tasks.scss';

const { RangePicker } = DatePicker;
const { Option } = Select;

class Tasks extends React.Component {
	constructor(props) {
		super(props);
		console.log(props.todos);
		this.state = {
			rangeDate: [null, null],
			searchTxt: '',
			selectedLabels: [],
			selectedStatus: [],
			todos: this.props.todos,
			editModalVisible: false, modaTodoID: -1, modalName: '', modalDesc: '', modalDue: '', modalStatus: '', modalPriority: '', modalLabels: []
		};
		this.showEditModal = this.showEditModal.bind(this);
	}
	handleDelete = (e, _id) => {
		e.stopPropagation();
		console.log('Delete', _id);
		this.props.handleDeleteTodo(_id);
	}
	handleChange = e => {
		var name = e.target.name;
		this.setState({ [name]: e.target.value });
	}
	handleDate = (date, dateString) => {
		if (dateString !== "") {
			this.setState({ modalDue: moment(dateString, 'YYYY-MM-DD')});
		}
		else {
			this.setState({ rangeDate: [null, null] });
		}
	}
	handleEditSelect = (value, type) => {
		this.setState({ [type]: value });
	}
	showEditModal = (todo) => {
		console.log(todo);
		this.setState({ editModalVisible: true, modalTodoId: todo._id, modalName: todo.name, modalDesc: todo.desc, modalDue: todo.due, modalStatus: todo.status, modalPriority: todo.priority, modalLabels: todo.label })
	}
	handleEditOk = () => {
		this.setState({ editModalVisible: false });
		this.props.handleEditTodo({ _id: this.state.modalTodoId, name: this.state.modalName, desc: this.state.modalDesc, due: moment(this.state.modalDue).format('YYYY-MM-DD'), status: this.state.modalStatus, priority: this.state.modalPriority, label: this.state.modalLabels })
	}
	handleEditCancel = () => {
		this.setState({ editModalVisible: false });
	}
	handleEditTodo = (todo) => {
		this.props.handleEditTodo(todo);
	}
	handleAddTodo = (todo) => {
		this.props.handleAddTodo(todo);
	}
	handleEditLabel = (labels) => {
		console.log(labels, "tasks");
		this.props.handleEditLabel(labels);
	}
	searchFilter = (name) => {
		if (this.state.searchTxt == '') return true;
		return name.toLowerCase().includes(this.state.searchTxt.toLowerCase())
	}
	dateFilter = (due) => {
		if (this.state.rangeDate[0] == null) return true;
		return moment(due).isSameOrAfter(this.state.rangeDate[0].format('YYYY-MM-DD')) && moment(due).isSameOrBefore(this.state.rangeDate[1].format('YYYY-MM-DD'));
	}
	labelFilter = (labels) => {
		if (this.state.selectedLabels.length == 0) return true;
		return this.state.selectedLabels.some(r => labels.includes(r));
	}
	statusFilter = (status) => {
		if (this.state.selectedStatus.length == 0) return true;
		return this.state.selectedStatus.includes(status);
	}
	handleFilter = () => {
		var txt = this.state.searchTxt;
		console.log(true && true && true);
		var data = this.props.todos.filter((todo) => {
			return this.searchFilter(todo.name) && this.dateFilter(todo.due) && this.labelFilter(todo.label) && this.statusFilter(todo.status);
		})
		this.setState({ todos: data });
	}
	handleSelect = (type, value) => {
		if (type == 'label') {
			this.setState({ selectedLabels: value });
		}
		else if (type == 'status') {
			this.setState({ selectedStatus: value });
		}
		setTimeout(() => {
			console.log(this.state.selectedLabels);
			this.handleFilter();
		}, 100);
	}
	searchChange = e => {
		var name = e.target.name;
		this.setState({ [name]: e.target.value });
		setTimeout(() => {
			this.handleFilter();
		}, 100);
	}
	dateChange = (date, dateString) => {
		if (dateString[0] !== "") {
			this.setState({ rangeDate: [moment(dateString[0], 'YYYY-MM-DD'), moment(dateString[1], 'YYYY-MM-DD')] });
		}
		else {
			this.setState({ rangeDate: [null, null] });
		}
		setTimeout(() => {
			this.handleFilter();
		}, 100);
	}
	componentWillReceiveProps(nextProps) {
		if (this.props != nextProps) {
			this.setState({ todos: nextProps.todos });
		}
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
						<AddTodoModal visible={this.state.AddTodoModalVisible} handleAddTodo={this.handleAddTodo} labels={this.props.labels} />
						<br /><br />
						<Input size="large" suffix={<SearchOutlined />} name="searchTxt" value={this.state.searchTxt} onChange={(e) => this.searchChange(e)} className="search-input" placeholder="Search Todo" />
						<br /><br />
						<RangePicker className="filter-inputs" onChange={this.dateChange} size="large" value={this.state.rangeDate} />
						<br /><br />
						<Select
							className="filter-inputs"
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
							className="filter-inputs"
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
						<EditLabel labels={this.props.labels} handleEditLabel={this.handleEditLabel} />
					</div>
				</Col>
				<Divider type="vertical" className="divider" />
				<Col span={12} className="todos">
					<Modal
						visible={this.state.editModalVisible}
						title="Edit Todo"
						onOk={this.handleEditOk}
						onCancel={this.handleEditCancel}
					>
						<Input name="modalName" onChange={this.handleChange} value={this.state.modalName} placeholder="Name" /><br /><br />
						<Input.TextArea name="modalDesc" onChange={this.handleChange} value={this.state.modalDesc} placeholder="Description" /><br /><br />
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<DatePicker name="modalDate" style={{ width: '45%' }} value={moment(this.state.modalDue, 'YYYY-MM-DD')} onChange={this.handleDate} />
							<Select style={{ width: '45%' }} value={this.state.modalStatus} onChange={(value) => this.handleEditSelect(value, 'modalStatus')} placeholder="Select Status">
								<Option value="new">New</Option>
								<Option value="inprogress">In Progress</Option>
								<Option value="completed">Completed</Option>
							</Select>
						</div>
						<br />
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<Select style={{ width: '35%' }} value={this.state.modalPriority} onChange={(value) => this.handleEditSelect(value, 'modalPriority')} placeholder="Select Priority">
								<Option value="high">High</Option>
								<Option value="normal">Normal</Option>
								<Option value="low">Low</Option>
							</Select>
							<Select
								mode="multiple"
								style={{ width: '55%' }}
								placeholder="Please select label"
								defaultValue={[]}
								value={this.state.modalLabels}
								onChange={(value) => this.handleSelect(value, 'modalLabels')}
							>
								{this.props.labels.map((l, key) => {
									return <Option key={l}>{l}</Option>
								})}
							</Select>
						</div>
					</Modal>
					<Scrollbars
						renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{ display: "none" }} />}
						renderThumbHorizontal={props => <div {...props} className="thumb-horizontal" style={{ display: "none" }} />}
						renderTrackVertical={props => <div {...props} className="track-vertical" style={{ display: "none" }} />}
						renderThumbVertical={props => <div {...props} className="thumb-vertical" style={{ display: "none" }} />}
					>
						{this.state.todos.map((todo) => {
							return <div key={todo._id} onClick={() => this.showEditModal(todo)} className="card" style={todo.priority == 'high' ? { borderTop: '5px solid #cf1322' } : todo.priority == 'normal' ? { borderTop: '5px solid #006d75' } : { borderTop: '5px solid #5b8c00' }} title={todo.name}>
								<div className="card-row">
									<div className="card-title">{todo.name}</div>
									<div className="card-badge">
										<Tag color={todo.priority == 'high' ? 'red' : todo.priority == 'normal' ? 'blue' : 'green'}>{todo.priority}</Tag>
										<Tag>{todo.status}</Tag>
									</div>
								</div>
								<div className="card-row">
									<div className="card-desc">{todo.desc}</div>
									<div className="card-badge">
										{todo.label.map(function (l, key) {
											return <Tag key={key}>{l}</Tag>
										})}
									</div>
								</div>
								<div className="card-row">
									<div className="card-due">Due: {todo.due}</div>
									<div className="card-delete">
										<Tooltip title="Delete todo">
											<DeleteOutlined onClick={(e)=>this.handleDelete(e, todo._id)} style={{ fontSize: '16px', color: '#820014' }} />
										</Tooltip>
									</div>
								</div>
							</div>
						})}
					</Scrollbars>
				</Col>
			</Row>
		);
	}
}

export default Tasks;