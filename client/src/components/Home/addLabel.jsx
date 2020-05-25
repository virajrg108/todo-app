import React from 'react';
import { Button, Modal, Input } from 'antd';

class AddLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, label: '' };
  }
  handleChange = e => {
    var name = e.target.name;
    this.setState({[name]:e.target.value});
  }
  showModal = () => {
    this.setState({ visible: true });
  }
  handleOk = e => {
    console.log(this.state);
    this.props.handleAddLabel(this.state.label);
    this.setState({visible: false});
  };
  handleCancel = e => {
    this.setState({visible: false});
  };
  render() {
    return (
      <div>
        <Button size="large" type="primary" onClick={this.showModal}>Add Label</Button>
        <Modal
          title="Add Label"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}>
            <Input placeholder="Enter new label" name="label" onChange={this.handleChange} value={this.state.label} />
        </Modal>
      </div>
    );
  }
}

export default AddLabel;