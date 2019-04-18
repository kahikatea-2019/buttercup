import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

class Header extends React.Component {
  render () {
    return (
      <React.Fragment>
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
        <Grid
          container
          direction="row"
          justify="center"
          alignitems="center"
        >
          <img src="lockedup.jpg" height='500px' /><br />
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignitems="center"
        >
          <Typography component="h2" variant="h3" gutterBottom>
            <h3>Locked up in EDA</h3>

          </Typography>
        </Grid>
      </React.Fragment>
    )
  }
}

export default Header
