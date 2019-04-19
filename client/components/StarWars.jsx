import React from 'react'
import { getStarWars } from '../api/StarWars'
import Typography from '@material-ui/core/Typography'

export default class OverWatch extends React.Component {
  state = {}
  componentDidMount () {
    getStarWars()
      .then(res => {
        this.setState({
          name: res.name,
          model: res.model
        })
      })
  }
  render () {
    return (
      <div>
        <Typography component="h4" variant="h4" gutterBottom>
          <p>{this.state.name} is having a sick time this easter.</p>
          <p>I want {this.state.model} in my easter egg</p>
        </Typography>
      </div>
    )
  }
}
