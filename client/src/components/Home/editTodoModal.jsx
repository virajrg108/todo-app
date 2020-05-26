import React from 'react';
import { Modal } from 'antd';

class EditTodoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name, desc: this.props.desc, due: this.props.due, priority: this.props.priority, status: this.props.status, label: this.props.label}
  }
  render() {
    return (
      <Modal
        title="Add Todo"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >

      </Modal>
    );
  }
}

export default EditTodoModal;