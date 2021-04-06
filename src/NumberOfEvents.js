import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32
  }

  handleNumberChange = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value
    })
    if (value < 1 || value > 32) {
      this.setState({
        errorText: "Select a number between 1 and 32"
      })
    } else {
      this.setState({
        errorText: ""
      })
    }
    this.props.updateEvents(null, value);
  }

  render() {

    return (

      <div className="numberOfEvents">
        <div className="alert-message">
          <ErrorAlert text={this.state.errorText} />
        </div>
        <label className="input-message">Number of Events:</label>
        <input
          type="text"
          className="input-number"
          value={this.state.numberOfEvents}
          onChange={this.handleNumberChange}
        />




      </div >


    );
  }
}

export default NumberOfEvents;