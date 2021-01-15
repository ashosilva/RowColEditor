import React, { Component } from "react";
import Table from "./components/Table"
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
      row: 1,
      col: 1
    };
    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.handleRemEvent = this.handleRemEvent.bind(this);
    this.selectedColor = this.selectedColor.bind(this);
    this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
  }

  handleAddEvent = e => {
    if (e.target.value === "addR") {
      this.setState({
        row: this.state.row + 1
      });
    } else if (e.target.value === "addC") {
      this.setState({
        col: this.state.col + 1
      });
    }
  };

  handleRemEvent = e => {
    if (e.target.value === "remR") {
      if (this.state.row > 1) {
        this.setState({
          row: this.state.row - 1
        });
      } else {
        console.log("no bueno");
      }
    } else if (e.target.value === "remC") {
      if (this.state.col > 1) {
        this.setState({
          col: this.state.col - 1
        });
      } else {
        console.log("No bueno");
      }
    }
  };

  handleSubmitEvent = e => {

    console.log("row: " + this.state.row)
    console.log("col: " + this.state.col)

    let addRow = Number(document.querySelector("#addRowT").value);
    let addCol = Number(document.querySelector("#addColT").value);
    let remRow = Number(document.querySelector("#remRowT").value);
    let remCol = Number(document.querySelector("#remColT").value);

    console.log("addRow: " + addRow)
    console.log("addCol: " + addCol)
    console.log("remRow: " + remRow)
    console.log("remCol: " + remCol)

    

    //check for invalid inputs: addRow
    if (addRow < 0) {
      alert("Invalid Input! negative value not allowed!")
    } else if (addRow !== 0 || addRow !== '') {
      this.setState({
        row: this.state.row + addRow
      })
    }
    //check for invalid inputs: addCol
    if (addCol < 0) {
      alert("Invalid Input! negative value not allowed!")
    } else if (addCol !== 0 || addCol !== '') {
      this.setState({
        col: this.state.col + addCol
      })
    }

    //check for invalid inputs: remRow
    if (remRow < 0 || remRow > this.state.row) {
      alert("Invalid Input! exceeds the amount of rows to be deleted!")
    } else if (remRow !== 0) {
      this.setState({
        row: this.state.col + remRow
      })
    }
    //check for invalid inputs: remRow
    if (remCol < 0 || remCol > this.state.col) {
      alert("Invalid Input! exceeds the amount of columns to be deleted!")
    } else if (remCol !== 0) {
      this.setState({
        col: this.state.col + remCol
      })
    }

    console.log("row: " + this.state.row)
    console.log("col: " + this.state.col)
    

    document.querySelector("#dimension").innerText = this.state.row + "X" + this.state.col;
    document.getElementById("addRowT").value = '';
    document.getElementById("addColT").value = '';
    document.getElementById("remRowT").value = '';
    document.getElementById("remColT").value = '';


  }





  selectedColor = (color) => {
    this.setState({
      color: color.target.value
    });
    console.log("App event handler " + this.state.color)
  }

  render() {
    return (

      <>
        <h1>ROW AND COLUMN EDITOR</h1>
        <div id="options">
          <div id="labels">
            <div class="labelChild">
              <label for="addRow">Add Rows:</label>
            </div>
            <div class="labelChild">
              <label for="addCol">Add cols:</label>
            </div>
            <div class="labelChild">
              <label for="remRow">Remove Rows:</label>
            </div>
            <div class="labelChild">
              <label for="remCol">Remove cols:</label>
            </div>
          </div>

          <div id="textfields">
            <input type="text" id="addRowT"></input>
            <input type="text" id="addColT"></input>
            <br></br>
            <input type="text" id="remRowT"></input>
            <input type="text" id="remColT"></input>
          </div>

          <div id="color-options">

            <div>
              <button type="button" id="colorUncolored">Color Uncolored</button>
            </div>
            <div>
              <button type="button" id="colorAll">Color All</button>
            </div>

            <div>
              <button type="button" id="clearAll">Clear All</button>
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
        </div>


        <div>
          <br></br>
          <button type="button" id="submit-button" onClick={this.handleSubmitEvent}>Submit</button>
        </div>

        <br></br>

        <Table row={this.state.row} col={this.state.col} color={this.state.color}/>
        {/* <table id="grid-table">
        </table> */}

        <div id="current-values">
          <h2 id="dimension"></h2>
        </div>


      </>






      //             {/* <>
      //   <div className="App">
      //     <h1>Grid</h1>
      //     <div>
      //       <button value="addRowT" onClick={this.handleAddEvent}>
      //         Add Row
      //       </button>
      //       <button value="addColT" onClick={this.handleAddEvent}>
      //         Add col
      //       </button>
      //       <button value="remRowT" onClick={this.handleRemEvent}>
      //         Remove Row
      //       </button>
      //       <button value="remColT" onClick={this.handleRemEvent}>
      //         Remove col
      //       </button>
      //     </div>
      //     <div>
      //       <p>Select a cell color: 
      //         <select id = "color-select"  onChange={this.selectedColor}>
      //           <option value="" selected disabled hidden>Select Color:</option>
      //           <option value="#CCCCFF">Lavender Blue</option>
      //           <option value="#FFCCD9">Pink Lace </option>
      //           <option value="#CCFFCC">Snowy Mint</option>
      //           <option value="#CCF2FF">Pattens Blue</option>
      //         </select>
      //       </p>
      //     </div>
      //   </div>
      //   <Table row={this.state.row} col={this.state.col} color={this.state.color}/>
      // </> */}


    );
  }
}

export default App;