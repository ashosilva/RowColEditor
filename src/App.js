import React, { Component } from "react";
import Table from "./components/Table"
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
      row: 0,
      col: 0,
      addRow: "",
      addCol: "",
      remRow: "",
      remCol: "",
      inputEmpty: true
    };

    this.selectedColor = this.selectedColor.bind(this);
    this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
  }

  // handleSubmitEvent = e => {

  //   console.log("row: " + this.state.row)
  //   console.log("col: " + this.state.col)

  //   let addRow = Number(document.querySelector("#addRowT").value);
  //   let addCol = Number(document.querySelector("#addColT").value);
  //   let remRow = Number(document.querySelector("#remRowT").value);
  //   let remCol = Number(document.querySelector("#remColT").value);

  //   console.log("addRow: " + addRow)
  //   console.log("addCol: " + addCol)
  //   console.log("remRow: " + remRow)
  //   console.log("remCol: " + remCol)



  //   //check for invalid inputs: addRow
  //   if (addRow < 0) {
  //     alert("Invalid Input! negative value not allowed!")
  //   } else if (addRow !== 0 || addRow !== '') {
  //     this.setState({
  //       row: this.state.row + addRow
  //     })
  //   }
  //   //check for invalid inputs: addCol
  //   if (addCol < 0) {
  //     alert("Invalid Input! negative value not allowed!")
  //   } else if (addCol !== 0 || addCol !== '') {
  //     this.setState({
  //       col: this.state.col + addCol
  //     })
  //   }

  //   //check for invalid inputs: remRow
  //   if (remRow < 0 || remRow > this.state.row) {
  //     alert("Invalid Input! exceeds the amount of rows to be deleted!")
  //   } else if (remRow !== 0) {
  //     this.setState({
  //       row: this.state.col - remRow
  //     })
  //   }
  //   //check for invalid inputs: remRow
  //   if (remCol < 0 || remCol > this.state.col) {
  //     alert("Invalid Input! exceeds the amount of columns to be deleted!")
  //   } else if (remCol !== 0) {
  //     this.setState({
  //       col: this.state.col - remCol
  //     })
  //   }

  //   console.log("row: " + this.state.row)
  //   console.log("col: " + this.state.col)


  //   document.querySelector("#dimension").innerText = this.state.row + "X" + this.state.col;
  //   document.getElementById("addRowT").value = '';
  //   document.getElementById("addColT").value = '';
  //   document.getElementById("remRowT").value = '';
  //   document.getElementById("remColT").value = '';


  // }

  handleSubmitEvent = (event) => {
    //check for invalid inputs: addRow
    let addR = Number(this.state.addRow)
    let addC = Number(this.state.addCol)
    let remR = Number(this.state.remRow)
    let remC = Number(this.state.remCol)
    if (addR < 0) {
      alert("Invalid Input! negative value not allowed!")
    } else if (addR !== 0 || addR !== '') {
      this.setState({
        row: this.state.row + addR
      })
    }
    //check for invalid inputs: addCol
    if (addC < 0) {
      alert("Invalid Input! negative value not allowed!")
    } else if (addC !== 0 || addC !== '') {
      this.setState({
        col: this.state.col + addC,
        inputEmpty: false
      })
    }

    //check for invalid inputs: remRow
    if (remR < 0 || remR > this.state.row) {
      alert("Invalid Input! exceeds the amount of rows to be deleted!")
    } else if (remR !== 0) {
      this.setState({
        row: this.state.col - remR
      })
    }
    //check for invalid inputs: remRow
    if (remC < 0 || remC > this.state.col) {
      alert("Invalid Input! exceeds the amount of columns to be deleted!")
    } else if (remC !== 0) {
      this.setState({
        col: this.state.col - remC
      })
    }

  }

  handleAddRow = (e) => {
    this.setState({
      addRow: e.target.value
    })

  }

  handleAddCol = (e) => {
    this.setState({
      addCol: e.target.value
    })

  }

  handleRemRow = (e) => {
    this.setState({
      remRow: e.target.value
    })
  }
  handleRemCol = (e) => {
    this.setState({
      remCol: e.target.value
    })
  }


  selectedColor = (dropcolor) => {
    console.log(dropcolor.target.value)
    this.setState({
      color: dropcolor.target.value
    });

    console.log("Color handler: " + this.state.color)
  }


  render() {
    return (

      <>
        <h1>ROW AND COLUMN EDITOR</h1>
        <div id="options">
          <div id="labels">
            <div className="labelChild">
              <label htmlFor="addRow">Add Rows:</label>
            </div>
            <div className="labelChild">
              <label htmlFor="addCol">Add cols:</label>
            </div>
            <div className="labelChild">
              <label htmlFor="remRow">Remove Rows:</label>
            </div>
            <div className="labelChild">
              <label htmlFor="remCol">Remove cols:</label>
            </div>
          </div>

          <div id="textfields" >
            <input type="text" id="addRowT" onChange={this.handleAddRow}></input>
            <input type="text" id="addColT" onChange={this.handleAddCol}></input>
            <input type="text" id="remRowT" onChange={this.handleRemRow}></input>
            <input type="text" id="remColT" onChange={this.handleRemCol}></input>
          </div>
          
          <div id="color-choices">
            <label>Color: </label>
            <select name="color-dropdowns" id="color-dropdowns" onChange={this.selectedColor}>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
            </select>
          </div>

        </div>


        <div>
          <br></br>
          <button type="button" id="submit-button" onClick={this.handleSubmitEvent}>Submit</button>
        </div>

        <br></br>

        <Table row={this.state.row} col={this.state.col} color={this.state.color} />

      </>


    );
  }
}

export default App;