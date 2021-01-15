import React, { Component } from "react";

import TableRow from "./TableRow";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color:this.props.color,
      row: this.props.row,
      column: this.props.row
    };
    // this.handleAddEvent = this.handleAddEvent.bind(this);
  }

  componentDidUpdate() {
    if (
      // if the props and state are different, update the state
      this.props.column != this.state.column ||
      this.props.row != this.state.row ||
      this.props.color != this.state.color 
    ) {
      this.setState({ row: this.props.row, column: this.props.column, color: this.props.color});
    }
  }

  render() {
    let tableRows = [];
    for (let i = 0; i < this.state.row; i++) {
      tableRows.push(<TableRow column={this.state.column}  color={this.state.color}/>);
    } // this for loop is for pushing all of the rows into an array, so I can render it.
    return (
      <table>
        <tbody>{tableRows}</tbody>
      </table>
    );
  }

  // <table id="table"></table>
}
export default Table;