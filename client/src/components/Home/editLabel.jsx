import React from 'react';
import { Button, Modal, Input, Select } from 'antd';
import DynamicSet from './DynamicSet';

const { Option } = Select;

class EditLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, labels: this.props.labels };
  }
  showModal = () => {
    this.setState({ visible: true });
  }
  handleSelect = (value) => {
    this.setState({ labels: value });
    setTimeout(() => {
      console.log(this.state.labels);
      this.handleFilter();
    }, 100);
  }
  handleOk = e => {
    console.log(this.state);
    this.props.handleEditLabel(this.state.labels);
    this.setState({ visible: false });
  };
  handleCancel = e => {
    this.setState({ visible: false });
  };
  render() {
    return (
      <div>
        <Button size="large" type="primary" onClick={this.showModal}>Edit Labels</Button>
        <Modal
          title="Add Label"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}>
            <DynamicSet />
        </Modal>
      </div>
    );
  }
}

export default EditLabel;