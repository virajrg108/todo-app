import React from 'react';
import { Row, Col, Divider, Input, DatePicker, Select } from 'antd';
import moment from 'moment';
import { SearchOutlined } from '@ant-design/icons';
import './tasks.scss';

const { RangePicker } = DatePicker;
const { Option } = Select;


class Tasks extends React.Component {
	constructor(props) {
		super(props);
		var labelss = [];
		for (let i = 0; i < this.props.labels.length; i++) {
			labelss.push(<Option key={this.props.labels[i]}>{this.props.labels[i]}</Option>);
		}
		var statuss = [];
		for (let i = 0; i < this.props.labels.length; i++) {
			statuss.push(<Option key={this.props.status[i]}>{this.props.status[i]}</Option>);
		}
		this.state = {
			rangeDate: [null, null],
			searchText: '',
			selectLabels: labelss,
			selectStatus: statuss
		}
	}
	handleSelect = (type, value) => {
		console.log(type, value);
	}
	dateChange = (date, dateString) => {
		if (dateString[0] == "") {
			var date = moment(dateString[0], 'YYYY-MM-DD');
			this.setState({ rangeDate: [moment(dateString[0], 'YYYY-MM-DD'), moment(dateString[1], 'YYYY-MM-DD')] });
		}
		else
			this.setState({ rangeDate: [null, null] })
	}
	render() {
		return (
			<Row className="tasks">
				<Col span={11} className="filters">
					<Input className="search-input" size="large" suffix={<SearchOutlined />} />
					<br /><br />
					<RangePicker onChange={this.dateChange} size="large" value={this.state.rangeDate} />
					<br /><br />
					<Select
						mode="multiple"
						style={{ width: '100%' }}
						placeholder="Please select label"
						defaultValue={[]}
						onChange={(value)=>this.handleSelect('label', value)}
					>
						{this.state.selectLabels}
					</Select>
					<br /><br />
					<Select
						mode="multiple"
						style={{ width: '100%' }}
						placeholder="Please select status"
						defaultValue={[]}
						onChange={(value)=>this.handleSelect('status', value)}
					>
						{this.state.selectStatus}
					</Select>
				</Col>
				<Divider type="vertical" className="divider" />
				<Col span={12}>

				</Col>
			</Row>
		);
	}
}

export default Tasks;