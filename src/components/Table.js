import React, { Component } from "react";

import TableRow from "./TableRow";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
      row: this.props.row,
      col: this.props.row
    };
    // this.handleAddEvent = this.handleAddEvent.bind(this);
  }

  componentDidUpdate() {
    if (
      // if the props and state are different, update the state
      this.props.col !== this.state.col ||
      this.props.row !== this.state.row ||
      this.props.color !== this.state.color
    ) {
      this.setState({ row: this.props.row, col: this.props.col, color: this.props.color });
    }
  }

  render() {
    let tableRows = [];
    for (let i = 0; i < this.state.row; i++) {
      tableRows.push(<TableRow col={this.state.col} key={i} color= {this.props.color} />);
    } // this for loop is for pushing all of the rows into an array, so I can render it.
    return (
      <div>
        <table>
          <tbody>{tableRows}</tbody>
        </table>

        <div id="current-values">
          <h2 id="dimension">{this.state.row} x {this.state.col} </h2>
        </div>

      </div>



    );
  }

  // <table id="table"></table>
}
export default Table;