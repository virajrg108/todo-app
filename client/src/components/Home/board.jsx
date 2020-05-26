import React from 'react';
import Dragula from 'react-dragula';

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
      console.log(el.props, target, source, sibling);
      if(source == this.swimlanes.backlog.current) console.log(true);
    });
  }
  componentWillUnmount() {
    this.drake.remove();
  }
  render() {
    return (
      <div className="board">
        <div className="parent" name="new" ref={this.swimlanes.backlog}>
          <div className="child" id="1">Swap me around</div>
          <div className="child">Swap her around</div>
          <div className="child">Swap him around</div>
          <div className="child">Swap them around</div>
          <div className="child">Swap us around</div>
          <div className="child">Swap things around</div>
          <div className="child">Swap everything around</div>
        </div>
        <hr />
        <div className="parent" ref={this.swimlanes.inProgress}>
          <div className="child">Swap me around</div>
          <div className="child">Swap her around</div>
          <div className="child">Swap him around</div>
          <div className="child">Swap them around</div>
          <div className="child">Swap us around</div>
          <div className="child">Swap things around</div>
          <div className="child">Swap everything around</div>
        </div>
      </div>
    );
  }
}

export default Board;