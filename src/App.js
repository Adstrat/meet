import React, { Component } from 'react';
import './App.css';
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from './api';
import "./nprogress.css";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: "all"
  }

  updateEvents = (location, eventCount) => {
    const { currentLocation, numberOfEvents } = this.state;
    // handleItemClicked() in <CitySearch>
    if (location) {
      getEvents().then((events) => {
        const locationEvents = (location === "all") ?
          events :
          events.filter((event) => event.location === location);
        const filteredEvents = locationEvents.slice(0, numberOfEvents);
        this.setState({
          events: filteredEvents,
          currentLocation: location
        });
      });
      // handleNumberChange() in <NumberOfEvents>
    } else {
      getEvents().then((events) => {
        const locationEvents = (currentLocation === "all") ?
          events :
          events.filter((event) => event.location === currentLocation);
        const filteredEvents = locationEvents.slice(0, numberOfEvents);
        this.setState({
          events: filteredEvents,
          numberOfEvents: eventCount
        });
      });
    }
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.eventCount),
          locations: extractLocations(events)
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <h2 className="meet-title">Meet App</h2>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents}
        />
        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          updateEvents={this.updateEvents}
        />
        <EventList
          events={this.state.events}
        />
      </div>
    );
  }
}

export default App;
