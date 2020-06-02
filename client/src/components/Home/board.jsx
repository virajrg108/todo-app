import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Tag, Modal, Input, Select, DatePicker } from 'antd';
import moment from 'moment';
import Dragula from 'react-dragula';
import 'dragula/dist/dragula.css';
import './board.scss';

const { Option } = Select;

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editModalVisible: false, modalTodoId: -1, modalName: '', modalDesc: '', modalDue: '', modalStatus: '', modalPriority: '', modalLabels: [] }
    this.swimlanes = {
      new: React.createRef(),
      inprogress: React.createRef(),
      completed: React.createRef(),
    }
  }
  showEditModal = (todo) => {
    this.setState({ editModalVisible: true, modalTodoId: todo._id, modalName: todo.name, modalDesc: todo.desc, modalDue: todo.due, modalStatus: todo.status, modalPriority: todo.priority, modalLabels: todo.label })
  }
  handleEditSelect = (value, type) => {
    this.setState({ [type]: value });
  }
  handleEditOk = () => {
    this.props.handleEditTodo({ _id: this.state.modalTodoId, name: this.state.modalName, desc: this.state.modalDesc, due: this.state.modalDue, status: this.state.modalStatus, priority: this.state.modalPriority, label: this.state.modalLabels })
    this.setState({ editModalVisible: false, modalTodoId: -1, modalName: '', modalDesc: '', modalDue: '', modalStatus: '', modalPriority: '', modalLabels: [] });
  }
  handleEditCancel = () => {
    this.setState({ editModalVisible: false, modalTodoId: -1, modalName: '', modalDesc: '', modalDue: '', modalStatus: '', modalPriority: '', modalLabels: [] });
  }
  handleDate = (date, dateString) => {
    this.setState({ modalDue: dateString });
  }
  handleChange = e => {
    var name = e.target.name;
    this.setState({ [name]: e.target.value });
  }
  componentDidMount() {
    this.drake = Dragula([
      this.swimlanes.new.current,
      this.swimlanes.inprogress.current,
      this.swimlanes.completed.current,
    ]);
    this.drake.on('drop', (el, target, source, sibling) => {
      this.drake.cancel(true);
      console.log(el.dataset, target.dataset.status, source.dataset.status);
      var todo = JSON.parse(el.dataset.todo);
      todo.status = target.dataset.status;
      this.props.handleEditTodo(todo);
    });
  }
  componentWillUnmount() {
    this.drake.remove();
  }
  render() {
    return (
      <div className="board">
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
              onChange={(value) => this.handleEditSelect(value, 'modalLabels')}
            >
              {this.props.labels.map((l, key) => {
                return <Option key={l}>{l}</Option>
              })}
            </Select>
          </div>
        </Modal>
        <div className="kanban-col">
          <div className="title new">New</div>
          <div data-status="new" style={{ overflowY: 'auto', height: '440px' }} ref={this.swimlanes.new}>
            {this.props.todos.map((todo, key) => {
              if (todo.status == 'new') {
                return <div key={key} onClick={() => this.showEditModal(todo)} data-todo={JSON.stringify(todo)} className="kanban-card">
                  <div className="card-title">{todo.name}</div>
                  <div className="card-desc">{todo.desc}</div>
                  <div>
                    <Tag>{todo.priority}</Tag>
                    {todo.label.map((l, key) => {
                      return <Tag key={key}>{l}</Tag>
                    })}
                  </div>
                </div>
              }
            })}
          </div>
        </div>
        <div className="kanban-col">
          <div className="title inprogress">In Progress</div>
          <div data-status="inprogress" style={{ overflowY: 'auto', height: '440px' }} ref={this.swimlanes.inprogress}>
            {this.props.todos.map((todo, key) => {
              if (todo.status == 'inprogress') {
                return <div key={key} onClick={() => this.showEditModal(todo)} data-todo={JSON.stringify(todo)} className="kanban-card">
                  <div className="card-title">{todo.name}</div>
                  <div className="card-desc">{todo.desc}</div>
                  <div>
                    <Tag>{todo.priority}</Tag>
                    {todo.label.map((l, key) => {
                      return <Tag key={key}>{l}</Tag>
                    })}
                  </div>
                </div>
              }
            })}
          </div>
        </div>
        <div className="kanban-col">
          <div className="title completed">Completed</div>
          <div data-status="completed" style={{ overflowY: 'auto', height: '440px' }} ref={this.swimlanes.completed}>
            {this.props.todos.map((todo, key) => {
              if (todo.status == 'completed') {
                return <div key={key} onClick={() => this.showEditModal(todo)} data-todo={JSON.stringify(todo)} className="kanban-card">
                  <div className="card-title">{todo.name}</div>
                  <div className="card-desc">{todo.desc}</div>
                  <div>
                    <Tag>{todo.priority}</Tag>
                    {todo.label.map((l, key) => {
                      return <Tag key={key}>{l}</Tag>
                    })}
                  </div>
                </div>
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Board;