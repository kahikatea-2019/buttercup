import React from 'react'
import { football } from '../api/football'

export default class Football extends React.Component {
  state = {}
  componentDidMount () {
    football()
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
