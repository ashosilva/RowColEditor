import React, { Component } from "react";

class TableCell extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color:this.props.color,
        };
    }

    handleColor=()=> {
        if (this.props.color !== this.state.color ) {
          this.setState({ color: this.props.color});
        }
    }

    render() {
        return(
        <td style={{ backgroundColor: this.state.color}} 
        onClick={this.handleColor}></td>
        )
    }
}

export default TableCell;