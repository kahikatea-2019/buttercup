import React from 'react'
import { getNews } from '../api/paulapi'
import Typography from '@material-ui/core/Typography'

export default class TestComponent extends React.Component {
  state = {
    news: []
  }

  componentDidMount() {
    getNews()
      .then(res => {
        this.setState({
          news: res
        })
      })
      .catch(err => {
        console.error('Error:', err)
      })
  }

  render() {
    return (
      <React.Fragment>
          <Typography component="h2" variant="h3" gutterBottom>
        Local News
        </Typography>
        <Typography component="h4" variant="h4" gutterBottom>
        {this.state.news.slice(0, 2).map(article => {
          return (
            <div key={article.index}>
              <h5>{article.title}</h5>
              <em>{article.description}</em>
              <p>{article.content}</p>
            </div>
         
          )
          
        })}
        </Typography>
      </React.Fragment>
    )
  }
}