import React, { Component } from 'react';
import './App.css';
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from './api';
import "./nprogress.css";
import { OfflineAlert } from "./Alert";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

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
        const filteredEvents = locationEvents.slice(0, eventCount);
        this.setState({
          events: filteredEvents,
          numberOfEvents: eventCount
        });
      });
    }
  };

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(' ').shift()
      return { city, number };
    })
    return data;
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events)
        });
      }
      if (!navigator.onLine) {
        this.setState({
          offlineText: "You are currently offline. Events shown might not be up-to-date"
        });
      } else {
        this.setState({
          offlineText: ""
        });
      }
    });
  };

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { locations, numberOfEvents, events } = this.state;

    return (
      <div className="App">
        <div className="alert-message">
          <OfflineAlert text={this.state.offlineText} />
        </div>
        <h2 className="meet-title">Meet App</h2>
        <CitySearch
          locations={locations}
          updateEvents={this.updateEvents}
          numberOfEvents={numberOfEvents}
        />
        <NumberOfEvents
          numberOfEvents={numberOfEvents}
          updateEvents={this.updateEvents}
        />
        <h4>Events in each city</h4>


        <ScatterChart
          width={800}
          height={400}
          margin={{
            top: 20, right: 20, bottom: 20, left: -20,
          }}
        >
          <CartesianGrid />
          <XAxis type="category" dataKey="city" name="city" />
          <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={this.getData()} fill="#8884d8" />
        </ScatterChart>


        <EventList
          events={events}
        />
      </div >
    );
  }
}

export default App;
