import React, { Component } from 'react';
import Timeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import './calendar.css';
import axios from 'axios';

class Calendar extends Component {
  state = {
    items: []
  }

  componentDidMount() {
    axios.get('/api/event')
      .then(response => {
        const items = response.data.map(item => ({
          id: item.id,
          group: 1,
          title: item.title,
          start_time: new Date(item.start_time),
          end_time: new Date(item.end_time)
        }));
        this.setState({ items });
      })
      .catch(error => console.log(error));
  }

  render() {
    const groups = [
      { id: 1, title: 'Group 1' },
    ];

    const defaultTimeStart = new Date(2023, 4, 4, 9, 0, 0);
    const defaultTimeEnd = new Date(2023, 4, 4, 18, 0, 0);
    console.log(this.state.items)

    return (
      <div>
        <Timeline
          groups={groups}
          items={this.state.items}
          defaultTimeStart={defaultTimeStart}
          defaultTimeEnd={defaultTimeEnd}
        />
      </div>
    );
  }
}

export default Calendar;
