import React from 'react'
import { getDrinks } from '../api/Drinks'
import Typography from '@material-ui/core/Typography'

export default class Drinks extends React.Component {
  state = {}
  componentDidMount () {
    getDrinks()
      .then(res => {
        this.setState({
          name: res.drinks[0].strDrink
        })
      })
  }

  render () {
    return (
      <div>
        <Typography component="h1" variant="h1" gutterBottom>
        <h2> John likes: </h2>
        <h1>{this.state.name}s</h1>
        </Typography>
      </div>
    )
  }
}
