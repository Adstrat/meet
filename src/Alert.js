import React, { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "blue";
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "red";
  }
  getStyle = () => {
    return {
      color: this.color,
      fontWeight: "bold",
      margin: "28px"
    };
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "green"
  }
  getStyle = () => {
    return {
      color: this.color,
      fontSize: "20px",
      margin: "25px"
    };
  }
}

class OfflineAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "white"
  }
  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: "firebrick",
      padding: "3px",
    }
  }
}

export { InfoAlert, ErrorAlert, WarningAlert, OfflineAlert };