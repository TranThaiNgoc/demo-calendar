import React, { Component } from 'react';
import axios from 'axios';

class CreateEvent extends Component {
  state = {
    title: '',
    description: '',
    start_time: '',
    end_time: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, description, start_time, end_time } = this.state;
    const eventData = { title, description, start_time, end_time };
    axios.post('/api/event', eventData)
      .then(response => {
        // Handle success
        console.log(response);
      })
      .catch(error => {
        // Handle error
        console.log(error);
      });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { title, description, start_time, end_time } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={this.handleInputChange}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={this.handleInputChange}
        />

        <label htmlFor="start_time">Start Time</label>
        <input
          type="datetime-local"
          id="start_time"
          name="start_time"
          value={start_time}
          onChange={this.handleInputChange}
        />

        <label htmlFor="end_time">End Time</label>
        <input
          type="datetime-local"
          id="end_time"
          name="end_time"
          value={end_time}
          onChange={this.handleInputChange}
        />

        <button type="submit">Save</button>
      </form>
    );
  }
}

export default CreateEvent;
