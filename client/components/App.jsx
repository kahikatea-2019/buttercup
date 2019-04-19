import React from 'react'
import Grid from '@material-ui/core/Grid'
import { createMuiTheme } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
import pink from '@material-ui/core/colors/pink'
import red from '@material-ui/core/colors/red'
import Header from './Header'
import TestComponent from './TestComponent'
import Weather from './Weather'
import Football from './Football'

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
})

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TestComponent />

        </Grid>
        <Grid item xs={12} sm={6}>
          <Weather />
        </Grid>
      </Grid>
      <Football />
    </React.Fragment>
  )
}

export default App
