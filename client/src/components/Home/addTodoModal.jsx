import React from 'react';
import { Modal, Button, Input, DatePicker, Select } from 'antd';
import moment from 'moment';

const { Option } = Select;
class AddTodoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, name: '', desc: '', date: null, status: undefined, priority: undefined, labels:[] };
  }
  showModal = () => {
    this.setState({ visible: true });
  }
  handleOk = e => {
    this.props.handleAddTodo({name: this.state.name, desc:this.state.desc, status:this.state.status, priority:this.state.priority, label: this.state.labels, due: moment(this.state.date).format('YYYY-MM-DD')});
    this.setState({
      visible: false, name: '', desc: '', status: undefined, priority: undefined, date:undefined, labels: []
    });
  };
  handleCancel = e => {
    this.setState({
      visible: false, name: '', desc: '', status: undefined, priority: undefined 
    });
  };
  handleDate = (date, dateString) => {
    this.setState({ date: date });
  }
  handleSelect = (value, type) => {
    this.setState({ [type]: value });
  }
  handleChange = e => {
    var name = e.target.name;
    this.setState({ [name]: e.target.value });
  }
  render() {
    return (
      <div className="add-todo-wra￼pper">
        <Button size="large" type="primary" onClick={this.showModal}>Add Todo</Button>
        <Modal
          title="Add Todo"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel} 
          handleAddTodo={this.props.handleAddTodo}>
          <Input name="name" onChange={this.handleChange} value={this.state.name} placeholder="Name" /><br /><br />
          <Input.TextArea name="desc" onChange={this.handleChange} value={this.state.desc} placeholder="Description" /><br /><br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <DatePicker value={this.state.date} name="date" style={{ width: '45%' }} onChange={this.handleDate} placeholder="Select due date" />
            <Select value={this.state.status} style={{ width: '45%' }} onChange={(value) => this.handleSelect(value, 'status')} placeholder="Select Status">
              <Option value="new">New</Option>
              <Option value="inprogress">In Progress</Option>
              <Option value="completed">Completed</Option>
            </Select>
          </div>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Select value={this.state.priority} style={{ width: '35%' }} onChange={(value) => this.handleSelect(value, 'priority')}  placeholder="Select Priority">
              <Option value="high">High</Option>
              <Option value="normal">Normal</Option>
              <Option value="low">Low</Option>
            </Select>
            <Select
            value={this.state.labels}
              mode="multiple"
              style={{ width: '55%' }}
              placeholder="Please select label"
              value={this.state.labels}
              onChange={(value) => this.handleSelect(value, 'labels')}
            >
              {this.props.labels.map((l, key)=> {
                return <Option key={l}>{l}</Option>
              })}
            </Select>
          </div>
        </Modal>
      </div>
    );
  }
}

export default AddTodoModal;