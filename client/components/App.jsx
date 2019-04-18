import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { createMuiTheme } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
import pink from '@material-ui/core/colors/pink'
import red from '@material-ui/core/colors/red'

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
    <Grid
      container
      direction="row"
      justify="space-evenly"
      alignitems="center"
    >
      <Typography component="h2" variant="h1" gutterBottom>
        <h1>Bad Friday</h1>
      </Typography>
    </Grid>
  )
}

export default App
