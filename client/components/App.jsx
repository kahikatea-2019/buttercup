import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { createMuiTheme } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
import pink from '@material-ui/core/colors/pink'
import red from '@material-ui/core/colors/red'
import Header from './Header'

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
      <Grid item xs={6}>

      </Grid>
      <Grid item xs={6}>

      </Grid>
    </React.Fragment>
  )
}

export default App
