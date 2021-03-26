import React, { Component } from "react";

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32
  }

  handleNumberChange = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value
    })
    this.props.updateEvents(null, value);
  }

  render() {

    return (

      <div className="numberOfEvents">
        <label className="input-message">Number of Events:</label>
        <input
          type="text"
          className="input-number"
          value={this.state.numberOfEvents}
          onChange={this.handleNumberChange}
        />

      </div>

    );
  }
}

export default NumberOfEvents;