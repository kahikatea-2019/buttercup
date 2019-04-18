import React from 'react'
import { getEvents } from '../api/event'

export default class Events extends React.Component {
  state = {}
  componentDidMount () {
    getEvents()
      .then(res => {
        this.setState({
          body: res.body
        })
      })
  }
  render () {
    return (
      <div>
        {this.state.body}
      </div>
    )
  }
}
