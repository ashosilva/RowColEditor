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
      this.props.color != this.state.color 
    ) {
      this.setState({ color: this.props.color});
    }
  }

  render() {
    let tableCells = []; // pushing the columns
    for (let i = 0; i < this.props.column; i++) {
      tableCells.push(<TableCell color={this.state.color} />);
    }
    return <tr>{tableCells}</tr>;
  }
}
export default TableRow;