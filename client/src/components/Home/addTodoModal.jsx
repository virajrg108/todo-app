import React from 'react';
import { Modal, Button, Input, DatePicker, Select } from 'antd';
const { Option } = Select;
class AddTodoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, name: '', desc: '', date: '', status: 'new', priority: '', labels:[] };
  }
  showModal = () => {
    this.setState({ visible: true });
  }
  handleOk = e => {
    this.props.handleAddTodo({name: this.state.name, desc:this.state.desc, status:this.state.status, priority:this.state.priority, label: this.state.labels, due: this.state.date});
    this.setState({
      visible: false, name: '', desc: '', status: 'new', priority: 'normal', date:''
    });
  };
  handleCancel = e => {
    this.setState({
      visible: false, name: '', desc: '', status: 'new', priority: 'normal' 
    });
  };
  handleDate = (date, dateString) => {
    this.setState({ date: dateString });
    
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
      <div className="add-todo-wrapper">
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
            <DatePicker name="date" style={{ width: '45%' }} onChange={this.handleDate} />
            <Select style={{ width: '45%' }} onChange={(value) => this.handleSelect(value, 'status')} placeholder="Select Status">
              <Option value="new">New</Option>
              <Option value="inprogress">In Progress</Option>
              <Option value="completed">Completed</Option>
            </Select>
          </div>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Select style={{ width: '35%' }} onChange={(value) => this.handleSelect(value, 'priority')}  placeholder="Select Status">
              <Option value="high">High</Option>
              <Option value="normal">Normal</Option>
              <Option value="low">Low</Option>
            </Select>
            <Select
              mode="multiple"
              style={{ width: '55%' }}
              placeholder="Please select label"
              defaultValue={[]}
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