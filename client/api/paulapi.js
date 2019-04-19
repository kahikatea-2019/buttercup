import request from 'superagent'

const url = 'https://newsapi.org/v2/top-headlines?'
const country = 'country=nz&'
const token = '855e439c689c484b9818556631826045'

export function getNews() {
  return request
  .get(url + country + 'apiKey=' + token)
  .then(res => {
    return res.body.articles
  })
}