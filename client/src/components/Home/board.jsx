import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Dragula from 'react-dragula';
import 'dragula/dist/dragula.css';
import './board.scss';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.swimlanes = {
      backlog: React.createRef(),
      inProgress: React.createRef(),
      complete: React.createRef(),
    }
  }
  componentDidMount() {
    this.drake = Dragula([
      this.swimlanes.backlog.current,
      this.swimlanes.inProgress.current,
      this.swimlanes.complete.current,
    ]);
    this.drake.on('drop', (el, target, source, sibling) => {
      console.log(el.dataset, target, source, sibling);
      // if (source == this.swimlanes.backlog.current) console.log(true);
    });
  }
  componentWillUnmount() {
    this.drake.remove();
  }
  render() {
    return (
      <div className="board">
        <div
          className="kanban-col"
        >
          <div className="title new">New</div>
          <div style={{ overflowY: 'auto', height: '440px' }}
            ref={this.swimlanes.backlog}
          >
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
          </div>
        </div>
        <div
          className="kanban-col"
        >
          <div className="title inprogress">In Progress</div>
          <div
            ref={this.swimlanes.inProgress}
          >
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
          </div>
        </div>
        <Scrollbars
          renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{ display: "none" }} />}
          renderThumbHorizontal={props => <div {...props} className="thumb-horizontal" style={{ display: "none" }} />}
          renderTrackVertical={props => <div {...props} className="track-vertical" style={{ display: "none" }} />}
          renderThumbVertical={props => <div {...props} className="thumb-vertical" style={{ display: "none" }} />}
          className="kanban-col"
        >
          <div className="title completed">Completed</div>
        </Scrollbars>
      </div>
    );
  }
}

export default Board;