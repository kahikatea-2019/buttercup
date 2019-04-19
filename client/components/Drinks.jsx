import React from 'react'
import { getDrinks } from '../api/Drinks'

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
        <p>{this.state.name}</p>
      </div>
    )
  }
}
