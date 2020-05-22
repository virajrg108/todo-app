import React from 'react';
import { Row, Col, Divider, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './tasks.scss';

class Tasks extends React.Component {
	render() {
		return (
			<Row className="tasks">
				<Col span={11} className="filters">
					<Input className="search-input" size="large" suffix={<SearchOutlined />}/>
				</Col>
				<Divider type="vertical" className="divider" />
				<Col span={12}>

				</Col>
			</Row>
		);
	}
}

export default Tasks;