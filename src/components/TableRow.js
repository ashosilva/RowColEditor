import React, { Component } from "react";
import TableCell from "./TableCell";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color:this.props.color,
    };
  }
  componentDidUpdate() {
    if (
      this.props.color !== this.state.color 
    ) {
      this.setState({ color: this.props.color});
    }
  }

  render() {
    let tableCells = [];
    for (let i = 0; i < this.props.col; i++) {
      tableCells.push(<TableCell  key = {i} color={this.props.color} />);
    }
    return <tr>{tableCells}</tr>;
  }
}
export default TableRow;