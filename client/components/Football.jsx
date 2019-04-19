import React from 'react'
import { football } from '../api/football'

export default class Football extends React.Component {
  state = {
    football: []
  }

  componentDidMount () {
    football()
      .then(res => {
        this.setState({
          football: res
        })
      })
      .catch(err => {
        console.error('Error:', err)
      })
  }

  render () {
    return (
      <React.Fragment>
        <h2>Football Events</h2>
        {this.state.football.slice(0, 3).map(events => {
          return (
            <div key={events.fixture_id}>
            </div>
          )
        })}
      </React.Fragment>
    )
  }
}
